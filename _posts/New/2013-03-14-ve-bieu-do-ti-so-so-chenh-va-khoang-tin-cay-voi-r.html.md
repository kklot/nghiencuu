--- layout: topic status: publish published: true title: Vẽ biểu đồ tỉ
số số chênh và khoảng tin cậy với R author: display\_name: Admin login:
admin email: admin@ytecongcong.com url: '' author\_login: admin
author\_email: admin@ytecongcong.com wordpress\_id: 919 wordpress\_url:
http://www.ytecongcong.com/?post\_type=topic&p=919 date: '2013-03-14
20:05:05 +0100' date\_gmt: '2013-03-14 13:05:05 +0100' categories: \[\]
tags: \[\] comments: \[\] ---

Vẽ biểu đồ ỎR và KTC 95% từ mô hình hồi quy logistic đơn biến

[Dữ kiện SXH Dengue](http://sdrv.ms/Yd2E23) (Nguồn: Ngọc Đăng - Tsukuba)

Code mẫu:\
\[code title="OR và CI từ logistic regression"\]\
\# Chỉ chạy trên dữ kiện này, sửa lại từng phần phù hợp với mỗi dữ kiện\
\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\
\# xóa bộ nhớ các đối tượng khác trong workspace\
remove(list=ls())\
load("/media/Data/Downloads/dengue.rda")

\# Chuyển biến số độc lập thành định tính\
dengue\$risk\_score2 = as.factor(dengue\$risk\_score2)

\# Xem cấu trúc dữ kiện\
str(dengue)

\# Lập mô hình\
mohinh = glm(dengue\$diagnose\_gr2 \~ dengue\$risk\_score2, family =
"binomial")

\# Trích các hệ số từ mô hình và tạo dữ kiện riêng\
\# lệnh seq() để tạo 1 dãy số, các dấu \[x:y,z\] cho biết lựa chọn những
hàng từ vị trí x đến y nào trong dữ kiện,\
\# z cho biết cột nào trong dữ kiện

dataplot = cbind(Score = seq(1,5,1), OR =
c(1,exp(coef(mohinh)\[2:5\])),\
low = c(1,exp(confint(mohinh)\[2:5,1\])),\
up = c(1,exp(confint(mohinh)\[2:5,2\])))\
dataplot = as.data.frame(dataplot)

\# Vẽ biểu đồ

\# Vẽ khung biểu đồ ko hiển thị dữ kiện (type="n")\
\# không hiển thị stick mark để có thể tự chọn sau ( xaxt = "n", yaxt =
"n")\
\# xác định giới hạn của biểu đồ ylim = c(0, max(dataplot\$OR,
dataplot\$low, dataplot\$up)), trục y chạy từ 0 đến giá trị lớn nhất của
cả 3 dãy số cần vẽ

plot(dataplot\$OR \~ dataplot\$Score, type = "n", xaxt = "n", yaxt =
"n",\
main = "Ten", xlab = "Scores", ylab = "Odd Ratios and 95% CI",\
ylim = c(0, max(dataplot\$OR, dataplot\$low, dataplot\$up)))

\# Lệnh yêu cầu R chạy lại cùng một tác vụ như nhau, chỉ khác nhau con
số\
\# Vẽ các đường nối từ khoảng dưới đến khoảng trên của các khoảng tin
cậy, ở đây vẽ lại 4 lần từ 2 đến 5 (tùy theo giá trị của biến số tương
ứng)

for (i in 2:5){\
lines(x = c(i,i),\
y = c(dataplot\$low\[dataplot\$Score==i\],
dataplot\$up\[dataplot\$Score==i\]),\
col="darkred", lwd=2, lty=2)\
}

\# Thêm các điểm vào biểu đồ

points(dataplot\$OR \~ dataplot\$Score, col = "darkred", pch=15, cex =
1.5)\
points(dataplot\$low \~ dataplot\$Score, col = "darkred", pch=15, cex =
.8)\
points(dataplot\$up \~ dataplot\$Score, col = "darkred", pch=15, cex =
.8)

\# Vẽ đường tham chiếu OR = 1\
abline(h=1, col="gray", lty=2, lwd=2)

\# Làm đẹp và tạo stick mark theo ý muốn

grid(col ="lightgray")\
axis(2,seq(0,15,1))\
axis(1,seq(1,6,1))\[/code\]

![](https://utv1ng.bn1.livefilestore.com/y1pA4-WVDUPKn5-kPArVtrW2hG1fLIPJwDYMh0t_P8nEflkaMrWwMANwScwQVYwgaKxwULZs6D3g42fxgP2zK9zOD-GAXSTiStC/dang.png?psid=1){.alignnone
width="669" height="517"}
