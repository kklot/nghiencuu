---
title: Các nghiên cứu phân tích
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

Trái ngược với các nghiên cứu mô tả, các nghiên cứu phân tích liên quan đến việc kiểm định giả thuyết ngoài việc mô tả dân số. Nghiên cứu sẽ cần hình thành các giả thuyết nghiên cứu và trên cơ sở các quan sát trong nghiên cứu ta cần rút ra các kết luận về tính giá trị của những giả thuyết này. Việc suy diễn do đó sẽ là một quy trình hai bước: ước lượng các tham số của các phân phối xác suất có liên quan; kiểm định các giả thuyết (còn gọi là kiểm định ý nghĩa) liên quan đến các tham số này.

### Kiểm định thống kê các giả thuyết {#ki-m-nh-th-ng-k-c-c-gi-thuy-t}

Một kiểm định giả thuyết gồm nhiều bước:

Bước 0\. Xác định _giả thuyết không_

Đây là một cách phát biểu lại giả thuyết nghiên cứu dưới dạng “bằng không”, cụ thể là là không có ảnh hưởng của điều trị, không có sự khác biệt trong tỷ suất sống, không có sự khác biệt về tỷ lệ hiện mắc, nguy cơ tương đối bằng 1, v.v. Giả thuyết không thường được trình bày với các mục tiêu nghiên cứu. Các giả thuyết không cần phải “kiểm định được”, cụ thể là có thể xác định được tham số nào cần ước lượng và việc ước lượng tham số, sai số chuẩn và phân phối chọn mẫu là khả thi với thiết kế nghiên cứu đang thực hiện.

Bước 1\. Xác định các mức _α_, _β_ chấp nhận được của các sai lầm trong suy diễn

Do sự suy diễn là dựa trên một mẫu từ dân số, một người không thể hoàn toàn chắc chắn là giả thuyết có đúng hay không trong dân số. Quyết định đưa ra sẽ chỉ có hai giá trị: chấp nhận giả thuyết không (_H_<sub>0</sub>) hay bác bỏ _H_<sub>0</sub>. Hai loại sai lầm trong suy diễn có thể xảy ra. Sai lầm loại I (_α_) là xác suất bác bỏ sai giả thuyết không, và sai lầm loại II (_β_) là xác suất chấp nhận sai giả thuyết không. Các sai lầm này được tóm tắt trong bảng sau:

Hai loại sai lầm trong suy diễn thống kê

| Quyết định (dựa trên kết quả mẫu) | _H_<sub>0</sub> đúng | _H_<sub>0</sub> sai |
| --- | --- | --- |
| Chấp nhận _H_<sub>0</sub> | Không sai | Sai lầm loại II (_b__e__t__a_) |
| Bác bỏ _H_<sub>0</sub> | Sai lầm loại I (_a__l__p__h__a_) | Không sai |

[tab:hailoaisailam]

Lưu ý rằng mục tiêu của nghiên cứu là giảm thiểu cả _α_ và _β_; tuy nhiên các số đo này đi ngược chiều nhau. Nếu ta giảm một sai lầm thì sai lầm kia có xu hướng gia tăng. Nhà nghiên cứu thường thiết kế nghiên cứu để đạt được một mức độ _α_ mong muốn và giảm thiểu _β_ cho trường hợp đó. Do đó, kiểm định thống kê các giả thuyết thường được thực hiện với một lựa chọn cho _α_ và kiểm định thống kê tốt nhất có thể mà sẽ giảm thiểu được _β_. Sự lựa chọn _α_ và _β_ được thực hiện sau khi xác định hậu quả của mỗi loại sai lầm này và được giữ cố định vào lúc thiết kế.

Bước 2\. Xác định kiểm định thống kê tốt nhất cho giả thuyết không

Việc này tùy thuộc vào thiết kế, dạng biến số và dạng phân phối xác suất của biến số. Ví dụ, giả sử giả thuyết không là tỷ suất hiện mắc của một bệnh trong hai nhóm dân số là như nhau và một mẫu ngẫu nhiên đơn được chọn độc lập từ hai nhóm dân số (thiết kế). Biến số ở đây là bệnh, là một biến số nhị giá (rời rạc) và cỡ mẫu là cố định. Do đó, phân phối nhị thức là phân phối xác suất được xem xét và tỷ suất hiện mắc là tham số của phân phối được ước lượng qua tỷ suất hiện mắc mẫu. Tham số này xấp xỉ phân phối bình thường (phân phối chọn mẫu). Do đó, kiểm định _z_ hoặc chi bình phương (_χ_<sup>2</sup>) là thích hợp nhất.

