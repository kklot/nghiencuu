---
layout: post
status: publish
published: true
title: Ước lượng cỡ mẫu so sánh hai tỷ lệ
author:
  display_name: Kinh Nguyen
  login: Kinh Nguyen
  email: nguyenkinh@ytecongcong.com
  url: https://www.google.com/profiles/112009149785989721279
author_login: Kinh Nguyen
author_email: nguyenkinh@ytecongcong.com
author_url: https://www.google.com/profiles/112009149785989721279
wordpress_id: 1174
wordpress_url: http://www.ytecongcong.com/?p=1174
date: '2013-05-13 21:58:02 +0200'
date_gmt: '2013-05-13 14:58:02 +0200'
categories:
- Dịch tễ
- Thống kê
- Nghiên cứu
- Home
- R
tags:
- sample size
- cỡ mẫu
- nghiên cứu khoa học
- công thức tính cỡ mẫu
- Cochran
- Cox
- Fleiss
- Kramer
- Greenhouse
comments: []
---

Nghiên cứu hai mẫu
------------------

Trong thiết kế nghiên cứu có hai nhóm, thường một nhóm sẽ có vai trò là
nhóm chứng/nhóm chuẩn... với nhóm còn lại là nhóm điều trị/phương pháp
pháp mới... cần so sánh. Trong v.d. sau đây, nhà nghiên cứu mong đợi
phương pháp mới (có tỷ lệ thành công là p1) sẽ cao hơn phương pháp cũ
(có tỷ lệ thành công là p2) 5%.

![](https://upload.wikimedia.org/wikipedia/commons/b/bf/Simple_random_sampling.PNG)

Công thức sau dựa trên phiên bản tối ưu hóa của *J. T. Casagrande \[1\]*
dựa trên 3 công thức đề nghị trước đây gồm:

1.  công thức "arcsin" của Cochran và Cox (1957),
2.  công thức của Fleiss (1973),
3.  và công thức hiệu chỉnh chi bình phương của Kramer và
    Greenhouse (1959).

Mục đích của các ước lượng cỡ mẫu khác nhau là mong tìm được cỡ mẫu nhỏ
nhất nhưng đảm bảo giữ nguyên năng lực của nghiên cứu.

Công thức ước lượng cỡ mẫu **CHO MỖI NHÓM** được tính như sau:

$$n_1 = n_2 = \dfrac{A \left[ 1 + \sqrt{1+ \dfrac{4
(p_1-p_2)}{A}}\right]^2}{4(p_1-p_2)^2} $$

Với

$$ A = \left[Z_{1-\alpha}\sqrt{2\bar{p}\bar{q}} +
Z_{\beta} \sqrt{p_1q_1+p_2q_2}\right]^2$$

Trong đó

$$ \bar{p} = (p_1 + p_2)/2 $$

$$ \bar{q} = 1 - \bar{p} $$

Code R để tính cỡ mẫu trên, cũng như so với các cỡ mẫu tính từ công thức
của Cochran,Fleiss và Krammer-Greenhouse như sau:

{% highlight R %}
####Thay số thích hợp cho nghiên cứu, ví dụ p1=0.5, p2=0.55, alpha, beta  phù hợp với nghiên cứu

p1 = 0.55
p2 = 0.5
alpha = 0.05
beta = 0.2   #hay năng lực 80%

####Tính các biến số cần thiết

p_bar = (p1+p2)/2 #trung bình tỷ lệ 2 nhóm
q_bar = 1-p_bar
q1 = 1-p1
q2 = 1-p2
power = 1-beta #năng lực

###Tính A

A = (qnorm(1-alpha)*sqrt(2*p_bar*q_bar) + qnorm(power)*sqrt(p1*q1+p2*q2))^2

###Cỡ mẫu MỖI nhóm

samplesize = round((A*(1+sqrt(1+4*abs(p1-p2)/A))^2)/(4*(p1-p2)^2),0)
samplesize

###So sánh với các cỡ mẫu tính từ công thức của Cochran,Fleiss và Krammer-Greenhouse

arcsin = round((qnorm(1-alpha)+qnorm(power))^2/(2*(asin(sqrt(p1))-asin(sqrt(p2)))^2))

fleiss = round((qnorm(1-alpha)*sqrt(2*p_bar*q_bar) + qnorm(power)*sqrt(p1*q1+p2*q2))^2/abs(p1-p2)^2)

krammergreenhouse = round(A*(1+ sqrt(1+8*abs(p1-p2)/A))^2/(4*(p1-p2)^2))

arcsin;fleiss;krammergreenhouse;samplesize
{% endhighlight %}

### Tài liệu tham khảo:

1.  An Improved Approximate Formula for Calculating Sample Sizes for
    Comparing Two Binomial Distributions J. T. Casagrande; M. C.
    Pike; P. G. Smith Biometrics, Vol. 34, No. 3. (Sep., 1978), pp.
    483-486
