---
title: Tìm giá trị khớp với Regex trong R
layout: post
author:
  display_name: Kinh Nguyen
  login: nguyenkinh
  email: nguyenkinh@ytecongcong.com
  url: https://www.google.com/profiles/112009149785989721279
---

>`regex`: regular expression (Xem một số lệnh regex cơ bản [ở đây](http://www.ytecongcong.com/2016/09/nh%E1%BA%AFc-bai-regex/))

`regex` là ngôn ngữ mạnh mẽ để tìm kiếm giá trị khớp với một điều kiện mong muốn được sử dụng trong hầu hết các phần mềm và ngôn ngữ lập trình. Ví dụ như tìm Google cũng là một dạng của `regex`. Trong phân tích dữ kiện, `regex` cực kỳ hữu ích để xử lý nhanh, mã hóa và chọn lọc dữ kiện. V.d. để tìm những người trả lời "không" trong một câu hỏi mở, bạn có thể tìm với cú pháp như `*[kK]hông*` để bao hàm tất cả những đáp án như `không`, `Không`, `không tui không biết`,...Dưới đây là sơ lược về ứng dụng trong R.

R cung cấp 7 hàm `regex` trong package có sẵn `base`. Tất cả đều mặc định là phân biệt chữ hoa chữ thường. Nếu không muốn chỉ cần chọn thêm tham số `ignore.case=TRUE`. Để tránh các lỗi không tương thích với các phiên bản R khác nhau, khi dùng lệnh R nên gán tham số `perl=TRUE`.

## Tìm giá trị trong các vector ký tự

Hàm `grep` lấy tham số đầu tiên là `regex`, và tham số thứ hai là vector chứa nội dung cần tìm. Nếu thêm tham số `value=FALSE` hoặc không dùng tham số này hàm `grep` trả về một vector các vị trí trong vector khớp với `regex`. Cách này là đủ dùng nếu bạn chắc về cú pháp `regex` và dữ kiện có thể xử lý ngay dựa trên các giá trị này. Nếu chọn `value=TRUE`, `grep` trả về một vector với giá trị khớp có trong vector, cách này có thể giúp kiểm tra xem cú pháp lệnh mình tìm có đúng hay không.

``` r
> grep("a+", c("abc", "def", "cba a", "aa"), perl=TRUE, value=FALSE)
[1] 1     3       4
> grep("a+", c("abc", "def", "cba a", "aa"), perl=TRUE, value=TRUE)
[1] "abc" "cba a" "aa"
```

Hàm `grepl` dùng giống như hàm `grep`, ngoại trừ việc tham số `value` không xài được. `grepl` trả về một vector đúng/sai với cùng độ dài với vector đầu vào. Mỗi giá trị trong vector trả về cho biết vị trí tương ứng trong vector đầu vào có khớp với `regex` không.

``` r
> grepl("a+", c("abc", "def", "cba a", "aa"), perl=TRUE)
[1] TRUE  FALSE TRUE  TRUE
```

Hàm `regexpr` nhận tham số giống `grepl`, nhưng trả về một vector số nguyên cùng độ dài với vector đầu vào. Mỗi giá trị cho biết vị trí ký tự đầu tiên khớp với tìm kiếm trong mỗi chuỗi tương ứng. V.d. khớp ngay vị trí đầu tiên sẽ trả về giá trị `1`. Nếu không có giá trị nào khớp giá trị trả về là `-1`. V.d. bên dưới `"cba a"` có ký tự `a` đầu tiên ở vị trí số 3.

``` r
> regexpr("a+", c("abc", "def", "cba a", "aa"), perl=TRUE)
[1]  1 -1  3  1
attr(,"match.length")
[1]  1 -1  1  2
```

Các lệnh trên là tương đối đủ dùng cho các dữ kiện bình thường, ngoài ra còn có hàm `gregexpr` gần giống như `regexpr`, hàm `regmatches` dùng để lấy giá trị thật của chuỗi khớp với `regex`. V.d.

``` r
> x <- c("abc", "def", "cba a", "aa")
> m <- regexpr("a+", x, perl=TRUE)
> regmatches(x, m)
[1]  "a"  "a"  "aa"
> m <- gregexpr("a+", x, perl=TRUE)
> regmatches(x, m)
[[1]]  [1] "a"
[[2]]  character(0)
[[3]]  [1] "a"   "a"
[[4]]  [1] "aa"
```

Giá trị, hoặc vị trí trả về qua tìm kiếm với các hàm trên có thể dùng để lọc, thay thế, chỉnh sửa giá trị trong dữ kiện theo mong muốn với cách căn bản như dùng như `x[vector vị trí] <- vector thay thế` hoặc với hàm `sub, gsub`
