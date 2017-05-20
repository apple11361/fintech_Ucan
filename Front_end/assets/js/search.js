$(function(){

	//得到下拉式目前選取的值 (value)

	//get the text value of a selected option

	var $cSel = $('select[name="city"]'); //指定要處理的特定元素物件名稱
	var $cSel2 = $('select[name="Administrative_area"]');
	
  	$cSel.on('change', function(){
		var city = $cSel.val();
			
		$cSel2.find('option')
			.remove()
			.end();
			
		if(city == "臺北市")
		{
			$cSel2.append($("<option></option>")
				.attr("value", '北投區')
				.text('北投區'));
				
			$cSel2.append($("<option></option>")
				.attr("value", '士林區')
				.text('士林區'));	
				
			$cSel2.append($("<option></option>")
				.attr("value", '大同區')
				.text('大同區'));
				
			$cSel2.append($("<option></option>")
				.attr("value", '中山區')
				.text('中山區'));
				
			$cSel2.append($("<option></option>")
				.attr("value", '松山區')
				.text('松山區'));
				
			$cSel2.append($("<option></option>")
				.attr("value", '內湖區')
				.text('內湖區'));
				
			$cSel2.append($("<option></option>")
				.attr("value", '萬華區')
				.text('萬華區'));
				
			$cSel2.append($("<option></option>")
				.attr("value", '中正區')
				.text('中正區'));
				
			$cSel2.append($("<option></option>")
				.attr("value", '大安區')
				.text('大安區'));
				
			$cSel2.append($("<option></option>")
				.attr("value", '信義區')
				.text('信義區'));
				
			$cSel2.append($("<option></option>")
				.attr("value", '南港區')
				.text('南港區'));
				
			$cSel2.append($("<option></option>")
				.attr("value", '文山區')
				.text('文山區'));
		}
		else if(city== "新北市")
		{
			$cSel2.append($("<option></option>")
				.attr("value", '石門區')
				.text('石門區'));
				
			$cSel2.append($("<option></option>")
				.attr("value", '三芝區')
				.text('三芝區'));
				
			$cSel2.append($("<option></option>")
				.attr("value", '板橋區')
				.text('板橋區'));

			$cSel2.append($("<option></option>")
				.attr("value", '三重區')
				.text('三重區'));

			$cSel2.append($("<option></option>")
				.attr("value", '中和區')
				.text('中和區'));

			$cSel2.append($("<option></option>")
				.attr("value", '永和區')
				.text('永和區'));

			$cSel2.append($("<option></option>")
				.attr("value", '新莊區')
				.text('新莊區'));

			$cSel2.append($("<option></option>")
				.attr("value", '新店區')
				.text('新店區'));

			$cSel2.append($("<option></option>")
				.attr("value", '土城區')
				.text('土城區'));

			$cSel2.append($("<option></option>")
				.attr("value", '蘆洲區')
				.text('蘆洲區'));

			$cSel2.append($("<option></option>")
				.attr("value", ' 樹林區')
				.text(' 樹林區'));

			$cSel2.append($("<option></option>")
				.attr("value", '汐止區')
				.text('汐止區'));

			$cSel2.append($("<option></option>")
				.attr("value", '鶯歌區')
				.text('鶯歌區'));

			$cSel2.append($("<option></option>")
				.attr("value", '三峽區')
				.text('三峽區'));

			$cSel2.append($("<option></option>")
				.attr("value", '淡水區')
				.text('淡水區'));

			$cSel2.append($("<option></option>")
				.attr("value", '瑞芳區')
				.text('瑞芳區'));

			$cSel2.append($("<option></option>")
				.attr("value", '五股區')
				.text('五股區'));

			$cSel2.append($("<option></option>")
				.attr("value", '泰山區')
				.text('泰山區'));

			$cSel2.append($("<option></option>")
				.attr("value", '林口區')
				.text('林口區'));

			$cSel2.append($("<option></option>")
				.attr("value", '深坑區')
				.text('深坑區'));

			$cSel2.append($("<option></option>")
				.attr("value", '石碇區')
				.text('石碇區'));

			$cSel2.append($("<option></option>")
				.attr("value", '坪林區')
				.text('坪林區'));

			$cSel2.append($("<option></option>")
				.attr("value", '八里區')
				.text('八里區'));

			$cSel2.append($("<option></option>")
				.attr("value", '平溪區')
				.text('平溪區'));

			$cSel2.append($("<option></option>")
				.attr("value", '雙溪區')
				.text('雙溪區'));

			$cSel2.append($("<option></option>")
				.attr("value", '貢寮區')
				.text('貢寮區'));

			$cSel2.append($("<option></option>")
				.attr("value", '金山區')
				.text('金山區'));

			$cSel2.append($("<option></option>")
				.attr("value", '萬里區')
				.text('萬里區'));

			$cSel2.append($("<option></option>")
				.attr("value", '烏來區 ')
				.text('烏來區 '));
		}
		else if(city== "基隆市")
		{
			
		}
		
	});

});

