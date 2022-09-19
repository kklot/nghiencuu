---
title: MacOS min version needed for GCC compiler on Monterey
layout: post
categories: [TMB,gcc++,R,package]
author:
  display_name: Kinh Nguyen
  login: nguyenkinh
  email: nguyenkinh@ytecongcong.com
  url: https://imperial.ac.uk/peole/k.nguyen
author_login: Kinh Nguyen
author_email: nguyenkinh@ytecongcong.com
post_gravatar: 886f27ba4b392d00e87a35990840ba13
---

A note to fix error on new MacOS version Monterey and `gcc` compiler for R. This assumes that you have

1. Install Xcode Command Line Tools
2. Install new `gfortran` version from [here](https://github.com/fxcoudert/gfortran-for-macOS).

Then when running `pkgbuild::check_build_tools(debug = TRUE)` you might see

```
ld: library not found for -lSystem
clang-5.0: error: linker command failed with exit code 1 (use -v to see invocation)
make: *** [foo.so] Error 1
Error: Could not find tools necessary to compile a package
Call `pkgbuild::check_build_tools(debug = TRUE)` to diagnose the problem.
```

in `~/.R/Makevars` add the following to the `CC` and `CCX` 

```
CC=ccache /usr/local/gfortran/bin/gcc -mmacosx-version-min=12.3 -fopenmp
CXX=ccache /usr/local/gfortran/bin/g++ -mmacosx-version-min=12.3 -fopenmp
```

Running and it works for me.


```R
> pkgbuild::check_build_tools(debug = TRUE)
Trying to compile a simple C file
Running /Library/Frameworks/R.framework/Resources/bin/R CMD SHLIB foo.c

ccache /usr/local/gfortran/bin/gcc -mmacosx-version-min=12.3 -fopenmp -I"/Library/Frameworks/R.framework/Resources/include" -DNDEBUG   -I/usr/local/opt/gettext/include -I/usr/local/opt/llvm/include -I/Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/include -I/usr/local/Cellar/gperftools/2.9.1_1/include/gperftools   -fPIC  -g -O3 -Wall -pedantic -std=gnu99 -mtune=native -pipe -c foo.c -o foo.o

ccache /usr/local/gfortran/bin/gcc -mmacosx-version-min=12.3 -fopenmp -dynamiclib -Wl,-headerpad_max_install_names -undefined dynamic_lookup -single_module -multiply_defined suppress -L/Library/Frameworks/R.framework/Resources/lib -L/usr/local/opt/gettext/lib -L/usr/local/opt/llvm/lib -Wl,-rpath,/usr/local/opt/llvm/lib -I/usr/local/Cellar/gperftools/2.9.1_1/lib -F/Library/Developer/CommandLineTools/SDKs/MacOSX12.sdk/System/Library/Frameworks/ -o foo.so foo.o -F/Library/Frameworks/R.framework/.. -framework R -Wl,-framework -Wl,CoreFoundation

ld: warning: -undefined dynamic_lookup may not work with chained fixups
 
Your system is ready to build packages!
```

---

A complete `Makevars` is below, please adjust your path accordingly, especially `FLIBS` and `MAC_LOC`. I also have `gperftools` and `ccache` install so remove them if you don't need them.

```make
FLIBS=-L/usr/local/gfortran/lib/gcc/x86_64-apple-darwin21/12.1.0 -L/usr/local/gfortran/lib -lgfortran -lquadmath -lm

CC=ccache /usr/local/gfortran/bin/gcc -mmacosx-version-min=12.3 -fopenmp
CXX=ccache /usr/local/gfortran/bin/g++ -mmacosx-version-min=12.3 -fopenmp
CXX11=ccache /usr/local/gfortran/bin/g++ -mmacosx-version-min=12.3 - fopenmp
CXX17=ccache /usr/local/gfortran/bin/g++ -mmacosx-version-min=12.3 - fopenmp

LLVM_LOC=/usr/local/opt/llvm
MAC_LOC=/Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/include
GPLOC=/usr/local/Cellar/gperftools/2.9.1_1
CFLAGS=-g -O3 -Wall -pedantic -std=gnu99 -mtune=native -pipe
CXXFLAGS=-g -O3 -Wall -pedantic -std=c++11 -mtune=native -pipe -Wno-ignored-attributes -Wno-maybe-uninitialized
LDFLAGS=-L/usr/local/opt/gettext/lib -L$(LLVM_LOC)/lib -Wl,-rpath,$(LLVM_LOC)/lib -I$(GPLOC)/lib -F/Library/Developer/CommandLineTools/SDKs/MacOSX12.sdk/System/Library/Frameworks/
CPPFLAGS=-I/usr/local/opt/gettext/include -I$(LLVM_LOC)/include -I$(MAC_LOC) -I$(GPLOC)/include/gperftools
```