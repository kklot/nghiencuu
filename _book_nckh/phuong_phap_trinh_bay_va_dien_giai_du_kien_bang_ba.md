---
title: Phương pháp Trình bày và Diễn Giải Dữ kiện
layout: post
chapter: Kỹ năng mềm
chapter_id: 4
post_id: 1
categories: [nckh]
author:
  display_name: Kinh Nguyen
  login: nguyenkinh
  email: nguyenkinh@ytecongcong.com
  url: https://www.google.com/profiles/112009149785989721279
author_login: Kinh Nguyen
author_email: nguyenkinh@ytecongcong.com
---

Mặc dù không có một qui định cụ thể nào trong tạo bảng nhưng có vài nguyên tắc chung được chấp nhận tương đối chuẩn xác.

1.  Tính đơn giản

    Hai hoặc ba bảng nhỏ tốt hơn là một bảng lớn chứa nhiều đặc điểm và biến số. Nhìn chung, bảng có tối đa 3 biến là cách dễ đọc nhất.

2.  Tính tự giải thích

    *   Các từ mã hóa , các từ viết tắt hoặc kí hiệu nên được diễn giải cụ thể ở phần footnote

    *   Mỗi hàng và cột nên được đặt tên chính xác và rõ ràng.

    *   Đơn vị đo nên được đưa vào

    *   Tiêu đề rõ ràng, chính xác và có mục đích. Trả lời các câu hỏi: Cái gì? Khi nào? Ở đâu

    *   Tổng số cũng được trình bày

3.  Tiêu đề của bảng nên được cách khoảng hoặc dòng để phân biệt với bảng. Đối với bảng nhỏ, không cần thiết kẻ các cột dọc bên trong

4.  Nguồn gốc dữ liệu nên được thích ở cuối bảng .

5.  Các ví dụ cụ thể

    *   Đơn giản nhất là bảng tần số 2 cột. Cột thứ nhất liệt kê lớp thành 2 nhóm. Cột thứ 2 thể hiện tần số cho mỗi phân lớp như ở Bảng [tab:addlabel1].

        .8@lc Học vấn cha &amp; Số con sinh sống Tốt nghiệp phổ thông &amp; 50 684 Học trong trường ít hơn 12 năm &amp; 31 774 Tổng &amp; 82 458

        [tab:addlabel1]

    *   Bảng [tab:addlabel1] có thể được mở rộng thành nhiều phân lớp nhỏ chẳng hạn nơi sinh và người tham gia đỡ sinh như bảng [tab:addlabel2]

        Phân bố số sinh sống theo học vấn cha, nơi sinh và người hộ sinh, cả nước, 1968

        | Học vấn cha | Trong bệnh viện | Ngoài bệnh viện | Điều dưỡng | Khác | Tổng |
        | --- | --- | --- | --- | --- | --- |
        | Tốt nghiệp phổ thông | 46606 | 3014 | 910 | 154 | 50 684 |
        | Học trong trường ít hơn 12 năm | 14334 | 3094 | 13 930 | 416 | 31 774 |
        | Tổng | 60940 | 6108 | 14 840 | 570 | 82 458 |

        Nguồn: “Vital Statistics of the United States”, 1968, Volume 1, p.81 [tab:addlabel2]

    *   Việc tổng hợp các dữ liệu sẽ được thực hiện và đơn giản hóa bởi việc hình thành bảng chính yếu ban đầu. Tại bảng này, tất cả dữ liệu có giá trị sẽ được phân lớp cụ thể. Khi việc phân thành các lớp theo hoàn toàn chiều ngang, dữ liệu của đơn biến hoặc đa biến có thể nhận biết mà không cần nguồn dữ liệu gốc.

        Theo dạng chung của bảng chủ đạo như Bảng [tab:addlabel3], chúng ta có thể xác định có bao nhiều người thành thị (A), bao nhiêu nam (B) và bao nhiêu nam thành thị theo từng nhóm tuổi cụ thể (C) được nhập viện.

        Nhập viện phân bố theo nhóm tuổi, nơi cư trú và giới tính, 1968

        |  |  |  |  |  |  |  |  |  |  |
        | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
        | (r)2-4 (r)5-7 (l)8-10 Tuổi | Nam | Nữ | Tổng | Nam | Nữ | Tổng | Nam | Nữ | Tổng |
        | &lt;1 |  |  |  |  |  |  |  |  |  |
        | 1-4 |  |  |  |  |  |  |  |  |  |
        | 5-9 |  |  |  |  |  |  |  |  |  |
        | 10-14 | C |  |  |  |  |  |  |  |  |
        | . |  |  |  |  |  |  |  |  |  |
        | . |  |  |  |  |  |  |  |  |  |
        | . |  |  |  |  |  |  |  |  |  |
        | Tổng |  |  | A |  |  |  | B |  |  |

        [tab:addlabel3]

