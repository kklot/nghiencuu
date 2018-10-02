---
title: Divergent colors around zero in levelplot()
layout: post
categories: [r]
author:
  display_name: Kinh Nguyen
  login: nguyenkinh
  email: nguyenkinh@ytecongcong.com
  url: https://www.google.com/profiles/112009149785989721279
author_login: Kinh Nguyen
author_email: nguyenkinh@ytecongcong.com
post_gravatar: 886f27ba4b392d00e87a35990840ba13
---

Normally `levelplot`'s divergent colors split in the middle of the variable. So if the variable's range is not symmetric around zero, then the middle color, such as white in the diverging `PuOr` of the `rcolorbrewer` below, will not represent zero value and can made the plot difficult to read.

![](https://i.imgur.com/XEjVcG9.png)

A quick fix is to specify `at` options with a hand-on function below that make the plotted variable/matrix equal around zero. 

```r
cutat0 = function(x, n) c(seq(min(x), 0, length=n), seq(0, max(x), length=n))[-n]
```

and then plot e.g.,

```r
levelplot(x, at=cutat0(x, 10), col.regions=colorRampPalette(RColorBrewer::brewer.pal(8, 'RdGy')))
```

![Levelplot](https://i.imgur.com/NI0127R.png)

Notice the asymetric of the data range around zero.
