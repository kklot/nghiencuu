---
title: Vim - Adding another folder to current session
layout: post
categories: [vim,sublime-text,VS-code,project]
author:
  display_name: Kinh Nguyen
  login: nguyenkinh
  email: nguyenkinh@ytecongcong.com
  url: https://www.google.com/profiles/112009149785989721279
author_login: Kinh Nguyen
author_email: nguyenkinh@ytecongcong.com
post_gravatar: 886f27ba4b392d00e87a35990840ba13
---

To mimic project-like feature in Sublime Text or Visual Studio Code, that is
multiple folders are available in search path. This helps the autocomplete of
functions like `buffer`, `edit`,... find out all intended locations.

The approach is:

1. Vim should automatically switch the working directory to where the 
	 the current file is located.
2. The new folder is added automatically to the search path

These are equivalent to adding these to `~/.vimrc`

- Adding `set autochdir`
- Adding `autocmd BufRead *.* set path+=`

Needless to say, save and reload the configuation with `:w | so %`
