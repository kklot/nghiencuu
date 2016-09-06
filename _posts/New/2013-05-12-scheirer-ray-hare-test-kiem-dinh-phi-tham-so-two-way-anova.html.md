--- layout: post status: publish published: true title:
'Scheirer-Ray-Hare test: kiểm định phi tham số two-way ANOVA' author:
display\_name: Kinh Nguyen login: Kinh Nguyen email:
nguyenkinh@ytecongcong.com url:
https://www.google.com/profiles/112009149785989721279 author\_login:
Kinh Nguyen author\_email: nguyenkinh@ytecongcong.com author\_url:
https://www.google.com/profiles/112009149785989721279 wordpress\_id: 975
wordpress\_url: http://www.ytecongcong.com/?p=975 date: '2013-05-12
07:07:17 +0200' date\_gmt: '2013-05-12 00:07:17 +0200' categories: - Tin
mới - Thống kê - Nghiên cứu - Home - R tags: - Scheirer-Ray-Hare -
nonparametric two-way ANOVA comments: \[\] ---

[![](http://www.ytecongcong.com/wp-content/uploads/2013/04/R.png "R"){.alignnone
.wp-image-978 width="580"
height="347"}](http://www.ytecongcong.com/wp-content/uploads/2013/04/R.png)

Được nhắc tới trong sách *CALVIN, D. 2011 \[1\] *nhưng không có sẵn
trong các phần mềm, kể cả các diễn đàn thống kê nước ngoài. Code R sau
để tạo và tính p-value kiểm định cho ảnh hưởng chính cũng như tương tác
của hai nhân tố dựa trên sắp hạng dữ kiện nghiên cứu.

Lưu ý, dữ kiện thao tác tên là **data.wide **được sắp xếp như dữ kiện
cho mô hình ANOVA bình thường, biến số **days\_fresh** là biến số phụ
thuộc trong phân tích với 2 nhân tố là **comp** có 15 nhóm và
**species** có 2 nhóm.

Để tính, chỉ cần thay đổi tên biến và giữ nguyên các câu lệnh.

``` {.lang:r .decode:true title="Kiểm định với R"}
# Sắp hạng dữ kiện

data.wide$rank = rank(data.wide$days_fresh,ties.method="average")

# Chuyển biến số comp thành factor

data.wide$comp = as.factor(data.wide$comp)
# Lập mô hình ANOVA bình thường, với ảnh hưởng của các nhân tố và tương tác dựa trên dữ kiện sắp hạng

paranova = anova(lm(data.wide$rank~ data.wide$comp+data.wide$species+data.wide$comp*data.wide$species))

# Tính Mean square corrected total

SS_correctedtotal = sum(paranova[1:4,2])
MS_correctedtotal = SS_correctedtotal/sum(paranova[1:4,1])

# Tính các số thống kê = SS/MS_correctedtotal cho mỗi nhân tố và tương tác

kn_comp = paranova[1,2]/MS_correctedtotal
kn_species = paranova[2,2]/MS_correctedtotal
kn_inter = paranova[3,2]/MS_correctedtotal

# Tính p-value cho từng ảnh tương tác

p_comp = 1-pchisq(kn_comp,paranova[1,1])
p_species = 1-pchisq(kn_species,paranova[2,1])
p_inter = 1-pchisq(kn_inter,paranova[3,1])
p_comp;p_species;p_inter
```

### Tài liệu tham khảo

1.  CALVIN, D. 2011. Choosing and Using Statistics:A Biologist’s Guide,
    A John Wiley & Sons, Ltd., Publication.