Bước 3\. Thực hiện kiểm định thống kê

Bước này liên quan đến việc tính toán số thống kê phù hợp (v.d. _z_ hay _χ_<sup>2</sup>) và so sánh các giá trị tính được với phân phối lý thuyết. Nếu giá trị quan sát được nằm ngoài giới hạn xác suất phân phối chọn mẫu được xác định bởi &lt;_α_, giả thuyết không bị bác bỏ.

Bước 4\. Tính năng lực của kiểm định

Nếu không bác bỏ giả thuyết không, cụ thể là giá trị tính được của số thống kê nằm trong khoảng giới hạn xác định bởi _α_, thì cần tính năng lực thống kê của kiểm định (1 − _β_) cho mức lệch nhỏ nhất chấp nhận được khỏi giả thuyết không Nếu năng lực là quá thấp, có thể khuyến nghị thực hiện lại nghiên cứu với cỡ mẫu lớn hơn. Nếu năng lực là chấp nhận được thì chấp nhận giả thuyết không.

Đôi khi, thay vì quyết định “chấp nhận” hay “bác bỏ” giả thuyết không _H_<sub>0</sub>, số thống kê được so sánh với phân phối chọn mẫu, và tính giá trị của _α_ tại điểm mà kiểm định bác bỏ _H_<sub>0</sub>. Đây được gọi là _giá trị P_ của kiểm định.

Trong ví dụ trên, nếu tính giá trị tính được của _z_ nhỏ hơn −1.96, hoặc lớn hơn 1.96, hay tương tự nếu giá trị _χ_<sup>2</sup> là lớn hơn 3.84, giả thuyết không bị bác bỏ với _α_ = 0.05.

Cần lưu ý rằng bác bỏ giả thuyết không không nhất thiết có nghĩa là ảnh hưởng hoặc sự khác biệt (lệch khỏi giả thuyết không) là có ý nghĩa “lâm sàng”. Sự khác biệt có thể là không quan trọng về mặt hữu dụng thực tế nhưng có ý nghĩa thống kê nếu cỡ mẫu là lớn. Ví dụ một tỷ số số chênh bằng 1.1 có thể có ý nghĩa thống kê ở mức ý nghĩa thống kê 5% nếu cỡ mẫu là rất lớn (v.d. 100 000), nhưng không sẽ không phải lo quá nhiều về sự gia tăng nguy cơ một lượng nhỏ như vậy. (Dĩ nhiên, tùy vào một bệnh cụ thể và sự khác biệt nhỏ nhất mà có tác động đáng kể thường được gọi là _sự khác biệt chấp nhận được nhỏ nhất_ và được dùng trong tính toán cỡ mẫu khi thiết kế nghiên cứu; xem Chương 5)

Khi ta bác bỏ giả thuyết không, thường ta chấp nhận _giả thuyết thay thế_ _H_<sub>1</sub>, trong hầu hết các trường hợp là điều đối ngược của _H_<sub>0</sub>. Ví dụ nếu _H_<sub>0</sub>= trung bình của hai dân số là bằng nhau, thì _H_<sub>1</sub>= trung bình hai dân số là không bằng nhau. Dạng giả thuyết thay thế này được gọi là một _giả thuyết hai bên_. Khi trung bình của một dân số là quá lớn hoặc quá nhỏ so với dân số khác, ta bác bỏ giả thuyết không. Có thể có trường hợp mà ta chỉ quan tâm phát hiện xem sự khác biệt nằm về một bên của giả thuyết (v.d. liều thuốc có cải thiện tỷ suất sống). Trong trường hợp này, kiểm định có thể _một bên_ và _H_<sub>0</sub> bị bác bỏ khi sự khác biệt là quá lớn và cho thấy lợi ích của thuốc, nhưng sẽ không bác bỏ nếu sự khác biệt là lớn và cho thấy thuốc là có hại. Đương nhiên do ta chỉ bác bỏ _H_<sub>0</sub> một nửa số lần nên sai lầm loại I sẽ giảm; tương tự với cùng mức sai lầm loại I, _H_<sub>0</sub> bị bác bỏ thường xuyên hơn, gia tăng năng lực của kiểm định. Cần quyết định trước sẽ sử dụng kiểm định một bên hay hai bên (trước khi thu thập dữ kiện), và cần dựa trên cơ sở khoa học vững chắc để việc so sánh không bị sai lệch.

