---
title: Sai sót trong suy diễn
layout: post
chapter: Chiến lược và Thiết kế nghiên cứu
chapter_id: 1
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

Hai nguồn sai sót phổ biến cần được kiểm soát xuất phát từ các vấn đề liên quan đến “tính tin cậy” và “tính giá trị”. Suy diễn cần có độ tin cậy cao (nếu quan sát được lập lại dưới cùng điều kiện, suy diễn cũng phải giống nhau) và giá trị cao (suy diễn phải phản ánh bản chất thật của mối liên quan). Tính tin cậy và giá trị của suy diễn phụ thuộc vào tính tin cậy và giá trị của phương pháp đo lường (liệu ta có đo đúng thứ cần đo, và đo có chính xác?) cũng như tính giá trị và tin cậy của mẫu được chọn (liệu ta có chọn được mẫu thực sự đại diện cho dân số ta đang muốn suy diễn?). Tính tin cậy của mẫu đạt được bằng cách chọn mẫu lớn và tính giá trị đạt được bằng cách đảm bảo việc chọn mẫu là không sai lệch. Nói theo cách thống kê, tính tin cậy được đo lường bằng “sai số ngẫu nhiên” và tính giá trị đo lường bằng “sai lệch”.

### Tính tin cậy {#t-nh-tin-c-y}

##### Tính tin cậy trong đo lường {#t-nh-tin-c-y-trong-o-l-ng}

Nếu đo lập lại các đặc tính của cùng một đối tượng trong cùng điều kiện cho kết quả giống nhau, ta nói rằng đo lường là tin cậy. Nếu các quan sát độc lập, được chọn lặp lại và xác định được phân phối xác suất thì độ lệch chuẩn của các quan sát này sẽ cho đo lường về tính tin cậy. Nếu đo lường có độ tin cậy cao, độ lệch chuẩn sẽ nhỏ. Một cách để gia tăng tính tin cậy là tính độ dao động của số trung bình của nhiều quan sát (sự dao động của số trung bình này có độ lệch chuẩn nhỏ hơn - được gọi là sai số chuẩn của trung bình).

##### Tính tin cậy của nghiên cứu {#t-nh-tin-c-y-c-a-nghi-n-c-u}

Một kết quả nghiên cứu được gọi là tin cậy nếu lập lại nghiên cứu trong cùng điều kiện cho ra kết quả tương tự. Sự biến thiên tự nhiên trong các quan sát các cá nhân trong dân số được biết là sai số ngẫu nhiên. Ví dụ khi đo huyết áp tâm thu (HATT) của một cá nhân, quan sát đã cho thấy rằng đo lường trong một nhóm người lớn sẽ tuân theo phân phối “bình thường”, và độ lệch chuẩn của HATT là đo lường sai số ngẫu nhiên trong đo HATT. Điều rõ ràng là nếu độ lệch chuẩn là nhỏ, lặp lại nghiên cứu trong dân số này sẽ chắc chắn sẽ cho ra kết quả tương tự. Nếu độ lệch chuẩn là lớn, những mẫu khác nhau trong cùng một dân số sẽ có xu hướng cho kết quả khác biệt rất nhiều. Do thường ta sẽ gặp các đo lường của mẫu với độ lệch chuẩn tỷ lệ nghịch với căn bậc 2 của cỡ mẫu, gia tăng cỡ mẫu sẽ tăng tính tin cậy của các đo lường này. (Xem thêm về vấn đề này trong Chương 5.)

### Tính giá trị {#t-nh-gi-tr}

Một đo lường được gọi là giá trị nếu nó đo đúng những gì cần đo. Nếu một đo lường không có giá trị, ta gọi là đo lường bị “sai lệch”. Sai lệch là một sai số hệ thống (trái với sai số ngẫu nhiên) mà làm lệch quan sát về một phía của sự thật. Do vậy, nếu ta dùng một chiếc cân không được căn chỉnh về không, trọng lượng ta đo được sẽ bị sai lệch. Tương tự, nếu một mẫu bị sai lệch (v.d. nhiều nam trong mẫu hơn tỷ lệ nam trong dân số, hoặc chọn ca bệnh từ một bệnh viện và ca chứng từ cộng đồng chung trong nghiên cứu bệnh-chứng), kết quả sẽ dễ bị sai lệch. Do thường việc hiệu chỉnh sai lệch là rất khó một khi đã thu thập dữ kiện, việc tránh sai lệch luôn cần được thực hiện khi thiết kế nghiên cứu. (Chi tiết về sai lệch và cách tránh xem Chương 6.)