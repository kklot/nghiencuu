---
title: Install laarc
layout: post
categories: [rescan,it,nextcloud]
author:
  display_name: Kinh Nguyen
  login: nguyenkinh
  email: nguyenkinh@ytecongcong.com
  url: https://www.google.com/profiles/112009149785989721279
author_login: Kinh Nguyen
author_email: nguyenkinh@ytecongcong.com
post_gravatar: 886f27ba4b392d00e87a35990840ba13
---

1. Install racket
```
sudo add-apt-repository ppa:plt/racket
sudo apt update
sudo apt install racket
```
2. Install requirements
```
sudo apt install make cmake build-essential rlwrap
```
3. Clone laarc
```
git clone http://github.com/laarc/laarc
cd laarc
make
mkdir arc
echo "myname" > arc/admins
NOISY=1 DEV=1 rlwrap bin/arc # rlwrap is optional
```