---
title: Cơ sở của phân tích thống kê
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

Các nguyên tắc xác suất cơ bản (được điểm qua trong Chương 7) được sử dụng trong suy diễn thống kê. Tất cả các suy diễn được dựa trên ba đặc tính cơ bản: dân số (U) quan tâm, tập hợp các đặc tính (các biến số) của một nhóm đơn vị của dân số này (V), và phân phối xác suất (P) của những đặc tính trong dân số.

Dân số (U)

Dân số là tập hợp các đơn vị quan sát quan tâm, và là mục đích của nghiên cứu. Ví dụ trong xác định sự hiệu quả của một thuốc nhất định của một bệnh, dân số sẽ bao gồm tất cả các bệnh nhân có bệnh. Để xác định hiện mắc của những người mới nhiễm HIV ở những người hành nghề mại dâm trong một nước, dân số sẽ bao gồm tất cả những người hành nghề mại dâm trong cộng đồng. “Dân số” ở đây đồng nghĩa với “dân số đích” được xác định trong Chương 7.

Việc xác định dân số rõ ràng và chính xác là điều thiết yếu trong bất cứ nghiên cứu nào. Sự thành công của một nghiên cứu sẽ phụ thuộc phần lớn vào việc xác định dân số quan tâm. Thông thường, dân số quan tâm là không quan sát được và một dân số nhỏ hơn được xác định làm đối tượng nghiên cứu. Ví dụ trong các thử nghiệm lâm sàng, một số bệnh nhân bị loại ra vì nhiều lí do trước khi phân bổ ngẫu nhiên, và dân số nghiên cứu do đó có khác biệt so với dân số đích. Sự khác biệt này cần phải rõ ràng ngay từ đầu nghiên cứu và cả vào lúc phân tích và diễn giải dữ kiện để việc suy diễn rút ra từ nghiên cứu sẽ có giá trị.

Các biến số (V)

Một khi dân số đã được xác định, ta cần định nghĩa rõ những đặc tính nào của các đơn vị nghiên cứu trong dân số (đối tượng nghiên cứu) mà ta lên kế hoạch nghiên cứu. Ví dụ, trong nghiên cứu về HIV ở trên, cần xác định HIV (phương pháp tin cậy và giá trị để xác định HIV ở người), và những đặc tính nào của người (v.d. tuổi, giới, học vấn, v.v.) dự đính nghiên cứu. Việc định nghĩa rõ ràng và chính xác cùng phương pháp đo lường những đặc tính này (một quan sát đơn giản, một xét nghiệm, hoặc một bộ câu hỏi) là thiết yếu cho một sự thành công của một nghiên cứu.

Các biến số được có nhiều đặc trưng khác nhau; xem xét về mặt thống kê, các biến số thường được phân loại thành dạng rời rạc và liên tục. Các biến số rời rạc là những biến số mà chỉ có thể có một ít giá trị (v.d. giới gồm nam và nữ), sự mắc bệnh (có, không). Các biến số liên tục là những biến số về lý thuyết là có thể nhận mọi giá trị trong một khoảng xác định bởi giá trị nhỏ nhất và giá trị lớn nhất (v.d. tuổi, huyết áp). Có một số biến số có bản chất là rời rạc nhưng số lượng phân nhóm làm nó giống như một biến số liên tục và những biến số này thường được coi liên tục trong hầu hết các tính toán thống kê (v.d. số năm đi học, số người trong một hộ gia đình).

Phân phối xác suất (P)

Điều liên kết cốt yếu nhất giữa dân số và các đặc tính của nó, cho phép ta rút ra các suy diễn về dân số dựa trên mẫu quan sát là phụ thuộc vào phân phối xác suất này. Phân phối xác suất là một cách để liệt kê các giá trị khác nhau mà một biến số có thể có, và mỗi giá trị này xuất hiện thường xuyên đến mức nào trong dân số. Phân phối tần suất thật sự được xấp xỉ với đường cong phân phối xác suất lý thuyết.

Các ví dụ quen thuộc về phân phối xác suất là nhị thức, Poisson và phân phối bình thường. Hầu hết phân tích thống kê trong nghiên cứu y tế sử dụng một trong ba phân phối xác suất phổ biến này. Ví dụ, số mới mắc của một bệnh khá phổ biến có thể xấp xỉ với phân phối nhị thức, còn số mới mắc của một bệnh lý hiếm (v.d. số tử vong do tai nạn xe cộ) có thể xem xét dùng phân phối Poisson. Phân phối của các biến số liên tục (huyết áp, nhịp tim) thường được coi là có phân phối bình thường.

Phân phối xác suất được mô tả bởi các “tham số”: là những đại lượng cho phép ta tính toán xác suất của nhiều sự kiện liên quan đến biến số hoặc cho phép ta xác định xác suất của một giá trị. Ví dụ phân phối nhị thức có hai tham số: _n_ và _π_. Phân phối nhị thức xảy ra khi một số đối tượng cố định (_n_) được quan sát, đặc tính có bản chất là nhị giá (chỉ có thể có hai giá trị), và mỗi đối tượng có cùng xác suất (_π_) có giá trị này và (1 − _π_) có giá trị khác. Sau đó việc suy diễn thống kê liên quan đến việc tìm ra giá trị trong dân số dựa trên một mẫu quan sát của một mẫu được chọn kỹ càng.

Mặt khác, phân phối bình thường là một đường cong toán học đại diện qua hai đại lượng _μ_ và _σ_. Đại lượng đầu tiên mô tả trung bình các giá trị của biến số và đại lượng thứ hai là độ lệch chuẩn. (Các định nghĩa trong mục 8.3.3.)

Loại phân tích thống kê được thực hiện sẽ dựa rất nhiều vào thiết kế nghiên cứu: cụ thể nghiên cứu có là mô tả, và cách thiết kế chọn mẫu nào được sử dụng để chọn mẫu từ dân số.