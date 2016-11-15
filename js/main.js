var grow;
var height = 2.2;
var maxHeight = 11;

function resize(){
		clearInterval(grow);
	if (height < maxHeight)
		grow = setInterval('getBig()', 5);
	else
		grow = setInterval('getSmall()', 5);
}
function getBig(){
	height += 0.88;
	document.getElementById("navbar").style.height = height + 'em';

	if (height >= maxHeight)
		clearInterval(grow);
}
function getSmall(){
	height -= 0.88;
	document.getElementById("navbar").style.height = height + 'em';

	if (height <= 2.2)
		clearInterval(grow);
}
