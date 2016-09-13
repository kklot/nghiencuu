---
title: Cách chọn kiểm định thống kê
layout: post
permalink: thongkegi/
profile: true
published: true
---

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="/assets/js/conditional.js"></script>

Chọn 3 bước để giúp chọn phương pháp phân tích thống kê phù hợp cho vấn đề. Kết quả đi kèm với liên kết chạy phân tích bằng R. Xem từ vựng phía dưới để giúp lựa chọn.

<form id="live_form">
<div class="form-group">
	<h2> Có bao nhiêu biến số phụ thuộc?</h2>
	<div class="cau1">
   		<div class="radio"> <label class="radio"> <input name="c1" type="radio" value="1"/> 1 </label> </div>
   		<div class="radio"> <label class="radio"> <input name="c1" type="radio" value="2"/> 2+ </label> </div>
   		<div class="radio"> <label class="radio"> <input name="c1" type="radio" value="3"/> 2 nhóm, mỗi nhóm 2+ </label> </div>
  	</div>
</div>
 <div class="cau2 hidden">
 	<h2> Biến số độc lập (BSĐL) có đặc điểm gì? </h2>
 	<div class="cau21 hidden">
	   <div class="radio"> <label class="radio"> <input name="c2" type="radio" value="1"/> Không có biến số độc lập nào (1 dân số) </label> </div>
	   <div class="radio"> <label class="radio"> <input name="c2" type="radio" value="2"/> Có 1 BSĐL với 2 nhóm, độc lập lẫn nhau </label> </div>
	   <div class="radio"> <label class="radio"> <input name="c2" type="radio" value="3"/> 1 BSĐL với 2+ nhóm, độc lập lẫn nhau </label> </div>
	   <div class="radio"> <label class="radio"> <input name="c2" type="radio" value="4"/> 1 BSĐL với 2 nhóm, phụ thuộc lẫn nhau </label> </div>
	   <div class="radio"> <label class="radio"> <input name="c2" type="radio" value="5"/> 1 BSĐL với 2+ nhóm, phụ thuộc lẫn nhau </label> </div>
	   <div class="radio"> <label class="radio"> <input name="c2" type="radio" value="6"/> 2+ BSĐL, độc lập lẫn nhau </label> </div>
	   <div class="radio"> <label class="radio"> <input name="c2" type="radio" value="7"/> 1 BSĐL không liên tục </label> </div>
	   <div class="radio"> <label class="radio"> <input name="c2" type="radio" value="8"/> 1+ BSĐL không liên tục và/hoặc 1+ BSĐL phân nhóm</label> </div>
  	</div>
  	<div class="cau22 hidden">
	   <div class="radio"> <label class="radio"> <input name="c2" type="radio" value="9" /> 1 BSĐL với 2/+ nhóm, độc lập lẫn nhau </label> </div>
	   <div class="radio"> <label class="radio"> <input name="c2" type="radio" value="10"/> 2+ </label> </div>
	   <div class="radio"> <label class="radio"> <input name="c2" type="radio" value="11"/> 0 </label> </div>
  	</div>
  	<div class="cau23 hidden">
	   <div class="radio"> <label class="radio"> <input name="c2" type="radio" value="12"/> 0 </label> </div>
  	</div>
 </div>
 <div class="cau3 hidden">
 	<h2> Bản chất của biến số phụ thuộc là </h2>
  	<div class="cau31 hidden">
	   <div class="radio"> <label class="radio"> <input name="c3" type="radio" value="1"/> Liên tục và Bình thường </label> </div>
	   <div class="radio"> <label class="radio"> <input name="c3" type="radio" value="2"/> Thứ tự hoặc không liên tục </label> </div>
	   <div class="radio"> <label class="radio"> <input name="c3" type="radio" value="3"/> Phân nhóm (2 nhóm) </label> </div>
	   <div class="radio"> <label class="radio"> <input name="c3" type="radio" value="4"/> Phân nhóm </label> </div>
  	</div>
  	<div class="cau32 hidden">
	   <div class="radio"> <label class="radio"> <input name="c3" type="radio" value="5"/> Liên tục và Bình thường </label> </div>
	   <div class="radio"> <label class="radio"> <input name="c3" type="radio" value="6"/> Thứ tự hoặc không liên tục </label> </div>
	   <div class="radio"> <label class="radio"> <input name="c3" type="radio" value="7"/> Phân nhóm (cỡ mẫu lớn) </label> </div>
	   <div class="radio"> <label class="radio"> <input name="c3" type="radio" value="8"/> Phân nhóm (cỡ mẫu nhỏ) </label> </div>
  	</div>
  	<div class="cau33 hidden">
	   <div class="radio"> <label class="radio"> <input name="c3" type="radio" value="9"/> Liên tục và Bình thường </label> </div>
	   <div class="radio"> <label class="radio"> <input name="c3" type="radio" value="10"/> Thứ tự hoặc không liên tục </label> </div>
	   <div class="radio"> <label class="radio"> <input name="c3" type="radio" value="11"/> Phân nhóm </label> </div>
  	</div>
  	<div class="cau34 hidden">
	   <div class="radio"> <label class="radio"> <input name="c3" type="radio" value="12"/> Liên tục và Bình thường </label> </div>
	   <div class="radio"> <label class="radio"> <input name="c3" type="radio" value="13"/> Thứ tự hoặc không liên tục </label> </div>
	   <div class="radio"> <label class="radio"> <input name="c3" type="radio" value="14"/> Phân nhóm </label> </div>
  	</div>
  	<div class="cau35 hidden">
	   <div class="radio"> <label class="radio"> <input name="c3" type="radio" value="15"/> Liên tục và Bình thường </label> </div>
	   <div class="radio"> <label class="radio"> <input name="c3" type="radio" value="16"/> Thứ tự hoặc không liên tục </label> </div>
	   <div class="radio"> <label class="radio"> <input name="c3" type="radio" value="17"/> Phân nhóm </label> </div>
  	</div>
  	<div class="cau36 hidden">
	   <div class="radio"> <label class="radio"> <input name="c3" type="radio" value="18"/> Liên tục và Bình thường </label> </div>
	   <div class="radio"> <label class="radio"> <input name="c3" type="radio" value="19"/> Thứ tự hoặc không liên tục </label> </div>
	   <div class="radio"> <label class="radio"> <input name="c3" type="radio" value="20"/> Phân nhóm </label> </div>
  	</div>
  	<div class="cau37 hidden">
	   <div class="radio"> <label class="radio"> <input name="c3" type="radio" value="21"/> Liên tục và Bình thường </label> </div>
	   <div class="radio"> <label class="radio"> <input name="c3" type="radio" value="22"/> Liên tục và Bình thường (lập mô hình?) </label> </div>
	   <div class="radio"> <label class="radio"> <input name="c3" type="radio" value="23"/> Thứ tự hoặc không liên tục </label> </div>
	   <div class="radio"> <label class="radio"> <input name="c3" type="radio" value="24"/> Phân nhóm </label> </div>
  	</div>
  	<div class="cau38 hidden">
	   <div class="radio"> <label class="radio"> <input name="c3" type="radio" value="25"/> Liên tục và Bình thường (lập mô hình?) </label> </div>
	   <div class="radio"> <label class="radio"> <input name="c3" type="radio" value="26"/> Liên tục và Bình thường </label> </div>
	   <div class="radio"> <label class="radio"> <input name="c3" type="radio" value="27"/> Phân nhóm (lập mô hình?) </label> </div>
	   <div class="radio"> <label class="radio"> <input name="c3" type="radio" value="28"/> Phân nhóm (muốn phân loại?) </label> </div>
  	</div>
  	<div class="cau39 hidden">
	   <div class="radio"> <label class="radio"> <input name="c3" type="radio" value="29"/> Liên tục và Bình thường </label> </div> </div>
  	<div class="cau310 hidden">
	   <div class="radio"> <label class="radio"> <input name="c3" type="radio" value="30"/> Liên tục và Bình thường </label> </div> </div>
  	<div class="cau311 hidden">
	   <div class="radio"> <label class="radio"> <input name="c3" type="radio" value="31"/> Liên tục và Bình thường </label> </div> </div>
  	<div class="cau312 hidden">
	   <div class="radio"> <label class="radio"> <input name="c3" type="radio" value="32"/> Liên tục và Bình thường </label> </div> </div>
 </div>
 <div class="result hidden">
 	<h2> Kiểm định phù hợp </h2>
 	<div class="r1 hidden"> <a href="/kiemdinhR/#r1"> Kiểm định trung bình một mẫu </a> </div>
 	<div class="r2 hidden"> <a href="/kiemdinhR/#r2"> Kiểm định trung vị một mẫu </a> </div>
 	<div class="r3 hidden"> <a href="/kiemdinhR/#r3"> Kiểm định nhị thức  </a> </div>
 	<div class="r4 hidden"> <a href="/kiemdinhR/#r4"> Chi-bình phương GOF </a> </div>
 	<div class="r5 hidden"> <a href="/kiemdinhR/#r5"> Kiểm định trung bình 2 mẫu độc lập </a> </div>
 	<div class="r6 hidden"> <a href="/kiemdinhR/#r6"> Kiểm định Wilcoxon-Mann Whitney  </a> </div>
 	<div class="r7 hidden"> <a href="/kiemdinhR/#r7"> Kiểm định Chi-bình phương  </a> </div>
 	<div class="r8 hidden"> <a href="/kiemdinhR/#r8"> Kiểm định chính xác Fisher's  </a> </div>
 	<div class="r9 hidden"> <a href="/kiemdinhR/#r9"> ANOVA một chiều </a> </div>
 	<div class="r10 hidden"> <a href="/kiemdinhR/#r10"> Kiểm định Kruskal Wallis </a> </div>
 	<div class="r11 hidden"> <a href="/kiemdinhR/#r7"> Kiểm định Chi-bình phương  </a> </div>
 	<div class="r12 hidden"> <a href="/kiemdinhR/#r12"> Kiểm định t bắt cặp</a> </div>
 	<div class="r13 hidden"> <a href="/kiemdinhR/#r13"> Kiểm định Wilcoxon sắp hạng dựa theo dấu </a> </div>
 	<div class="r14 hidden"> <a href="/kiemdinhR/#r14"> Kiểm định McNemar </a> </div>
 	<div class="r15 hidden"> <a href="/kiemdinhR/#r15"> ANOVA một chiều đo lường lập lại </a> </div>
 	<div class="r16 hidden"> <a href="/kiemdinhR/#r16"> Kiểm định Friedman  </a> </div>
 	<div class="r17 hidden"> <a href="/kiemdinhR/#r17"> Hồi quy logistic đo lường lập lại </a> </div>
 	<div class="r18 hidden"> <a href="/kiemdinhR/#r18"> ANOVA giai thừa </a> </div>
 	<div class="r19 hidden"> <a href="/kiemdinhR/#r19"> Hồi quy logistic thứ tự </a> </div>
 	<div class="r20 hidden"> <a href="/kiemdinhR/#r20"> Hồi quy logistic giai thừa </a> </div>
 	<div class="r21 hidden"> <a href="/kiemdinhR/#r21"> Hệ số tương quan </a> </div>
 	<div class="r22 hidden"> <a href="/kiemdinhR/#r22"> Hồi quy tuyến tính đơn hiệp biến </a> </div>
 	<div class="r23 hidden"> <a href="/kiemdinhR/#r23"> Hệ số tương quan phi tham số </a> </div>
 	<div class="r24 hidden"> <a href="/kiemdinhR/#r24"> Hồi quy logistic đơn hiệp biến </a> </div>
 	<div class="r25 hidden"> <a href="/kiemdinhR/#r25"> Hồi quy đa hiệp biến </a> </div>
 	<div class="r26 hidden"> <a href="/kiemdinhR/#r26"> Phân tích hiệp phương sai </a> </div>
 	<div class="r27 hidden"> <a href="/kiemdinhR/#r27"> Hồi quy logistic đa hiệp biến </a> </div>
 	<div class="r28 hidden"> <a href="/kiemdinhR/#r28"> Phân tích phân biệt </a> </div>
 	<div class="r29 hidden"> <a href="/kiemdinhR/#r29"> MANOVA một chiều </a> </div>
 	<div class="r30 hidden"> <a href="/kiemdinhR/#r30"> Hồi quy tuyến tính đa biến đa hiệp biến </a> </div>
 	<div class="r31 hidden"> <a href="/kiemdinhR/#r31"> Phân tích nhân tố </a> </div>
 	<div class="r32 hidden"> <a href="/kiemdinhR/#r32"> Tương quan chính tắc </a> </div>
 </div>
 <div>
	<a HREF="javascript:history.go(0)" class="button blue result hidden">Chọn lại từ đầu</a>
 </div>
</form>

## Từ vựng

- **Biến số phụ thuộc**: đầu ra, kết cuộc, **hậu quả** của nghiên cứu.
- **Biến số độc lập**: biến số tiên đoán, **nguyên nhân** của **hậu quả**.
- **Nhóm độc lập lẫn nhau**: Ví dụ chiều cao nam với nữ.
- **Nhóm phụ thuộc lẫn nhau**: v.d. cân nặng cùng một người đo lường trước và sau học đại học
- **Biến số liên tục**: v.d. huyết áp
- **Biến số không liên tục**: v.d. số con
- **Biến số phân nhóm**: v.d. chủng tộc
- **Biến số thứ tự**: v.d. thứ hạng
- **Bình thường**: biến số có phân phối bình thường, v.d. $\sim N(\mu, \sigma)$
- **2+**: 2 nhóm trở lên; **2/+**:2 hoặc trên hai
- **đa biến**: multivariate; **đa hiệp biến**: multiple.