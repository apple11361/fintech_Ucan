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
		'education_level': '4',
		'occupation': '8',
		'age': '2',
		'annual_income': '350000',
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
		var fee_amount = document.getElementById("fee_amount");
		var interest_rate = document.getElementById("interest_rate");
		var max_loan_period  = document.getElementById("max_loan_period");
		
		max_limit.innerHTML = data['max_limit'];
		fee_amount.innerHTML = data['fee_amount'];
		interest_rate.innerHTML = data['interest_rate'];
		max_loan_period.innerHTML = data['max_loan_period'];
		
	}).fail(function() {
		// 失敗
		alert("failed");
	});
}