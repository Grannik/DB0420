// *** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *** //
// *** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *** скрипт смены маркеров триугольник/квадрат *** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *** //
function addScript(src)
{
  var script = document.createElement('script');
  script.src = src;
  script.async = false; // чтобы гарантировать порядок
  document.head.appendChild(script);
}
addScript('alphabet.js'); // загружаться эти скрипты начнут сразу
addScript('tags.js'); // выполнятся, как только загрузятся
addScript('tagsGroups.js');
addScript('cod.js');
addScript('srift.js');
addScript('CssParameter.js');
addScript('style.js');
addScript('webFarben.js');
addScript('Cursor.js');
addScript('canvas.js');
addScript('CommandsJavaScriptCss.js');
addScript('CommandsJavaScriptHtml.js');
addScript('DeutschDb.js');
addScript('uhrzeit.js');
addScript('textarea.js');
// но, гарантированно, в порядке 1 -> 2 -> 3
//
// Функция стиля блока
function styleHtml()
{
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
}
// *** Gainsboro ~~~~~~~~~~~~~~~~~~~~~~ ***
function ColorLi()
{
document.getElementById("liCod").style.backgroundColor="DarkGray";
document.getElementById("liAlphabet").style.backgroundColor="DarkGray";
document.getElementById("liTag").style.backgroundColor="DarkGray";
document.getElementById("liDiv").style.backgroundColor="DarkGray";
document.getElementById("liAlphabet").style.backgroundColor="DarkGray";
document.getElementById("liComentHtml").style.backgroundColor="DarkGray";
document.getElementById("liDoctype").style.backgroundColor="DarkGray";
document.getElementById("liCssParameter").style.backgroundColor="DarkGray";
}
// *** ~~~~~~~~~~~~~~~~~~~~~~ *** скрипт смены маркеров триугольник/квадрат *** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *** //
function verocultar(cual)
{
 var c=cual.nextSibling;
 if (c.innerHTML=='▶')
 {c.innerHTML='&#9632;';}
 else
 {c.innerHTML='▶';}
  return false;
}
// *** ~~~~~~~~~~~~~~~~~~ *** Скрипты рабочего списка *** ~~~~~~~~~~~~~~~ *** //

