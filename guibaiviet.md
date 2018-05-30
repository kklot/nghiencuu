---
title: Gửi bài viết
permalink: guibaiviet/
profile: true
---

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<h1>Gửi bài viết</h1>
Mọi thành viên có nhu cầu có thể đăng bài có nội dung trong lĩnh vực Y tế Công cộng tại trang mạng. 

<form method="POST" action="https://formspree.io/admin@ytecongcong.com">
     <div class="form-group">
        <input class="form-control" type="email" name="email" placeholder="Email của bạn">
    </div>
     <div class="form-group">
        <input class="form-control" type="text" name="text" placeholder="Tên tác giả (hoặc bút danh)">
    </div>
     <div class="form-group">
        <label for="header">Tựa bài</label>
        <input class="form-control" type="text" name="header" placeholder="Mọi chủ để liên quan đến YTCC">
    </div>
     <div class="form-group">
        <label for="content">Nội dung</label>
        <textarea class="form-control" rows="25" name="content" placeholder="Nội dung bài viết"></textarea>
    </div>
    <button class="btn btn-primary btn-block" type="submit">Gửi Bài</button>
</form>

{% include footer.html %}
