---
title: Gây nhiễu
layout: post
chapter:  Sai lệch và Gây nhiễu
chapter_id: 4
post_id: 1
categories: [nckh,counfouder,counfouding]
author:
  display_name: Kinh Nguyen
  login: nguyenkinh
  email: nguyenkinh@ytecongcong.com
  url: https://www.google.com/profiles/112009149785989721279
author_login: Kinh Nguyen
author_email: nguyenkinh@ytecongcong.com
---

_Gây nhiễu_ là một dạng đặc biệt của sai lệch. Ảnh hưởng của yếu tố đang nghiên cứu bị trộn lẫn với các ảnh hưởng từ các yếu tố khác không liên quan trực tiếp tới câu hỏi nghiên cứu. Một phơi nhiễm E được coi là bị gây nhiễu bởi một yếu tố khác C về ảnh hưởng của nó trên bệnh X nếu cả C và E có liên quan với bệnh và C và E có mối liên quan với nhau. Gây nhiễu được biểu hiện trong kết quả nghiên cứu khi yếu tố C xuất hiện không đồng đều trong nhóm phơi nhiễm và nhóm không phơi nhiễm; việc so sánh số hiện mặc hoặc mới mắc bệnh trong hai nhóm bị trộn lẫn với sự xuất hiện khác nhau của yếu tố C. Đây là loại sai lệch duy nhất thường có thể hiệu chỉnh được (nếu trong nghiên cứu đã có thực hiện những đo lường thích hợp) bằng các hiệu chỉnh thống kê.

Một điều quan trọng khi xử lý gây nhiễu là cả hai yếu tố đều là yếu tố nguy cơ tiềm tàng của bệnh; yếu tố nào là nguyên nhân và yếu tố nào là gây nhiễu tùy thuộc vào mục tiêu nghiên cứu. Ví dụ, khi nghiên cứu ảnh hưởng của việc phơi nhiễm với bụi amiăng (làm việc trong các mỏ amiăng) với ung thư phổi, hút thuốc lá là một yếu tố gây nhiễu. Ta biết rằng hút thuốc lá có mối liên quan mạnh với ung thư phổi và các thợ mỏ có xu hướng hút thuốc lá nhiều hơn so với các ngành nghề khác. Mặt khác, nếu câu hỏi tập trung vào sự kết hợp giữa hút thuốc lá và ung thư phổi, việc phơi nhiễm với bụi amiăng có thể là một yếu tố gây nhiễu.

Gây nhiễu là một dạng sai lệch và do đó ảnh hưởng tính giá trị của nghiên cứu; ước lượng các hệ số nguy cơ có thể cao hơn (hoặc thấp hơn) một cách hệ thống so với nguy cơ thực. Hiệu chỉnh cho yếu tố gây nhiễu sẽ cải thiện tính giá trị nhưng sẽ giảm sự chính xác của ước lượng. Do thường là có thể hiệu chỉnh gây nhiễu qua thống kê nếu thông tin về các biến số gây nhiễu tiềm tàng được thu thập, xu hướng thường là sẽ hiệu chỉnh cho toàn bộ các yếu tố gây nhiễu. Điều này là phản tác dụng: sẽ mất về năng lực thống kê (độ chính xác) và có thể không thu được nhiều về mặt tính giá trị nếu yếu tố được hiệu chỉnh không phải là yếu tố gây nhiễu. Do vậy trước khi hiệu chỉnh cho các yếu tố gây nhiễu, cần xác nhận cả hai điều kiện của gây nhiễu. Chi tiết về việc gây nhiễu có thể đọc thêm trong Kleinbaum, Kupper and Morganstern.

Do đó, khi thiết kế một dự án nghiên cứu, cần xem xét cẩn thận xem yếu tố nguy cơ quan tâm và các yếu tố gây nhiễu tiềm tàng là gì (các yếu tố nguy cơ đã biết không quan tâm trong nghiên cứu hiện tại và có thể có mối liên quan với yếu tố nguy cơ giả định). Do là một loại sai lệch, cách tốt nhất để phòng tránh vấn đề nếu có thể và thu thập các thông tin có liên quan nếu không thể tránh được.

