---
title: Gửi bài viết
permalink: guibaiviet/
profile: true
---

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>


Mọi thành viên có nhu cầu có thể đăng bài có nội dung trong lĩnh vực Y tế Công cộng tại trang mạng. 

<form method="POST" action="https://formspree.io/admin@ytecongcong.com">
  <input class="form-control" type="email" name="email" placeholder="Email của bạn">
  <input class="form-control" type="text" name="text" placeholder="Tên tác giả (hoặc bút danh)">
  <input class="form-control" type="text" name="header" placeholder="Tựa bài">
  <textarea class="form-control" rows="30" name="content" placeholder="Nội dung bài viết"></textarea>
  <button class="btn btn-primary btn-block" type="submit">Gửi Bài</button>
</form>

{% include footer.html %}