Định nghĩa: Đồ thị dùng để biểu diễn các biến số định lượng sử dụng hệ tọa độ (thường là trục x, y). Có nhiều loại đồ thị như hệ tọa độ vuông góc, tọa độ cực, dành cho mục đích chuyên biệt (3 chiều). Chúng tôi chỉ trình bày hệ tọa độ vuông góc.

1.  Khái niệm chung

    Đồ thị trên hệ tọa độ vuông góc là những đồ thị bao gồm 2 trục giao nhau ở góc phải của chúng. Mỗi trục có một thang đo cho mục đích cụ thể. Hình [fig:dttq] cho thấy cấu trúc chung của hệ tọa độ vuông góc. Nhìn chung trục x bao gồm các biến độc lập (phương pháp phân loại), và trục y là các biến phụ thuộc (tần số). Như vậy, chúng ta có thể thấy biến đổi của y theo x.

2.  Nguyên tắc chung

    Khi đồ thị chính xác nó cho phép người đọc nắm được tổng quát dữ liệu nhanh chóng. Một vài nguyên tắc quan trọng của đồ thị là:

    *   Càng đơn giản càng hiệu quả. Không dùng quá nhiều dòng và nhiều kí hiệu trong 1 đồ thị.

    *   Không cần giải thích thêm.

    *   Tiêu đề nên để ở cả trên và dưới đồ thị

    *   Khi có trên 1 biến, mỗi biến cần được phân biệt rõ ràng bởi ghi chú hoặc chú giải.

    *   Không nên nhiều dòng như nhau nếu không cần thiết

    *   Các dòng của đồ thị nên có giá trị hơn là mang tính tương đương

    *   Tần số thường trình bày ở trục đứng và các lớp ở trục ngang

    *   Đối với thang chia định lượng, khoảng cách phải bằng nhau ở các trục.

    *   Phân chia theo tỷ lệ nên được chính xác cũng như các đơn vị theo tỷ lệ đó được phân định rõ

