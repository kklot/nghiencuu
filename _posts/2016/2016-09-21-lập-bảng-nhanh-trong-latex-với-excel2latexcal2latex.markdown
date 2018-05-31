---
title: Lập bảng nhanh trong LaTex với Excel2Latex/Cal2Latex
layout: post
author:
  display_name: Kinh Nguyen
  login: nguyenkinh
  email: nguyenkinh@ytecongcong.com
  url: https://www.google.com/profiles/112009149785989721279
---

Lập bảng trong LaTeX là một công việc gây nản nhất trong sử dụng LaTex khi soạn thảo văn bản. Nếu dùng R bạn có thể nhanh chóng xuất ngay kết quả mô hình, bảng biểu sang ngôn ngữ Latex. Nếu không, cách tốt nhất là dùng `Excel2Latex` cho Excel hoặc `cal2latex` khi dùng Libreoffice Calc.

Với các gói này bạn cứ việc trình bày bảng trong Excel hoặc Libreoffice Calc sau đó ... nhấn nút và bạn có ngay một code Latex để dán vào tài liệu của mình. `Excel2Latex` có vẻ tốt hơn `cal2latex` một chút.


Hỗ trợ nhiều định dạng

* In đậm/nghiêng
* Canh trái phải giữa theo cột/ô 
* Đường kẻ trong bảng 
* Màu chữ
* Màu ô
* Xoay ô
* Trộn ô
* Có thể chuyển đổi các ký tự đặc biệt như `\`, `$`, `_`, `^`, `%`, `&`, và `#` nếu muốn 
* Hỗ trợ dạng bảng đẹp dùng gói `booktabs`
* Xuất LaTeX `tabular` hoặc bọc với `table`
* Xuất một phần bảng chọn trong bảng
* ...

## Sử dụng

Tải [Excel2Latex](http://mirrors.ctan.org/support/excel2latex.zip) hoặc [Calc2LaTeX
](https://sourceforge.net/projects/calc2latex/files/latest/download) sau đó:

### Với Excel2Latex

Mở file `Excel2LaTeX.xla` với Excel, sau đó trên menu **Tools** sẽ có thểm 2 nút, hoặc bạn có thể tìm trong tab **Add-Ins** ở các phiên bản 2010 trở lên. Mở hoặc lập bảng căn chỉnh theo mong muốn sau đó nhấn nút **Convert Table to LaTeX**. Bạn có thể chọn lưu thành file `.tex` hoặc copy 

![Excel2LaTeX interface](https://i.imgur.com/EK88upo.png)

Ảnh minh họa Excel2LaTeX

### Với Cal2Latex

#### Cài đặt

- Mở menu

![Imgur](http://i.imgur.com/sJhyDbw.png)

- Chọn `Organizer > Import`, chọn file Calc2LaTeX đã tải về (đã giải nén).

![Imgur](http://i.imgur.com/ctjanUq.png)

- Sử dụng: Tô chọn bảng muốn chuyển đổi sang định dạng LaTeX.
- Vào `Tools > Macro > Run Macro`, chọn tiếp trong ô Library `Cal2Latex > Cal2Latex`, chọn bên ô `Mảco Name > Main` và cuổi cùng chọn `Run`. 

![Imgur](http://i.imgur.com/8z2C8hl.png)

Nếu dùng thường bạn có thể tạo phím tắt để thao tác nhanh trong Excel và Libreoffice.
