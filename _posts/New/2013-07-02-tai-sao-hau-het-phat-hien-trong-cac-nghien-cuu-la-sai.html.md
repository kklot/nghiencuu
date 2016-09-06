--- layout: post status: publish published: true title: Tại sao hầu hết
phát hiện trong các nghiên cứu là sai? author: display\_name: Kinh
Nguyen login: Kinh Nguyen email: nguyenkinh@ytecongcong.com url:
https://www.google.com/profiles/112009149785989721279 author\_login:
Kinh Nguyen author\_email: nguyenkinh@ytecongcong.com author\_url:
https://www.google.com/profiles/112009149785989721279 wordpress\_id:
1412 wordpress\_url: http://www.ytecongcong.com/?p=1412 date:
'2013-07-02 16:20:01 +0200' date\_gmt: '2013-07-02 09:20:01 +0200'
categories: - Thống kê - Nghiên cứu - Home tags: - bayesian - dương giả
comments: \[\] ---

![bad
science](http://www.ytecongcong.com/wp-content/uploads/2012/11/bad-science-150x150.jpg){.alignleft
.size-thumbnail .wp-image-363 width="150" height="150"}

Các phát hiện trong các nghiên cứu đã công bố nhiều khi về sau bị bác bỏ
hoặc trở nên không đáng tin do có thêm các nghiên cứu và bằng chứng sau
này. Việc này xảy ra trong tất cả các thiết kế nghiên cứu, từ thử nghiệm
lâm sàng cho đến các nghiên cứu dịch tễ học và các nghiên cứu về sinh
học phân tử hiện đại.

Các phát hiện sai lệch đang càng trở nên phổ biến trong các nghiên cứu
hiện tại. Tuy vậy điều này cũng không có gì đáng ngạc nhiên khi có thể
chứng minh được hầu hết các phát hiện tuyên bố trong các nghiên cứu là
sai.

Trước tiên để thuận tiện, cần qui ước các từ ngữ sau trong khuôn khổ
này, với một mối liên quan nhất định:

-   **Âm tính:** nghiên cứu cho kết quả **không** có ý nghĩa thống kê
-   **Dương tính**: nghiên cứu cho kết quả có ý nghĩa thống kê
-   <span style="line-height: 13px;">**Dương giả**: một mối liên quan
    thực sự là **KHÔNG** có ý nghĩa thống kê nhưng nghiên cứu cho kết
    quả **CÓ** ý nghĩa thống kê.</span>
-   **Phát hiện**: các phát hiện từ các nghiên cứu được định nghĩa là
    bất cứ mối liên quan có ý nghĩa thống kê nào trong các nghiên
    cứu, v.d. can thiệp là hiệu quả, yếu tố là nguy cơ, là biến số tiên
    đoán hay có mối liên quan có ý nghĩa thống kê.
-   **Giá trị tiên đoán dương (PPV)**: xác suất một mối liên quan thực
    sự có ý nghĩa thống kê, nếu nghiên cứu cho kết quả có ý nghĩa thống
    kê, ta mong muốn PPV càng cao càng tốt.

**Phát hiện dương giả**
=======================

