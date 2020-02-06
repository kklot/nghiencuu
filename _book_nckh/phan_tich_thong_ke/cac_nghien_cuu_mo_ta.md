---
title: Các nghiên cứu mô tả
layout: post
chapter:  Phân tích Thống kê
chapter_id: 4
post_id: 1
categories: [nckh]
author:
  display_name: Kinh Nguyen
  login: nguyenkinh
  email: nguyenkinh@ytecongcong.com
  url: https://www.google.com/profiles/112009149785989721279
author_login: Kinh Nguyen
author_email: nguyenkinh@ytecongcong.com
---

Trong các nghiên cứu mô tả, mục tiêu là để ước lượng các giá trị tham số của phân phối xác suất, hoặc hàm số của những tham số này. Dựa trên những gì đã được quan sát trong mẫu, một ước lượng (ước đoán tốt nhất) các giá trị của dân số và các số đo độ chính xác của ước lượng này được tính. Việc đo lường độ chính xác được dựa trên _phân phối chọn mẫu_ của ước lượng.

### Độ chính xác của ước lượng {#ch-nh-x-c-c-a-c-l-ng}

Khi một nghiên cứu mô tả được thực hiện và một ước lượng (_E_) của một tham số được tính từ nghiên cứu, ta cần biết giá trị này sẽ thay đổi như thế nào nếu ta chọn một mẫu khác. Phân phối của các giá trị _E_ trên nhiều lần chọn mẫu khác nhau (dưới cùng một điều kiện ta đã thực hiện) được gọi là _phân phối chọn mẫu_ của _E_. Phân phối chọn mẫu có thể xác định bằng thực nghiệm qua việc thực sự chọn mẫu lập lại. Rõ ràng điều này là không mong muốn và khó khăn. Có thể tính được xấp xỉ của phân phối chọn mẫu chỉ đơn thuần dựa trên lý thuyết chọn mẫu.

Một khi có được phân phối chọn mẫu, ta có thể trả lời những câu hỏi như “giá trị ước lượng có khả năng gần đến mức nào với giá trị của tham số thật?” Rõ ràng ta không thể trả lời chắc chắn 100% cho câu hỏi này vì ta chỉ quan sát một mẫu. Tuy vậy, dựa trên phân phối xác suất ta có thể tuyên bố với một độ tin cậy nhất định (v.d. chắc chắn 95%) rằng ước lượng sẽ nằm trong khoảng ±_x_ của giá trị thật. Khoảng này được gọi là khoảng tin cậy. Mức tin cậy trong tuyên bố càng nhiều thì giá trị của _x_ sẽ càng lớn (khoảng rộng hơn). Như ta thấy trong ví dụ cụ thể tiếp sau, ở cùng độ tin cậy, độ rộng của khoảng tin cậy sẽ giảm nếu tăng cỡ mẫu. Bằng trực giác ta thấy càng có nhiều thông tin (_n_ lớn) thì ta càng có độ tin cậy cao (khoảng tin cậy nhỏ hơn, hoặc có độ tin cậy lớn hơn với độ rộng tương đương).

### Ước lượng các tham số của phân phối nhị thức {#c-l-ng-c-c-tham-s-c-a-ph-n-ph-i-nh-th-c}

Khi nghiên cứu liên quan tới các sự kiện nhị giá (như mới mắc bệnh), mục tiêu là tính ước lượng xác suất của sự kiện (tỷ suất mới mắc) xảy ra trong dân số. Dựa trên phân phối xác suất nhị thức, ước lượng tốt nhất đã được chứng minh là tỷ lệ mẫu, _p_ (số sự kiện trong mẫu/cỡ mẫu, _n_).

Để đánh giá ước lượng này chính xác thế nào (_p_ gần với giá trị thật _π_ đến mức nào), ta cần biết _p_ sẽ biến thiên đến mức nào nếu chọn mẫu lại sử dụng cùng thiết kế (phân phối chọn mẫu của _p_). Phân phối của _p_ đã được chứng minh là xấp xỉ phân phối bình thường, với trung bình _p_ và độ lệch chuẩn, và _s_ = _π_(1 − _π_)/_n_ (_s_ được gọi là sai số chuẩn của _p_). Dùng các đặc tính của phân phối bình thường, ta có thể nói rằng giá trị thật là nằm trong khoảng _p_ ± 1.96 với 95% tin cậy.

