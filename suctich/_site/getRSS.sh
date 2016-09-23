#!/bin/bash
echo "Getting news links..."
wget -i "sources.txt" -P _homnay/
cd _homnay
for i in *.rss; do
  sed -n 's:.* <title>\(.*\)</title>.*:\1:p' $i | awk '!seen[$0]++' > title.txt
  sed -n 's:.* <link>\(.*\)</link>.*:\1:p' $i | awk '!seen[$0]++' > link.txt
done
kLineNo=1
for j in `cat link.txt`; do
  tuade="$(echo -e $(echo "## ") $(sed -n "${kLineNo}p" title.txt) $(echo "\n"))"
  noidung="$(sumy lex-rank --url=$j)"
  if [[ ${#noidung} > 0 ]]; then
      echo -e $tuade$(echo "\n")$noidung $(echo "\n")["Đọc thêm...&#187;"]\($j\) >> news.md
  fi
  ((kLineNo++))
done
echo "Done!"
