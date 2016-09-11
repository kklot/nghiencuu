---
layout: "post"
title: "Cách viết Markdown"
date: "2016-09-11 16:53"
---

<script src="/assets/js/application.js"></script>

Markdown là cấu trúc viết đơn giản và dễ dàng để định dạng văn bản trên nhiều ứng dụng khác nhau, từ tạo web, phần mềm, đến các văn bản chuyên nghiệp như báo cáo và bài báo khoa học. Viết một cách đơn giản nhưng định dạng cuối cùng hoàn toàn chuyên nghiệp, ví dụ, trang này được viết dưới dạng markdown.

Để sử dụng, bạn có thể mở bất cứ trình biên tập nào, như `notepad`, `gedit`,...và lưu file với đuôi như `.md, .markdown`. Công cụ miễn phí và hỗ trợ tốt có thể kể đến là [Atom](https://atom.io/). Cuối cùng, [Pandoc](http://pandoc.org/) hỗ trợ chuyển đổi từ markdown sang tất cả các định dạng văn bản khác, như `.docx, .doc, .tex`.

[](https://dl.dropboxusercontent.com/u/29949485/MarkdownVsLaTeX.jpg)

## Ví dụ các định dạng văn bản căn bản

<div class="js-toc">

<ul class="example-nav js-examples-nav">
  <li><a href="#" class="selected" data-container-id="example-text">Văn bản</a></li>
  <li><a href="#" data-container-id="example-lists" class="">Danh sách</a></li>
  <li><a href="#" data-container-id="example-images" class="">Hình</a></li>
  <li><a href="#" data-container-id="example-headers" class="">Mục-Trích dẫn</a></li>
  <li><a href="#" data-container-id="example-code" class="">Code</a></li>
  <!-- <li><a href="#" data-container-id="example-extras" class="">Khác</a></li> -->
</ul>

<div class="markdown-example" id="example-text" style="display: block;">
  <pre class="source">Dễ dàng viết **in đậm** và *in nghiêng* với Markdown. Bạn có thể tạo liên kết tới trang [YTCC Online](http://ytecongcong.com)
  </pre>
  <div class="rendered">
  Dễ dàng viết <strong>in đậm</strong> và <em>in nghiêng</em> với Markdown. Bạn có thể tạo <a href="http://ytecongcong.com/">liên kết tới trang mạng YTCC Online</a>
  </div>
</div>

<div class="markdown-example" id="example-lists" style="display: none;">
  <pre class="source">Bạn có thể tạo danh sách đánh số:

  1. Một
  2. Hai
  3. Ba

  Hoặc tạo danh sách không đánh số:

  * Đánh dấu sao ở đầu dòng
  * OK!

  Hoặc cũng có thể dùng,

  - Dấu gạch đầu dòng `-` hoặc `+` cũng được
  - Nếu có mục nhỏ hơn, thêm 2 khoảng trắng phía trước:
    - Như thế này
    - Và thế này
  </pre>
<div class="rendered" markdown="1">
Bạn có thể tạo danh sách đánh số:

1.  Một
2.  Hai
3.  Ba

Hoặc tạo danh sách không đánh số:

*   Đánh dấu sao ở đầu dòng
*   OK!

Hoặc cũng có thể dùng,

*   Gạch đầu dòng cũng được
*   Nếu có mục nhỏ hơn, chỉ cần thêm 2 khoảng trắng trước dấu gạch hoặc dấu sao:
    *   Như thế này
    *   Và thế này
</div>
</div>

<div class="markdown-example" id="example-images" style="display: none;">
<pre class="source">Nếu muốn chèn hình ảnh, copy liên kết tới hình và gõ đơn giản như sau:

![Hình logo](https://dl.dropboxusercontent.com/u/29949485/avatar.png)
</pre>
<div class="rendered" markdown="1">
Nếu muốn chèn hình ảnh, copy liên kết tới hình và gõ đơn giản như sau:

![Hình logo](https://dl.dropboxusercontent.com/u/29949485/avatar.png)
</div>
</div>

<div class="markdown-example" id="example-headers" style="display: none;">
<pre class="source"># Định dạng cấu trúc văn bản

Để định dạng văn bản theo các đề mục khác nhau trong một văn bản, đặt dấu `#` đầu dòng để tạo tiêu đề. Số lượng dấu sao thể hiện mức độ, v.d. hai dấu `##` là mục con của `#`.

### Đây là mục con cấp 3

Có thể dùng dấu `#` từ một đến sáu `######` để thể hiện các cấp của tiêu đề.

Nếu bạn muốn trích một câu nói, văn bản, sử dụng dấu > đầu hàng:

> Khỏe vì nước kiến thiết Quốc Gia. Đoàn thanh niên ta góp tài ba. Tạo nguồn dân sinh mới hùng mạnh trong năm giới. Hợp lực xây hưng thịnh chung nước Nam. Thanh niên ơi, hồn thiêng núi sông đợi chờ! Nơi tay ta toàn dân ngóng trông từng giờ. Mang máu anh hùng ta đừng làm nhơ máu anh hùng. Trai đất Việt phải nêu đèn sáng thế giới soi chung - Hùng Lân
</pre>
<div class="rendered" markdown="1">
# Định dạng cấu trúc văn bản

Để định dạng văn bản theo các đề mục khác nhau trong một văn bản, đặt dấu `#` đầu dòng để tạo tiêu đề. Số lượng dấu sao thể hiện mức độ, v.d. hai dấu `##` là mục con của `#`.

### Đây là mục con cấp 3

Có thể dùng dấu `#` từ một đến sáu `######` để thể hiện các cấp của tiêu đề.

Nếu bạn muốn trích một câu nói, văn bản, sử dụng dấu > đầu hàng:

> Khỏe vì nước kiến thiết Quốc Gia. Đoàn thanh niên ta góp tài ba. Tạo nguồn dân sinh mới hùng mạnh trong năm giới. Hợp lực xây hưng thịnh chung nước Nam. Thanh niên ơi, hồn thiêng núi sông đợi chờ! Nơi tay ta toàn dân ngóng trông từng giờ. Mang máu anh hùng ta đừng làm nhơ máu anh hùng. Trai đất Việt phải nêu đèn sáng thế giới soi chung - Hùng Lân
</div>
</div>

<div class="markdown-example" id="example-code" style="display: none;">
<pre class="source">
Có nhiều cách khác nhau để định dạng code. Nếu viết code trên cùng dòng, chỉ cần đóng chữ trong dấu ` (phím bên trái số 1), v.d. `gen gioitinh = 1`. Nếu có một đoạn code dài, thụt đầu dòng *4* khoảng trắng để định dạng:

    if (gioitinh = 1){
      return "Nam"
    }

Một cách khác là dùng hàng rào bọc quanh code mà không cần thụt đầu dòng:

```
if (gioitinh = 1){
  return "Nam"
}
```

Nếu muốn chỉ rõ ngôn ngữ của code để tô màu code (lưu ý trang này tự động phát hiện ngôn ngữ nên các code phía trên cũng được tô màu):

```r
if (gioitinh = 1){
  return "Nam"
}
```
</pre>
<div class="rendered" markdown="1">
Có nhiều cách khác nhau để định dạng code. Nếu viết code trên cùng dòng, chỉ cần đóng chữ trong dấu ` (phím bên trái số 1), v.d. `gen gioitinh = 1`. Nếu có một đoạn code dài, thụt đầu dòng *4* khoảng trắng để định dạng:

    if (gioitinh = 1){
      return "Nam"
    }

Một cách khác là dùng hàng rào bọc quanh code mà không cần thụt đầu dòng:

~~~
if (gioitinh = 1){
  return "Nam"
}
~~~

Nếu muốn chỉ rõ ngôn ngữ của code để tô màu code (lưu ý trang này tự động phát hiện ngôn ngữ nên các code phía trên cũng được tô màu):

```r
if (gioitinh = 1){
  return "Nam"
}
```
</div>
</div>

</div>
