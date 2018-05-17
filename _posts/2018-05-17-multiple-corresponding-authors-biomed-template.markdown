---
title: Multiple corresponding authors Biomed template
layout: post
---

Override their template definitions, add this before `begin{document}`:

```tex
\startlocaldefs
\definecolor{epi}{RGB}{102, 100, 139}
  \newtcolorbox[auto counter]{kbox}[2][]{colframe=gray, colback=gray!1, boxrule=.1pt, top=0mm, boxsep=.5em, before skip=0em, title=Box \thetcbcounter. #2, #1}
\setattribute{corref}{text}{Correspondences: }
\def\print@author@lists{
   \@ifundefined{addressref@list}{}{\address@thanksref{\addressref@list}}%
   \ifauthor@corref\def\thanksref@sep{}{\color{blue}\textsuperscript{*}}\fi%
}
\def\printcorrtext#1{%
  \corref@text%
  {\color{blue}your@email.com,second@email.com}
  \par
}
\endlocaldefs
```
