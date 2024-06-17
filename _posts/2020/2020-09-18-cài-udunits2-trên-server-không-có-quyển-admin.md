---
title: Cài udunits2 trên server không có quyển admin
layout: post
categories: [server,R]
author:
  display_name: Kinh Nguyen
  login: nguyenkinh
  email: nguyenkinh@ytecongcong.com
  url: https://www.google.com/profiles/112009149785989721279
author_login: Kinh Nguyen
author_email: nguyenkinh@ytecongcong.com
post_gravatar: 886f27ba4b392d00e87a35990840ba13
layout: post
---

Không hiểu sao dùng `~/.local/` làm cấu hình `--prefix` không được, nhưng không có thời gian để mò thêm.

```r
homedir <- Sys.getenv("HOME")
udunits_dir <- file.path(Sys.getenv("HOME"), "udunits")
system(paste0("mkdir ", udunits_dir))
system(paste0("wget --directory-prefix=", udunits_dir, " ftp://ftp.unidata.ucar.edu/pub/udunits/udunits-2.2.25.tar.gz"))
owd <- getwd()
setwd(udunits_dir)
system("tar xzvf udunits-2.2.25.tar.gz")
setwd(file.path(udunits_dir, "udunits-2.2.25"))
system(paste0("./configure --prefix=", udunits_dir, "/local"))
system("make")
system("make install")
setwd(owd)
Sys.setenv(LD_LIBRARY_PATH=paste0(Sys.getenv("LD_LIBRARY_PATH"), ":", udunits_dir, "/local/lib"))
install.packages("udunits2", 
                 type = "source",
                 configure.args = c(paste0("--with-udunits2-include=", udunits_dir, "/local/include"), 
                                    paste0("--with-udunits2-lib=", udunits_dir, "/local/lib")),
                 repos = "http://cran.rstudio.com")
dyn.load(paste0(udunits_dir, "/local/lib/libudunits2.so.0"))
install.packages("units", repos = "http://cran.rstudio.com",
             configure.args = c(paste0("--with-udunits2-include=", udunits_dir, "/local/include"), 
                                paste0("--with-udunits2-lib=", udunits_dir, "/local/lib")))
```