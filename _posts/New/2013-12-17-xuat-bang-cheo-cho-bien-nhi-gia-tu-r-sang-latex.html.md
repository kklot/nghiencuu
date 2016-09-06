--- layout: post status: publish published: true title: Xuất bảng chéo
cho biến nhị giá từ R sang Latex author: display\_name: Kinh Nguyen
login: Kinh Nguyen email: nguyenkinh@ytecongcong.com url:
https://www.google.com/profiles/112009149785989721279 author\_login:
Kinh Nguyen author\_email: nguyenkinh@ytecongcong.com author\_url:
https://www.google.com/profiles/112009149785989721279 wordpress\_id:
1819 wordpress\_url: http://www.ytecongcong.com/?p=1819 date:
'2013-12-17 06:46:26 +0100' date\_gmt: '2013-12-16 23:46:26 +0100'
categories: - Thống kê - Tin học - Home - R tags: \[\] comments: \[\]
---

R to Latex: Crosstable for binary response

Để có kết quả dạng như sau trong Latex,

![](https://dl.dropboxusercontent.com/u/29949485/Ktabin.png){.alignnone
width="323" height="229"}

``` {.lang:r .decode:true .crayon-selected title="R to Latex: Crosstable for binary response"}
source("http://stats.ytecongcong.com/code/Ktabin.txt")
Ktabin(biến số hàng, biến số cột)
```

Lưu ý:

Cần **attach(dữ kiện)** trước khi sử dụng.

Cần cài gói **gmodels** bằng cách

``` {.lang:r .decode:true}
install.packages("gmodels")
library("gmodels")
```

 

Biến số hàng cần là biến số định tính, biến số cột phải là nhị giá.
