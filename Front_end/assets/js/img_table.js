
var photo = 0;


function change(a)
{
	var s = new Image();
	s.onload = ch;
	function ch()
	{
		var m = document.getElementById("thumbnail");
		m.src = s.src;
	}
	
	s.src = "../images/0/"+a+".jpg";
	photo = a;
}

function right()
{
	photo = (photo+1)%5;
	
	var s = new Image();
	s.onload = ch;
	
	function ch()
	{
		var m = document.getElementById("thumbnail");
		m.src = s.src;
	}
	
	s.src = "../images/0/"+photo+".jpg";
	
}

function left()
{
	photo = (photo+4)%5;
	
	var s = new Image();
	s.onload = ch;
	
	function ch()
	{
		var m = document.getElementById("thumbnail");
		m.src = s.src;
	}
	
	s.src = "../images/0/"+photo+".jpg";
	
}