Trong một nghiên cứu xác định tỷ lệ hiện mắc nhiễm HIV trong nhóm người hành nghề mại dâm (CSW), một mẫu 150 CSW được xét nghiệm và tìm thấy 42 người dương tính với HIV. Ước lượng hiện mắc HIV do đó là 28%, với sai số chuẩn là 3.67%. Khoảng tin cậy 95% của hiện mắc HIV trong nhóm CSW ở cộng đồng này là 28 ± 1.96 × 3.67 = (20.82%,35.18%), cụ thể là dựa trên khảo sát này ta có thể tuyên bố với 95% tin cậy rằng tỷ lệ hiện mắc thật có thể thấp khoảng 21%, hoặc cao đến 35%.

Lưu ý là trong Chương 7, ta đã trình bày nhiều tham số và các hàm của các tham số này từ phân phối nhị thức khi trình bày về hiện mắc và mới mắc của các tỷ số nguy cơ.

Các số đo RR và OR tính được từ các nghiên cứu đoàn hệ và nghiên cứu bệnh-chứng là các ước lượng về tỷ số nguy cơ thật trong dân số chọn mẫu. Để hoàn tất bức tranh này, ta cần tính phân phối chọn mẫu của các ước lượng này. Trong hầu hết các trường hợp, phân phối chọn mẫu được giả định xấp xỉ phân phối bình thường (kết quả chấp nhận được về mặt thống kê nếu cỡ mẫu là lớn và việc chọn mẫu được thực hiện sử dụng các phương pháp xác suất), để ta chỉ cần tính sai số chuẩn của các ước lượng này để tính khoảng tin cậy. Hầu hết các chương trình máy tính tính toán nguy cơ tương đối hay tỷ số số chênh cũng sẽ báo cáo sai số chuẩn của ước lượng, và đôi khi cả khoảng tin cậy.

### Ước lượng các tham số cho phân phối bình thường {#c-l-ng-c-c-tham-s-cho-ph-n-ph-i-b-nh-th-ng}

Với một biến số _X_ có phân phối bình thường, ta sẽ cần biết trung bình _μ_ và độ lệch chuẩn _σ_. Ước lượng tốt nhất cho các tham số này là trung bình mẫu _x_ (trung bình số học của tất cả các đối tượng trong mẫu) và độ lệch chuẩn mẫu, $$s = \sqrt{\dfrac{\sum_i(x_i-\bar{x})^2}{n-1}}$$

[Phân phối Bình thường là một phân phối xác suất có đặc tính đối xứng, trung tâm của phân phối là _μ_.

Thêm vào đó, trung bình ± 1.96 (độ lệch chuẩn) chứa 95% các giá trị của biến số (cụ thể là xác suất mà biến số có giá trị nằm trong khoảng này là 95%).]

Một lý do khác mà phân phối bình thường được sử dụng phổ biến trong suy diễn thống kê là hầu hết các hàm số mẫu (trung bình mẫu, các tỷ số nguy cơ, hệ số tương quan, v.v.) có phân phối chọn mẫu là phân phối bình thường nếu cỡ mẫu là đủ lớn.

Hầu hết các suy diễn trong nghiên cứu y tế chỉ liên quan đến giá trị trung bình. Trung bình mẫu có phân phối chuẩn bởi trung bình _m_ và độ lệch chuẩn (sai số chuẩn của trung bình), $ s/\sqrt{n} $. Do đó, khoảng tin cậy 95% của trung bình dân số m là $$\bar{x}\pm 1.96s/\sqrt{n}$$ Hoặc đơn giản hơn, trung bình mẫu ±2× (sai số chuẩn của trung bình). Chi tiết mô tả về các vấn đề ước lượng phổ biến và các công thức tính khoảng tin cậy có thể xem thêm trong Kleinbaum, Kupper and Morgenstern, or Glantz.