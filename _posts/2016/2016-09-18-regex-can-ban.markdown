---
title: Sử dụng Regex trong R
layout: post
published: false
---

`regex`: regular expression (Xem một số lệnh regex cơ bản [ở đây]())
> Để tránh các lỗi không tương thích với các phiên bản R khác nhau, khi dùng lệnh R nên gán tham số `perl=TRUE`.

R cung cấp 7 hàm `regex` trong package có sẵn `base`. Tất cả đều mặc định là phân biệt chữ hoa chữ thường. Nếu không muốn chỉ cần chọn thêm tham số `ignore.case=TRUE`.

## Tìm giá trị trong các vector ký tự

Hàm `grep` lấy tham số đầu tiên là  takes your regex as the first argument, and the input vector as the second argument. If you pass `value=FALSE` or omit the `value` parameter then `grep` returns a new vector with the indexes of the elements in the input vector that could be (partially) matched by the `regex`. If you pass `value=TRUE`, then `grep` returns a vector with copies of the actual elements in the input vector that could be (partially) matched.

``` r
> grep("a+", c("abc", "def", "cba a", "aa"), perl=TRUE, value=FALSE)
[1] 1     3       4
> grep("a+", c("abc", "def", "cba a", "aa"), perl=TRUE, value=TRUE)
[1] "abc" "cba a" "aa"
```

The **`grepl`** function takes the same arguments as the `grep` function, except for the `value` argument, which is not supported. `grepl` returns a logical vector with the same length as the input vector. Each element in the returned vector indicates whether the regex could find a match in the corresponding string element in the input vector.

``` r
> grepl("a+", c("abc", "def", "cba a", "aa"), perl=TRUE)
[1] TRUE  FALSE TRUE  TRUE
```

The **`regexpr`** function takes the same arguments as `grepl`. `regexpr` returns an integer vector with the same length as the input vector. Each element in the returned vector indicates the character position in each corresponding string element in the input vector at which the (first) regex match was found. A match at the start of the string is indicated with character position 1\. If the regex could not find a match in a certain string, its corresponding element in the result vector is -1\. The returned vector also has a `match.length` attribute. This is another integer vector with the number of characters in the (first) regex match in each string, or -1 for strings that didn't match.

**`gregexpr`** is the same as `regexpr`, except that it finds all matches in each string. It returns a vector with the same length as the input vector. Each element is another vector, with one element for each match found in the string indicating the character position at which that match was found. Each vector element in the returned vector also has a `match.length` attribute with the lengths of all matches. If no matches could be found in a particular string, the element in the returned vector is still a vector, but with just one element -1.

``` r
> regexpr("a+", c("abc", "def", "cba a", "aa"), perl=TRUE)
[1]  1 -1  3  1
attr(,"match.length")
[1]  1 -1  1  2
> gregexpr("a+", c("abc", "def", "cba a", "aa"), perl=TRUE)
[[1]]  [1] 1    attr(,"match.length")  [1] 1
[[2]]  [1] -1   attr(,"match.length")  [1] -1
[[3]]  [1] 3 5  attr(,"match.length")  [1] 1 1
[[4]]  [1] 1    attr(,"match.length")  [1] 2
```

Use **`regmatches`** to get the actual substrings matched by the `regex`. As the first argument, pass the same input that you passed to `regexpr` or `gregexpr` . As the second argument, pass the vector returned by `regexpr` or `gregexpr`. If you pass the vector from `regexpr` then `regmatches` returns a character vector with all the strings that were matched. This vector may be shorter than the input vector if no match was found in some of the elements. If you pass the vector from `regexpr` then `regmatches` returns a vector with the same number of elements as the input vector. Each element is a character vector with all the matches of the corresponding element in the input vector, or NULL if an element had no matches.

``` r
>x <- c("abc", "def", "cba a", "aa")
> m <- regexpr("a+", x, perl=TRUE)
> regmatches(x, m)
[1]  "a"  "a"  "aa"
> m <- gregexpr("a+", x, perl=TRUE)
> regmatches(x, m)
[[1]]  [1] "a"
[[2]]  character(0)
[[3]]  [1] "a"   "a"
[[4]]  [1] "aa"
```

## Replacing Regex Matches in String Vectors

The **`sub`** function has three required parameters: a string with the `regex`, a string with the replacement text, and the input vector. `sub` returns a new vector with the same length as the input vector. If a regex match could be found in a string element, it is replaced with the replacement text. Only the first match in each string element is replaced. If no matches could be found in some strings, those are copied into the result vector unchanged.

Use **`gsub`** instead of `sub` to replace all regex matches in all the string elements in your vector. Other than replacing all matches, `gsub` works in exactly the same way, and takes exactly the same arguments.

You can use the [backreferences](replacebackref.html) `<span class="regexspecial">\1</span>` through `<span class="regexspecial">\9</span>` in the replacement text to reinsert text matched by a [capturing group](brackets.html). You cannot use backreferences to groups 10 and beyond. If your regex has named groups, you can use numbered backreferences to the first 9 groups. There is no replacement text token for the overall match. Place the entire regex in a capturing group and then use `<span class="regexspecial">\1</span>` to insert the whole regex match.

``` r
> sub("(a+)", "z\\1z", c("abc", "def", "cba a", "aa"), perl=TRUE)
[1] "zazbc"  "def"  "cbzaz a"   "zaaz"
> gsub("(a+)", "z\\1z", c("abc", "def", "cba a", "aa"), perl=TRUE)
[1] "zazbc"  "def"  "cbzaz zaz" "zaaz"
```

You can use `<span class="regexmeta">\U</span>` and `<span class="regexmeta">\L</span>` to change the text inserted by all following backreferences to uppercase or lowercase. You can use `<span class="regexmeta">\E</span>` to insert the following backreferences without any change of case. These escapes do not affect literal text.

``` r
> sub("(a+)", "z\\U\\1z", c("abc", "def", "cba a", "aa"), perl=TRUE)
[1] "zAzbc"  "def"  "cbzAz a"   "zAAz"
> gsub("(a+)", "z\\1z", c("abc", "def", "cba a", "aa"), perl=TRUE)
[1] "zAzbc"  "def"  "cbzAz zAz" "zAAz"
```

A very powerful way of making replacements is to assign a new vector to the <tt>regmatches` function when you call it on the result of <tt>gregexpr`. The vector you assign should have as many elements as the original input vector. Each element should be a character vector with as many strings as there are matches in that element. The original input vector is then modified to have all the regex matches replaced with the text from the new vector.

``` r
> x <- c("abc", "def", "cba a", "aa")
> m <- gregexpr("a+", x, perl=TRUE)
> regmatches(x, m) <- list(c("one"), character(0), c("two", "three"), c("four"))
> x
[1]  "onebc"       "def"         "cbtwo three" "four"
```
