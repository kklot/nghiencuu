---
title: Setting working directory (Julia versus R)
layout: post
categories: [julia]
---

In R, you can set working directory with

```r
setwd("~/Desktop")
```

But Julia does not automatically expande the tilde `~` notation

```julia
julia> cd("~/Dropbox")
ERROR: chdir ~/
```

You need to ask Julia to expand tilde for you with `expanduser` function

```julia
cd(expanduser("~/Documents/myProjs/COPD/"))
```

Enjoy!
