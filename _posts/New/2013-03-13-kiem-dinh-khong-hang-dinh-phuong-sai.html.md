--- layout: post status: publish published: true title: Kiểm định không
hằng định phương sai author: display\_name: Kinh Nguyen login: Kinh
Nguyen email: nguyenkinh@ytecongcong.com url:
https://www.google.com/profiles/112009149785989721279 author\_login:
Kinh Nguyen author\_email: nguyenkinh@ytecongcong.com author\_url:
https://www.google.com/profiles/112009149785989721279 wordpress\_id: 910
wordpress\_url: http://www.ytecongcong.com/?p=910 date: '2013-03-13
07:10:21 +0100' date\_gmt: '2013-03-13 00:10:21 +0100' categories: - Tin
mới - Nghiên cứu - Tin học - Home tags: - nonconstant variance - test -
kiểm định - phương sai comments: \[\] ---

Bài viết này giới thiệu về khả năng sử dụng ngôn ngữ Latex để hiển thị
các công thức toán học khi viết bài, bình luận trên trang
Ytecongcong.COM.

> LaTex ngoài tác dụng nhiều người biết đến là soạn thảo công thức toán
> học, còn có các chức năng nổi trội trong:
>
> -   Ngôn ngữ dễ nhớ, dễ sử dụng.
> -   Soạn thảo các văn bản có cấu trúc chặt chẽ (luận án, tài liệu tham
>     khảo, bài báo, [xem một số mẫu qui định bởi các trường đại học nổi
>     tiếng](http://latexforhumans.wordpress.com/2011/03/10/thesis-templates-for-latex/)),
>     Một ví dụ về tài liệu soạn bằng LaTex: [Hồi quy tuyến
>     tính](http://www.slideshare.net/nguyenkinh/hi-quy-tuyn-tnh)
> -   Ví dụ: Một số tạp chí khoa học hiện tại đã yêu cầu gửi bài báo
>     dưới dạng chuẩn là LaTex ([Tạp chí
>     Nature](http://www.nature.com/nmat/authors/submit/index.html))
>     hoặc chỉ nhận dạng LaTex ([Đại học
>     Missouri](http://campus.mst.edu/twireless/index_files/instruction.html),...)
> -   Soạn thảo slide trình chiếu với cấu trúc và định dạng khoa học
>     ([Một số ví
>     dụ](http://deic.uab.es/~iblanes/beamer_gallery/index_by_theme.html)
>     về Beamer)
> -   Có thể xem hướng dẫn ngắn và thực hành sử dụng LaTex tại
>     [đây](http://www.slideshare.net/nguyenkinh/la-tex-can-ban).

**Để viết công thức trên website, chỉ việc đặt mã công thức LaTex trong
phạm vi hai dấu đô la liền kề nhau (Không có khoảng trắng) \$ \$ viết
công thức ở đây \$ \$**

Ví dụ:

**\[glossary\]Kiểm định\[/glossary\] Brown-Forsythe -Levene hiệu
chỉnh**\
Đặc điểm:

-   Cần cỡ mẫu lớn
-   Không bị sai lệch nếu sai số phân phối không bình thường

Các bước thực hiện

1.  Xếp phần dư theo chiều tăng của biến số độc lập X
2.  Chia mẫu thành 2 nhóm với \$\$ n\_1 \\leq \\tilde{X} \$\$ và \$\$
    n\_2 &gt; \\tilde{X} \$\$
3.  Tính \$\$ d\_{i1}=|e\_{i1}-\\tilde{e}\_1| \$\$ và \$\$
    d\_{i2}=|e\_{i2}-\\tilde{e}\_2| \$\$ với \$\$ \\tilde{e} \$\$ là
    trung vị
4.  \$\$ H\_0:\\sigma\^2\_{1} = \\sigma\^2\_{2}\$\$ với \$\$
    t\_{BF}=\\dfrac{\\bar{d}\_1 -\\bar{d}\_2}{s\_p \\sqrt{1/n\_1
    +1/n\_2}} \\sim t\_{n-2}\$\$ với
5.  \$\$ s\_p=\\dfrac{\\sum(d\_{i1}-\\bar{d}\_1)\^2
    +\\sum(d\_{i2}-\\bar{d}\_2)\^2}{n-2} \$\$

*Nếu cỡ mẫu lớn, có thể chia thành nhiều nhóm và so sánh 2 nhóm khác
biệt nhiều*

**Kiểm định Breusch-Pagan**

Đặc điểm

-   Đòi hỏi \$\$ \\varepsilon\_i \$\$ độc lập và phân phối bình thường
-   Cần cỡ mẫu lớn và Phương sai của sai số liên kết với X theo \$\$
    log\_e\\sigma\^2\_i=\\gamma\_0 +\\gamma\_1 X\_i \$\$
-   \$\$ H\_0: \\gamma\_1=0 \$\$

Các bước thực hiện

1.  Lập mô hình hồi qui giữa phần dư bình phương \$\$ e\_i\^2 \$\$ với
    \$\$ X\_i \$\$, tính \$\$ SSR\^{\*} \$\$ từ mô hình này
2.  Tính \$\$ \\chi\^2\_{BP}=
    \\dfrac{\\frac{SSR\^{\*}}{2}}{\\left(\\frac{SSE}{n}\\right)\^2}
    \\sim \\chi\^2\_1\$\$ với SSE của hồi quy Y theo X

