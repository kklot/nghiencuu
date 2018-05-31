---
layout: post
status: publish
published: true
title: Học R - [1] Giải bài tập và các vấn đề liên quan
author:
  display_name: Kinh Nguyen
  login: nguyenkinh
  email: nguyenkinh@ytecongcong.com
  url: https://www.google.com/profiles/112009149785989721279
author_login: Kinh Nguyen
author_email: nguyenkinh@ytecongcong.com
author_url: https://www.google.com/profiles/112009149785989721279
wordpress_id: 2815
wordpress_url: http://www.ytecongcong.com/?p=2815
date: '2014-08-23 04:49:41 +0200'
date_gmt: '2014-08-22 21:49:41 +0200'
categories:
- R
tags:
- nghiên cứu
- R
- học R
- phân tích
comments: []
---

Có bạn hỏi sao không làm video, câu trả lời là **tay phải nhúng chàm** là bước đầu tiên nếu muốn thành thạo. Nên hãy đọc và làm thử, các hướng dẫn là rất cơ bản và không tốn thời gian.

## RStudio

RStudio yêu cầu cài ở bài trước có rất nhiều ưu điểm cho người bắt đầu học R, cụ thể bạn hãy thử một số thao tác sau:

*   Gõ một chữ cái bất kỳ nào và nhấn phím `Tab`, chương trình sẽ gợi ý hàng loạt lệnh tương ứng.
*   Gõ một hàm hoàn chỉnh, v.d. `lm` và nhấn `F1`, cửa sổ **Help** sẽ hiện ra ngay trong chương trình để có thể dễ dàng tham khảo và đối chiếu khi phân tích.
*   Chuyển dấu nháy chuột vào trong hàm, v.d. `lm(|)` (dấu `|` đang chỉ dấu nháy của chuột) và nhấn `Tab` để hiện các tham số cần thiết của lệnh.

Một số tiện ích khác sẽ giới thiệu khi có nội dung liên quan.

## Câu 1\. Tạo môi trường làm việc

Bước này nên làm cho mọi phân tích, sẽ giúp cho các bước về sau trở nên dễ dàng hơn v.d. như tải dữ liệu, lưu kết quả.

Nhấn `Ctrl+Shift+N` để tạo script mới lưu tên `hocR.R`, có thể chấp nhận cả đuôi `.r` nhưng chuẩn chung là viết chữ hoa. Lệnh đặt working directory

``` r
setwd('~/hocR') # V.d. Trên Linux
```

## Câu 2\. Làm quen Help

Đọc file help bằng cách chạy `?seq`,... hoặc nhấn `F1` như trong RStudio. **Bí quyết học là...không cần nhớ** vì có thể xem lại bất cứ lúc nào.

Các mục cần quan tâm như sau:

*   **Description:** đương nhiên cần nhưng không cần đọc kỹ, v.d. `seq` để _Generate regular **seq**uences_.
*   **Usage**: để xem cách viết lệnh, v.d.

``` r
seq(from = 1, to = 1, by = ((to - from)/(length.out - 1)), length.out = NULL, along.with = NULL, ...)
```

Các giá trị trước dấu `=` là tên tham số của hàm, các giá trị sau dấu `=` là giá trị mà người phân tích đưa vào.

V.d. là hàm này cần có ít nhất 2 tham số `from` và `to`. Các tham số mà được mô tả có giá trị `NULL`, `NA` hay tính dựa trên giá trị khác là những tham số mở rộng, sẽ thay đổi chức năng cho hàm và _không nhất thiết phải điền giá trị_ khi không có nhu cầu đặc biệt. Muốn biết các tham số này sẽ thay đổi gì xem tiếp phần **Arguments**. Dấu `...` cho biết có các chức năng đặc biệt ít dùng khác.

Một yếu tố có thể đáng nhắc đến là phần này cho biết thứ tự của các tham số, v.d. mặc định

``` r
seq(1, 10) # 1 sẽ là giá trị của from và 10 sẽ là giá trị của to
[1]  1  2  3  4  5  6  7  8  9 10
seq(to = 10, from = 1) # lưu ý đổi vị trí nhưng thêm tên tham số
[1]  1  2  3  4  5  6  7  8  9 10
```

Ta thấy nếu xếp đúng thứ tự như trong **Usage** thì không cần thêm tên tham số. Điều này quan trọng trong các hàm **có nhiều tham số**, v.d. trong lệnh trên nếu muốn thêm giá trị cho `length.out` mà không thay đổi gì tham số `by` thì viết

``` r
seq(1, 10, length.out = 2)
  [1]  1 10
```

*   **Arguments:** chọn đọc những mục đang quan tâm, v.d.

``` r
    length.out: desired length of the sequence.
```

Chọn độ dài của dãy như v.d. phía trên, trong khi `by` sẽ xác định dãy số cách đều bao nhiêu, v.d.

