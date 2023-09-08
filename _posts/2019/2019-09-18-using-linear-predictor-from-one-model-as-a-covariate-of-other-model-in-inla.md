---
title: Dùng giá trị tiên đoán từ một mô hình làm biến số tiên đoán của mô hình khác
layout: post
categories: [r,INLA,regression]
author:
  display_name: Kinh Nguyen
  login: nguyenkinh
  email: nguyenkinh@ytecongcong.com
  url: https://www.google.com/profiles/112009149785989721279
author_login: Kinh Nguyen
author_email: nguyenkinh@ytecongcong.com
post_gravatar: 886f27ba4b392d00e87a35990840ba13
---

Giả sử ta có mô hình $y_1 = \alpha_0 +\alpha_1x_1$, 
đồng thời ta cũng có mô hình $y_2 = \beta_0 + \beta_1x_2 + \beta_2 y_1$.

Hai biến số $y_1, y_2$ có thể phân bố theo luật khác nhau, chẳng hạn đều là phân phối bình thường.

Để ước lượng đồng thời 2 mô hình này trong INLA, cần sắp xếp số liệu `mydata` dạng như hình sau (nhưng để chạy được các cột biến số cần tạo dạng một ma trận).

![](https://i.imgur.com/tImyVN8.png)

và dùng cấu trúc lệnh mô hình

```r
formula = Y ~ -1 + 
  intercept1 + X1 + 
    f(u, w, model="iid", hyper=list(prec=list(initial=-6, fixed=TRUE))) + 
    intercept2 + X2 +
    f(b.eta2, copy="u", hyper = list(beta = list(fixed = FALSE)))
```

trong đó:

- `f(u,...)` cần chọn phân phối tiền nghiệm với độ chính xác cao và không ước lượng để đảm bảo giá trị của `u` sẽ bằng giá trị tiên đoán của mô hình $y_1$. Cụ thể $\eta_1 + (-1)\times u =0$ (lưu ý cột `w`).
- `f(b.eta2, copy="u",...)` để INLA biết giá trị của `b.eta2` sẽ được chia sẻ với `u`. Điều này nghĩa là hệ số của `b.eta2` trong mô hình của $y_2$ sẽ là $\beta_2$ ta muốn ước lượng. 

Sau đó chạy INLA với cấu trúc cho mô hình có nhiều phân phối (3 trong trường hợp này).

```r
r = inla(formula,
    data =  mydata,
    family = c("gaussian", "gaussian", "gaussian"),
    control.family = list(
        list(),
        list(hyper = list(prec = list(initial = 10, fixed=TRUE))),
        list()))
```
