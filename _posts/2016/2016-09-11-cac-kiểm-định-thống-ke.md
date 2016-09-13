---
layout: "post"
title: "Các kiểm định thống kê và lệnh R"
date: "2016-09-11 15:08"
author: Kinh Nguyen
published: true
permalink: kiemdinhR/
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

## Kiểm định trung bình một mẫu
{:#r1}

``` r
t.test(write, mu = 50)
```

## Kiểm định trung vị một mẫu
{:#r2}

``` r
wilcox.test(write, mu = 50)
```

## Kiểm định nhị thức
{:#r3}

``` r
prop.test(sum(female), length(female), p = 0.5)
```

## Chi-bình phương GOF
{:#r4}

``` r
chisq.test(table(race), p = c(10, 10, 10, 70)/100)
```

## Kiểm định trung bình 2 mẫu độc lập
{:#r5}

``` r
t.test(write ~ female)
```

## Kiểm định Wilcoxon-Mann Whitney
{:#r6}

``` r
wilcox.test(write ~ female)
```

## Kiểm định Chi-bình phương
{:#r7}

``` r
chisq.test(table(female, schtyp))
```

## Kiểm định chính xác Fisher's
{:#r8}

``` r
fisher.test(table(race, schtyp))
```

## ANOVA một chiều
{:#r9}

``` r
summary(aov(write ~ prog))
```

## Kiểm định Kruskal Wallis
{:#r10}

``` r
kruskal.test(write, prog)
```

## Kiểm định t bắt cặp
{:#r12}

``` r
t.test(write, read, paired = TRUE)
```

## Kiểm định Wilcoxon sắp hạng dựa theo dấu
{:#r13}

``` r
wilcox.test(write, read, paired = TRUE)
```

## Kiểm định McNemar
{:#r14}

``` r
X <- matrix(c(172, 7, 6, 15), 2, 2)
mcnemar.test(X)
```

## ANOVA một chiều đo lường lập lại
{:#r15}

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

## Kiểm định Friedman
{:#r16}

``` r
friedman.test(cbind(read, write, math))
```

## Hồi quy logistic đo lường lập lại
{:#r17}

``` r
require(lme4)
exercise <- within(read.dta("http://www.ats.ucla.edu/stat/stata/whatstat/exercise.dta"),
    {
        id <- as.factor(id)
        diet <- as.factor(diet)
    })
glmer(highpulse ~ diet + (1 | id), data = exercise, family = binomial)
```

## ANOVA giai thừa
{:#r18}

``` r
anova(lm(write ~ female * ses, data = hsb2))
```

## Hồi quy logistic thứ tự
{:#r19}

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

## Hồi quy logistic giai thừa
{:#r20}

``` r
summary(glm(female ~ prog * schtyp, data = hsb2, family = binomial))
```

## Hệ số tương quan
{:#r21}

``` r
cor(read, write)
```

## Hồi quy tuyến tính đơn hiệp biến
{:#r22}

``` r
lm(write ~ read)
```

## Hệ số tương quan phi tham số
{:#r23}

``` r
cor.test(write, read, method = "spearman")
```

## Hồi quy logistic đơn hiệp biến
{:#r24}

``` r
glm(female ~ read, family = binomial)
```

## Hồi quy đa hiệp biến
{:#r25}

``` r
lm(write ~ female + read + math + science + socst)
```

## Phân tích hiệp phương sai
{:#r26}

``` r
summary(aov(write ~ prog + read))
```

## Hồi quy logistic đa hiệp biến
{:#r27}

``` r
glm(female ~ read + write, family = binomial)
```

## Phân tích phân biệt
{:#r28}

``` r
library(MASS)
fit <- lda(G ~ x1 + x2 + x3, data=mydata, na.action="na.omit", CV=TRUE)
```

## MANOVA một chiều
{:#r29}

``` r
summary(manova(cbind(read, write, math) ~ prog))
```

## Hồi quy tuyến tính đa biến đa hiệp biến
{:#r30}

``` r
M1 <- lm(cbind(write, read) ~ female + math + science + socst, data = hsb2)
require(car)
summary(Anova(M1))
```

## Phân tích nhân tố
{:#r31}

``` r
require(psych)
fa(r = cor(model.matrix(~read + write + math + science + socst - 1, data = hsb2)), rotate = "none", fm = "pa", 5)
princomp(~read + write + math + science + socst, data = hsb2)
```

## Tương quan chính tắc
{:#r32}

``` r
require(CCA)
cc(cbind(read, write), cbind(math, science))
```