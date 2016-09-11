---
layout: "post"
title: "Các kiểm định thống kê và lệnh R"
date: "2016-09-11 15:08"
author: Kinh Nguyen
published: true
---

> Updating...

Chạy lệnh sau để tải dữ kiện mẫu về máy

``` r
hsb2 <- within(read.csv("http://www.ytecongcong.com/_data/hsb2.csv"), {
    race <- as.factor(race)
    schtyp <- as.factor(schtyp)
    prog <- as.factor(prog)
})
attach(hsb2)
```

Sau đó chạy một trong các lệnh tương ứng để chạy phân tích tương ứng.

## One sample t-test
{:#testing}

``` r
t.test(write, mu = 50)
```

## One sample median test

``` r
wilcox.test(write, mu = 50)
```

## Binomial test

``` r
prop.test(sum(female), length(female), p = 0.5)
```

## Chi-square goodness of fit

``` r
chisq.test(table(race), p = c(10, 10, 10, 70)/100)
```

## Two independent samples t-test

``` r
t.test(write ~ female)
```

## Wilcoxon-Mann-Whitney test

``` r
wilcox.test(write ~ female)
```

## Chi-square test

``` r
chisq.test(table(female, schtyp))
```

## Fisher's exact test

``` r
fisher.test(table(race, schtyp))
```

## One-way ANOVA

``` r
summary(aov(write ~ prog))
```

Kruskal Wallis test

``` r
kruskal.test(write, prog)
```

## Paired t-test

``` r
t.test(write, read, paired = TRUE)
```

## Wilcoxon signed rank sum test

``` r
wilcox.test(write, read, paired = TRUE)
```

## McNemar test

``` r
X <- matrix(c(172, 7, 6, 15), 2, 2)
mcnemar.test(X)
```

## One-way repeated measures ANOVA

``` r
require(car)
require(foreign)
kirk <- within(read.dta("http://www.ytecongcong.com/_data/rb4.dta"),
    {
        s <- as.factor(s)
        a <- as.factor(a)
    })

model <- lm(y ~ a + s, data = kirk)
analysis <- Anova(model, idata = kirk, idesign = ~s)
print(analysis)
```

## Repeated measures logistic regression

``` r
require(lme4)
exercise <- within(read.dta("http://www.ats.ucla.edu/stat/stata/whatstat/exercise.dta"),
    {
        id <- as.factor(id)
        diet <- as.factor(diet)
    })
glmer(highpulse ~ diet + (1 | id), data = exercise, family = binomial)
```

## Factorial ANOVA

``` r
anova(lm(write ~ female * ses, data = hsb2))
```

## Friedman test

``` r
friedman.test(cbind(read, write, math))
```

## Ordered logistic regression

``` r
require(foreign)
require(ggplot2)
require(MASS)
require(Hmisc)
require(reshape2)
dat <- read.dta("http://www.ats.ucla.edu/stat/data/ologit.dta")
head(dat)
m <- polr(apply ~ pared + public + gpa, data = dat, Hess=TRUE)
summary(m)
```

## Factorial logistic regression

``` r
summary(glm(female ~ prog * schtyp, data = hsb2, family = binomial))
```

## Correlation

``` r
cor(read, write)
```

## Simple linear regression

``` r
lm(write ~ read)
```

## Non-parametric correlation

``` r
cor.test(write, read, method = "spearman")
```

## Simple logistic regression

``` r
glm(female ~ read, family = binomial)
```

## Multiple regression

``` r
lm(write ~ female + read + math + science + socst)
```

## Analysis of covariance

``` r
summary(aov(write ~ prog + read))
```

## Multiple logistic regression

``` r
glm(female ~ read + write, family = binomial)
```

## Discriminant analysis

One-way MANOVA

``` r
summary(manova(cbind(read, write, math) ~ prog))
```

## Multivariate multiple regression

``` r
M1 <- lm(cbind(write, read) ~ female + math + science + socst, data = hsb2)
require(car)
summary(Anova(M1))
```

## Canonical correlation

``` r
require(CCA)
cc(cbind(read, write), cbind(math, science))
```

## Factor analysis

``` r
require(psych)
fa(r = cor(model.matrix(~read + write + math + science + socst - 1, data = hsb2)), rotate = "none", fm = "pa", 5)
princomp(~read + write + math + science + socst, data = hsb2)
```
