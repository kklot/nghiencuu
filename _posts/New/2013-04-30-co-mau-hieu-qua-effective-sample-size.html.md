--- layout: post status: publish published: true title: Cỡ mẫu hiệu quả
- Effective Sample Size author: display\_name: Kinh Nguyen login: Kinh
Nguyen email: nguyenkinh@ytecongcong.com url:
https://www.google.com/profiles/112009149785989721279 author\_login:
Kinh Nguyen author\_email: nguyenkinh@ytecongcong.com author\_url:
https://www.google.com/profiles/112009149785989721279 wordpress\_id: 984
wordpress\_url: http://www.ytecongcong.com/?p=984 date: '2013-04-30
17:32:11 +0200' date\_gmt: '2013-04-30 10:32:11 +0200' categories: - Tin
mới - Dịch tễ - Thống kê - Nghiên cứu - Home tags: - sample size - cỡ
mẫu - hiệu quả - chọn mẫu cụm - chọn mẫu phân tầng comments: \[\] ---

[![](http://www.ytecongcong.com/wp-content/uploads/2013/04/Power-Wordle.png "Power Wordle"){.alignnone
.wp-image-992 width="580"
height="292"}](http://www.ytecongcong.com/wp-content/uploads/2013/04/Power-Wordle.png)

Khi cách chọn mẫu phức tạp, kết quả mẫu có được sẽ không độc lập và có
phân phối không đồng nhất. Chẳng hạn chọn phân tầng, chọn mẫu cụm hoặc
dùng trọng số khác nhau để tăng hiệu quả trong lấy mẫu nhưng làm ảnh
hưởng đến ước lượng phương sai của mẫu nghiên cứu.

> Cỡ mẫu hiệu quả đo lường ảnh hưởng của cách chọn mẫu lên các ước
> lượng, được định nghĩa là cỡ mẫu nếu chọn mẫu theo phương pháp chọn
> mẫu ngẫu nhiên đơn có hoàn lại mà cho phương sai của ước lượng bằng
> với phương sai có được từ cách chọn mẫu sử dụng trong nghiên cứu.

Để đơn giản, minh họa với dữ kiện nhị giá có phân phối Binomial, lượng
thông tin cung cấp từ mỗi cụm là

\$\$ var \\left(\\dfrac{\\sum\_{j=1}\^{n\_i} y\_{ij}}{n\_i} \\right)
\$\$

\$\$ = \\dfrac{1}{n\_i\^2} \\left\[\\sum\\limits\_{j=1}\^{n\_i}
var(y\_{ij} +2 \\sum\\limits\_{j \$\$ = \\dfrac{1}{n\_i\^2} \\left\[n\_i
p\_i (1-p\_i) + n\_i (1-n\_i) \\rho p\_i (1-p\_i) \\right\] \$\$\
\$\$ = \\dfrac{1}{n\_i} p\_i (1-p\_i) \[1+ \\rho (n\_i-1)\]\$\$

Trong trường hợp nghiên cứu tiến hành với các đối tượng nghiên cứu là
độc lập trong mỗi cụm, công thức trên bằng

\$\$ \\dfrac{1}{\\tilde{n}\_i} p\_i(1-p\_i) \\Rightarrow \\tilde{n}\_i =
\\dfrac{n\_i}{1+\\rho(n\_i-1)} \$\$

Do đó, với toàn bộ cỡ mẫu, cỡ mẫu hiệu quả

\$\$ N\_{\\text{Eff}} = \\sum\\limits\_{i=1}\^{N} \\tilde{n}\_i =
\\sum\\limits\_{i=1}\^{N} \\dfrac{n\_i}{1+\\rho(n\_i-1)} \$\$

Với dữ kiện định lượng liên tục và phân phối bình thường cũng đưa đến
cùng công thức tính cỡ mẫu hiệu quả tương tự. Hai trường hợp đặc biệt có
thể xảy ra

-   Khi hoàn toàn không có tương quan trong mỗi cụm \$\$ \\rho=0
    \\Rightarrow N\_{\\text{Eff}} = \\sum n\_i \$\$ = Cỡ mẫu nghiên cứu
-   Khi hoàn toàn có tương quan hoàn toàn trong mỗi cụm \$\$ \\rho=1
    \\Rightarrow N\_{\\text{Eff}} = \\sum n\_i/n\_i \$\$ = Số cụm

Ví dụ trong nghiên cứu với \$\$ ICC = 0.45 \\Rightarrow N\_{\\text{Eff}}
\\approx 209 \$\$, nghĩa là kết quả trong nghiên cứu này (có tính cụm)
tương đương với kết quả thu được trên 209 đối tượng độc lập với nhau.

**Giới hạn thông tin:**

Trong công thức cỡ mẫu hiệu quả, nếu cỡ mẫu càng lớn

\$\$ \\lim\\limits\_{n\_i \\rightarrow + \\infty}
\\dfrac{n\_i}{1+\\rho(n\_i-1)} = \\dfrac{1}{\\rho} \$\$

do đó lượng thông tin đóng góp từ mỗi cụm là có hạn khi có tương quan
trong cụm, trừ trường hợp các đối tượng trong cụm là độc lập. Ví dụ với
ICC=0.45, giới hạn tính được tương ứng là 2.2, nghĩa là một cụm không
bao giờ cung cấp được lượng thông tin (ví dụ trọng lượng trung bình)
nhiều hơn lượng thông tin thu được từ 2.2 đối tượng nghiên cứu trong một
cụm.