### Một số kiểm định thống kê thông dụng {#m-t-s-ki-m-nh-th-ng-k-th-ng-d-ng}

So sánh hai tỷ lệ (kiểm định _z_, _χ_<sup>2</sup>)

Một kiểm định ý nghĩa phổ biến trong các nghiên cứu dịch tễ học là so sánh hai tỷ lệ. Ví dụ như so sánh tỷ suất mới mắc (trong các nghiên cứu đoàn hệ) và so sánh tỷ suất hiện mắc (trong nghiên cứu bệnh-chứng hoặc cắt ngang). Việc so sánh các tỷ lệ liên quan đến việc kiểm định giả thuyết không có dạng _H_<sub>0</sub> : _π_<sub>1</sub> = _π_<sub>2</sub> với _π_<sub>1</sub> và _π_<sub>2</sub> là các xác suất của một sự kiện trong hai nhóm dân số độc lập. Thiết kế phổ biến dùng một mẫu ngẫu nhiên đơn các đối tượng chọn độc lập từ hai dân số, hoặc dùng dạng bắt cặp (v.d. các quan sát theo cặp như trong nghiên cứu bệnh-chứng bắt cặp khớp theo tuổi). Sự kiện hay đặc tính như số mới mắc hoặc hiện mắc của một bệnh, phơi nhiễm với một yếu tố nguy cơ, nằm trong một chủng tộc nhất định, v.v. có thể là nhị giá hoặc được chuyển thành nhị giá bằng cách gom nhóm tất cả các sự kiện không quan tâm vào một nhóm (v.d. trong một nước nhiều chủng tộc như Canada, mối quan tâm có thể là so sánh nhóm da trắng với tất cả các nhóm khác). Phân phối xác suất được giả định là nhị thức.

Kiểm định thống kê được dựa trên tỷ lệ quan sát được, _p_<sub>1</sub> và _p_<sub>2</sub> trong hai mẫu. Nếu _H_<sub>0</sub> là đúng, ta sẽ mong đợi (_p_<sub>1</sub> − _p_<sub>2</sub>) là bằng không. Phân phối chọn mẫu của (_p_<sub>1</sub> − _p_<sub>2</sub>) là xấp xỉ phân phối bình thường, với trung bình (_p_<sub>1</sub> − _p_<sub>2</sub>) và độ lệch chuẩn (sai số chuẩn của khác biệt) tính bằng công thức $$\sqrt{[\pi_1(1-\pi_1)/n_1] + [\pi_2(1-\pi_2)/n_2]}$$ Do đó số thống kê $$z = \dfrac{p_1 - p_2}{\sqrt{[p_1(1-p_1)/n_1] + [p_2(1-p_2)/n_2]}}$$ có phân phối bình thường với trung bình là 0 và độ lệch chuẩn bằng 1, nếu _H_<sub>0</sub> là đúng. Dưới giả thuyết không, _π_<sub>1</sub> = _π_<sub>2</sub> = _π_; do đó sai số chuẩn là: $$\sqrt{\pi_1 (1-\pi_1) (1/n + 1/n_2)}$$ và được ước lượng bởi $$\sqrt{p (1- p) (1/n_1 + 1/n_2)}$$ với _p_ = (_n_<sub>1</sub>_p_<sub>1</sub> + _n_<sub>2</sub>_p_<sub>2</sub>)/(_n_<sub>1</sub> + _n_<sub>2</sub>)

