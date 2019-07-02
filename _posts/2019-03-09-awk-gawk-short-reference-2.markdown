---
title: Cách dùng AWK (GAWK) để xử lý tệp tin tài liệu (2)
layout: post
categories: [awk]
author:
  display_name: Kinh Nguyen
  login: nguyenkinh
  email: nguyenkinh@ytecongcong.com
  url: https://www.google.com/profiles/112009149785989721279
author_login: Kinh Nguyen
author_email: nguyenkinh@ytecongcong.com
post_gravatar: 886f27ba4b392d00e87a35990840ba13
---

Tiếp theo phần 1

In mảng kèm nội dung

```bash
echo "Nội dung mảng 1 là" | iconv -t UTF-8
echo "Nội dung mảng 1 là" | awk '{printf "%1s\n", $0}' 
mail-list.txt
echo $LANG

function bar()
{
    for (i = 0; i < 3; i++)
        print "bar's i=" i
}
awk -f test.awk mail-list.txt

```