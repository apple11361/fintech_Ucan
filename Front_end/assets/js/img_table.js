function a(me)
{
	me.style.border="3px solid #777";
}

function b(me)
{
	me.style.border="3px solid #FFF";
}

function change(a)
{
	var s = new Image();
	s.onload = ch;
	function ch()
	{
		var m = document.getElementById("main");
		m.height = s.height;
		m.width = s.width;
		m.src = s.src;
	}
	
	s.src = "./img/"+a+".jpg";
}