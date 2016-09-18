---
layout: "post"
title: "Nhắc bài Regex"
date: "2016-09-18 22:17"
---

| **Chỉ ký tự** ||
---|---
| `.` | Bất kể ký tự nào, ngoại trừ xuống hàng |
| `\w \d \s` | từ, số, khoảng trắng |
| `\W \D \S` | ngoại trừ từ, số, khoảng trắng |
| `[abc]` | bất kỳ a, b, hay c |
| `[^abc]` | ngoại trừ a, b, hay c |
| `[a-g]` | ký tự từ a đến g |
| **Chỉ vị trí** |
| `^abc$` | bắt đầu/kết thúc của chuỗi ký tự |
| `\b \B` | biên của từ, không phải từ |
| Các ký tự đặc biệt |
| `\. \* \\` | Ký tự `.`, `*`, và `\`  |
| `\t \n` | tab, xuống hàng |
| `\u00A9` | Ký tự đặc biệt © |
| Nhóm & hướng tìm |
| `(abc)` | ghi nhóm |
| `\1` | chỉ ngược lại nhóm tham chiếu số 1 |
| `(?:abc)` | nhóm không ghi |
| `(?=abc)` | tìm tới trước nếu có `abc` |
| `(?!abc)` | tìm tới trước nếu **không** có `abc` |
| Số lượng |
| `a* a+ a?` | 0 hoặc hơn, 1 hoặc hơn, 0 hoặc 1 |
| `a{5} a{2,}` | có đúng năm, có 2 hoặc hơn |
| `a{1,3}` | có từ một đến ba |
| `a+? a{2,}?` | khớp càng ít càng tốt (khớp lần gặp đầu tiên) |
| `ab|cd` | tìm `ab` hoặc `cd` |
