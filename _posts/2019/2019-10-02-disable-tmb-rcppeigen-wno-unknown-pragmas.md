---
title: Chặn cảnh báo không quan trọng, v.d. Wno-unknown-pragmas
layout: post
---

Chạy mô hình sử dụng các gói chương trình R cho các mô hình ẩn, mô hình không
gian, Bayesian, MCMC, như `Rcpp`, `RcppEigen`, `Stan`, `TMB` sẽ có thể đòi hỏi
compile code `C++`. 

Đa số cảnh báo là vô hại, v.d.

```
 pragma diagnostic pop could not pop, no matching push [-Wunknown-pragmas]
    #pragma clang diagnostic pop
```

khi chạy mô hình TMB, Stan.

Tuỳ vào hệ điều hành, để tắt cảnh báo tạo tệp `~/R/Makevars` (trên Linux, MacOS)
và thêm các cờ
```
CXXFLAGS = -Wno-macro-redefined -Wno-unused-variable -Wno-unused-function -Wno-unused-local-typedefs -Wno-unknown-pragmas -Wno-c++11-inline-namespace
```
hoặc có thể trên máy bạn là `CXXFLAGS14`, thông thường có thêm các cờ như `-O3`
để tối ưu code không cần thiết có thể bỏ cho mục đích chặn cảnh báo.

Tắt các loại cảnh báo khác với các cờ liệt kê tại 
[đây.](https://clang.llvm.org/docs/DiagnosticsReference.html)