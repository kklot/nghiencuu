---
title: Normalizing constant of auto-regressive order 2 model
layout: post
categories: [TMB,space-time]
author:
  display_name: Kinh Nguyen
  login: nguyenkinh
  email: nguyenkinh@ytecongcong.com
  url: https://imperial.ac.uk/peole/k.nguyen
author_login: Kinh Nguyen
author_email: nguyenkinh@ytecongcong.com
post_gravatar: 886f27ba4b392d00e87a35990840ba13
---
Using the constant to correct for rank-deficiency interaction term when fitting
model with `TMB`, such as a `SEPARABLE` effect between ICAR and auto-regressive
order 2 (AR(2)). It can be extended for higher-order AR as well.

The AR(2) process here is stationary. The two correlation parameters are
$\phi_1, \phi_2$, from this we can compute the AR2 graph and then the precision
matrix $\mathbf Q$
$$x \sim AR(2)$$
then
$$f(x | \mu, \sigma, Q) = |Q| (Q^{-2})^{Q^{-2}} / (\sigma x \Gamma(Q^{-2}))
\exp(Q^{-2}(Q w - \exp(Qw)))$$
$$f(x | a, b, k) = (b / \Gamma(k)) (x^{bk -1} / a^{bk}) \exp(-(x/a)^b)$$