3.  Ví dụ cụ thể

    1.  Đồ thị gấp khúc

        Trong một đường đồ thị gấp khúc, một khoảng cách bằng nhau đại diện một số lượng bằng nhau trên trục, nhưng không nhất thiết giữa các trục. Thực hành chọn khoảng phải cẩn trọng cho dù sử dụng khoảng thời gian bằng nhau trên cả hai trục, khoảng rộng trên trục x liên quan đến trục y hoặc ngược lại. Khoảng chia phải được xác định theo cách như vậy để đồ thị phù hợp. Có thể không theo qui tắc này nhưng nếu sử dụng với một đường đồ thị quy mô cần phải cẩn thận vì đồ thị có thể bị hiểu sai. Hình [fig:dttq1] là một ví dụ về một đường đồ thị quy mô

    2.  Đường đồ thị quy mô bán logarit

        Trong đường đồ thị quy mô bán logarit, một phối hợp hoặc trục, thường là trục y, được đo bằng đơn vị logarit, trong khi trục khác được đo bằng đơn vị số. Điều này rất hữu ích trong khi kiểm tra một loạt các dữ liệu trong một khoảng thời gian chúng ta thường quan tâm đến tính tương đối (hoặc tỷ lệ) thay đổi hơn tuyệt đối (số tiền thực tế). Những lợi thế của đường đồ thị bán logarit là:

        1.  Một đường thẳng cho thấy sự thay đổi tỷ lệ cố định

        2.  Độ dốc của đồ thị cho biết tỷ lệ tăng hoặc giảm bớt

        3.  Hai hay nhiều đường song song cho thấy tỷ lệ tăng (hoặc giảm) là như nhau

            Ví dụ về đường đồ thị này ở Hình [fig:dttq1]

    3.  Tổ chức đồ

        Tổ chức đồ là một đồ thị chỉ được sử dụng để trình bày dạng phân phối tần số của dữ liệu liên tục. Không có khoảng cách giữa các ô trên biểu đồ. Biểu đồ này không bị nhầm lẫn với một biểu đồ thanh (có không gian giữa các thanh). Không nên sử dụng một đoạn ngắt quãng trên trục hoành với tổ chức đồ bởi vì nó mô tả tổng diện tích dưới đường cong. Vì đặc điểm này loại đơn giản nhất của biểu đồ này là tạo ra từng loại bằng khoảng thời gian như thể hiện trong Hình [fig:dttq3].

        Để minh hoạ, Hình [fig:dttq3] cho thấy diện tích dưới đường cong phân chia thành từng trường hợp bệnh tật. Thông thường, chỉ có dòng đại diện cho chiều cao của mỗi cột mới được vẽ ra. Để diện tích của mỗi hình chữ nhật trong biểu đồ đại diện một số cụ thể của các ca bệnh, chúng ta để chiều cao cột tượng trưng cho số lượng các trường hợp bệnh trên một đơn vị đo lường (trong hình [fig:dttq3], mỗi ngày) và chiều rộng của đồ thị là phân loại (trong hình [fig:dttq3], khoảng thời gian trong ngày). Do đó, chiều cao thay đổi bao nhiêu lần thì chiều rộng sẽ thay đổi tương đương với số trường hợp bệnh trong vòng một ngày, giống như lấy chiều cao nhân với chiều rộng là diện tích của một hình chữ nhật. Khi xây dựng tổ chức đồ có các khoảng không đồng đều phải cẩn trọng nhiều hơn vì khái niệm tổng diện tích. Hình [fig:dttq4] đã được được lựa chọn để minh họa cho tình trạng này.

        Nói chung, duy nhất một tập hợp các dữ liệu sẽ được hiển thị trên một biểu đồ; Tuy nhiên, nó khá phổ biến trong lĩnh vực y tế công cộng để trình bày dữ liệu cho các trường hợp bệnh - tử vong , nam - nữ , vv …

    4.  Đa giác tần số

        Nếu muốn trình bày nhiều hơn một tập hợp dữ liệu về một phân phối tần số, dữ liệu phải được trình bày dưới hình thức một đa giác tần số . Một đa giác tần số được xây dựng từ một tổ chức đồ, tức là trung điểm của khoảng thời gian giữa các lớp học được kết nối bởi một đường thẳng. Điều này được minh họa trong hình [fig:dttq5].

        Từ khi một đa giác tần số được xây dựng từ một tổ chức đồ, các quy định liên quan đến diện tích dưới đường cong, lớp bình đẳng và bất bình đẳng khoảng thời gian cân đối hoặc không cân đối sẽ được giữ lại. Vì vậy, cần thiết để minh họa cho việc duy trì khái niệm này. Đa giác tần số nên ’đóng’ trong mục đích mô tả khu vực . Việc này được thực hiện bằng cách kết nối điểm đầu tiên và điểm cuối cùng với các đồ thị cơ sở. Các khoảng trong đa giác tần số phải xấp xỉ so với tổ chức đồ. Hình [fig:dttq6] cho thấy đúng cách thức đóng của đa giác tần số. Hình [fig:dttq7] cho thấy cách thức không chính xác.

        Trong hình [fig:dttq6] vùng được đặc trưng bởi A là một phần của biểu đồ nếu dữ liệu được biểu diễn bằng phương pháp đó. Nhằm làm cân bằng cho vùng này, được loại bỏ bởi hình đa giác, điểm C được liên kết với đường chuẩn theo kiểu mà vùng được đặc trưng bởi B sẽ xấp xỉ bằng vùng A.

        Hình [fig:dttq7] mô tả phương pháp không đúng của đóng đa giác tần số bởi vì toàn bộ vùng đặc trưng bởi D bị bỏ sót và không dự tính cho sự cân bằng.

        Trong hình [fig:dttq8] một đa giác tần số có khoảng nhóm cân bằng được cho thấy. Thêm vào đó, hình [fig:dttq9] mô tả một đa giác tần số với khoảng nhóm không cân bằng.

        Một đa giác tần số mô tả ba bộ số liệu được thể hiện trong hình [fig:dttq10].

    5.  Biểu đồ phân tán

        Biểu đồ phân tán là một loại biểu đồ đặc biệt hữu ích trong việc chỉ ra sự liên hệ hoặc mối liên quan giữa hai biến. Ở dạng biểu đồ này một vài bộ dữ liệu đôi được biểu diễn trên cùng biểu đồ. Mô hình được tạo ra bởi các điểm biểu diễn cho thấy sự liên hệ có khả năng. Nếu chúng có xu hướng theo một đường thẳng, sự liên hệ là của tuyến tính tự nhiên. Nếu mô hình không theo một đường thẳng, sự liên hệ là tuyến tính cong. Nếu mô hình chỉ là sự phân tán của các điểm, thì xu hướng gợi ý rằng có khả năng không có sự liên hệ tồn tại. Hình [fig:dttq11] cho thấy một biểu đồ phân tán.