Tương tự, _χ_<sup>2</sup> = _z_<sup>2</sup> có phân phối chi bình phương với một độ tự do. Do đó kiểm định thống kê là tính _z_ hoặc _χ_<sup>2</sup> và so sánh với phân phối phù hợp. Ví dụ nếu _α_ = 0.05, điểm cắt cho _z_ là ± 1.96, điểm cắt của _χ_<sup>2</sup> là 3.84\. Lưu ý là _χ_<sup>2</sup> cũng có thể được tính đơn giản từ các _bảng hai chiều_ như minh họa dưới đây:

Bảng tần suất quan sát

|  |  | Dân số 1 | Dân số 2 | Tổng |
| :-- | :-- | :-: | :-: | :-: |
| Sự kiện | Có | _O_<sub>11</sub> | _O_<sub>21</sub> | _a_ |
|  | Không | _O_<sub>12</sub> = _n_<sub>1</sub> − _O_<sub>11</sub> | _O_<sub>22</sub> = _n_<sub>2</sub> − _O_<sub>21</sub> | _b_ |
|  | Tổng | _n_<sub>1</sub> | _n_<sub>2</sub> | _n_ = _n_<sub>1</sub> + _n_<sub>2</sub> = _a_ + _b_ |

Nếu _H_<sub>0</sub> là đúng, dựa trên cỡ mẫu ta có

Bảng tần suất mong đợi (vọng trị)

|  |  | Dân số 1 | Dân số 2 | Tổng |
| :-- | :-- | :-: | :-: | :-: |
| Sự kiện | Có | _E_<sub>11</sub> = _a_ × _n_<sub>1</sub>/_n_ | _E_<sub>21</sub> = _a_ × _n_<sub>2</sub>/_n_ | _a_ |
|  | Không | _E_<sub>12</sub> = _n_<sub>1</sub> − _E_<sub>11</sub> = _b_ × _n_<sub>1</sub>/_n_ | _E_<sub>22</sub> = _n_<sub>2</sub> − _E_<sub>21</sub> = _b_ × _n_<sub>2</sub>/_n_ | _b_ |
|  | Tổng | _n_<sub>1</sub> | _n_<sub>2</sub> | _n_ = _n_<sub>1</sub> + _n_<sub>2</sub> = _a_ + _b_ |

$$\chi^2 = \sum\dfrac{(O-E)^2}{E}$$

Với tổng là trên toàn bộ bốn ô của bảng 2 × 2, _O_= tần suất quan sát và _E_= tần suất mong đợi.

Trong một nghiên cứu đoàn hệ về sinh nhẹ cân, 250 phụ nữ gốc Hoa và 150 phụ nữ gốc Ấn được theo dõi suốt thai kỳ về nhiều yếu tố nguy cơ của sinh nhẹ cân (cân nặng lúc sinh ít hơn 2500 grams). Mười hai phụ nữ gốc Hoa và 18 phụ nữ gốc Ấn sinh con nhẹ cân hơn 2500 grams. Câu hỏi nghiên cứu là liệu số mắc sinh nhẹ cân trong phụ nữ Ấn có cao hơn phụ nữ gốc Hoa.

Biến số: sinh nhẹ cân (nhị giá: có/không).

Tham số của phân phối nhị thức = tỷ suất mới mắc.

Giả thuyết không: _π_<sub>_C_</sub> = _π_<sub>_I_</sub>: sai lầm loại I = 0.05.

Dữ kiện:

|  |  | Gốc Hoa | Gốc Ấn |
| --: | --: | --: | --: |
| Sinh nhẹ cân | Có | 12 | 18 |
|  | Không | 238 | 132 |

Ước lượng tỷ suất mới mắc

Gốc Hoa: _p_<sub>_C_</sub> = 12/250 = 4.8%

Gốc Ấn: _p_<sub>_I_</sub> = 18/150 = 12%.

Quy trình kiểm định

1.  Tính kiểm định _z_

    z &amp;= (4.8 - 12)/ &amp;= (-7.2/2.98) = -2.42

    điểm cắt cho _z_ = ± 1.96

    Do giá trị _z_ tính được là nhỏ hơn −1.96, ta bác bỏ giả thuyết không và kết luận là tỷ suất mới mắc là khác biệt trong hai dân số. [Sự khác biệt về tỷ suất mới mắc là có ý nghĩa thống kê (_P_ &lt; 0.05).]

