
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
}