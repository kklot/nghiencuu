---
title: Biber on Mac
layout: post
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



