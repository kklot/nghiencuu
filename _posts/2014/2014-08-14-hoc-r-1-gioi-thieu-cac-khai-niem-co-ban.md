---
layout: post
status: publish
published: true
title: Học R - [1] Giới thiệu, các khái niệm cơ bản
author:
  display_name: Kinh Nguyen
  login: Kinh Nguyen
  email: nguyenkinh@ytecongcong.com
  url: https://www.google.com/profiles/112009149785989721279
author_login: Kinh Nguyen
author_email: nguyenkinh@ytecongcong.com
author_url: https://www.google.com/profiles/112009149785989721279
wordpress_id: 2809
wordpress_url: http://www.ytecongcong.com/?p=2809
date: '2014-08-14 09:29:33 +0200'
date_gmt: '2014-08-14 02:29:33 +0200'
categories:
- R
tags:
- thống kê
- R
- học R
comments: []
---

![](http://www.statisticsviews.com/stats/images/logo.gif)

> Học R nên học theo dạng một ngôn ngữ lập trình, không nên học theo kiểu một phần mềm thống kê vì (1) sẽ phải làm quen với cả hai lĩnh vực khó hiểu cùng một lúc: lập trình và thống kê (2) khi nắm cách lập trình trong R, bạn sẽ thấy áp dụng các gói thống kê có sẵn chỉ là chuyện nhỏ.

Để theo dõi loạt bài này, các bạn đọc, làm...tạm gọi là bài tập về nhà (vì chắc bạn cũng đang ở nhà rồi), không hiểu thì gửi bình luận ở cuối bài và nếu bạn biết thì trả lời cho người tham gia. Với các câu hỏi chuyên biệt, nâng cao nên đặt câu hỏi ở http://stats.ytecongcong.com. Cũng vì mục đích học R như một ngôn ngữ, loạt bài này **sẽ tránh tối đa sử dụng các gói thư viện viết sẵn**.

> **Mục tiêu**: để lấy động lực, mục tiêu là sau khi hoàn tất, bạn có thể tự viết một gói thư viện nho nhỏ cho R.

## R đọc là gì?

Trong suy diễn Bayes, có một chỉ số đánh giá mô hình là quan trọng là DIC, đọc là "Đi Ai Xi"<sup id="fnref-2809-1">[1](#fn-2809-1)</sup>, không nên đọc tắt như kiểu "Hu" trong WHO!. Tương tự, R nên gọi theo tiếng Anh là "A".

## Sao lại R?

Nhiều người quen thuộc với các phần mềm như SPSS (SS viết tắt của Social Science như đinh hướng của phần mềm), STATA, SAS và mới hơn có là các gói viết với ngôn ngữ Python. Dưới đây là đánh giá nhanh:

*   SAS:
    *   mạnh nhất cả về tốc độ và chức năng, chính thống nhất về phương pháp thống kê
    *   nặng nhất về dung lượng và mắc nhất về bản quyền, ngôn ngữ không theo logic (không viết theo suy nghĩ được).

``` sas
V.d. tính trung bình với SAS
proc means data=data;
   var x;
run;
```

*   STATA:
    *   trực quan, nhẹ hơn về dung lượng, và rẻ hơn về bản quyền so với SAS, cấu trúc dòng lệnh đơn giản hơn SAS.

``` stata
mean x
```

*   R: miễn phí, cập nhật, ngôn ngữ logic (theo tiếng Anh), vô địch trong khả năng vẽ biểu đồ. Khả năng tích hợp của R giúp phần mềm có thể dễ dàng chạy trên các server, đặc biệt là Linux - điều mà các phần mềm khác không thể. Google, Facebook, Twitter là v.d. về các công ty đang sử dụng R. R cũng dễ dàng kết nối với phần mềm khác như WinBUGS, JAGS,... và cộng đồng sử dụng R rất tích cực nên học dễ hơn.

``` r
mean(x)
```

## Các khái niệm ban đầu

> Tất cả các khái niệm sẽ không dịch mà sử dụng như tên gọi, để dễ làm quen với R.

### Cài R

Mở trang http://www.r-project.org/ và tải tùy theo hệ điều hành. Chạy R và bắt đầu làm quen.

### Ngôn ngữ đơn giản

Khi mở R, dấu nhắc `>` cho biết R đang sẵn sàng để bạn gõ lệnh, các toán tử cơ bản cộng trừ nhân chia `+, -, *, /`. Dấu mũ, v.d. `2^3`.
Bạn có thể gõ lệnh trên một hàng như

``` r
> 2+2
4
```

hoặc trên nhiều hàng

``` r
> 2+2+2/3
[1] 4.666667
```

Và dấu

``` r
# là dấu để chú thích và lệnh này sẽ không chạy
```

### Working directory (wd)

Là _folder đang làm việc_, folder này sẽ chứa mọi kết quả của lệnh R, v.d. lưu một biểu đồ, một file và cũng là nơi R sẽ tìm để đọc file như dữ kiện, câu lệnh....

Xem mình đang làm ở đâu, gõ

``` r
getwd() # get working direcrory
```

Khi phân tích, nên nói cho R biết bạn muốn làm việc ở đâu để mọi kết quả đều nằm trong folder mình muốn và R cũng sẽ hiểu phải tìm, v.d. như dữ kiện phân tích ở đâu, gõ

``` r
setwd("path/to/selected/folder") # Lưu ý đường dẫn trong ngoặc kép sẽ khác nhau tùy theo hệ điều hành.
```

### Workspace

_Không gian làm việc_ là nơi chứa toàn bộ mọi thứ ... bạn đang làm việc. Tưởng tượng như phòng làm việc của bạn, sẽ có những vật (object) có kích cỡ, đặc tính khác nhau được đặt khắp nơi trong phòng, khi cần chỉ cần thò tay ra lấy.

Thường sẽ phải phân tích nhiều ngày trên một dữ kiện, để tránh việc chạy đi chạy lại những gì đã làm R cung cấp khả năng lưu _không gian_ này lại với lệnh

``` r
save.image("Ten.RData") # Khi đúng đuôi file .RData
```

và khi mở R lên lại tải vào với

``` r
load("Ten.RData")
```

Lưu ý: **File .RData phải nằm trong working directory để tải với lệnh trên.**

### Object

Các _vật_ này nằm trong _không gian_ vừa nói ở trên, và để lấy sử dụng ta dùng các câu lệnh gọi tên tương ứng. **Một object** có thể là một số, một dãy số, một bảng dữ kiện, một chữ cái,....

Để xem bạn đang có gì trong _phòng_, gõ

``` r
ls() # list, () để trống cho R biết bạn muốn liệt kê mọi loại object
```

Để xóa `x` khỏi _phòng_ gõ

``` r
rm(x) # remove
```

### Gán, tạo object

Trong R, có thể sử dụng dầu `=` hoặc `<-` để gán giá trị cho một đối tượng. Tuy nhiên để dễ đọc cũng như để code rõ ràng, nên sử dụng `<-` khi gán, tạo object và cũng theo cộng đồng bạn nên để khoảng trắng ở cả 2 bên của các dấu này.

``` r
a <- 1 # gán giá trị 1 cho object a
> a # Xem a
[1] 1
b <- "a" # gán giá trị là chữ cái a cho object b
> b # xem b
[1] "a"
```

### Script

Tất cả các lệnh có thể gõ và chạy trực tiếp, nhưng nên được lưu trong một file riêng để thuận tiện chỉnh sửa và sử dụng. Trong R, bạn có thể viết code trong nhiều trình biên tập khác nhau và gửi lệnh sang R để chạy như Sublime Text, Notepad++, RStudio, Gedit....

### Help

Để đọc hướng dẫn sử dụng một lệnh trong R, gõ `?lenh` và enter để xem.

**Học R - [2] Các loại Object, Quản lý dữ kiện**

# Bài tập

Tìm và cài RStudio, và thực hiện các yêu cầu sau
1\. Tạo mới một file script tên `hocR.R`, lưu vào folder `hocR`, viết lệnh đặt working directory tới folder `hocR` vào file.
2\. Đọc file help của các lệnh `c`, `seq`, `rep`. Dùng các lệnh này tạo `a` là dãy số từ 1 đến 25, `b` là dãy số 1 lập lại 25 lần, c là dãy số như `a` nhưng trong đó mỗi số lập lại 5 lần, cụ thể `c` là 1,1,1,1,1,2,2,2,2,2,...,25,25,25,25,25.
3\. Dùng lệnh liệt kê chỉ riêng object `a`

Bài giải sẽ cung cấp ở cuối bài tiếp theo.

* * *

1.  Chuyện kể của giáo sư Lesaffre, tác giả Bayesian Biostatistics [↩](#fnref-2809-1)