``` r
seq(1, 10, 2)
[1] 1 3 5 7 9
```

*   **Value:** là tên của giá trị mà hàm **trả về**, mục này sẽ hữu ích khi cần trích ra một phần kết quả của hàm để tiếp tục thao tác, v.d. chỉ trích ra phần dư trong kết quả mô hình hồi quy tuyến tính,...tạm thời có thể bỏ qua.
*   **Examples**: đây là mục tìm đến khi đọc các mục trên xong vẫn chưa hiểu rõ. Hàm `example()` sẽ chạy và cho kết quả mẫu của một hàm, v.d.

``` r
example(seq)

seq(0, 1, length.out = 11)
[1] 0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1.0

seq(stats::rnorm(20)) # effectively 'along'
[1]  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20

seq(1, 9, by = 2)     # matches 'end'
[1] 1 3 5 7 9

seq(1, 9, by = pi)    # stays below 'end'
[1] 1.000000 4.141593 7.283185

seq(1, 6, by = 3)
[1] 1 4

seq(1.575, 5.125, by = 0.05)
[1] 1.575 1.625 1.675 1.725 1.775 1.825 1.875 1.925 1.975 2.025 2.075 2.125
[13] 2.175 2.225 2.275 2.325 2.375 2.425 2.475 2.525 2.575 2.625 2.675 2.725
[25] 2.775 2.825 2.875 2.925 2.975 3.025 3.075 3.125 3.175 3.225 3.275 3.325
[37] 3.375 3.425 3.475 3.525 3.575 3.625 3.675 3.725 3.775 3.825 3.875 3.925
[49] 3.975 4.025 4.075 4.125 4.175 4.225 4.275 4.325 4.375 4.425 4.475 4.525
[61] 4.575 4.625 4.675 4.725 4.775 4.825 4.875 4.925 4.975 5.025 5.075 5.125

seq(17) # same as 1:17, or even better seq_len(17)
[1]  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17
```

### Kết quả

Áp dụng các bước trên, câu trả lời cho câu hỏi lần trước như sau.

_...tạo a là dãy số từ 1 đến 25, b là dãy số 1 lập lại 25 lần, c là dãy số như a nhưng trong đó mỗi số lập lại 5 lần, cụ thể c là 1,1,1,1,1,2,2,2,2,2,…,25,25,25,25,25._

``` r
a <- seq(25)
a
[1]  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25
b = rep(1, 25)
b
[1] 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
c <- rep(a, each = 5)
c
[1]  1  1  1  1  1  2  2  2  2  2  3  3  3  3  3  4  4  4  4  4  5  5  5  5  5
[26]  6  6  6  6  6  7  7  7  7  7  8  8  8  8  8  9  9  9  9  9 10 10 10 10 10
[51] 11 11 11 11 11 12 12 12 12 12 13 13 13 13 13 14 14 14 14 14 15 15 15 15 15
[76] 16 16 16 16 16 17 17 17 17 17 18 18 18 18 18 19 19 19 19 19 20 20 20 20 20
[101] 21 21 21 21 21 22 22 22 22 22 23 23 23 23 23 24 24 24 24 24 25 25 25 25 25
```

## Câu 3\. Làm quen với object, string

Một hàm khi để trống các tham số sẽ vẫn chạy nếu hàm đó đã cung cấp các giá trị mặc định đã như thấy trong phần **Usage**, v.d. lệnh `seq()` R sẽ tạo dãy số từ 1 đến ...1.

Lệnh `ls()` nhắc tới bài trước cũng tương tự, khi gõ `ls()` R sẽ liệt kê tất cả các `object` có trong `workspace`.

``` r
ls()
[1] "a" "b" "c"
```

Ở đây ta làm quen với một dấu mới trong R, ngoặc kép `""` dùng để chỉ giá trị đó đang ở dạng kí tự, chữ. Tất cả các dấu ngoặc đơn `()` như đã gặp sẽ được R hiểu dãy kĩ tự trước nó là một hàm. Khi liệt kê, `"a"` là tên của `object` nên sẽ ở dạng chữ.

Để chỉ lọc ra một đối tượng nhất định, ở đây đang dạng ký tự, dùng thêm tham số `pattern`, xem `Help` để biết thêm.

``` r
ls(pattern = glob2rx("a"))
  [1] "a"
```

Trong v.d. trên có 2 hàm, `ls` và `glob2rx` vì nó đứng trước ngoặc đơn. Thao tác với biến số dạng chữ sẽ được mô tả ở một bài riêng biệt, nếu quan tâm có thể xem thêm một vài v.d. tại [stats.ytecongcong.com](http://stats.ytecongcong.com/228/l%E1%BB%8Dc-x%E1%BA%BFp-nhom-bi%E1%BA%BFn-s%E1%BB%91-d%E1%BA%A1ng-text-v%E1%BB%9Bi-r?show=229#a229).
