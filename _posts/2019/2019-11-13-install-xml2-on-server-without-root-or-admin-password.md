---
title: Cài R packages (xml2, devtools,..) trên HPC server khi không có quyền admin
layout: post
---

Các gói như `xml2`, `devtools`, `httr`,... cần các thư viện phiên bản phát triển
libxml2-devel hay openssl-dev. Các gói này thường không có sẵn và khi cài cần có
mật mã của người quản lý.

Ví dụ lỗi

```R
------------------------- ANTICONF ERROR ---------------------------
Configuration failed because libxml-2.0 was not found. Try installing:
 * deb: libxml2-dev (Debian, Ubuntu, etc)
 * rpm: libxml2-devel (Fedora, CentOS, RHEL)
 * csw: libxml2_dev (Solaris)
If libxml-2.0 is already installed, check that 'pkg-config' is in your
PATH and PKG_CONFIG_PATH contains a libxml-2.0.pc file. If pkg-config
is unavailable you can set INCLUDE_DIR and LIB_DIR manually via:
R CMD INSTALL --configure-vars='INCLUDE_DIR=... LIB_DIR=...'
```

Trong trường hợp này cần:

1. Tải nguồn của thư viện cần thiết (zip, gz,...)
- Giải nén và cài vào thư mục cá nhân
- Nói cho R biết tìm thư viện đó ở thư mục vừa tạo ở trên


## Ví dụ cài libxml2-dev trên CentOS

1. Tải

```bash
wget ftp://xmlsoft.org/libxml2/libxml2-2.9.7.tar.gz
```

2. Giải nén và cài

Ở đây cài vào folder `~/.local`

```bash
tar xf libxml2-2.9.7.tar.gz
cd libxml2-2.9.7/
mkdir -p ~/.local
./configure --prefix=$HOME/.local
make
make install
```

3. Nói R (và các phần mềm khác nếu cần) biết tìm xml2 ở đâu

Nói một lần

```bash
export PATH=$HOME/.local/bin/:$PATH
```

Nói mỗi lần mở terminal

```bash
echo "export PATH=$HOME/.local/bin/:$PATH" >> ~/.bashrc"
```