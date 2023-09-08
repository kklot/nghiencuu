---
title: Chọn hiệu chỉnh cho đo lường lập lại (Repeated Measures Corrections)
author:
  display_name: Kinh Nguyen
  login: nguyenkinh
  email: nguyenkinh@ytecongcong.com
  url: https://www.google.com/profiles/112009149785989721279
tag: nguyenkinh
date: 2011-09-20 11:03:43
layout: post
---

Có thể điểm qua một số ý kiến như sau: 

- Girden (1992) cho rằng khi số ước lượng Greenhouse-Geisser (estimate) >0.75 thì nên chuyển sang sử dụng hiệu chỉnh của Huynh-Feldt. Còn ngược lại, nếu epsilon < 0.75 thì phương pháp hiệu chỉnh thận trọng hơn là Greenhouse-Geisser nên được dùng. 
- Phương pháp chặt chẽ nhất là sử dụng giá trị của hiệu chỉnh "Lower bound". Hiệu chỉnh Greenhouse-Geisser cũng là một phương pháp tương đối khắt khe (dẫn đến có xu hướng ước lượng giá trị thấp giá trị epsilon khi epsilon gần 1 và do đó dẫn đến xu hướng hiệu chỉnh quá mức. Huynh-Feldt là phương pháp sử dụng khi epsilon >=0.75, phương pháp hiệu chỉnh Huynh-Feldt có xu hương ước lượng trội cầu tính, do đó các nhà thống kê khuyên nên sử dụng trung bình của 2 phương pháp Greenhouse-Geisser và Huynh-Feldt. 
- Một cách tiếp cận khác là bỏ qua giả định cầu tính bằng cách chuyển sang dùng ANOVA đa biến: MANOVA. Một số chương trình thống kê thường cho sẵn kết quả MANOVA khi chạy phân tích ANOVA đo lường lập lại. Cách tiếp cận này có thể còn tranh cãi, nhưng nói chung MANOVA có năng lực thống kê thấp hơn so với ANOVA đo ngfl lập lại và do đó nên tránh sử dụng. Tuy nhiên, khi cỡ mẫu đủ lớn (n > 10+ k) và epsilon nhỏ (< 0.7), MANOVA có thể có năng lực thống kê cao hơn và nên sử dụng cách tiếp cận này. Có nhiều yếu tố như sự tương quan giữa các mẫu có thể ảnh hưởng năng lực thống kê của MANOVA và ANOVA, nhưng nằm ngoài phạm vi của bài viết này. 

_*Cần lưu ý cách sắp xếp số liệu khi phân tích ANOVA với mỗi hàng là 1 đối tượng 1 lần đo._
