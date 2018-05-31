---
layout: "post"
title: "Gmail, Mutt, OfflineImap và Unity Mail"
date: "2016-09-21 00:53"
author:
  display_name: Kinh Nguyen
  login: nguyenkinh
  email: nguyenkinh@ytecongcong.com
  url: https://www.google.com/profiles/112009149785989721279
---

Như tựa đề mô tả, ngoài việc cấu hình để đọc Gmail với `Mutt`, và đồng bộ emails với `OfflineImap`, sử dụng [Unity Mail](https://tari.in/www/software/unitymail/) để nhận tin báo khi có mail mới đồng thời kích hoạt `OfflineImap` chạy đồng bộ khi có mới mới là giải pháp hoàn hảo nhất cho tới nay khi dùng `Mutt`. Mô hình này được minh họa rất tốt ở hình dưới

![](http://stevelosh.com/media/images/blog/2012/10/what-the-mutt.png)

Chi tiết cấu hình có thể xem tạm ở [đây](http://stevelosh.com/blog/2012/10/the-homely-mutt/#getting-email), rảnh mình sẽ tóm tắt bài này cho thuận tiện hơn.

Để thêm `Unity Mail` vào bộ ba này, cấu hình `Unity Mail` với tài khoản Gmail dùng trong `Mutt`, `Offlineimap`, sau đó đơn giản tạo file chạy lệnh đồng bộ khi có mail mới

``` bash
cd ~
touch UpdateMail.sh
echo offlineimap -o > UpdateMail.sh
chmod +x UpdateMail.sh
```
và trỏ cấu hình của Unity Mail: `Options > Execute this command on messages receive` tới nơi file vừa lưu (v.d. `~/UpdateMail.sh`).

 Tận hưởng thành quả!
