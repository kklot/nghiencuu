--- layout: post status: publish published: true title: "\[Ubuntu\] Cài
nhanh Texlive cho Latex" author: display\_name: Kinh Nguyen login: Kinh
Nguyen email: nguyenkinh@ytecongcong.com url:
https://www.google.com/profiles/112009149785989721279 author\_login:
Kinh Nguyen author\_email: nguyenkinh@ytecongcong.com author\_url:
https://www.google.com/profiles/112009149785989721279 wordpress\_id:
2707 wordpress\_url: http://www.ytecongcong.com/?p=2707 date:
'2014-05-26 20:09:47 +0200' date\_gmt: '2014-05-26 13:09:47 +0200'
categories: - Nghiên cứu - Tin học - Home - Latex tags: - Latex -
Texlive - Ubuntu comments: \[\] ---

![](http://latex-project.org/lib/img/lion.png){.alignleft width="100"
height="120"}\
Để có thể soạn thảo văn bản với LaTeX một cách thoải mái nhất, bước khó
đầu tiên là cài đặt và cấu hình để cho máy có thể biên dịch được file
`tex`

Với máy kết nối mạng và \`\`có nhiều thời gian" thì có thể cài trực tiếp
với lệnh

    sudo apt-get install texlive

Cài với lệnh:
:   Nhấn đồng thời `Ctrl+Alt+T`, dán lệnh và điền password của mình nếu
    yêu cầu.

Tuy nhiên sẽ tốn nhiều thời gian, dung lượng internet và nếu sau này cài
lại sẽ phải tải lại tương tự. Do vậy, tải file `iso` cung cấp sẵn tại
trang [TUG](http://www.tug.org/texlive/acquire-iso.html) với 2 tùy chọn
là tải trực tiếp hoặc tải với torrent (dung lượng \~ 2.4Gb, ngang ngửa
MS Office).

Giả sử file ISO tải về sẽ là có tên dạng `texlive2013-20130530.iso` nằm
trong folder `~/Downloads`.

Các hướng dẫn sau đã giản lược để nhanh chóng cài với lệnh thành công,
tránh khó khăn cho người mới sử dụng Ubuntu.

Chuẩn bị
--------

-   Nếu dùng Ubuntu 14.04, có thể click phải vào file `iso` mới tải và
    chọn `Open With` &gt; `Disk Image Mounter`.
-   Với bản khác cần gõ các dòng sau

<!-- -->

    sudo mkdir /mnt
    cd ~/Downloads
    sudo mount -t iso9660 -o ro,loop,noauto texlive2013-20130530.iso /mnt

Cài
---

Nếu bạn có ổ cứng lớn và không quan tâm tiết kiệm dung lượng, có thể cài
toàn bộ các gói đi kèm bằng lệnh `sudo ./install-tl`. Và nhấn chọn ở các
cửa số tiếp theo (tổng cộng \~3Gb). Thay vì vậy có thể chọn bỏ bớt các
gói không cần thiết như các gói hỗ trợ ngôn ngữ Ả rập, Trung, Hàn,
Nhật...

    sudo apt-get install perl-tk
    cd /mnt
    sudo ./install-tl -gui perltk

Một cửa sổ hiện lên, có thể chọn như sau (thay đổi theo nhu cầu của bạn)
và nhấn `ok` và `Install`

![](https://dl.dropboxusercontent.com/u/29949485/Screenshot%20from%202014-05-261.png)

Cửa sổ cài xong

![](https://dl.dropboxusercontent.com/u/29949485/Screenshot%20from%202014-05-26-12.png)

Cấu hình hệ thống
-----------------

Lúc này hệ thống chưa nhận chương trình, để hoàn tất, cần tiếp tục cấu
hình thêm với lệnh sau (*Hướng dẫn sau áp dụng cho Ubuntu 64bit, với bản
32bit chỉ cần thay tất cả `x86_64-linux` bằng `i386-linux` trong các
dòng lệnh*)

    echo 'PATH=/usr/local/texlive/2013/bin/x86_64-linux:$PATH; export PATH' >> ~/.profile
    echo 'MANPATH=/usr/local/texlive/2013/texmf-dist/doc/man:$MANPATH; export MANPATH' >> ~/.profile
    echo 'INFOPATH=/usr/local/texlive/2013/texmf-dist/doc/info:$INFOPATH; export INFOPATH' >> ~/.profile
    echo 'INFOPATH=/usr/local/texlive/2013/texmf-dist/doc/info:$INFOPATH; export INFOPATH' >> ~/.profile

Sau đó

    sudo su
    echo 'MANPATH_MAP /usr/local/texlive/2013/bin/x86_64-linux /usr/local/texlive/2013/texmf-dist/doc/man' >> /etc/manpath.config

Hoàn tất.
