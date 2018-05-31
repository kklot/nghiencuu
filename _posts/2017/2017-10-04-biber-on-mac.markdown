---
title: Biber on Mac
layout: post
tag: nguyenkinh
author:
  display_name: Kinh Nguyen
  login: nguyenkinh
  email: nguyenkinh@ytecongcong.com
  url: https://www.google.com/profiles/112009149785989721279
---

Download `biber` [here](https://sourceforge.net/projects/biblatex-biber/files/biblatex-biber/1.0/).

Extract, and find where `pdflatex` currently is with

```bash
which pdflatex
```

Move the downloaded `biber` there, e.g. `/Library/TeX/texbin/pdflatex`

```bash
sudo mv ~/Download/biber /Library/TeX/texbin/
```

Good to go now.