2.  Tần suất mong đợi cho bốn ô của bảng phía trên là

    |  |  | Gốc Hoa | Gốc Ấn |
    | --: | --: | --: | --: |
    | Sinh nhẹ cân | Có | 18.75 | 11.25 |
    |  | Không | 231.25 | 138.75 |

    _χ_<sup>2</sup> = [(−6.75)<sup>2</sup>/18.75 + (6.75)<sup>2</sup>/11.25 + (6.75)<sup>2</sup>/231.25 + ( − 6.75)<sup>2</sup>/138.75)] = 7.01, là lớn hơn so với chi bình phương, với điểm cắt ở một độ tự do và mức ý nghĩa 5%. Do đó, ta bác bỏ giả thuyết không ở mức ý nghĩa 5% và kết luận là hai tỷ suất mới mắc là khác biệt.

#### So sánh mới mắc trong nghiên cứu đoàn hệ hoặc hiện mắc trong nghiên cứu bệnh-chứng {#so-s-nh-m-i-m-c-trong-nghi-n-c-u-o-n-h-ho-c-hi-n-m-c-trong-nghi-n-c-u-b-nh-ch-ng}

Một ví dụ cụ thể về so sánh số mới mắc là một nghiên cứu đoàn hệ. Trong trường hợp này, chỉ số so sánh có thể là nguy cơ tương đối thay vì khác biệt nguy cơ như trên. Giả thuyết không _I_<sub>1</sub> = _I_<sub>2</sub> có thể phát biểu lại thành giả thuyết không là _R__R_ = 1. Ta cần tìm phân phối chọn mẫu của tỷ số nguy cơ mẫu _r__r_ để kiểm định giả thuyết này. Do đây là một tỷ số, hàm số ln(_r__r_) được giả định là có phân phối bình thường với trung bình là 0\. Dựa trên đây, một kiểm định ý nghĩa với tính toán sai số chuẩn của ln(_r__r_), sử dụng số thống kê _z_ = ln(_r__r_)/_s_._e_.(ln(_r__r_)) như trên. Tuy vậy trong thực tế kiểm định ý nghĩa được thực hiện trên giả thuyết hai tỷ suất mới mắc bằng nhau, và kiểm định chi bình phương là phù hợp. Chi tiết hơn về vấn đề này có thể xem thêm Kleinbaum, Kupper and Morganstern.

#### So sánh hai tỷ lệ khi hai mẫu bắt cặp {#so-s-nh-hai-t-l-khi-hai-m-u-b-t-c-p}

Khi hai mẫu là bắt cặp, đặc biệt là trong bắt cặp 1:1, các quan sát ghi nhận được không độc lập thống kê. do đó, sai số chuẩn của khác biệt sẽ liên quan tới số hạng hiệp phương sai. Hơn nữa, sự khác biệt có thể không có phân phối bình thường và do đó kiểm định _z_ cho hai mẫu độc lập không còn chính xác. Có những kiểm định thống kê có thể đưa sự phụ thuộc của hai mẫu vào trong tính toán. Một trường hợp cụ thể đáng nhắc đến là kiểm định _chi bình phương McNemar_. Giả sử hai mẫu được bắt cặp 1:1 với _n_ cặp đối tượng (tổng cộng 2_n_ đối tượng). Kiểm định McNemar tách các _n_ cặp này thành các cặp tương xứng (cả hai đối tượng của cặp đều có hoặc đều không có xảy ra sự kiện) và cặp bất xứng (một đối tượng trong cặp có sự kiện và đối tượng kia không). Kí hiệu có sự kiện là + không sự kiện là −, bốn nhóm của đối tượng và tần suất tương ứng được tóm tắt như sau:

+/+_a_; +/−_b_; −/+_c_; −/−_d_

Hai nhóm tương xứng +/+ và −/− bị loại ra do không cung cấp thông tin gì cho giả thuyết không về xác suất bằng nhau của hai dân số. Nếu giả thuyết không là đúng, ta sẽ mong đợi các cặp bất xứng +/− và −/+ sẽ có tần suất bằng nhau, do đó giá trị mong đợi trong các nhóm này là (_b_ + _c_)/2.

