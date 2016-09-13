//Copyright 2016 Van Kinh Nguyen, released under an MIT license: http://opensource.org/licenses/MIT
$( document ).ready(function() {
	var cau1 = $( ".cau1" ).parent();
	var cau2 = $( ".cau2" );
	var cau3 = $( ".cau3" );
	var result = $( ".result" );

	var cau21 = $( ".cau21" );
	var cau22 = $( ".cau22" );
	var cau23 = $( ".cau23" );

	var cau31 = $( ".cau31" );
	var cau32 = $( ".cau32" );
	var cau33 = $( ".cau33" );
	var cau34 = $( ".cau34" );
	var cau35 = $( ".cau35" );
	var cau36 = $( ".cau36" );
	var cau37 = $( ".cau37" );
	var cau38 = $( ".cau38" );
	var cau39 = $( ".cau39" );
	var cau310 = $( ".cau310" );
	var cau311 = $( ".cau311" );
	var cau312 = $( ".cau312" );

	var r1 = $( ".r1" );
	var r2 = $( ".r2" );
	var r3 = $( ".r3" );
	var r4 = $( ".r4" );
	var r5 = $( ".r5" );
	var r6 = $( ".r6" );
	var r7 = $( ".r7" );
	var r8 = $( ".r8" );
	var r9 = $( ".r9" );
	var r10 = $( ".r10" );
	var r11 = $( ".r11" );
	var r12 = $( ".r12" );
	var r13 = $( ".r13" );
	var r14 = $( ".r14" );
	var r15 = $( ".r15" );
	var r16 = $( ".r16" );
	var r17 = $( ".r17" );
	var r18 = $( ".r18" );
	var r19 = $( ".r19" );
	var r20 = $( ".r20" );
	var r21 = $( ".r21" );
	var r22 = $( ".r22" );
	var r23 = $( ".r23" );
	var r24 = $( ".r24" );
	var r25 = $( ".r25" );
	var r26 = $( ".r26" );
	var r27 = $( ".r27" );
	var r28 = $( ".r28" );
	var r29 = $( ".r29" );
	var r30 = $( ".r30" );
	var r31 = $( ".r31" );
	var r32 = $( ".r32" );

	//Inputs that determine what fields to show
	var cau1in = $('input:radio[name="c1"]');
	var cau2in = $('input:radio[name="c2"]');
	var cau3in = $('input:radio[name="c3"]');

	cau1in.change(function(){
		var value=this.value;						
		cau1.addClass('hidden');
		cau2.removeClass('hidden');
		if (value == '1') {
			cau21.removeClass('hidden');
		} 
		else if (value == '2') {
			cau22.removeClass('hidden');
		}
		else {
			cau23.removeClass('hidden');
		}
	});
	cau2in.change(function(){
		var value2 = this.value;						
		cau2.addClass('hidden');
		cau3.removeClass('hidden');

		if (value2 == '1') {
			cau31.removeClass('hidden');
		}
		else if (value2 == '2') {
			cau32.removeClass('hidden');
		}
		else if (value2 == '3') {
			cau33.removeClass('hidden');
		}
		else if (value2 == '4') {
			cau34.removeClass('hidden');
		}
		else if (value2 == '5') {
			cau35.removeClass('hidden');
		}
		else if (value2 == '6') {
			cau36.removeClass('hidden');
		}
		else if (value2 == '7') {
			cau37.removeClass('hidden');
		}
		else if (value2 == '8') {
			cau38.removeClass('hidden');
		}
		else if (value2 == '9') {
			cau39.removeClass('hidden');
		}
		else if (value2 == '10') {
			cau310.removeClass('hidden');
		}
		else if (value2 == '11') {
			cau311.removeClass('hidden');
		}
		else if (value2 == '12') {
			cau312.removeClass('hidden');
		}			
	});
	cau3in.change(function(){
		var value3 = this.value;						
		cau3.addClass('hidden');
		result.removeClass('hidden');

		if (value3 == '1') {
			r1.removeClass('hidden');
		}
		else if (value3 == '2') {
			r2.removeClass('hidden');
		}
		else if (value3 == '3') {
			r3.removeClass('hidden');
		}
		else if (value3 == '4') {
			r4.removeClass('hidden');
		}
		else if (value3 == '5') {
			r5.removeClass('hidden');
		}
		else if (value3 == '6') {
			r6.removeClass('hidden');
		}
		else if (value3 == '7') {
			r7.removeClass('hidden');
		}
		else if (value3 == '8') {
			r8.removeClass('hidden');
		}
		else if (value3 == '9') {
			r9.removeClass('hidden');
		}
		else if (value3 == '10') {
			r10.removeClass('hidden');
		}
		else if (value3 == '11') {
			r11.removeClass('hidden');
		}
		else if (value3 == '12') {
			r12.removeClass('hidden');
		}
		else if (value3 == '13') {
			r13.removeClass('hidden');
		}
		else if (value3 == '14') {
			r14.removeClass('hidden');
		}
		else if (value3 == '15') {
			r15.removeClass('hidden');
		}
		else if (value3 == '16') {
			r16.removeClass('hidden');
		}
		else if (value3 == '17') {
			r17.removeClass('hidden');
		}
		else if (value3 == '18') {
			r18.removeClass('hidden');
		}
		else if (value3 == '19') {
			r19.removeClass('hidden');
		}
		else if (value3 == '20') {
			r20.removeClass('hidden');
		}
		else if (value3 == '21') {
			r21.removeClass('hidden');
		}
		else if (value3 == '22') {
			r22.removeClass('hidden');
		}
		else if (value3 == '23') {
			r23.removeClass('hidden');
		}
		else if (value3 == '24') {
			r24.removeClass('hidden');
		}
		else if (value3 == '25') {
			r25.removeClass('hidden');
		}
		else if (value3 == '26') {
			r26.removeClass('hidden');
		}
		else if (value3 == '27') {
			r27.removeClass('hidden');
		}
		else if (value3 == '28') {
			r28.removeClass('hidden');
		}
		else if (value3 == '29') {
			r29.removeClass('hidden');
		}
		else if (value3 == '30') {
			r30.removeClass('hidden');
		}
		else if (value3 == '31') {
			r31.removeClass('hidden');
		}
		else if (value3 == '32') {
			r32.removeClass('hidden');
		}
	});
	
});
