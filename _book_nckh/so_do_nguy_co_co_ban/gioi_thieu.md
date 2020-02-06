---
title: Một số ký hiệu xác suất
layout: post
chapter: Số đo Nguy cơ Cơ bản
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

Nguy cơ về bản chất là số đo xác suất. Hầu hết mọi khía cạnh của phân tích thống kê trong dữ kiện dịch tễ học có thể xem xét theo các khái niệm xác suất và kết luận hầu như luôn luôn đi kèm với việc tính toán xác suất của nhiều dạng sự kiện. Trong kiểm định giả thuyết, tính bất định trong kết luận nghiên cứu liên quan đến xác suất dữ kiện có phù hợp với giả thuyết. Trong nghiên cứu mô tả, tính bất định trong tham số ước lượng tham số được diễn tả qua khoảng tin cậy, dùng đo lường xác suất.

Xác suất là một đo lường tính bất định. Thường được diễn tả bằng một tần số tương đối: trong tất cả các sự kiện có thể xảy ra, khả năng sự kiện đang quan tâm sẽ xảy ra là bao nhiêu? Rõ ràng xác suất là để chỉ các sự kiện trong tương lai nhưng được ước lượng từ các kinh nghiệm trong quá khứ. Ví dụ trong một thử nghiệm lâm sàng, nếu 60% người dùng thuốc chữa bệnh thấy giảm triệu chứng, một người có thể ước lượng rằng xác suất giảm triệu chứng trong tương lai là 60% (cứ 100 bệnh nhân với bệnh lý sử dụng thuốc này, 60 người sẽ giảm triệu chứng). Cũng cần lưu ý là xác suất trong thực tế là một số đo trên một nhóm người, và khái niệm này khi áp dụng trên cá nhân sẽ rất khó để giải thích. Dù vậy ta đều hiểu ý nghĩa khi ta nói rằng cơ hội giảm triệu chứng là 60%.

Xác suất là một con số có giá trị từ 0 đến 1 (0% và 100%). Do đây là một tần suất tương đối, tử số là số sự kiện và mẫu số đại diện tất cả người có nguy cơ xảy ra sự kiện đó. Ví dụ, nếu _N_<sub>_D_</sub> người trong một dân số _N_ có bệnh, xác suất một người được chọn ngẫu nhiên từ dân số này có bệnh sẽ là _N_<sub>_D_</sub>/_N_.

Nếu trong cùng dân số này, _N_<sub>_S_</sub> ký hiệu cho số người phơi nhiễm với một yếu tố và _N_<sub>_S__D_</sub> ký hiệu số người có bệnh trong số những người có yếu tố đó, khi đó xác suất có điều kiện của bệnh với sự hiện diện của yếu tố cho trước là _N_<sub>_S__D_</sub>/_N_<sub>_S_</sub>. Xác suất có điều kiện được viết là _P_(_D_|_S_) và ta có thể thấy rằng:

$$P(D|S) = \dfrac{N_{SD}}{N_S} = \dfrac{(N_{SD}/N)}{(N_S/N)} = \dfrac{P(D \text{ và } S)}{P(S)}$$

Ba định luật xác suất cơ bản được sử dụng trong tính toán xác suất:

1.  Xác suất nằm trong khoảng 0 và 1;

2.  _P_(_A_ hoặc _B_)=_P_(_A_)+_P_(_B_)

    nếu A và B là loại trừ lẫn nhau

    =_P_(_A_)+_P_(_B_)−_P_(_A_ và _B_)

    nếu không loại trừ lẫn nhau;

3.  _P_(_A_ và _B_)=_P_(_A_)×_P_(_B_)

    nếu A và B là “độc lập”

    =_P_(_A_)×_P_(_B_|_A_)=_P_(_B_)×_P_(_A_|_B_) nếu không độc lập.

Các định luật xác suất trên được sử dụng nhiều lần để tính các xác suất của nhiều loại sự kiện trong các nghiên cứu dịch tễ học và để tính toán ước lượng nguy cơ thích hợp cũng như sai số chuẩn của ước lượng.

### Sử dụng xây dựng trong các công cụ chẩn đoán {#s-d-ng-x-y-d-ng-trong-c-c-c-ng-c-ch-n-o-n}

Tính chính xác của các công cụ chẩn đoán thường được đo lường qua việc công cụ chẩn đoán xác định người mắc bệnh (độ nhạy của một kiểm nghiệm) và xác định người không mắc bệnh chính xác đến mức nào (độ đặc hiệu của kiểm nghiệm). Từ những số đo này, có thể tính được giá trị tiên đoán của một kiểm nghiệm dương tính và âm tính.