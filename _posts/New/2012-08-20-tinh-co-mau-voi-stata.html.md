--- layout: post status: publish published: true title: Tính cỡ mẫu với
stata author: display\_name: Admin login: admin email:
admin@ytecongcong.com url: '' author\_login: admin author\_email:
admin@ytecongcong.com wordpress\_id: 510 wordpress\_url:
http://www.ytecongcong.com/?p=510 date: '2012-08-20 07:37:39 +0200'
date\_gmt: '2012-08-20 00:37:39 +0200' categories: - Thống kê - Tin học
- Home tags: \[\] comments: \[\] ---

![stata](http://libraries.mit.edu/sites/news/files/2007/10/stata_logo_blue.jpg){width="580"
height="178"}

Cú pháp của lệnh stata được trình bày như sau:

` sampsi #1 #2 [, alpha(#) power(#) n1(#) n2(#) ratio(#) pre(#) post(#) sd1(#) sd2(#) method(post|change|ancova|all) r0(#) r1(#) r01(#) onesample onesided ]`

Như vậy lệnh

`sampsi #1 #2 `dùng để so sánh 2 tỉ lệ

`sampsi #1 #2, sd1(#) sd2(#) `dùng để so sánh 2 trung bình

`sampsi #1 #2, onesample` dùng để so sánh tỉ lệ \#1 của giả thuyết không
Ho với tỉ lệ \#2 của giả thuyết thay thế Ha

`sampsi #1 #2, sd1(#) sd2(#) onesample` dùng để so sánh trung bình \#1
của giả thuyết không Ho với trung bình \#2 của giả thuyết thay thế Ha

Ngoài ra, các tuỳ chọn sau cũng có thể được sử dụng với ý nghĩa như sau:

alpha(\#) cho biết mức ý nghĩa của kiểm định. Giá trị mặc định là
alpha(.05).

power(\#) là lực của mẫu. Giá trị mặc định là power(.90).

n1(\#) cho biết cỡ mẫu thứ nhất (hay cỡ mẫu duy nhất)) của mẫu và n2(\#)
cho biết cỡ mẫu thứ hai. Nếu có cung cấp cỡ mẫu n1 và n2 trong câu lệnh,
chương trình sẽ cho biết lực mẫu, nếu không chương trình sẽ tính cỡ mẫu

ratio(\#) là tỉ lệ của cỡ mẫu n1/n2. Giá trị mặc định là ratio(1).

pre(\#) cho biết giá trị thông số nền (pre có nghĩa là pre-randomization
: trước ngẫu nhiên) trong nghiên cứu đo lường lập lại. Giá trị mặc định
là pre(0).

post(\#) cho biết số lần đo lường lập lại (post có nghĩa là
post-randomization : sau ngẫu nhiên) trong nghiên cứu đo lường lập lại.
Giá trị mặc định là post(1).

sd1(\#) và sd2(\#) là độ lệch chuẩn dùng khi muốn so sánh trung bình.
Nếu không cung cấp độ lệch chuẩn chương trình hiểu chúng ta muốn so sánh
các tỉ lệ. Nếu chỉ cung cấp sd1 chương trình hiểu rằng sd2 bằng với sd1

method(post|change|ancova|all) cho biết phương pháp phân tích được dùng
trong đo lường lập lại. Phương pháp phân tích "change" và "ancova" chỉ
có thể được sử dụng nếu có kế hoặch đo lường thông số nền. Giá trị mặc
định là method(all), có nghĩa là sử dụng cả 3 phương pháp trên.

Onesample: có nghĩa là kiểm định một mẫu. Mặc định là kiểm định 2 mẫu

Onesided: có nghĩa là kiểm định một bên. Mặc định là kiểm định 2 bên.

Thí dụ:

1\. Để so sánh 2 tỉ lệ đáp ứng với điều trị đối với thuốc A và thuốc B
(giả định tỉ lệ đáp ứng với thuốc A là 60% và thuốc B là 80%) cần cỡ mẫu
119 cho mỗi nhóm

`sampsi 0.6 0.9`

2\. Để so sánh trọng lượng lúc sinh trung bình của 2 nhóm trẻ sơ sinh: 1
nhóm là con của các bà mẹ có ăn thức ăn bổ sung (được giả định có trung
bình là 3200 gram với độ lệch chuẩn là 300 gram) và nhóm bà mẹ không ăn
thức ăn bổ sung (được giả định có trung bình là 3100 gram với độ lệch
chuẩn là 300 gram)

`sampsi 3200 3100, sd1(300) sd2(300) - hoặc - sampsi 3200 3100, sd1(300)`

3\. Tại một huyện, tỉ lệ trẻ

`sampsi 0.3 0.26, onesample`

4\. Trong lượng trung bình của trẻ sơ sinh của địa phương X là 2900 gram
với độ lệch chuẩn là 250 gram. Một thử nghiệm cho bà mẹ ăn thức ăn bổ
sung và thử nghiệm này được xem là thành công nếu làm tăng trọng lượng
trung bình của trẻ sơ sinh lên 50 gram. Nghiên cứu này cần một cỡ mẫu là
169

`sampsi 2900 2950, sd1(200) onesample`

5\. Các thí dụ trên đều sử dụng nguy cơ sai lầm loại 1 (alpha) là 0,05 và
nguy cơ sai lầm loại 2 là 0,10. Nếu chúng ta chấp nhận nguy cơ sai lầm
loại 2 là 0,20 thì cỡ mẫu sẽ là 91 người cho mỗi nhóm.

*Nguồn: PGs.TS. Đỗ Văn Dũng*
