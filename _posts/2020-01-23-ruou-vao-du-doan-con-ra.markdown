---
title: Rượu vào và dự đoán cồn ra
layout: post
categories: [NĐ 100,nồng độ cồn]
permalink: /nongdocon/
author:
  display_name: Kinh Nguyen
  login: nguyenkinh
  email: nguyenkinh@ytecongcong.com
  url: https://www.google.com/profiles/112009149785989721279
author_login: Kinh Nguyen
author_email: nguyenkinh@ytecongcong.com
post_gravatar: 886f27ba4b392d00e87a35990840ba13
---

<a href='https://play.google.com/store/apps/details?id=vkn.suckhoe.concon&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Tải nội dung trên Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/vi_badge_web_generic.png'/></a>

</br>

<embed src="https://knguyen.pythonanywhere.com/nongdocon/" style="width:100%; height:100%;min-height: 700px">

## Chi tiết cách tính

Một số từ viết tắt

- NĐC: nồng độ cồn
- TNGT: tai nạn giao thông
- NĐC TM: nồng độ cồn trong máu
- NĐC THT: nồng độ cồn trong hơi thở
- Tỷ số máu:mồm: tỷ số NĐC TM so với NĐC THT

### Tổng quát

Cồn trong máu và TNGT là bạn.

Ở Singapore, 18.7% nạn nhân TNGT xét nghiệm có NĐC (NĐC TM từ 13--292 mg/dl).[^2] Giới hạn NĐC THT và NĐC TM ở Singapore là 35 and 80 mg/dl trong khi các nước như Trung Quốc, Hồng Kông, Ấn Độ, Nhật Bản, và Thái Lan mức NĐC TM qui định thấp hơn (20-50 mg/dl). Nghiên cứu ở Nhật Bản đề xuất mức 0.03[^5].

Lưu ý số trên là NĐC TM, tỉ số NĐC TM:NĐC THT bình quân là 2300:1, tức là NĐC HT sẽ cần thấp hơn 2300 lần so với mức qui định NĐC TM.

Tuy nhiên không có mức NĐC tối thiểu đảm bảo an toàn cho uống và lái xe.

- Giữa người xỉn và người mới tỉnh rượu (NĐC TM = 0%), kiểm tra đánh giá hành vi lái xe và nhận thức cho kết qủa không có sự khác biệt; có thể có suy nhược sau khi tỉnh rượu và ảnh hưởng xấu đến kĩ năng lái xe, khả năng cảnh giác và nhận thức chiều sâu không gian[^10].
- Kĩ năng lái xe bị tác động ngay cả ở mức NĐC TM thấp[^6][^7].
- Khả năng bị chấn thương do TNGT tăng 2,2 lần trong nhóm có mức NĐC ở mức tạm chấp nhận được (24g) so với nhóm không uống rượu bia.[^9]

### (Một trong những cách) Ước lượng nồng độ cồn trong hơi thở

Tuỳ theo giới và cân nặng, ta có thể tính mức NĐC THT **tối đa** sau khi uống một lượng rượu nhất định với công thức Widmark.

$$\text{Số Widmark} = \frac{Lượng cồn (gam)}{Cân nặng (kg)}\times \frac{1}{\text{NĐC THT tối đa (μg/dl)}}$$s

Một số yếu tố ảnh hưởng đến giá nhân tố này[^1]:

- Số Widmark đa số được tính từ số liệu của người da trắng, khi đã ăn no, và do đó có thể ko phù phợp với Việt Nam và cách uống giao tiếp của người Việt. Nghiên cứu ở Hồng Kông cho thấy giá trị này ở người Hoa cao hơn người da trắng.[^8] 
- Các men phân huỷ cồn khác biệt tuỳ từng người và tuỳ chủng tộc như ADH, ALDH[^3][^4] cũng làm thay đổi giá trị đo được (Eng, 2007; Chen, 2009).
- Khác biệt khi kích cỡ gan/trọng lượng cơ thể khác nhau
- Khác biệt đáng kể giữa nam và nữ trong NĐC THT (một phần vì lí do ở trên)
- Bị ảnh hưởng bới quá trình hấp thụ thực tế (thức ăn, uống thuốc).

### Áp dụng trên thực tế cho người Việt

Hiện chưa thấy nghiên cứu chi tiết về số Widmark cho người Việt, nên tính toán dưới đây dựa trên nghiên cứu trên người Hoa ở Singapore[^1] (dù gì cũng giống người Việt hơn Tây). 

Tốc độ phân huỷ rượu được tính dựa trên mô hình hồi quy tuyến tính dựa trên dữ liệu đo cách nhau mỗi 30 phút sau khi uống chất có cồn. Thời gian từ khi uống đến khi NĐC THT đạt mức tối đa. là khoảng 1 tiếng rưỡi[^1].

Dựa trên đó phần mềm đưa ra dựa đoán thời gian đến khi NĐC THT về mức không. đồng thời cũng đưa ra biên độ dao động của ước tính như biểu đồ phía trên.


[^1]: Lie Michael George Limenta, Yee Jie Yin, Derrick Heng, Edmund Jon Deoon Lee, Breath Alcohol Elimination Rate and Widmark Factor Derived from Breath Alcohol Concentration in Chinese and Indians in Singapore, Alcohol and Alcoholism, Volume 47, Issue 3, May/June 2012, Pages 261–266, https://doi.org/10.1093/alcalc/ags002 
[^2]: Wong E,  Leong MK,  Anantharaman V, et al. Road traffic accident mortality in Singapore, J Emerg Med, 2002, vol. 22 (pg. 139 -46)
[^3]: Stephens EA,  Taylor JA,  Kaplan N, et al. Ethnic variation in the CYP2E1 gene: polymorphism analysis of 695 African-Americans, European-Americans and Taiwanese, Pharmacogenetics, 1994, vol. 4 (pg. 185 -92 )
[^4]: Chen YC ,  Peng GS ,  Wang MF , et al. Polymorphism of ethanol-metabolism genes and alcoholism: correlation of allelic variations with the pharmacokinetic and pharmacodynamic consequences , Chem Biol Interact , 2009 , vol. 178 (pg. 2 -7)
[^5]: Desapriya E ,  Shimizu S ,  Pike I , et al. Impact of lowering the legal blood alcohol concentration limit to 0.03 on male, female and teenage drivers involved alcohol-related crashes in Japan , Int J Inj Contr Saf Promot , 2007 , vol. 14 (pg. 181 -7 )
[^6]: Koelega HS . Alcohol and vigilance performance: a review, Psychopharmacology (Berl) , 1995 , vol. 118 (pg. 233 -49 )
[^7]: Moskowitz H ,  Fiorentino D ,  Smiley A , et al. , Driver Characteristics and Impairment at Various BACs , 2000 Washington, DC NHTSA
[^8]: Tam TW ,  Yang CT ,  Fung WK , et al. Widmark factors for local Chinese in Hong Kong: a statistical determination on the effects of various physiological factors , Forensic Sci Int , 2005 , vol. 151 (pg. 23 -9 )
[^9]: Taylor B ,  Irving HM ,  Kanteres F , et al. The more you drink, the harder you fall: a systematic review and meta-analysis of how acute alcohol consumption and injury or collision risk increase together , Drug Alcohol Depend , 2010 , vol. 110 (pg. 108 -16 )
[^10]: Liu YC ,  Ho CH . Effects of different blood alcohol concentrations and post-alcohol impairment on driving behavior and task performance , Traffic Inj Prev , 2010 , vol. 11 (pg. 334 -41 )
