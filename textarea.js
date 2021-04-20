// ClearTextarea
function ClearTextarea()
{document.getElementById("textarea").value = " ";}
// document Img
function documenImg()
{document.getElementById("textarea").value = "document.write(\"<img src = ''>\")";}
// JScript
function JScript()
{document.getElementById("textarea").value = "\<SCRIPT LANGUAGE=JavaScript Src=\".js\"\>\</SCRIPT\>";}
// innerHTML
function documentTagName()
{document.getElementById("textarea").value = "document.getElementsByTagName('p')[0].innerHTML='';";}
// 
function documentRdT()
{document.getElementById("textarea").value = "document.write(document.title)";}
function block()
{
document.getElementById("textarea").style.display="block";
document.getElementById('textarea').style.position = "absolute";
document.getElementById('textarea').style.top = "417px";
document.getElementById('textarea').style.left = "233px";
document.getElementById('textarea').style.width = "539px";
document.getElementById('textarea').style.height = "216px";
}
function none()
{document.getElementById("textarea").style.display="none";}

function aaa()
{
    area = document.getElementById("textarea")
    area.value = area.value + "textarea"
};

