---
layout: post
title: "Sơ lược Julia"
date: "2016-12-18 19:36:20 +0100"
---

```{mermaid}
graph LR
R -.-> Julia
```

## Cơ bản:
|Lệnh|thực hiện|
|---|---|
|`x = 3`        | định nghĩa biến số  x = 3|
|`x = [1,2,3]`  | mảng/cột vector(1,2,3)|
|`y = [1 2 3]`  | 1×3 hàng-vector(1,2,3)|
|`A = [1 2 3 4; 5 6 7 8; 9 10 11 12]` | 3×4 ma trận|
|`x[2] = 7`     | đổi x từ (1,2,3) sang (1,7,3)|
|`A[2,1] = 0`   | đổi A 2,1 từ 5 sang 0|
|`u, v = (15.03, 1.2e-27)` | gán u=15.03, v=1.2×10–27|
|`f(x) = 3x` | định nghĩa hàm f(x)|
|`x -> 3x` | hàm ``ẩn”|

## Tạo các ma trận cơ bản:
|Lệnh|thực hiện|
|---|---|
|`rand(12), rand(12, 4)` | vector 12 nhân tố hoặc ma trận 12×4 từ phân phối đều U(0,1)|
|`randn(12)`  | Chọn ngẫu nhiên từ phân phối chuẩn |
|`eye(5)`  | Ma trận I 5×5 |
|`linspace(1.2,4.7,100)`  | 100 giá trị cách đều từ 1.2 đến 4.7|
|`logspace(1.2,4.7,100)`  | 100 giá trị thang log từ 1.2 đến 4.7|
|`diagm(x)`  | ma trận có giá trị trên đường chéo là x|

## Trích ma trận và vector:
|Lệnh|thực hiện|
|---|---|
|`x[2:12]`   | giá trị từ vị trí thứ 2 đến 12 của x|
|`x[2:end]`  | giá trị từ vị trí thứ 2 đến cuối cùng của x|
|`A[5,1:3]`  | hàng 5, cột 1-3 của A|
|`A[5,:]`    | toàn bộ hàng 5 của A|
|`diag(A)`   | giá trị trên đường chéo của A|

## Tính toán và một số hàm trên số:
|Lệnh|thực hiện|
|---|---|
|`3*4, 7+4, 2-6, 8/3`  | nhân cộng trừ chia|
|`3^7, 3^(8+2im)`  | 3 mũ 7 hoặc 3 mũ 8+2i|
|`sqrt(-5+0im)`  | $\sqrt{-5}$ số phức|
|`exp(12)`  | $e^12$ |
|`log(3), log10(100)`  | log tự nhiên, base-10 |
|`abs(-5), abs(2+3im)`  | trị tuyệt đối |
|`sin(5pi/3)`  | sin(5π/3)|
|`besselj(2,6)`  | hàm Bessel J|

## Tính toán và một số hàm trên ma trận và vector:
|Lệnh|thực hiện|
|---|---|
|`x*3, x + 3`  | nhân/cộng mọi nhân tố của x với 3|
|`x + y`  | cộng từng nhân tố của hai vector x, y|
|`A*y, A*B`  | tích của ma trận A với vector y hoặc ma trận B|
|`x .* y`  | tích từng nhân tố của x và y|
|`x .^ 3`  | lấy mũ từng nhân tố của x|
|`cos(x), cos(A)`  | cosine từng nhân tố của vector x hay ma trận A|
|`exp(A), expm(A)`  | lấy mũ từng nhân tố  của A|
|`xʹ, Aʹ`  | chuyển đổi vector hoặc ma trận  |
|`x’*y, dot(x,y), sum(conj(x).*y)` | ba cách tính x · y|
|`A \ b, inv(A)`  | tính nghiệm của Ax=b, hay ma trận $A^{–1}$|
|`λ, eig(A)`  | eigenvalue λ và eigenvector của A|

## Vẽ biểu đồ
|Lệnh|thực hiện|
|---|---|
|`using PyPlot, using Plots, using Gadfly`  | tải package, tùy nhu cầu|
|`plot(y), plot(x,y)`  | vẽ y, y với x|
|`loglog(x,y), semilogx(x, y), semilogy(x,y)`  | vẽ theo thang log|
|`title(“A title”), xlabel(“x-axis”), ylabel(“foo”)`  | gán nhãn|
|`legend([“curve 1”, “curve 2”], “northwest”)`  | để nhãn ở góc tây bắc|
|`grid()`  | thêm lưới nền|
|`title(L”the curve $e^\sqrt{x}$”)` | tựa đề với công thức toán|
|`savefig(“fig.png”), savefig(“fig.pdf”)` | lưu hình sang PNG, PDF|
