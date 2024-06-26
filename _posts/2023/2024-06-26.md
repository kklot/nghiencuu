---
title: VSCode R notebook to R script for tracking shortcut
layout: post
categories:
  - vscode
  - R
  - notebook
  - ipynb
  - purl
  - knitr
  - rmarkdown
author:
  display_name: Kinh Nguyen
  login: nguyenkinh
  email: nguyenkinh@ytecongcong.com
  url: https://www.google.com/profiles/112009149785989721279
author_login: Kinh Nguyen
author_email: nguyenkinh@ytecongcong.com
post_gravatar: 886f27ba4b392d00e87a35990840ba13
---

`.ipynb` is great for many reasons, one of them is more than most for me: when working with several (say 10) different projects, it helps to remind what you had done much better than looking at R scripts.

A small drawback is the tracking, with `git` for example, is not convenient despite VSCode provides a very specific diff view.

Moreover, sometime you might want to have pure R code just to submit it a long running job on a HPC or remote server.

My workflow is working in notebook, write and report it with `quarto`, and track with pure R with a VScode's shortcut as below:

```json
{
	"key": "cmd+shift+C",
	"command": "workbench.action.terminal.sendSequence",
	"args": {

	"text": "R -e 'setwd(\\"${fileDirname}\\");rmarkdown::convert\_ipynb(\\"${fileBasename}\\");knitr::purl(\\"${fileBasenameNoExtension}.Rmd\\",
}
```
which export the current `.ipynb` to a R file with the same name in the same directory.

This remove the need of `jupytext` for me.