Nếu giả thuyết không là đúng, giá trị chi bình phương dựa trên các tần suất quan sát (_b_, _c_) và hai tần suất mong đợi [(_b_ + _c_)/2, (_b_ + _c_)/2] có phân phối chi bình phương với một độ tự do.

Chi bình phương McNemar sẽ bằng _χ_<sup>2</sup> = (_r_ − _c_)<sup>2</sup>/(_r_ + _c_), và sẽ được so sánh với phân phối chi bình phương với một độ tự do khi kiểm định ý nghĩa của giả thuyết không. Nếu số cặp là nhỏ, một “hiệu chỉnh tính liên tục” thường được áp dụng với công thức _χ_<sup>2</sup> = (_r_ − _c_ − 1)<sup>2</sup>/(_r_ + _c_)

Trong một nghiên cứu bệnh-chứng về ung thư biểu mô mũi hầu (NPC), 200 ca NPC được bắt cặp với 200 ca chứng (các bệnh nhân nhập cùng bệnh viện với các bệnh lý khác, được bắt cặp theo tuổi, giới, chủng tộc của bệnh nhân). Một yếu tố nguy cơ được xem xét trong nghiên cứu này là vi rút Epstein-Barr (EBV). Bảng sau tóm tắt kết quả của 200 cặp đối tượng trong nghiên cứu theo yếu tố nguy cơ:

| Số cặp |  |  |
| --: | --: | --: |
|  | Ca bệnh | Ca chứng |
| 45 | + | + |
| 28 | - | + |
| 56 | + | - |
| 71 | - | - |

Giả thuyết không là không có mối liên quan giữa phơi nhiễm và bệnh, hay diễn giải ra là tần suất của hai cặp bất xứng là như nhau.

Loại các cặp “ràng buộc” ( + , + ), ( − , − ), các cặp bất xứng có tần suất tương ứng là 28 và 56\. Chi bình phương McNemar được tính là (28 − 56)<sup>2</sup>/(28 + 56)=10.6. Nếu ta chọn sai lầm loại I _α_ = 0.05, điểm cắt của _χ_<sup>2</sup> là 3.84 và ta bác bỏ giả thuyết không rằng không có mối liên quan giữa phơi nhiễm (EBV) và bệnh (NPC).

#### So sánh hai tỷ lệ khi cỡ mẫu là nhỏ {#so-s-nh-hai-t-l-khi-c-m-u-l-nh}

Tất cả những kiểm định phía trên dựa trên xấp xỉ phân phối bình thường của số thống kê, điều dựa trên điều kiện cỡ mẫu là lớn. Điều khó khăn là _n__p_ là lớn hơn 5 (tần suất mong đợi trong mỗi ô của bảng phân bố ngẫu nhiên là trên 5). Khi cỡ mẫu quá nhỏ không thỏa điều kiện này, việc xấp xỉ phân phối bình thường sẽ không đúng. Đôi khi hiệu chỉnh tính liên tục được áp dụng cho chi bình phương mặc dù việc này không được chấp nhận rộng rãi. Một kiểm định không sử dụng phân phối bình thường, là _kiểm định chính xác Fisher_ được sử dụng trong các tình huống này. Xem Glantz để biết thêm chi tiết.

#### So sánh hai trung bình (các mẫu độc lập) {#so-s-nh-hai-trung-b-nh-c-c-m-u-c-l-p}

Khi biến số quan tâm là định lượng, phân phối xác suất liên quan thích hợp là phân phối bình thường. Trong trường hợp này, giả thuyết không thường có dạng _H_<sub>0</sub> : _m_<sub>1</sub> = _m_<sub>2</sub>, với _m_<sub>1</sub> và _m_<sub>2</sub> lần lượt là các trung bình của biến số trong hai dân số.

Kiểm định thống kê thực hiện các bước giống như trong trường hợp kiểm định sự khác biệt về tỷ lệ, ngoại trừ là tham số quan tâm là sự khác biệt ở trung bình, $ \bar{x} $. Ước lượng tốt nhất của trung bình dân số _m_ là trung bình mẫu. Do đó để kiểm định giả thuyết không, ta tính sự khác biệt chuẩn hóa của các trung bình.

