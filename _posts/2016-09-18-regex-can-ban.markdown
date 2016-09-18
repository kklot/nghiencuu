---
title: Regex căn bản
layout: post
published: false
---

| **Chỉ ký tự** |
---|---
| `.` | Bất kể ký tự nào, ngoại trừ xuống hàng |
| `\w \d \s` | từ, số, khoảng trắng |
| `\W \D \S` | ngoại trừ từ, số, khoảng trắng |
| `[abc]` | bất kỳ a, b, hay c |
| `[^abc]` | ngoại trừ a, b, hay c |
| `[a-g]` | ký tự từ a đến g |
| **Chỉ vị trí** |
| `^abc$` | bắt đầu/kết thúc của chuỗi ký tự |
| `\b \B` | word, not-word boundary |
| Escaped ký tự |
| `\. \* \\` | escaped special kys twj |
| `\t \n \r` | tab, linefeed, carriage return |
| `\u00A9` | unicode escaped © |
| Groups & Lookaround |
| `(abc)` | capture group |
| `\1` | backreference to group #1 |
| `(?:abc)` | non-capturing group |
| `(?=abc)` | positive lookahead |
| `(?!abc)` | negative lookahead |
| Quantifiers & Alternation |
| `a* a+ a?` | 0 or more, 1 or more, 0 or 1 |
| `a{5} a{2,}` | exactly five, two or more |
| `a{1,3}` | between one & three |
| `a+? a{2,}?` | match as few as possible |
| `ab|cd` | match ab or cd |

# Regular Expressions with The R Language

The R Project for Statistical Computing provides seven regular expression functions in its <tt class="code">base</tt> package. The R documentation claims that the default flavor implements POSIX extended regular expressions. That is not correct. In R 2.10.0 and later, the default regex engine is a modified version of Ville Laurikari's TRE engine. It mimics POSIX but deviates from the standard in many subtle and not-so-subtle ways. What this website says about [POSIX ERE](posix.html) does not (necessarily) apply to R.

Older versions of R used the [GNU library](gnu.html) to implement both POSIX BRE and ERE. ERE was the default. Passing the <tt>extended=FALSE</tt> parameter allowed you to switch to BRE. This parameter was deprecated in R 2.10.0 and removed in R 2.11.0.

The best way to use regular expressions with R is to pass the <tt class="code">perl=TRUE</tt> parameter. This tells R to use the [PCRE regular expressions library](pcre.html). When this website talks about R, it assumes you're using the <tt class="code">perl=TRUE</tt> parameter.

All the functions use case sensitive matching by default. You can pass <tt class="code">ignore.case=TRUE</tt> to make them case insensitive. R's functions do not have any parameters to set any other matching modes. When using <tt class="code">perl=TRUE</tt>, as you should, you can add [mode modifiers](modifiers.html) to the start of the regex.

## Finding Regex Matches in String Vectors

The **<tt class="code">grep</tt>** function takes your regex as the first argument, and the input vector as the second argument. If you pass <tt class="code">value=FALSE</tt> or omit the <tt class="code">value</tt> parameter then <tt class="code">grep</tt> returns a new vector with the indexes of the elements in the input vector that could be (partially) matched by the regular expression. If you pass <tt class="code">value=TRUE</tt>, then <tt class="code">grep</tt> returns a vector with copies of the actual elements in the input vector that could be (partially) matched.

``` r
> grep("a+", c("abc", "def", "cba a", "aa"), perl=TRUE, value=FALSE)
[1] 1     3       4
> grep("a+", c("abc", "def", "cba a", "aa"), perl=TRUE, value=TRUE)
[1] "abc" "cba a" "aa"
```

The **<tt class="code">grepl</tt>** function takes the same arguments as the <tt class="code">grep</tt> function, except for the <tt class="code">value</tt> argument, which is not supported. <tt class="code">grepl</tt> returns a logical vector with the same length as the input vector. Each element in the returned vector indicates whether the regex could find a match in the corresponding string element in the input vector.

``` r
> grepl("a+", c("abc", "def", "cba a", "aa"), perl=TRUE)
[1] TRUE  FALSE TRUE  TRUE
```

