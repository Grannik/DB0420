function CommandsJavaScriptHtml()
{
document.title="Команды JavaScript HTML";
document.getElementById("Txt").style.display="block";
document.getElementById("Txt").style.position = "absolute";
document.getElementById("Txt").style.top ="1%";
document.getElementById("Txt").style.right = "1%";
document.getElementById("Txt").style.width ="62%";
document.getElementById("Txt").style.height = "91%";
document.getElementById("Txt").style.overflow = "scroll";
document.getElementById("Txt").style.border = "2px solid #777777";
document.getElementById('Txt').style.fontSize='100%';
document.getElementById('Txt').style.textIndent="30px"; //* Отступ первой строки *//
document.getElementById('Txt').style.paddingLeft="3%";
document.getElementById('Txt').style.paddingTop="3%";
document.getElementById('Txt').style.paddingRight="3%";
document.getElementById('Txt').style.backgroundColor="Honeydew";
document.getElementById("Txt").innerHTML ='\
<Br>document.title=\"\";\
<Br>document.getElementById(\"\").innerHTML =\"\"\
<Br>\
<Br>var a;\
<Br>    a = document.getElementById(\"\");\
<Br>    a.innerHTML = \"\";\
<Br>\
'
}