Trong trường hợp hai mẫu được thu thập độc lập (ví dụ trong các thử nghiệm lâm sàng khi các bệnh nhân được phân bố ngẫu nhiên vào hai nhóm hoặc trong một nghiên cứu bệnh-chứng không bắt cặp), giá trị này có phân phối bình thường với trung bình là 0 và độ lệch chuẩn là 1 nếu giả thuyết không là đúng. Ở đây ta đang giả định là biết được độ lệch chuẩn trong hai nhóm dân số _σ_<sub>1</sub>, _σ_<sub>2</sub>. Tuy nhiên trong thực tế ta hiếm khi biết những đại lượng này và cần phải được ước lượng qua độ lệch chuẩn mẫu tương ứng. Thông thường giả định được dùng là hai dân số có cùng độ lệch chuẩn và ước lượng gộp của độ lệch chuẩn chung _s_ được dùng trong tính toán $$s = \sqrt{\dfrac{(n_1 - 1)s_1^2 + (n_2 - 1)s_2^2}{n_1 + n_2 -2}}$$ Khi đó sự khác biệt chuẩn hóa là $$t = \dfrac{\bar{x}_1 - \bar{x}_2}{s\sqrt{1/n_1 + 1/n_2}}$$ có phân phối student’s _t_ với (_n_<sub>1</sub> + _n_<sub>2</sub> − 2) độ tự do nếu giả thuyết không là đúng. Do đó, kiểm định sẽ là so sánh giá trị tính được của _t_ với bảng giá trị cuar phân phối _t_ thích hợp để chọn _α_.

Từ một nghiên cứu về mới mắc sinh nhẹ cân (cân nặng lúc sinh nhỏ hơn hoặc bằng 2500 grams) trong nhiều nhóm chủng tộc ở Malaysia, trung bình cân nặng cùng với độ lệch chuẩn được trình bày tiếp dưới đây.

| Nhóm chủng tộc | Trung bình | Cỡ mẫu | Độ lệch chuẩn |
| :-- | :-: | :-: | :-: |
| Malay | 2816.71 | 458 | 597.52 |
| Hoa | 2692.05 | 156 | 577.95 |
| Ấn | 2914.26 | 135 | 538.52 |
| Khác | 2776.99 | 136 | 548.69 |
| Tổng | 2803.51 | 885 | 580.81 |

Ta muốn kiểm định giả thuyết không là trung bình cân nặng lúc sinh của trẻ Malay là giống như của trẻ gốc Ấn. Số thống kê được tính như sau, độ lệch chuẩn gộp là:

s &amp;= &amp;= 584.66 t &amp;= (2816.71-2914.26)/{584.66[(1/458)+(1/135)]} &amp;= -17.40

Giá trị này sẽ có phân phối _t_ với 591 độ tự do nếu giả thuyết không là đúng. Phân phối _t_ là xấp xỉ giống như phân phối bình thường khi cỡ mẫu là lớn (trên 50). Do đó, điểm cắt cho mức tin cậy 5% sẽ là ± 1.96, và do giá trị _t_ tính được nằm ngoài giới hạn này ta sẽ bác bỏ giả thuyết không và kết luận rằng hai nhóm có trung bình cân nặng lúc sinh là khác nhau.

[Lưu ý là so sánh nhiều hơn hai nhóm sẽ đòi hòi các kiểm định thống kê nâng cao hơn như phân tích phương sai (ANOVA) và kiểm định kiểm định _F_ mà sẽ không được đề cập trong tài liệu này. Xem thêm các sách thống kê như Glantz.]

#### So sánh hai trung bình (mẫu bắt cặp) {#so-s-nh-hai-trung-b-nh-m-u-b-t-c-p}

Như trong trường hợp kiểm định McNemar, khi hai mẫu không độc lập (thường thành cặp do bắt cặp), có thể tính được một kiểm định _t_ tương tự. Quy trình ày gồm việc tính sự khác biệt của biến số kết cuộc giữa hai đối tượng trong cặp và tính trung bình và sai số chuẩn của những khác biệt này. Tỷ số _t_ = (trung bình khác biệt / sai số chuẩn của khác biệt) sẽ có phân phối _t_ với (_n_ − 1) độ tự do với _n_ là số cặp khi giả thuyết không là đúng.