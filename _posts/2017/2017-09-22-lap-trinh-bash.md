---
title: Lập trình BASH căn bản
layout: post
tag: nguyenkinh
author:
  display_name: Kinh Nguyen
  login: nguyenkinh
  email: nguyenkinh@ytecongcong.com
  url: https://www.google.com/profiles/112009149785989721279
---

* TOC 
{:toc}

This document tries to be useful in the following situations

*   You have an idea about programming và you want to start coding some shell scripts.
*   You have a vague idea about shell programming và want some sort of reference.
*   You want to see some shell scripts và some comments to start writing your own

A traditional `hello world` script

```
#!/bin/bash
echo Hello World    
```

The first indicates the system which program to use to run the file. The second line is the only action performed by this script, which prints 'Hello World' on the terminal.

## Redirection

Có 3 dạng mô tả file: `stdin`, ``stdout`` và ``stderr`` (`std`=standard).

Bạn có thể

1.  chuyển `stdout` vào một file
2.  chuyển `stderr` vào một file
3.  chuyển `stdout` sang một `stderr`
4.  chuyển `stderr` sang một `stdout`
5.  chuyển `stderr` và `stdout` vào một file
6.  chuyển `stderr` và `stdout` to `stdout`
7.  chuyển `stderr` và `stdout` to `stderr`

1 'represents' `stdout` và 2 `stderr`.

A little note for seeing this things: with the less command you can view both `stdout` (which will remain on the buffer) và the `stderr` that will be printed on the screen, but erased as you try to 'browse' the buffer.

`stdout` 2 file
: This will cause the ouput of a program to be written vào một file.

```
ls -l ls-l.txt
```

Here, a file called `ls-l.txt` will be created và it will contain what you would see on the screen if you type the command 'ls -l' và execute it.

`stderr` 2 file
: This will cause the `stderr` ouput of a program to be written vào một file.

```
grep da * 2grep-errors.txt
```

Here, a file called 'grep-errors.txt' will be created và it will contain what you would see the `stderr` portion of the output of the 'grep da *' command.

`stdout` 2 `stderr`
: This will cause the `stderr` ouput of a program to be written to the same filedescriptor than `stdout`.

```
grep da * 1>&2 
```

Here, the `stdout` portion of the command is sent to `stderr`, you may notice that in differen ways.

`stderr` 2 `stdout`
: This will cause the `stderr` ouput of a program to be written to the same filedescriptor than `stdout`.

```
grep * 2>&1
```

Here, the `stderr` portion of the command is sent to `stdout`, if you pipe to less, you'll see that lines that normally 'dissapear' (as they are written to `stderr`) are being kept now (because they're on `stdout`).

`stderr` và `stdout` 2 file
: This will place every output of a program vào một file. This is suitable sometimes for cron entries, if you want a command to pass in absolute silence.

```
rm -f $(find / -name core) &/dev/null 
```

This (thinking on the cron entry) will delete every file called 'core' in any directory. Notice that you should be pretty sure of what a command is doing if you are going to wipe it's output.

## Pipes

Pipes let you use the output of a program as the input of another one. V.d.
```
ls -l | sed -e "s/[aeio]/u/g"   
```
The command `ls -l` is executed, và it's output, instead of being printed, is sent ("piped") to the `sed` program, which in turn, prints what it has to.

A more difficult way to do `ls -l *.txt`, but for illustrating pipes.
```
ls -l | grep "\.txt$"
```
The output of the program `ls -l` is sent to the `grep` program, which, in turn, will print lines which match the regex `"\.txt$"`.

## Variables

A variable in bash can contain a number, a character, a string of characters. You have no need to declare a variable, just assigning a value to its reference will create it.
```
#!/bin/bash          
STR="Hello World!"
echo $STR    
```
Line 2 creates a variable called `STR` và assigns the string `"Hello World!"` to it. Then the `VALUE` of this variable is retrieved by putting the `$` in at the beginning.

Local variables can be created by using the keyword `_local_`.

```
#!/bin/bash
HELLO=Hello 
function hello {
  local HELLO=World
  echo $HELLO
}
echo $HELLO
hello
echo $HELLO
```

## Conditionals

Conditionals let you decide whether to perform an action or not, this decision is taken by evaluating an expression. The basic form is: 
```
#!/bin/bash
if [ "foo" = "foo" ]; then
    echo expression evaluated as true
fi
```
where `statement` is only executed if `expression` evaluates to true. `2<1` is an expresion that evaluates to false, while `2>1` evaluates to true. The code to be executed if the expression within braces is true can be found after the 'then' word và before `fi` which indicates the end of the conditionally executed code.

```
#!/bin/bash
if [ "foo" = "foo" ]; then
    echo expression evaluated as true
else
    echo expression evaluated as false
fi
```
```
#!/bin/bash
T1="foo"
T2="bar"
if [ "$T1" = "$T2" ]; then
    echo expression evaluated as true
else
    echo expression evaluated as false
fi
```
## Loops for, while và until

