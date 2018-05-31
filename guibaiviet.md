---
title: Gửi bài viết
permalink: guibaiviet/
profile: false
---

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<h1>Gửi bài viết</h1>
Mọi thành viên có nhu cầu có thể đăng bài có nội dung trong lĩnh vực Y tế Công cộng tại trang mạng. 

<p>Tên hoặc bút danh sẽ được tạo thành trang riêng (dạng ytecongcong.com/authors/butdanh/, v.d. <a href="/authors/nguyenkinh/">/authors/nguyenkinh/</a> ) liệt kê các bài viết của cùng tác giả khi bài đã đăng. Để cập nhật thông tin, đơn giản viết bài mới và đưa thông tin mới.</p>

<p>Lưu ý: để có hình avatar đúng, vui lòng đăng ký với trang hình đại diện toàn cầu: <a href="http://gravatar.com">Gravatar.com</a> với email của bạn.</p>

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
        <textarea class="form-control" rows="25" name="content" placeholder="Nội dung bài viết (Hình ảnh nên upload lên imgur.com và paste url trực tiếp trong bài viết.) Bài biết của bạn sẽ được chỉnh định dạng trước khi đăng."></textarea>
    </div>
    <button class="btn btn-primary btn-block" type="submit">Gửi Bài</button>
</form>

{% include footer.html %}
