--- layout: post status: publish published: true title: Người khác cười
với mình mỗi lúc gặp nhau nghĩa là gì? author: display\_name: Kinh
Nguyen login: Kinh Nguyen email: nguyenkinh@ytecongcong.com url:
https://www.google.com/profiles/112009149785989721279 author\_login:
Kinh Nguyen author\_email: nguyenkinh@ytecongcong.com author\_url:
https://www.google.com/profiles/112009149785989721279 wordpress\_id: 948
wordpress\_url: http://www.ytecongcong.com/?p=948 date: '2013-03-28
17:36:48 +0100' date\_gmt: '2013-03-28 10:36:48 +0100' categories: - Tin
mới - Chia sẻ - Home tags: - bayes - bayesian - statistics - love - cười
comments: \[\] ---

Để đơn giản, áp dụng lý thuyết Bayes' để tính xác suất người đó thích
mình nếu cười với mình:

![P(like|smile) =
\\frac{P(smile|like)P(like)}{P(smile)}](http://qlx.is.quoracdn.net/main-8969ad28cacf4658.png "P(like|smile) = \frac{P(smile|like)P(like)}{P(smile)}"){width="326"
height="48"}

Với:

-   ![P(like|smile)](http://qlx.is.quoracdn.net/main-b8aa62200e6f2ec9.png "P(like|smile)"){width="115"
    height="21"}  là điều mình muốn biết: xác suất người đó thích khi
    biết rằng người đó cười với mình.
-   ![P(smile|like)](http://qlx.is.quoracdn.net/main-e70c300d40d890bd.png "P(smile|like)"){width="115"
    height="21"} là xác suất người đó sẽ cười khi nhìn thấy một người
    người đó thích.
-   ![P(like)](http://qlx.is.quoracdn.net/main-16a355fbadfa2d54.png "P(like)"){width="62"
    height="21"} là xác suất người đó thích một người ngẫu nhiên bất kì.
-   ![P(smile)](http://qlx.is.quoracdn.net/main-339a6846b26084ad.png "P(smile)"){width="77"
    height="21"} là xác suất người đó cười với một người ngẫu nhiên
    bất kì.

Chẳng hạn với hai trường hợp đặc biệt là

1\. Giả sử người đó cười với tất cả mọi người thì rõ ràng là việc người
đó cười với mình không có ý nghĩa gì cả, cụ thể:

-   ![P(smile|like) =
    1](http://qlx.is.quoracdn.net/main-e31512d57aa0ded4.png "P(smile|like) = 1"){width="152"
    height="21"}  và
    ![P(smile)=1](http://qlx.is.quoracdn.net/main-a3072bdf2cf13b95.png "P(smile)=1"){width="114"
    height="21"} do đó  ![P(like|smile)
    = P(like)](http://qlx.is.quoracdn.net/main-4e5918fbf301d17b.png "P(like|smile) = P(like)"){width="205"
    height="21"} nghĩa là dù có  biết người đó cười với mình cũng không
    làm thay đổi điều gì.

2\. Hoặc giả người đó sẽ cười với tất cả những người người đó thích, và
chỉ cười với những người người đó thích, khi đó  xác suất cười

-   ![P(smile)
    = P(like)](http://qlx.is.quoracdn.net/main-20af47138898723f.png "P(smile) = P(like)"){width="167"
    height="21"}  và ![P(smile|like) =
    1](http://qlx.is.quoracdn.net/main-e31512d57aa0ded4.png "P(smile|like) = 1"){width="152"
    height="21"} nên ta có ![P(like|smile) =
    1](http://qlx.is.quoracdn.net/main-64226b3c2a00f388.png "P(like|smile) = 1"){width="152"
    height="21"} và rõ ràng người đó thích mình.

Còn trong trường hợp bình thường, cần phải tìm tỉ số giữa xác suất mà
người đó cười với người người đó thích và xác suất người đó cười với bất
kì ai nói chung rồi nhân với tỷ lệ người người đó thích ta sẽ có được
câu trả lời.

Ta thấy, người đó càng cười nhiều với tất cả mọi người thì cơ hội người
đó thích mình càng thấp, người đó càng cười với người người đó thích thì
cơ hội người đó thích mình càng cao. Và dĩ nhiên nếu ...người đó càng
thích nhiều người hơn thì cơ hội người đó thích mình cũng cao hơn.  Dĩ
nhiên, là chưa ai công bố số liệu về các giá trị này.

http://www.quora.com