`for` loop
: lets you iterate over a series of 'words' within a string. 
```
#!/bin/bash
for i in $( ls ); do
    echo item: $i
done
```
On the second line, we declare `i` to be the variable that will take the different values contained in `$( ls )`. The third line could be longer if needed, or there could be more lines before the `done`. `done` indicates that the code that used the value of `$i` has finished và `$i` can take a new value. 

`while`
: executes a piece of code if the control expression is true, và only stops when it is false (or a explicit `break` is found within the code). 
```
#!/bin/bash 
COUNTER=0
while [  $COUNTER -lt 10 ]; do
    echo The counter is $COUNTER
    let COUNTER=COUNTER+1 
done
```

`until`
: almost equal to the while loop, except that the code is executed while the control expression evaluates to false. `while` và `until` are very similar you are right.

```
#!/bin/bash 
COUNTER=20
until [  $COUNTER -lt 10 ]; do
    echo COUNTER $COUNTER
    let COUNTER-=1
done
```

## Functions

You can use functions to group pieces of code in a more logical way or practice the divine art of recursion. Declaring a function is just a matter of writing function `my_func { my_code }`. Calling a function by writing its name. Functions sample

```
 #!/bin/bash 
function quit {
    exit
}
function hello {
    echo Hello!
}
hello
quit
echo foo 
```

A functions don't need to be declared in order.  When running the script you'll notice that first: the function `hello` is called, second the `quit` function, và the program never reaches line 10.

### Functions with parameters

```
#!/bin/bash 
function quit {
   exit
}  
function e {
    echo $1 
}  
e Hello
e World
quit
echo foo 
```

This script is almost identically to the previous one. The main difference is the funcion `e`. This function, prints the first argument it receives. Arguments, within funtions, are treated in the same manner as arguments given to the script.

## Misc

### Reading user input with read

In many ocations you may want to prompt the user for some input, we can do:

```
#!/bin/bash
echo Please, enter your name
read NAME
echo "Hi $NAME!"
```

Uou can get multiple values with read:

```
#!/bin/bash
echo Please, enter your firstname và lastname
read FN LN 
echo "Hi! $LN, $FN !"
```

### Arithmetic evaluation

On the command line, if you want BASH to evaluate some numbers:

```
echo $((1+1))
```

or like this:

```
echo $[1+1]
```

If you need to use fractions, or more math you can use `bc` because `bash` only uses integers when answering. Instead run
```
echo 3/4|bc -l
```

###  Finding bash

You always use `#!/bin/bash` you might was to give an example of how to find where bash is located. 

- `locate bash` is preferred, but not all machines have locate. 
- `find ./ -name bash`' from the root dir will work, usually.

Suggested locations to check:

```
ls -l /bin/bash
ls -l /sbin/bash
ls -l /usr/local/bin/bash
ls -l /usr/bin/bash
ls -l /usr/sbin/bash
ls -l /usr/local/sbin/bash
```

You may try also `which bash`.

### Getting the return value of a program

In bash, the return value of a program is stored in a special variable called `$?`. This illustrates how to capture the return value of a program, I assume that the directory _dada_ does not exist. (This was also suggested by mike)

```
#!/bin/bash
cd /dada &/dev/null
echo rv: $?
cd $(pwd) &/dev/null
echo rv: $?
```

### Capturing a commands output

This little scripts show all tables from all databases (assuming you got MySQL installed). Also, consider changing the 'mysql' command to use a valid username và password.

```
#!/bin/bash
DBS=`mysql -uroot  -e"show databases"`
for b in $DBS ;
do
    mysql -uroot -e"show tables from $b"
done
```

### Arithmetic operators

`+` `-` `*` `/` `%` (remainder)

### Arithmetic relational operators

`-lt` (<), `-gt` (>), `-le` (<=), `-ge` (>=), `-eq` (==), `-ne` (!=)

## Useful programs

It it higly recommended to be familiarized with these programs (at least). There are tons of little programs that will let you do real magic on the command line.

sed 
: (stream editor) Sed is a non-interactive editor. Instead of altering a file by moving the cursor on the screen, you use a script of editing instructions to sed, plus the name of the file to edit. You can also describe sed as a filter. 

awk
: (manipulation of datafiles, text retrieval và processing) Many implementations of the AWK programming language exist (GNU's gawk và 'new awk' mawk.) AWK scans for a pattern, và for every matching pattern a action will be performed.

grep (print lines matching a search pattern)
: `grep` displays the lines matching a pattern. But grep can do more.

wc 
: (counts lines, words và bytes) Wc doesn't care about the parameter order. Wc always prints them in a standard order.

sort 
: (sort lines of text files)

bc
: (a calculator programming language) Bc is accepting calculations from command line (input from file. not from redirector or pipe), but also from a user interface. 

tput
: initialize a terminal or query terminfo database

## When something goes wrong (debugging)

A nice thing to do is to add on the first line

```
#!/bin/bash -x
```

> This documents comes with no warranty of any kind. và all that

![Read more](http://207.213.123.70/book/)
