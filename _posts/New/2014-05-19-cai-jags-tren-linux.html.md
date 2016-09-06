--- layout: post status: publish published: true title: Cài JAGS trên
Linux author: display\_name: Kinh Nguyen login: Kinh Nguyen email:
nguyenkinh@ytecongcong.com url:
https://www.google.com/profiles/112009149785989721279 author\_login:
Kinh Nguyen author\_email: nguyenkinh@ytecongcong.com author\_url:
https://www.google.com/profiles/112009149785989721279 wordpress\_id:
2660 wordpress\_url: http://www.ytecongcong.com/?p=2660 date:
'2014-05-19 20:59:52 +0200' date\_gmt: '2014-05-19 13:59:52 +0200'
categories: - Thống kê - Home - R tags: - bayes - Winbugs - JAGS - Just
Another Gibbs Sampler comments: \[\] ---

JAGS- Just Another Gibbs Sampler là phần mềm mã nguồn mở cung cấp chức
năng tương tự WinBUGS. Tuy nhiên JAGS được biết là tốc độ nhanh hơn,
nhất là cho các mô hình ảnh hưởng hỗn hợp (mixed model) hay còn gọi là
mô hình theo thứ bậc (hierarchical model). Để cài trên Linux, có thể
build từ gói cung cấp trên trang
[mcmc-jags](https://sourceforge.net/p/mcmc-jags/) nhưng thường sẽ gặp
các vấn đề về các gói phụ thuộc đi kèm, v.d. các lỗi

    installation of package ‘rjags’ had non-zero exit status
    libjags.so.3: cannot open shared object file: No such file or directory

Để cài đặt, thêm 2 PPA sau và cài trực tiếp từ terminal:

    sudo add-apt-repository ppa:marutter/rrutter
    sudo add-apt-repository ppa:marutter/c2d4u

Sau đó cài trực tiếp

    sudo apt-get install r-cran-rjags

Hai chức năng đáng chú ý của `R2jags` so với `R2winBUGS`
--------------------------------------------------------

-   Khả năng cập nhật lại mô hình đã lưu hoặc cập nhật đến khi mô hình
    hội tụ với các lệnh

<!-- -->

    update(mohing, n.iter=100)
    autojags(mohinh) # tự động update đến khi hội tụ

-   Hiển thị bước lặp đang chạy, với những mô hình phức tạp như đã nói ở
    trên, thời gian chạy mô hình là rất lâu và đòi hỏi nhiều tài nguyên
    của máy. Chức năng này giúp người dùng *yên tâm* là chương trình vẫn
    đang hoạt động và ước lượng được khoảng thời gian còn lại. V.d.
    R2jags trên Linux.

![](https://dl.dropboxusercontent.com/u/29949485/iterations%20System%20monitor%20with%20r2jags.png)