Định nghĩa: biểu đồ là các phương pháp trình bày thông tin thống kê một cách tượng trưng sử dụng duy nhất một tọa độ.

Có rất nhiều loại biểu đồ khác nhau – một số biểu đồ dựa trên chiều dài, tỉ lệ, tọa độ địa lý, và một vài biểu đồ có mục đích sẽ được trình bày trong phần này.

1.  Biểu đồ dựa trên chiều dài

    Hai trong các biểu đồ quan trọng nhất trong loại này là biểu đồ cột và biểu đồ hình.

    *   Biểu đồ cột

        Biểu đồ cột có các cột, tất cả chiều rộng cột giống nhau (không giống biều đồ tần số). Cũng có khoảng cách giữa các cột (cũng không giống biểu đồ tần số). Loại biểu đồ này lý tưởng phù hợp để trình bày dữ liệu so sánh. Các cột có thể được sắp xếp theo chiều ngang cũng như theo chiều dọc (được miêu tả trong Hình [fig:dttq12]). Tốt nhất sắp xếp các cột này hoặc tăng dần hoặc giảm dần để dễ dàng đọc. Khoảng chia không nên được sử dụng với biểu đồ cột vì nó sẽ dẫn đến sự giải thích sai. Các cột có thể được làm tối, nét gạch hoặc tô màu, để nhấn mạnh sự khác nhau giữa các cột. Các cột nên được dán nhãn ở chân và không ở giữa chính biểu đồ, điều này thêm sự bối rối không cần thiết vào biểu đồ khi ưu điểm chính là sự đơn giản của nó. Khi sự so sánh được tạo thành, khoảng cách giữa các cột trong cùng nhóm là tùy ý, nhưng khoảng cách giữa các nhóm là có tính bắt buộc.

    *   Biểu đồ hình

        Biểu đồ hình là sự biến thể trên biểu đồ cột sử dụng một chuỗi các ký hiệu nhận diện nhỏ để trình bày số liệu. Các hình thường được sắp xếp theo hàng ngang, những cũng có thể sắp xếp theo chiều dọc. Mỗi ký hiệu có thể đại diện cho một người hoặc một đơn vị cụ thể. Nhìn chung, một ký hiệu sẽ đại diện một số người hoặc đơn vị ấn định. Số chủ thể được quyết định bởi biến được minh họa, which in turn quyết định chiều dài cột. Hình [fig:dttq14] miêu tả một biểu đồ hình với mỗi người được đại diện bởi một ký hiệu

2.  Biểu đồ theo tỉ lệ

    Hai loại biểu đồ quan trọng nhất trong loại này là biểu đồ thành phần cột và biểu đồ hình bánh

    *   Biểu đồ cột chồng

        Biểu đồ thành phần cột hay còn gọi là biểu đồ cột chồng trong đó các cột được chia theo tỉ lệ được tô màu hoặc làm tối để biểu thị sự phân loại của chúng. Một ví dụ của biểu đồ thành phần cột được giới thiệu ở Hình [fig:dttq15] dưới đây.

    *   Biểu đồ hình bánh

        Biểu đồ hình bánh là biểu đồ sử dụng tỉ lệ hình nêm của một vòng tròn để so sánh. Biều đồ này đôi khi được gọi là biểu đồ hình quạt. Biểu đồ hình bánh phù hợp nhất để miêu tả sự phân chia của tất cả vào trong các phần. Quy ước bắt đầu từ vị trí 12 giờ và sắp xếp các phần theo thứ tự độ lớn, lớn nhất trước, và đi theo chiều kim đồng hồ xung quanh biểu đồ. Để chuyển từ phần trăm sang độ, nhân phần trăm với 3.6, vì 360/100%=3.6.

3.  Biểu đồ tọa độ địa lý

    Biểu đồ tọa độ địa lý là những cái mà dựa trên sự trình bày địa lý sử dụng bản đồ. Dịch bệnh có thể rất dễ dàng được đánh dấu trên bản đồ sự lan rộng địa lý. Cũng như vậy, phần trăm cho thấy cấp độ miễn dịch, v.v., có thể được cho thấy theo cách này. Hình [fig:dttq17] là một sự miêu tả biểu đồ tọa độ địa lý.