Giả sử ta muốn nghiên cứu một mối liên quan nhân quả giả định giữa sử dụng chất uống có cồn và nhồi máu cơ tim. Hút thuốc lá đã được biết là nguyên nhân bệnh; tiêu thụ chất uống có cồn và hút thuốc lá đã được biết là có tương quan. Giả sử rằng tiêu thụ chất uống có cồn thực sự là nguyên nhân gây nhồi máu cơ tim. Tuy vậy do tác dụng của mối liên quan với hút thuốc lá, sử dụng chất uống có cồn sẽ được thấy là có liên quan và dường như gia tăng nguy cơ mắc bệnh. Thậm chí có thể sẽ tìm thấy mối liên quan liều-đáp ứng giữa sử dụng chất uống có cồn và nhồi máu cơ tim do người uống nhiều cũng thường là người hút thuốc lá nhiều. Để thấy rõ được ảnh hưởng của hút thuốc lá và tiêu thụ chất uống có cồn, có thể phân tầng theo đối tượng (cả nhóm bệnh và chứng) theo nhóm hút và không hút thuốc lá, và tìm mối liên quan giữa sử dụng chất uống có cồn và hút thuốc lá trong mỗi nhóm. Bảng [tab:nmct] minh họa ảnh hưởng của gây nhiễu trong trường hợp này.

**Không phân tầng**

Mối liên quan giữa sử dụng chất uống có cồn và nhồi máu cơ tim (NMCT)

| Sử dụng chất uống có cồn | NMCT | Chứng |
| :-- | :-: | :-: |
| Có | 71 | 52 |
| Không | 29 | 48 |
| Tổng | 100 | 100 |

OR = 2.26, _χ_<sup>2</sup> = 7.62, P = 0.006 (2 bên) **Phân tầng theo hút thuốc lá**

Mối liên quan giữa sử dụng chất uống có cồn và nhồi máu cơ tim (NMCT)

| Sử dụng chất uống có cồn |  |  |  |  |
| --: | --: | --: | --: | --: |
|  | NMCT | Chứng | NMCT | Chứng |
| Có | 8 | 16 | 63 | 36 |
| Không | 22 | 44 | 7 | 4 |
| Tổng | 30 | 60 | 70 | 40 |
| OR |  |  |  |  |

[tab:nmct]

Sự gia tăng nguy cơ có ý nghĩa thống kê (OR = 2.26, _P_ &lt; 0.01) trong phân tích mà lờ đi tình trạng hút thuốc lá là đáng nghi ngờ. Tron những người không hút thuốc lá, ước lượng OR của mối liên quan giữa nhồi máu cơ tim và sử dụng chất uống có cồn là 1.0, với ước lượng tương tự trong nhóm hút thuốc lá. Ảnh hưởng trong bảng [tab:nmct] không phân tầng do đó được gọi là do bị gây nhiễu bởi tình trạng hút thuốc lá.

OR theo nhóm trong bảng [tab:nmct] có thể được coi là ảnh hưởng của chất uống có cồn với nguy cơ nhồi máu cơ tim được “hiệu chỉnh cho hút thuốc lá”. Về khái niệm ảnh hưởng của hút thuốc lá đã được giữ cố định dù không theo nghĩa như trong nghiên cứu thực nghiệm. Nếu hai OR (có và không hút thuốc lá) không như nhau, ước lượng tổng hợp ảnh hưởng của sử dụng chất uống có cồn với nhồi máu cơ tim sẽ không dễ dàng. Các phương pháp thống kê để hiệu chỉnh kết hợp việc sử dụng cách chuẩn hóa (dùng một dân số giả thuyết làm chuẩn để cả nhóm phơi nhiễm và không phơi nhiễm có phân bố về yếu tố gây nhiễu là giống nhau). Một phương pháp chuẩn hóa phổ biến như vậy là OR hiệu chỉnh Mantel- Haenzel (xem chi tiết trong Kleinbaum, Kupper and Moganstern).