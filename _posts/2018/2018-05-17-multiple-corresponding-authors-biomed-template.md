---
title: Multiple corresponding authors Biomed template
layout: post
tag: nguyenkinh
author:
  display_name: Kinh Nguyen
  login: nguyenkinh
  email: nguyenkinh@ytecongcong.com
  url: https://www.google.com/profiles/112009149785989721279
---

Override their template definitions, add this before `begin{document}`:

```tex
\startlocaldefs
\setattribute{corref}{text}{Correspondences: }
\def\print@author@lists{
   \@ifundefined{addressref@list}{}{\address@thanksref{\addressref@list}}
   \ifauthor@corref\def\thanksref@sep{}{\color{blue}\textsuperscript{*}}\fi
}
\def\printcorrtext#1{
  \corref@text
  {\color{blue}your@email.com,second@email.com}
  \par
}
\endlocaldefs
```
