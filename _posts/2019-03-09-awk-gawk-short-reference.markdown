---
title: Cách dùng AWK (GAWK) để xử lý tệp tin tài liệu (1)
layout: post
categories: [awk]
author:
  display_name: Kinh Nguyen
  login: nguyenkinh
  email: nguyenkinh@ytecongcong.com
  url: https://www.google.com/profiles/112009149785989721279
author_login: Kinh Nguyen
author_email: nguyenkinh@ytecongcong.com
post_gravatar: 886f27ba4b392d00e87a35990840ba13
---

## Cách chạy

- Trên Linux mở Terminal, xong
- Trên Mac cài với `brew install gawk`
- Trên Windows, [tải](http://gnuwin32.sourceforge.net/packages/gawk.htm) và cài, thiết lập `PATH`
![](https://i.stack.imgur.com/1W7xj.png)
mở Command Prompt.


## Cú pháp

Tìm `nội dung` trong `tệp tin` và chạy `xử lý`

```bash
awk 'nội dung { xử lý }' tệp tin
# dòng này ko chạy vì bị có dấu # đầu dòng
```

Ví dụ:

Giả sử mình xử lý tệp tin `email.txt` (tạo tệp xong chép nội dung dưới đây và dán vào tệp tin.)

```
Amelia       555-5553     amelia.zodiacusque@gmail.com    F
Broderick    555-0542     broderick.aliquotiens@yahoo.com R
Julie        555-6699     julie.perscrutabor@skeeve.com   F
Samuel       555-3430     samuel.lanceolis@shu.edu        A
```


```bash
# tìm dòng chứa chữ 'lis' trong tệp email.txt
awk '/lis/ {print}' email.txt
# mặc định là in, dòng này giống dòng trên
awk '/lis/' email.txt
# mặc định là in nguyên dòng, dòng này cũng giống dòng trên
awk '/lis/ {print $0}' email.txt # `$0` chỉ nguyên dòng, xem mục Fields 
```

Cách ghi `nội dung` xem thêm tại trang [regex](https://regexr.com) hoặc đặt câu hỏi cuối bài.

## Record (bản ghi)

Mặc định trong một tệp tin, một bản ghi (record) là một dòng. Các bản ghi cách nhau bởi giá trị định nghĩa trong biến `RS` (record separator). 

Giá trị mặc định của `RS` là cuối dòng (newline) và có thể gán giá trị khác.

Ví dụ, thay vì in từng dòng, lệnh sau in từng "dòng" kết thúc bằng chữ "@"

```bash
awk '{print}' RS="@" email.txt
```

## Field (mảng)

Chỉ từ trong một dòng cách nhau bởi khoảng trắng (giá trị của biến `FS` (field separator).

- `$0`: nguyên dòng
- `$1`: từ đầu tiên
- `$1121`: từ thứ 1121
- `$NF`: từ cuối cùng (có thể có kèm dấu chấm câu)

v.d., in dòng có chữ đầu tiên chứa chữ `li`

```bash
awk '$1 ~ /li/' email.txt
```

v.d. in "từ" đầu tiên của mỗi câutrong tệp email với giá trị phân cách `FS` không phải khoảng trắng nữa mà là dấu chấm "."

```bash
awk '{print $1}' FS="." email.txt
```
Nếu gán `FS=""` có nghĩa là một ký tự trong câu sẽ trở thành một mảng vì giá trị phân cách là không có gì.


[Nguồn](https://www.gnu.org/software/gawk/manual/gawk.html#Getting-Started)