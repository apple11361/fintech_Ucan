function sendRequest(action, body) 
{
	return $.ajax({
		url: action, 
		dataType : 'json',
		contentType: "application/json",
		type: 'post',
		data: JSON.stringify(body)
	});
}

function request() {
	//var uid = prompt("Please enter your name");

	var  userRequest = {
		//'client_id': uid,
		'education_level': '2',
		'occupation': '3',
		'age': '2',
		'annual_income': '3000000',
		'employment_year': '3',
		'resident_status': '1',
		'credit_card_status': '3',
		'limit_amount': '125000',
		'pre_owned_status': '2',
		'revolving_count': '3',
		'revolving_amount': '45000',
		'debt_status': '3',
		'mortgage': '0',
		'debt_amount': '425000',
		'balance_amount': '125000',
		'debt': '0',
		'delinquent': '0',
		'ever_in_use': '1'
	};
	
	//var encryptedRequest = HELPER_GenerateEncryptedRequest(userRequest, sessionKey);
	//需要加密

	sendRequest('https://eospu.esunbank.com.tw/esun/bank/public/v1/information/loan_score?client_id=b930c501-107a-4fd5-b54d-03236f386221', userRequest).done(function (data) {		
		var max_limit = document.getElementById("max_limit");
		var score = document.getElementById("score");
		var interest_rate = document.getElementById("interest_rate");

		
		score.innerHTML = data['score'];
		max_limit.innerHTML = data['max_limit'];
		interest_rate.innerHTML = data['interest_rate'];

		
	}).fail(function() {
		// 失敗
		alert("failed");
	});
}

function computeForm(form) {
	if ((form.months.value==null || form.months.value.length==0) || (form.rate.value==null || form.rate.value.length==0) || (form.financed.value == null || form.financed.value.length==0)) {
		return;
	}
	if (!alrt_msg(form.months,1,480,"你的付款期數") || !alrt_msg(form.rate,.001,99,"你填寫的利率") || !alrt_msg(form.financed,100,10000000,"貸款金額")) { 
		form.payment.value="所填數值不在計算範圍內 - 請按重填";
		return;
	}
	var i=form.rate.value;
	ffv=0;
	ffv+=form.financed.value;
	fmv=0;
	fmv+=form.months.value;
	if (i > 0) {
		i=(i/100.0);
		var fmt="";
		fmt+=i;
		fmt=fmt.substring(0,6)
//		form.rate.value=fmt;
	}
	i/=12;
	var isn=1;
	for (var j=0;j<form.months.value;j++) {
		isn=isn*(1+i);
	}
	form.payment.value=(form.financed.value*isn*i)/(isn-1);
	fpv=0;
	fpv+=form.payment.value;
	var fmt="";
	var add=9;
	fmt+=form.payment.value;
	for (var i=0;i<fmt.length;i++) {
		if (fmt.charAt(i)==".") {
			add=i+3;
			i=fmt.length;
		}
	}
	fmt=fmt.substring(0,add);
	fcalc=((fmv*fpv)-ffv);
	
	
	form.payment.value=parseInt(fmt+0.5);
	form.total.value=form.payment.value*form.months.value;
	form.payment.value=moneyFormat(form.payment.value);
	form.total.value=moneyFormat(form.total.value);
}

function reset_it(form) {
	form.months.value="";
	form.rate.value="";
	form.financed.value="";
	form.payment.value="";
}

function alrt_msg(entry,low,high,prompt) {
	prompt=prompt+" 你所輸入數值: "+entry.value;
	var scratch=entry.value;
	for (var i=0;i<scratch.length;i++) {
		var letter=scratch.substring(i,i+1);
		if ((letter<"0" || "9"<letter) && letter!='.') {
			alert(prompt);
			return false;
		}
	}
	var errtst=parseFloat(scratch)
	if (errtst<low || high<errtst) {
		alert("對不起. "+prompt+ " 不在計算範圍內"+" 從 "+low+" 到 "+high+"!");
		return false;
	}
	entry.value=scratch;
	return true;
}

function moneyFormat(str){
	if(str.length<=3)	return str;
	else	return moneyFormat(str.substr(0,str.length-3))+","+(str.substr(str.length-3));
}

function test_it(entry) {
	if (entry.value!=null && entry.value.length!=0) {
		entry.value=""+ eval(entry.value);
	}
	computeForm(entry.form);
}

