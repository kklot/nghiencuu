---
layout: "post"
title: "Các kiểm định thống kê và lệnh R"
date: "2016-09-11 15:08"
author: Kinh Nguyen
published: false
---

Chạy lệnh sau để tải dữ kiện mẫu về máy

```
hsb2 <- within(read.csv("http://www.ats.ucla.edu/stat/data/hsb2.csv"), {
    race <- as.factor(race)
    schtyp <- as.factor(schtyp)
    prog <- as.factor(prog)
})
attach(hsb2)
```

Sau đó chạy một trong các lệnh tương ứng để chạy phân tích tương ứng.

## One sample t-test
{:#testing}

```
t.test(write, mu = 50)
```

## One sample median test

```
wilcox.test(write, mu = 50)
```

## Binomial test

```
prop.test(sum(female), length(female), p = 0.5)
```

## Chi-square goodness of fit

```
chisq.test(table(race), p = c(10, 10, 10, 70)/100)
```

## Two independent samples t-test

```
t.test(write ~ female)
```

## Wilcoxon-Mann-Whitney test

```
wilcox.test(write ~ female)
```

## Chi-square test

```
chisq.test(table(female, schtyp))
```

## Fisher's exact test

```
fisher.test(table(race, schtyp))
```

## One-way ANOVA

```
summary(aov(write ~ prog))
```

Kruskal Wallis test

```
kruskal.test(write, prog)
```

## Paired t-test

```
t.test(write, read, paired = TRUE)
```

## Wilcoxon signed rank sum test

```
wilcox.test(write, read, paired = TRUE)
```

## McNemar test

```
X <- matrix(c(172, 7, 6, 15), 2, 2)
mcnemar.test(X)
```

## One-way repeated measures ANOVA

```
require(car)
require(foreign)
## Loading required package: foreign
kirk <- within(read.dta("http://www.ats.ucla.edu/stat/stata/examples/kirk/rb4.dta"),
    {
        s <- as.factor(s)
        a <- as.factor(a)
    })

model <- lm(y ~ a + s, data = kirk)
analysis <- Anova(model, idata = kirk, idesign = ~s)
print(analysis)
```

## Repeated measures logistic regression

```
require(lme4)
exercise <- within(read.dta("http://www.ats.ucla.edu/stat/stata/whatstat/exercise.dta"),
    {
        id <- as.factor(id)
        diet <- as.factor(diet)
    })
glmer(highpulse ~ diet + (1 | id), data = exercise, family = binomial)
```

## Factorial ANOVA

```
anova(lm(write ~ female * ses, data = hsb2))
```

## Friedman test

```
friedman.test(cbind(read, write, math))
```

## Ordered logistic regression

## Factorial logistic regression

```
summary(glm(female ~ prog * schtyp, data = hsb2, family = binomial))
```

## Correlation

```
cor(read, write)
```

## Simple linear regression

```
lm(write ~ read)
```

## Non-parametric correlation

```
cor.test(write, read, method = "spearman")
```

## Simple logistic regression

```
glm(female ~ read, family = binomial)
```

## Multiple regression

```
lm(write ~ female + read + math + science + socst)
```

## Analysis of covariance

```
summary(aov(write ~ prog + read))
```

## Multiple logistic regression

```
glm(female ~ read + write, family = binomial)
```

## Discriminant analysis

One-way MANOVA

```
summary(manova(cbind(read, write, math) ~ prog))
```

## Multivariate multiple regression

```
M1 <- lm(cbind(write, read) ~ female + math + science + socst, data = hsb2)
require(car)
summary(Anova(M1))
```

## Canonical correlation

```
require(CCA)
cc(cbind(read, write), cbind(math, science))
```

## Factor analysis

```
require(psych)
fa(r = cor(model.matrix(~read + write + math + science + socst - 1, data = hsb2)), rotate = "none", fm = "pa", 5)
princomp(~read + write + math + science + socst, data = hsb2)
```