4.  Biểu đồ chủ đích đặc biệt

    Ngoài các biểu đồ theo chiều dài, tỉ lệ và tọa độ địa lý, các phương pháp trình bày số liệu trực quan khác bao gồm biểu đồ tiến trình, biểu đồ tổ chức, biểu đồ cá nhân và biểu đồ chức năng.

    1.  Biểu đồ tiến trình

        Những ví dụ của quy trình qua nhà máy xử lý nước thải, quy trình qua nhà máy xử lý nước, hoặc như các ví dụ về biểu đồ tiến trình. Quy trình thực phẩm qua nhà hàng có thể được trình bày trực quan trong biểu đồ tiến trình như ở Hình [fig:dttq18].

    2.  Biểu đồ tổ chức

        Biểu đồ tổ chức đôi khi bị nhầm lẫn với biểu đồ cá nhân và biểu đồ chức năng. Biểu đồ tổ chức nên cho thấy tên văn phòng, đơn vị hoặc bộ phận – không phải cá nhân liên quan hoặc chức năng của họ. Một ví dụ của biểu đồ tổ chức được đưa ra là Hình [fig:dttq19].

Kết luận, thật tốt để xem xét lại và củng cố những gì đã được thảo luận về điểm này.

1.  Chọn công cụ hiểu quả nhất cho dữ liệu và mục đích

    Một vài phương pháp trình bày yêu cầu dữ liệu đầy đủ hơn những loại khác; một số đòi hỏi những tinh chỉnh dữ liệu đặc biệt. Trong những giới hạn đó, quyết định dựa trên ý kiến rõ ràng mà bạn muốn giao tiếp, sau đó chọn phương pháp: đồ thị đường liên tục phù hợp cho một sự so sánh về các xu hướng; biểu đồ cột rõ ràng so sánh nhiều số giới hạn; biểu đồ hình bánh có ưu điểm trong việc so sánh các phần với tổng thể; phân tán đồ rất tốt để cho thấy khuynh hướng.

2.  Chỉ ra ý kiến riêng biệt

    Hạn chế sự trình bày một mục đích hay ý kiến, giới hạn lượng dữ liệu và bao gồm duy nhất loại dữ liệu trong mỗi trình bày. Các quan điểm khác nhau về thông tin (trừ khi chúng được so sánh) cần mỗi trình bày riêng lẻ. Vậy nên làm lượng lớn thông tin hoặc nhiều loại thông tin.

3.  Sử dụng màu đen và trắng để trình bày

    Máy photocopy có thể sao chép màu nhưng có giá thành đắt. Màu có thể được thay thế một cách thích hợp: với các vùng, bằng vùng chấm hoặc sọc chéo; với các đường, bằng các dấu liên tục, chấm, gạch ngang (chiều dài khác nhau ở các đường khác nhau), hoặc sự kết hợp đã nói ở trên.

4.  Sử dụng các nhãn xác định thích hợp, đúng đắn

    Tiêu đề nên bao gồm “cái gì, ở đâu và khi nào” mà nhận biết một cách đầy đủ dữ liệu đưa vào. Tất cả nhãn khác nên rõ ràng, đầy đủ và dễ hiểu – và giồng như tiêu đề, chúng nên ở ngoài khung dữ liệu. Chỉ các chú thích và chú giải (và những cái trong “hộp” tinh gọn mà đặt chúng tách rời khỏi dữ liệu) nên xuất hiện bên trong vùng đồ thị hoặc biểu đồ.

5.  Đưa ra nguồn của bạn

    Ở đâu, hoặc làm thế nào (hoặc cả hai) dữ liệu được thâu nhận là quan trọng. Xác minh hoặc phân tích sâu hơn bởi các thành viên của cử tọa của bạn là khó nếu không phải bất khả thi mà không có sự phô bày các nguồn đầy đủ. Cũng như vậy, tiếp cận thông tin gốc có thể chứng minh hữu ích với cử tọa như các trích dẫn mà bạn trình bày hoặc các kết luận mà bạn đề xuất từ chúng.

6.  Sử dụng cẩn thận trong đề xuất các kết luận

    Đặc biệt, rút ra các kết luận mà phản ánh toàn bộ phần chính yếu của thông tin từ đó trích dẫn dữ liệu được lấy; đề xuất chỉ những kết luận khi dữ liệu mà bạn trình bày có thể hỗ trợ. Nhưng giữ suy nghĩ rằng các bảng, đồ thị và biểu đồ nhấn mạnh sự đa số - đổi lại, tất nhiên, chi tiết. Làm cân bằng cho sự mất cân đối này, cả trong thiết kế và nội dung. Chú thích cuối trang, theo cách quan trọng, bất kỳ một chi tiết quan trọng nào mà đã được làm ẩn. Tránh các kết luận mà không tính đến sự mất cân đối