$(function(){

	//得到下拉式目前選取的值 (value)

	//get the text value of a selected option

	var $cSel = $('select[name="total_price"]'); //指定要處理的特定元素物件名稱
	var $cSel2 = $('select[name="total_price"]');
	
  	$cSel.on('change', function(){
		var city = $cSel.val();
			
		if(city != "0")
		{
			$cSel2.find('option[value="0"]')
			.remove();
		}
		
	});

});

$(function(){

	//得到下拉式目前選取的值 (value)

	//get the text value of a selected option

	var $cSel = $('select[name="city"]'); //指定要處理的特定元素物件名稱
	var $cSel2 = $('select[name="city"]');
	
  	$cSel.on('change', function(){
		var city = $cSel.val();
			
		if(city != "0")
		{
			$cSel2.find('option[value="0"]')
			.remove();
		}
		
	});

});

$(function(){

	//得到下拉式目前選取的值 (value)

	//get the text value of a selected option

	var $cSel = $('select[name="space"]'); //指定要處理的特定元素物件名稱
	var $cSel2 = $('select[name="space"]');
	
  	$cSel.on('change', function(){
		var city = $cSel.val();
			
		if(city != "0")
		{
			$cSel2.find('option[value="0"]')
			.remove();
		}
		
	});

});

$(function(){

	//得到下拉式目前選取的值 (value)

	//get the text value of a selected option

	var $cSel = $('select[name="use"]'); //指定要處理的特定元素物件名稱
	var $cSel2 = $('select[name="use"]');
	
  	$cSel.on('change', function(){
		var city = $cSel.val();
			
		if(city != "0")
		{
			$cSel2.find('option[value="0"]')
			.remove();
		}
		
	});

});


$(function(){

	//得到下拉式目前選取的值 (value)

	//get the text value of a selected option

	var $cSel = $('select[name="age"]'); //指定要處理的特定元素物件名稱
	var $cSel2 = $('select[name="age"]');
	
  	$cSel.on('change', function(){
		var city = $cSel.val();
			
		if(city != "0")
		{
			$cSel2.find('option[value="0"]')
			.remove();
		}
		
	});

});

/*
function enhancedRadio() 
{  
	var r = document.forms[0].elements[this.name];  
	for (var i=0;i<r.length;i++)
	{  
		if (r[i].index != this.index)  
		r[i].isChecked = false;  
	}  
	this.isChecked = !this.isChecked;  
	this.checked = this.isChecked;  
}  
function deployRadioEvent() 
{  
	var f = document.forms[0];  
	for (var i=0;i<f.elements.length;i++)
	{ 
		var e = f.elements[i]; 
		if (e.type == "radio") 
		{ 
			e.onclick = enhancedRadio;  
			e.setAttribute("isChecked",false);  
			e.setAttribute("index",i); 
		}     
	}     
}  

deployRadioEvent();*/
