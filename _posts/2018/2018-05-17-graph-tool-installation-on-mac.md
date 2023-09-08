---
title: A succesfull `graph-tool` installation on Mac
layout: post
tag: nguyenkinh
author:
  display_name: Kinh Nguyen
  login: nguyenkinh
  email: nguyenkinh@ytecongcong.com
  url: https://www.google.com/profiles/112009149785989721279
---

Requirements:

- `brew install gtk+3 pygobject3`
    + If there is a permission denied, run `sudo chown -R "$USER":admin /usr/local`
- Ensure to run default python on mac, run
    + `python2.7 -m ensurepip --default-pip`
- Install matplotlib `python2.7 -mpip install -U matplotlib`, `sudo` is needed.
- Install graph-tool `port install py-graph-tool`

Run `graph-tool` **with the default python**

```sh
$ python2.7
Python 2.7.15 (default, May  2 2018, 00:53:27)
[GCC 4.2.1 Compatible Apple LLVM 9.1.0 (clang-902.0.39.1)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> import graph_tool
>>>
```

Finally no errors or warnings.


