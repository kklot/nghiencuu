---
title: Đo lường sự kết hợp
layout: post
chapter: Mối liên quan và sự nhân quả
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


Khi số mới mắc (hoặc hiện mắc) của một bệnh lý (v.d. ung thư phổi) trong một nhóm có một đặc tính nhất định (v.d. hút thuốc lá) khác biệt với số mới mắc (hoặc hiện mắc) trong một nhóm không có đặc tính đó (v.d. người không hút thuốc lá), một sự kết hợp được suy ra là có thể là nhân quả hoặc không. Độ mạnh của sự kết hợp thường được đo lường bằng nguy cơ tương đối hoặc tỷ số số chênh (OR), ngoài nguy cơ quy trách và phần trăm nguy cơ quy trách dân số.

Một số đo sự kết hợp khác là sự _tương quan_ giữa hai biến số. Số đo này có thể diễn tả bằng hình trong đồ thị tương quan hoặc đồ thị phân tán (Hình [fig:scatter]), khi biến số phụ thuộc (v.d. tỷ suất tử vong hoặc mới mắc ung thư phổi) được vẽ trên trục tung (trục Y) và biến số độc lập hay đặc tính (v.d. số điếu thuốc là hút) trên trục hoành (trục X). Nếu một sự kết hợp tồn tại, thay đổi ở trục Y sẽ trùng với những thay đổi trên trục X. Mối liên quan này cũng có thể diễn tả qua _hệ số tương quan_ _r_, là một số đo mức độ biến thiên giữa biến số độc lập và biến số phụ thuộc đến mức nào. Hệ số tương quan biến thiên trong khoảng +1 và -1\. Bảng [tab:tuongquan] trình bày mức độ kết hợp tương ứng với các mức giá trị của _r_, và đương nhiên là phụ thuộc vào ý nghĩa của kiểm định thống kê.

Mức độ kết hợp tương ứng với mức giá trị của _r_

| _r_ | Mức dộ kết hợp |
| :-- | :-- |
| ± 1.0 | Hoàn toàn |
| ± 0.7 - ± 1.0 | Mạnh |
| ± 0.4 - ± 0.7 | Trung bình |
| ± 0.2 - ± 0.4 | Yếu |
| ± 0.01 - ± 0.2 | Không đáng kể |
| 0.0 | Không liên quan |

Các hệ số tương quan thường sử dụng bao gồm

*   hệ số tương quan Pearson,

*   hệ số tương quan theo sắp hạng Spearman, và

*   hệ số tương quan Kendall _τ_.

Các hệ số hồi quy cũng có thể sử dụng để đo lường sự kết hợp. Các số đo này đo lường trung bình thay đổi mong đợi ở biến số phụ thuộc cho mỗi đơn vị thay đổi của biến số độc lập. Khi có nhiều hơn một biến số độc lập có liên quan với biến số phụ thuộc, phân tích hồi quy đa biến sẽ cho biết bao nhiêu biến thiên quan sát được ở biến số phụ thuộc có thể được giải thích bởi một hoặc một kết hợp các biến số độc lập.