The **<tt class="code">regexpr</tt>** function takes the same arguments as <tt class="code">grepl</tt>. <tt class="code">regexpr</tt> returns an integer vector with the same length as the input vector. Each element in the returned vector indicates the character position in each corresponding string element in the input vector at which the (first) regex match was found. A match at the start of the string is indicated with character position 1\. If the regex could not find a match in a certain string, its corresponding element in the result vector is -1\. The returned vector also has a <tt class="code">match.length</tt> attribute. This is another integer vector with the number of characters in the (first) regex match in each string, or -1 for strings that didn't match.

**<tt class="code">gregexpr</tt>** is the same as <tt class="code">regexpr</tt>, except that it finds all matches in each string. It returns a vector with the same length as the input vector. Each element is another vector, with one element for each match found in the string indicating the character position at which that match was found. Each vector element in the returned vector also has a <tt class="code">match.length</tt> attribute with the lengths of all matches. If no matches could be found in a particular string, the element in the returned vector is still a vector, but with just one element -1.

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

Use **<tt class="code">regmatches</tt>** to get the actual substrings matched by the regular expression. As the first argument, pass the same input that you passed to <tt class="code">regexpr</tt> or <tt class="code">gregexpr</tt> . As the second argument, pass the vector returned by <tt class="code">regexpr</tt> or <tt class="code">gregexpr</tt>. If you pass the vector from <tt class="code">regexpr</tt> then <tt class="code">regmatches</tt> returns a character vector with all the strings that were matched. This vector may be shorter than the input vector if no match was found in some of the elements. If you pass the vector from <tt class="code">regexpr</tt> then <tt class="code">regmatches</tt> returns a vector with the same number of elements as the input vector. Each element is a character vector with all the matches of the corresponding element in the input vector, or NULL if an element had no matches.

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

The **<tt class="code">sub</tt>** function has three required parameters: a string with the regular expression, a string with the replacement text, and the input vector. <tt class="code">sub</tt> returns a new vector with the same length as the input vector. If a regex match could be found in a string element, it is replaced with the replacement text. Only the first match in each string element is replaced. If no matches could be found in some strings, those are copied into the result vector unchanged.

Use **<tt class="code">gsub</tt>** instead of <tt class="code">sub</tt> to replace all regex matches in all the string elements in your vector. Other than replacing all matches, <tt class="code">gsub</tt> works in exactly the same way, and takes exactly the same arguments.

You can use the [backreferences](replacebackref.html) <tt class="code"><span class="regexspecial">\1</span></tt> through <tt class="code"><span class="regexspecial">\9</span></tt> in the replacement text to reinsert text matched by a [capturing group](brackets.html). You cannot use backreferences to groups 10 and beyond. If your regex has named groups, you can use numbered backreferences to the first 9 groups. There is no replacement text token for the overall match. Place the entire regex in a capturing group and then use <tt class="code"><span class="regexspecial">\1</span></tt> to insert the whole regex match.

``` r
> sub("(a+)", "z\\1z", c("abc", "def", "cba a", "aa"), perl=TRUE)
[1] "zazbc"  "def"  "cbzaz a"   "zaaz"   
> gsub("(a+)", "z\\1z", c("abc", "def", "cba a", "aa"), perl=TRUE)
[1] "zazbc"  "def"  "cbzaz zaz" "zaaz"
```

You can use <tt class="code"><span class="regexmeta">\U</span></tt> and <tt class="code"><span class="regexmeta">\L</span></tt> to change the text inserted by all following backreferences to uppercase or lowercase. You can use <tt class="code"><span class="regexmeta">\E</span></tt> to insert the following backreferences without any change of case. These escapes do not affect literal text.

``` r
> sub("(a+)", "z\\U\\1z", c("abc", "def", "cba a", "aa"), perl=TRUE)
[1] "zAzbc"  "def"  "cbzAz a"   "zAAz"   
> gsub("(a+)", "z\\1z", c("abc", "def", "cba a", "aa"), perl=TRUE)
[1] "zAzbc"  "def"  "cbzAz zAz" "zAAz"
```

A very powerful way of making replacements is to assign a new vector to the <tt>regmatches</tt> function when you call it on the result of <tt>gregexpr</tt>. The vector you assign should have as many elements as the original input vector. Each element should be a character vector with as many strings as there are matches in that element. The original input vector is then modified to have all the regex matches replaced with the text from the new vector.

``` r
> x <- c("abc", "def", "cba a", "aa")
> m <- gregexpr("a+", x, perl=TRUE)
> regmatches(x, m) <- list(c("one"), character(0), c("two", "three"), c("four"))
> x
[1]  "onebc"       "def"         "cbtwo three" "four"
```