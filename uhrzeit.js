function UhrzeitStyle()
{
document.getElementById("alarm").style.position="absolute";
document.getElementById("alarm").style.top="0%";
document.getElementById("alarm").style.right="0%";
document.getElementById("alarm").style.backgroundColor="LightCyan";
document.getElementById("alarm").style.border="2px solid #000000";
}
function Uhrzeit()
{
UhrzeitStyle()
display = document.getElementById('alarm').style.display;
    if(display=='none')
    {
document.getElementById('alarm').style.display='block';
document.title="Uhrzeit";
    }
    else
    {
document.getElementById('alarm').style.display='none';
    }
}
function load()
{
//Получаем DOM-объект нашего "холста"
var canvas=document.getElementById("alarm");
//Берём его контекст (с его помощью и будем рисовать)
var ctx=canvas.getContext("2d");
//Размеры "холста"
var width=canvas.width,height=canvas.height;
var position_s=0,position_m=0,position_h=0;
//Получаем значения в радианах, соответствующие градусам,
//на которые повернётся соответствующая стрелка часов за секунду
var sec=6*Math.PI/180,
min =1/ 10*Math.PI/180,
hour=1/120*Math.PI/180;
//И текущее положение стрелок на часах
//С переводом из секунд в соответствующие единицы времени
position_s=new Date().getSeconds()*sec;
position_m=new Date().getMinutes()*60*min;
position_h=new Date().getHours()*3600*hour+new Date().getMinutes()*60*hour;
function alarm()//функция перерисовки Canvas'а вызывается каждую секунду
{
function line(pos,r,w)
{ //функция рисования линии
ctx.lineWidth=w||1;//первый аргумент - градус поворота стрелки
ctx.beginPath(); 
ctx.moveTo(width/2,height/2);//center conusa
ctx.lineTo(width/2+r*Math.cos(pos-Math.PI/2), //2 ploscost conusa, 
height/2+r*Math.sin(pos-Math.PI/2));//2 ploscost conusa, 
ctx.stroke();
ctx.closePath();
}
position_s+=sec;
position_m+=min;
position_h+=hour;
ctx.clearRect (0, 0, width, height);//Функция очистки Canvas  
ctx.beginPath();//Начало рисования
    ctx.font = "italic 30pt Arial";
    ctx.shadowColor = "Coral";
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    ctx.shadowBlur = 5;
    ctx.strokeText("Zwölf Uhr",350,80);
    ctx.strokeText("Ein Uhr",570,130);
    ctx.strokeText("Zwei Uhr",650,220);
    ctx.strokeText("Drei Uhr",675,344);
    ctx.strokeText("Vier Uhr",650,460);
    ctx.strokeText("Fünf Uhr",575,550);
    ctx.strokeText("Sechs Uhr",350,610);
    ctx.strokeText("Sieben Uhr",80,550);
    ctx.strokeText("Acht Uhr",50,460);
    ctx.strokeText("Neun Uhr",13,339);
    ctx.strokeText("Zehn Uhr",50,220);
    ctx.strokeText("Zwölf Uhr",125,130);
    ctx.fillStyle = "Teal";
    ctx.strokeStyle = "DarkCyan";
    ctx.font = "italic 20pt Arial";
    ctx.fillText("fünf nach",550,90);
    ctx.fillText("zehn nach",630,182);
    ctx.fillText("Viertel nach",673,305);
    ctx.fillText("zwanzig nach",665,417);
    ctx.fillText("fünf vor halb",613,510);
    ctx.fillText("halb...",403,641);
    ctx.fillText("fünf nach halb",150,580);
    ctx.fillText("zwanzig vor",87,488);
    ctx.fillText("Viertel vor",64,370);
    ctx.fillText("drei Viertel",60,300);
    ctx.fillText("zehn vor",100,249);
    ctx.fillText("fünf vor",170,160);
    ctx.fillText("kurz nach",600,67);
    ctx.fillText("kurz vor",170,88);
    ctx.fillText("kurz vor halb",550,578);
    ctx.fillText("kurz nach halb",145,606);
ctx.arc(width/2,height/2,198,0,2*Math.PI);//Рисуется круг циферблата 100
ctx.stroke();//Обводится по контуру   
ctx.beginPath();//Начало рисования
ctx.arc(width/2,height/2,208,0,2*Math.PI);//Рисуется круг циферблата 150
ctx.stroke();//Обводится по контуру          
ctx.beginPath();//Начало рисования
ctx.arc(width/2,height/2,233,0,2*Math.PI);//Рисуется круг циферблата 1 polovina ocrujnosti,2 ocrujnost,180 radius ocrujnosti     
ctx.stroke();//Обводится по контуру     
ctx.closePath();//Т.к. fill() не было вызвано, то только обрисует по контуру 
//Рисует 12 кружков, соответствующих часам
for(var i=0;i<=Math.PI*2;i+=Math.PI*2/12)//Math.PI*2 - полный круг часов,Math.PI*2/12 - это 1/12 полного круга часов
{
ctx.beginPath();
ctx.arc(width/2+220*Math.cos(i),// 2 center полного круга кружков,220 shirina полного круга кружков
height/2+220*Math.sin(i),       // 2 center полного круга кружков,220  visota полного круга кружков
13,0,2*Math.PI);                //13 radius кружков,0 uglovoe sehenie кружков,2 vopros
ctx.fill();
ctx.closePath();
}      
for(var i=0;i<=Math.PI*2;i+=Math.PI*2/60)//Math.PI*2 - полный круг часов,Math.PI*2/12 - это 1/12 полного круга часов
{
ctx.beginPath();
ctx.arc(width/2+203*Math.cos(i),//2 center полного круга кружков,220 shirina полного круга кружков
height/2+203*Math.sin(i),       //2 center полного круга кружков,220  visota полного круга кружков
5,0,2*Math.PI);                 //13 radius кружков,0 uglovoe sehenie кружков,2 vopros
ctx.fill();
ctx.closePath();
}      
line(position_h,233,8);//Рисование стрелок часов
line(position_m,208,3);//Рисование стрелок часов
line(position_s,208,1);//Рисование стрелок часов
}  
setInterval(alarm,1000);
}//Создание таймера, вызывающего всю перерисовку

