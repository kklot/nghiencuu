---
title: R lattice - change "cex.lab" in "levelplot"
layout: post
---

Cannot be done within `levelplot()` but with

```r
trellis.par.set("par.xlab.text", list(cex=.7))
trellis.par.set("par.ylab.text", list(cex=.7))
```

run

```r
trellis.par.get()$par.xlab.text
```

to get the full customizable arguments.