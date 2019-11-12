---
title: R lattice - change "cex.lab" in "levelplot"
layout: post
---

Seemed to be cannot be done within `levelplot()` but

```r
trellis.par.set("par.xlab.text", list(cex=.7))
trellis.par.set("par.ylab.text", list(cex=.7))
```

run

```r
trellis.par.get()$par.xlab.text
```

to get the full customizable arguments.