--- layout: topic status: publish published: true title: Vẽ biểu đồ 2
trục Y với R author: display\_name: Kinh Nguyen login: Kinh Nguyen
email: nguyenkinh@ytecongcong.com url:
https://www.google.com/profiles/112009149785989721279 author\_login:
Kinh Nguyen author\_email: nguyenkinh@ytecongcong.com author\_url:
https://www.google.com/profiles/112009149785989721279 wordpress\_id: 310
wordpress\_url:
http://www.ytecongcong.com/forums/topic/ve-bieu-do-2-truc-y-voi-r/ date:
'2012-11-18 11:36:18 +0100' date\_gmt: '2012-11-18 04:36:18 +0100'
categories: \[\] tags: \[\] comments: \[\] ---

Ví dụ để vẽ dạng như hình này, các bạn có thể dùng code sau, có thể
chỉnh sửa theo ý mình

<span style="color: indigo">**Các lệnh cần chạy theo đúng thứ tự và chạy
1 lần, các bạn thử thay đổi để biết tác dụng của từng lệnh**</span>

File data mẫu có thể tải ở
[đây](https://docs.google.com/a/ytecongcong.com/file/d/0B8et4nuUgX4lajM4bnJkS0xOX1U/edit)\
*Nguồn: ĐH Y Hà Nội*

\[code title="Vẽ biểu đồ 2 trục Y với R"\]\
data&lt;-read.csv("D:/Downloads/dengue cases-2002.csv",sep=",",header=T)
\#thay đường dẫn tương ứng ở máy bạn\
str(data)

summary(data\$cases)\
summary(data\$tmean)\
data\$x=seq(1:416)

\#HUMIDITY AND RAIN FALL\
summary(data\$cases)\
summary(data\$humidity)\
summary(data\$rainfall)\
par(mar=c(6,4,4,5)+.1)\
plot(data\$x,data\$cases,type="l",col="red",lwd=1.5,xaxt='n',yaxt='n',xlab='',ylab='')\
axis(1, seq(0, 416, 52),labels=TRUE)\
axis(2, seq(2, 1169, 50),labels=TRUE)\
par(new=TRUE)\
plot(data\$x,data\$humidity,type="l",col="blue",lwd=1,lty=1,xaxt='n',yaxt='n',xlab='',ylab='')\
par(new=TRUE)\
plot(data\$x,data\$rainfall,type="l",col="green",lwd=1,lty=1,xaxt='n',yaxt='n',xlab='',ylab='')\
axis(4, seq(0,600,50),labels=TRUE)\
par(xpd=TRUE)\
legend(-20,-80,bty="n",col=c("red","blue","green"),lty=c(1,1,1),legend=c("Cases(freq)","humidity","rainfall"))\
title(main="Case\~Humidity&Rainfall",sub="whatever, who
care",xlab="Weeks", ylab="Cases")\
mtext("Rainfall&Humidity",side=4,line=3)\
\[/code\]

[![](https://utv1ng.bay.livefilestore.com/y1pxH31jx7YeYscQEpzhwSgYQ4thZ-BQagOOswtWbv3sL6O704lZtLSuxWW85CnVd6KxAZstHEQYgspTWVI0g49PGGuZ5Ryg3xT/SXH%20va%20Luong%20mua.jpg?psid=1)](https://utv1ng.bay.livefilestore.com/y1pxH31jx7YeYscQEpzhwSgYQ4thZ-BQagOOswtWbv3sL6O704lZtLSuxWW85CnVd6KxAZstHEQYgspTWVI0g49PGGuZ5Ryg3xT/SXH%20va%20Luong%20mua.jpg?psid=1)