// text
function text()
{
document.title="Text";
    display = document.getElementById('textBox').style.display;
    if(display=='none')
    {
       document.getElementById('textBox').style.display='block';
       document.getElementById('textIco').style.listStyleImage = "url('B.ico')";
       document.getElementById("textIco").style.backgroundColor="Gainsboro";
    }
    else
    {
       document.getElementById('textBox').style.display='none';
       document.getElementById('textIco').style.listStyleImage = "url('D.ico')";
       document.getElementById("textIco").style.backgroundColor="DarkGray";
    }
}
// HTM
function htm()
{
document.title="Text";
    display = document.getElementById('htmBox').style.display;
    if(display=='none')
    {
       document.getElementById('htmBox').style.display='block';
       document.getElementById('htmIco').style.listStyleImage = "url('B.ico')";
       document.getElementById("htmIco").style.backgroundColor="Gainsboro";
    }
    else
    {
       document.getElementById('htmBox').style.display='none';
       document.getElementById('htmIco').style.listStyleImage = "url('D.ico')";
       document.getElementById("htmIco").style.backgroundColor="DarkGray";
    }
}
// HTML
function html()
{
document.title="HTML";
    display = document.getElementById('htmlBox').style.display;
    if(display=='none')
    {
       document.getElementById('htmlBox').style.display='block';
       document.getElementById('htmlIco').style.listStyleImage = "url('B.ico')";
       document.getElementById("htmlIco").style.backgroundColor="Gainsboro";
    }
    else
    {
       document.getElementById('htmlBox').style.display='none';
       document.getElementById('htmlIco').style.listStyleImage = "url('D.ico')";
       document.getElementById("htmlIco").style.backgroundColor="DarkGray";
    }
}
// Строчные теги
function htmlTags()
{
document.title="HTML";
    display = document.getElementById('htmlTagsBox').style.display;
    if(display=='none')
    {
       document.getElementById('htmlTagsBox').style.display='block';
       document.getElementById('htmlTagsIco').style.listStyleImage = "url('B.ico')";
       document.getElementById("htmlTagsIco").style.backgroundColor="Gainsboro";
    }
    else
    {
       document.getElementById('htmlTagsBox').style.display='none';
       document.getElementById('htmlTagsIco').style.listStyleImage = "url('D.ico')";
       document.getElementById("htmlTagsIco").style.backgroundColor="DarkGray";
    }
}
// Блочные теги
function blockTags()
{
document.title="Блочные теги";
    display = document.getElementById('blockTagsBox').style.display;
    if(display=='none')
    {
       document.getElementById('blockTagsBox').style.display='block';
       document.getElementById('blockTagsIco').style.listStyleImage = "url('B.ico')";
       document.getElementById("blockTagsIco").style.backgroundColor="Gainsboro";
    }
    else
    {
       document.getElementById('blockTagsBox').style.display='none';
       document.getElementById('blockTagsIco').style.listStyleImage = "url('D.ico')";
       document.getElementById("blockTagsIco").style.backgroundColor="DarkGray";
    }
}
// HTML группы тегов
function htmlGruppenTags()
{
document.title="HTML";
    display = document.getElementById('htmlGruppenTagsBox').style.display;
    if(display=='none')
    {
       document.getElementById('htmlGruppenTagsBox').style.display='block';
       document.getElementById('htmlGruppenTagsIco').style.listStyleImage = "url('B.ico')";
       document.getElementById("htmlGruppenTagsIco").style.backgroundColor="Gainsboro";
    }
    else
    {
       document.getElementById('htmlGruppenTagsBox').style.display='none';
       document.getElementById('htmlGruppenTagsIco').style.listStyleImage = "url('D.ico')";
       document.getElementById("htmlGruppenTagsIco").style.backgroundColor="DarkGray";
    }
}
// CSS
function css()
{
document.title="CSS";
    display = document.getElementById('cssBox').style.display;
    if(display=='none')
    {
       document.getElementById('cssBox').style.display='block';
       document.getElementById('cssIco').style.listStyleImage = "url('B.ico')";
       document.getElementById("cssIco").style.backgroundColor="Gainsboro";
    }
    else
    {
       document.getElementById('cssBox').style.display='none';
       document.getElementById('cssIco').style.listStyleImage = "url('D.ico')";
       document.getElementById("cssIco").style.backgroundColor="DarkGray";
    }
}
// Color
function Color()
{
document.title="Color";
    display = document.getElementById('ColorBox').style.display;
    if(display=='none')
    {
       document.getElementById('ColorBox').style.display='block';
       document.getElementById('ColorIco').style.listStyleImage = "url('B.ico')";
       document.getElementById("ColorIco").style.backgroundColor="Gainsboro";
    }
    else
    {
       document.getElementById('ColorBox').style.display='none';
       document.getElementById('ColorIco').style.listStyleImage = "url('D.ico')";
       document.getElementById("ColorIco").style.backgroundColor="DarkGray";
    }
}
// CSS/HTML
function csshtml()
{
document.title="CSS/HTML";
    display = document.getElementById('csshtmlBox').style.display;
    if(display=='none')
    {
       document.getElementById('csshtmlBox').style.display='block';
       document.getElementById('csshtmlIco').style.listStyleImage = "url('B.ico')";
       document.getElementById("csshtmlIco").style.backgroundColor="Gainsboro";
    }
    else
    {
       document.getElementById('csshtmlBox').style.display='none';
       document.getElementById('csshtmlIco').style.listStyleImage = "url('D.ico')";
       document.getElementById("csshtmlIco").style.backgroundColor="DarkGray";
    }
}
// JavaScript
function javascript()
{
document.title="JavaScript";
    display = document.getElementById('javascriptBox').style.display;
    if(display=='none')
    {
       document.getElementById('javascriptBox').style.display='block';
       document.getElementById('javascriptIco').style.listStyleImage = "url('B.ico')";
       document.getElementById("javascriptIco").style.backgroundColor="Gainsboro";
    }
    else
    {
       document.getElementById('javascriptBox').style.display='none';
       document.getElementById('javascriptIco').style.listStyleImage = "url('D.ico')";
       document.getElementById("javascriptIco").style.backgroundColor="DarkGray";
    }
}
// JavaScript/HTML
function javascriptHtml()
{
document.title="JavaScript/HTML";
    display = document.getElementById('javascriptHtmlBox').style.display;
    if(display=='none')
    {
       document.getElementById('javascriptHtmlBox').style.display='block';
       document.getElementById('javascriptHtmlIco').style.listStyleImage = "url('B.ico')";
       document.getElementById("javascriptHtmlIco").style.backgroundColor="Gainsboro";
    }
    else
    {
       document.getElementById('javascriptHtmlBox').style.display='none';
       document.getElementById('javascriptHtmlIco').style.listStyleImage = "url('D.ico')";
       document.getElementById("javascriptHtmlIco").style.backgroundColor="DarkGray";
    }
}
// JavaScript/CSS
function javascriptCss()
{
document.title="JavaScript/CSS";
    display = document.getElementById('javascriptCssBox').style.display;
    if(display=='none')
    {
       document.getElementById('javascriptCssBox').style.display='block';
       document.getElementById('javascriptCssIco').style.listStyleImage = "url('B.ico')";
       document.getElementById("javascriptCssIco").style.backgroundColor="Gainsboro";
    }
    else
    {
       document.getElementById('javascriptCssBox').style.display='none';
       document.getElementById('javascriptCssIco').style.listStyleImage = "url('D.ico')";
       document.getElementById("javascriptCssIco").style.backgroundColor="DarkGray";
    }
}
// JavaScript/Canvas
function javascriptCanvas()
{
document.title="JavaScript/Canvas";
    display = document.getElementById('javascriptCanvasBox').style.display;
    if(display=='none')
    {
       document.getElementById('javascriptCanvasBox').style.display='block';
       document.getElementById('javascriptCanvasIco').style.listStyleImage = "url('B.ico')";
       document.getElementById("javascriptCanvasIco").style.backgroundColor="Gainsboro";
    }
    else
    {
       document.getElementById('javascriptCanvasBox').style.display='none';
       document.getElementById('javascriptCanvasIco').style.listStyleImage = "url('D.ico')";
       document.getElementById("javascriptCanvasIco").style.backgroundColor="DarkGray";
    }
}
// SVG
function svg()
{
document.title="SVG";
    display = document.getElementById('svgBox').style.display;
    if(display=='none')
    {
       document.getElementById('svgBox').style.display='block';
       document.getElementById('svgIco').style.listStyleImage = "url('B.ico')";
       document.getElementById("svgIco").style.backgroundColor="Gainsboro";
    }
    else
    {
       document.getElementById('svgBox').style.display='none';
       document.getElementById('svgIco').style.listStyleImage = "url('D.ico')";
       document.getElementById("svgIco").style.backgroundColor="DarkGray";
    }
}
// Deutsch
function Deutsch()
{
document.title="Deutsch";
    display = document.getElementById('DeutschBox').style.display;
    if(display=='none')
    {
       document.getElementById('DeutschBox').style.display='block';
       document.getElementById('DeutschIco').style.listStyleImage = "url('B.ico')";
       document.getElementById("DeutschIco").style.backgroundColor="Gainsboro";
    }
    else
    {
       document.getElementById('DeutschBox').style.display='none';
       document.getElementById('DeutschIco').style.listStyleImage = "url('D.ico')";
       document.getElementById("DeutschIco").style.backgroundColor="DarkGray";
    }
}
// Немецкий алфавит
function AbcDo()
{
document.title="Немецкий алфавит";
    display = document.getElementById('AbcDoBox').style.display;
    if(display=='none')
    {
       document.getElementById('AbcDoBox').style.display='block';
       document.getElementById('AbcDoIco').style.listStyleImage = "url('B.ico')";
       document.getElementById("AbcDoIco").style.backgroundColor="Gainsboro";
    }
    else
    {
       document.getElementById('AbcDoBox').style.display='none';
       document.getElementById('AbcDoIco').style.listStyleImage = "url('D.ico')";
       document.getElementById("AbcDoIco").style.backgroundColor="DarkGray";
    }
}
// Местоимения
function Pronouns()
{
document.title="Местоимения";
    display = document.getElementById('PronounsBox').style.display;
    if(display=='none')
    {
       document.getElementById('PronounsBox').style.display='block';
       document.getElementById('PronounsIco').style.listStyleImage = "url('B.ico')";
       document.getElementById("PronounsIco").style.backgroundColor="Gainsboro";
    }
    else
    {
       document.getElementById('PronounsBox').style.display='none';
       document.getElementById('PronounsIco').style.listStyleImage = "url('D.ico')";
       document.getElementById("PronounsIco").style.backgroundColor="DarkGray";
    }
}
// Глаголы
function Verbs()
{
document.title="Глаголы";
    display = document.getElementById('VerbsBox').style.display;
    if(display=='none')
    {
       document.getElementById('VerbsBox').style.display='block';
       document.getElementById('VerbsIco').style.listStyleImage = "url('B.ico')";
       document.getElementById("VerbsIco").style.backgroundColor="Gainsboro";
    }
    else
    {
       document.getElementById('VerbsBox').style.display='none';
       document.getElementById('VerbsIco').style.listStyleImage = "url('D.ico')";
       document.getElementById("VerbsIco").style.backgroundColor="DarkGray";
    }
}
// Вопросы
function Question()
{
document.title="Вопросы";
    display = document.getElementById('QuestionBox').style.display;
    if(display=='none')
    {
       document.getElementById('QuestionBox').style.display='block';
       document.getElementById('QuestionIco').style.listStyleImage = "url('B.ico')";
       document.getElementById("QuestionIco").style.backgroundColor="Gainsboro";
    }
    else
    {
       document.getElementById('QuestionBox').style.display='none';
       document.getElementById('QuestionIco').style.listStyleImage = "url('D.ico')";
       document.getElementById("QuestionIco").style.backgroundColor="DarkGray";
    }
}
// Инструменты
function tool()
{
document.title="Инструменты";
    display = document.getElementById('toolBox').style.display;
    if(display=='none')
    {
       document.getElementById('toolBox').style.display='block';
       document.getElementById('toolIco').style.listStyleImage = "url('B.ico')";
       document.getElementById("toolIco").style.backgroundColor="Gainsboro";
    }
    else
    {
       document.getElementById('toolBox').style.display='none';
       document.getElementById('toolIco').style.listStyleImage = "url('D.ico')";
       document.getElementById("toolIco").style.backgroundColor="DarkGray";
    }
}
// *** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *** Выберите цвет фона *** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *** //
function SelectBackgroundColor()
{
document.title="Выберите цвет фона";
obj=document.getElementById('sbc').style;
tmp=(obj.display!='block') ? 'block' : 'none';
obj.display=tmp; return false
}
// *** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *** Калькулятор *** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *** //
function FunКechner()
{
document.title="Калькулятор";
obj=document.getElementById('rechner').style;
tmp=(obj.display!='block') ? 'block' : 'none';
obj.display=tmp; return false
}
// *** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *** Черновик *** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *** //
function draft()
{
document.title="Черновик";
obj=document.getElementById('draft').style;
tmp=(obj.display!='block') ? 'block' : 'none';
obj.display=tmp; return false
}
// *** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *** Простые числа *** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *** //
function primeNumber()
{
document.title="Простые числа";
obj=document.getElementById('primeNumber').style;
tmp=(obj.display!='block') ? 'block' : 'none';
obj.display=tmp; return false
}
// *** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *** Закрыть все окна *** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *** //
function clos()
{
document.title="Окна закрыты";
document.getElementById("Txt").style.display="none";
document.getElementById("image").style.display="none";
}
// *** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ***