<span style="line-height: 1.6; font-size: 1.3rem;">Nhiều nhà nghiên cứu
đã chỉ ra rằng rất nhiều nghiên cứu đều không được lập lại (không có
nghiên cứu khẳng định lại)</span> và kết luận kết quả nghiên cứu chỉ dựa
vào một nghiên cứu duy nhất và đánh giá quan mức độ ý nghĩa thống kê,
điển hình là p-value&lt; 0.05 (trong khi cách tiếp cận tần suất suy diễn
dựa trên giả định về việc lập lại nghiên cứu nhiều lần) - Xem thêm [*Suy
diễn
Bayesian*](http://www.ytecongcong.com/2013/06/suy-dien-bayesian/). Tóm
tắt và đại diện cho 1 nghiên cứu không thể hoàn toàn dựa trên p-values,
nhưng không may là có một ý tưởng phổ biến là các bài báo nghiên cứu y
học chỉ cần diễn giải dựa trên p-values.

> Có thể chứng minh được là hầu hết các phát hiện trong nghiên cứu là
> sai.

**Chứng minh dựa trên suy diễn Bayes**
======================================

Để đọc tiếp, hiểu một số thuật ngữ sử dụng thêm như sau,

*<span style="line-height: 13px;">Ví dụ tỷ lệ lưu hành bệnh X trong dân
số là 40%:</span>*

-   *<span style="line-height: 13px;">một bệnh nhân khi vào khám bệnh,
    xác suất người này mắc bệnh trước khi có kết quả xét nghiệm là 40% -
    Đây được gọi là **xác suất tiền nghiệm** (prior) trong khuôn khổ suy
    diễn Bayes.</span>*
-   *kết quả xét nghiệm là bệnh nhân có/không có bệnh -  đây là khả năng
    bệnh nhân mắc bệnh, trong Bayes được gọi là **khả dĩ** (likelihood)*
-   *dựa trên xác suất tiền nghiệm -  tỷ lệ lưu hành; khả dĩ - kết quả
    xét nghiệm, bác sĩ có thể đưa ra xác suất tiên đoán dương - đây là
    **xác suất hậu nghiệm** (posterior). *

Xác suất một kết quả nghiên cứu quả thật là đúng phụ thuộc vào xác suất
tiền nghiệm về mối liên quan là thật (trước khi tiến hành nghiên cứu),
năng lực thống kê của nghiên cứu và mức độ ý nghĩa thống kê.

Xem một bảng 2 × 2  trong đó kết quả nghiên cứu được so sánh với một
chuẩn vàng về mối liên quan thực sự trong lĩnh vực nghiên cứu. Giả sử có
*G* mối liên quan được đánh giá và chỉ có 1 mối liên quan là có thật,
khi đó *1/G* là xác suất tiền nghiệm một kết quả nghiên cứu là chính
xác.* *Gọi *R* là tỉ số của số "mối liên quan thật" và "không có mối
liên quan" *R = 1 / (G - 1)*. *R* phụ thuộc vào lĩnh vực nghiên cứu và
có thể biến thiên rất nhiều tùy vào lĩnh vực, có thể là khả năng có mối
liên quan xảy ra là cao hoặc chỉ là rất ít, v.d. chỉ có 1/1000 mối liên
quan là thật.

Khi đó

-   xác suất một mối liên quan là đúng trước khi tiến hành nghiên cứu,
    hay xác suất tiền nghiệm một mối liên quan là đúng là *R ⁄ (R + 1)*.
-   xác suất một nghiên cứu tìm được một mối liên quan thực sự phản ánh
    qua năng lực nghiên cứu 1 − β (một trừ tỉ suất sai loại II).
-   xác suất kết luận có mối liên quan khi khi thực sự không có mối liên
    quan phản ánh qua tỉ suất sai loại I: α.

Giả sử có *c* mối liên quan được điều tra, vọng trị của bảng 2 × 2 được
trình bày trong bảng 1, tính toán bình thường cho bảng 2 x 2 với mức ý
nghĩa thống kê và năng lực cho trước, xác suất sau khi nghiên cứu một
kết quả có thực sự có ý nghĩa thống kê là giá trị tiên đoán dương (PPV).

**Bảng 1. Phát hiện từ nghiên cứu và mối liên quan thật sự**

![](http://www.plosmedicine.org/article/fetchObject.action?uri=info:doi/10.1371/journal.pmed.0020124.t001&representation=PNG_L){.aligncenter}

Theo bảng trên, xác suất một mối liên quan thực sự là đúng nếu kết quả
nghiên cứu cho ra mối liên quan có ý nghĩa thống kê là

\[latex\]\\dfrac{(1-\\beta)R}{(1-\\beta)R + \\alpha} \[/latex\]

Do đó, một phát hiện nghiên cứu sẽ có nhiều khả năng là thực sự có mối
liên quan nếu

\[latex\] (1-\\beta)R &gt;\\alpha \[/latex\]

lưu ý là ta mong muốn đạt được PPV càng cao càng tốt.

Do thông thường, hầu hết các các nghiên cứu dựa trên mức ý nghĩa thống
kê α = 0.05, có nghĩa là một phát hiện từ nghiên cứu sẽ có nhiều khả
năng là đúng nếu (1 − β) x R &gt; 0.05. Do đó, nếu muốn PPV cao, năng
lực nghiên cứu cần cao hơn 0.05 / R, cụ thể là (1 − β) &gt; α / R - **là
điều càng không khả thi khi G càng lớn!**

*Trích: Why Most Published Research Findings Are False, John P. A.
Ioannidis*
