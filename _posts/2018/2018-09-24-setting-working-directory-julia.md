---
title: Setting working directory (Julia versus R)
layout: post
categories: [julia]
author:
  display_name: Kinh Nguyen
  login: nguyenkinh
  email: nguyenkinh@ytecongcong.com
  url: https://www.google.com/profiles/112009149785989721279
author_login: Kinh Nguyen
author_email: nguyenkinh@ytecongcong.com
post_gravatar: 886f27ba4b392d00e87a35990840ba13
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
