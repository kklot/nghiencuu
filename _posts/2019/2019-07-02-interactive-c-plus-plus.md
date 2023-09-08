---
title: Tương tác với C++ bằng Cling
layout: post
---

Dù `R`, `Python`, và gần đây là `Julia` nổi lên những năm gần đây là những ngôn ngữ thời thượng cho dân phân tích dữ kiện, `C++` vẫn là ngôn ngữ lập trình mạnh mẽ và tốc độ không phần mềm nào kể trên sánh bằng[^1]. Trong thực tế, rất nhiều gói phần mềm cho R cần tốc độ cao đều gọi việc tính toán từ C++ để trả về kết quả trong R.

Tuy nhiên C++ không có tương tác với người dùng như 3 ngôn ngữ kể trên, tức là gõ lệnh và thấy kết quả ngay. C++ đòi hỏi người dùng thiết kế trước đầy đủ các bước cần làm, viết code chính xác cho tất cả các bước, rồi mới chạy được chương trình. Điều này làm nhiều người khó tiếp cập với C++ khi bước chân vào thế giới phân tích số liệu.

`cling` giúp giải quyết được phần nào trở ngại trên. Đây là sản phẩm của CERN - trung tâm nghiên cứu hạt nhân của Châu Âu.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/f9Xfh8pv3Fs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[Chi tiết (tiếng Anh) và hướng dẫn cài đặt chương trình từ Github.](https://github.com/root-project/cling)

Nếu có trở ngại trong việc cài đặt hãy đặt câu hỏi cuối bài.

[^1]: Về tính toán số học thì Fortran vẫn là vượt trội về tốc độ.