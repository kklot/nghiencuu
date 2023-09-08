---
title: cmus - delete files from disk
layout: post
categories: [cmus,it,delete]
author:
  display_name: Kinh Nguyen
  login: nguyenkinh
  email: nguyenkinh@ytecongcong.com
  url: https://www.google.com/profiles/112009149785989721279
author_login: Kinh Nguyen
author_email: nguyenkinh@ytecongcong.com
post_gravatar: 886f27ba4b392d00e87a35990840ba13
---

Within `cmus`

1. Create `to-delete` playlist with `:pl-create to-delete`, highlight and mark it with `space` bar.
2. Add song to delete as you listen, or whatever with `y`
3. Export the playlist with `pl-export to-delete`, it contains the  list of songs with absolute and full path.
4. `cat ~/to-delete | xargs rm`
