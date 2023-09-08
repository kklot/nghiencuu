---
title: Dùng Vim duyệt web với cVim
layout: post
author:
  display_name: Kinh Nguyen
  login: nguyenkinh
  email: nguyenkinh@ytecongcong.com
  url: https://www.google.com/profiles/112009149785989721279
---

cVim có gì hay?

*   Smooth scrolling.
*   Caret/Visual mode.
*   Efficient link hints (with support for custom mappings).
*   Support for custom keyboard mappings.
*   Regex page search with highlighting.
*   Command bar with tab-completion.
*   Google/IMDB/Wikipedia/Amazon/Duckduckgo/Yahoo/Bing search completion.
*   Support for custom search engines.
*   History and Bookmark search/completion with bookmark folder support.

# Cài đặt cVim

1.  Cài đặt qua [Chrome web store](https://chrome.google.com/webstore/detail/cvim/ihlenndgcmojhcghmfjfneahoeklbjjh).

# Cách dùng cVim

Here’s how to use the addon including an example of the configuration settings and bindings by group.

##Settings

You can sync with a Gist file in the settings of the browser addon.

> [https://gist.github.com/sleightz/01275b93fb53a5e53135](https://gist.github.com/sleightz/01275b93fb53a5e53135)

##Keybindings

> **Note:** Uppercase bindings are triggered with `SHIFT` + `KEY` as normal.

**Basic**

*   `j`,`s` – scroll down.
*   `k`,`w` – scroll up.
*   `h` – scroll left.
*   `l` – scroll right.

**Page**

*   `gg` – scroll to top of the current page.
*   `G` – scroll to the bottom of the current page.
*   `zi` – Zoom page in.
*   `zo` – Zoom page out
*   `z0` – Zoom page to original size.

**Links**

*   `f` – open a link in a new tab by pressing the marked keys in the page elements.
*   `G` – scroll to the bottom of the current page. (`SHIFT` + `g`)
*   `W` – open a link in a new tab by pressing the marked keys in the page elements.
*   `W` – open a link in a new window by pressing the marked keys in the page elements.
*   `mf` – open multiple links in a new tab by pressing the marked keys in the page elements.
*   `gy` – Copy a URL from a link to to the _clipboard_.

**Tabs**

*   `x` – Close the current tab.
*   `X` – Open the last closed tab.
*   `t` – Alias for `:tabnew` .
*   `a` – An alias to `:tabnew google` .
*   `<` – Move current tab left.
*   `>` – Move current tab right.

**Tab Navigation**

*   `gt`, `K`, `R` – Navigate to the next tab.
*   `gT`, `J`, `E` – Navigate to the previous tab.
*   `H`, `S` – Go back a page in current tab.
*   `L`, `D` – Go forward a page in current tab.

**Caret/Visual Mode**

*   `v` – Toggle between visual/caret mode.
*   `h`,`j`, `k`, `l` – Move the caret position/extend the visual selection
*   `y` – Copies the current selection.
*   `ESC` – Exit visual mode to caret mode/exit caret mode to normal mode.

##Keybindings Continued

**Core**

`:` – Open the command bar.

`.` – Repeat the last command entered.

`r` – Reload the current tab .

`gR` – Reload the current tab + local cache.

`yy` – Copy the URL of the current page to the clipboard.

**Tìm nội dung trên trang đang xem**

`/` Mở hộp tìm kiếm (nhấn xong gõ chữ cần tìm, xong `Enter`)

`n` – Next search result .

`N` – Previous search result.

`b` – Search through bookmarks.

**Misc**

`I` – An alias to `:history` that let’s you search through browser history.

`zr` – Restart Google Chrome.

`gd` – An alias to `:chrome://downloads`

`P` – Open the clipboard contents in a new tab.

`gq` – Stop the current tab from loading

##Command Mode

**Core**

`:tabnew`(autocomplete) – Open a new tab with the typed/completed search.

`:new` (autocomplete) – Open a new window with the typed/completed search.

`:open` (autocomplete) – Open the typed/completed URL/google search.

`:quit` Close the current tab

`:qall` Close the current window

`:duplicate` – Duplicate the current tab.

**Searching**

`:history` (autocomplete) – Search through browser history.

`:bookmarks` (autocomplete) – Search through bookmarks.

**Misc**

`:tabattach` (autocomplete) – Move the current tab to another open window.

`:tabdetach` – Move the current tab to a new window.

`:restore` (autocomplete) – Restore a previously closed tab (newer versions of Chrome only).

`:mksession` – Create a new session from the current tabs in the active window.

# Tips

*   You can use `@%` in `open` commands to specify the current URL. For example, `:open @%` would essentially refresh the current page.

*   Prepend a number to the command to repeat that command _N_ times.

*   Use the up/down arrows in command/find mode to navigate through previously
    executed commands/searches.

*   You can set directives like `reloadAllTabs` in the settings to a binding.

**Sources**

*   [cVim - Vim bindings for Google Chrome](https://github.com/1995eaton/chromium-vim) – cVim Github page.
