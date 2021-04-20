function StyleDeutschDb()
{
document.getElementById("Txt").style.display="block";
document.getElementById("Txt").style.position="absolute";
document.getElementById("Txt").style.top="1%";
document.getElementById("Txt").style.right="1%";
document.getElementById("Txt").style.width="50%";
document.getElementById("Txt").style.height="93%";
document.getElementById("Txt").style.border="2px solid #777777";
document.getElementById('Txt').style.paddingLeft="3%";
document.getElementById('Txt').style.paddingTop="2%";
document.getElementById('Txt').style.paddingRight="3%";
document.getElementById('Txt').style.backgroundColor="Honeydew";
document.getElementById("Txt").style.overflow="scroll";
}
//*************************** Простые вежливые обращения ************************************************************
function FunGrüsse(a, b)
{
this.a = a  //
this.b = b	//
}
//  Здесь можно любое количество строк
ArrayGrüsse = new Array()
ArrayGrüsse[0] = new FunGrüsse("Hallo!", "Приветствую!")
ArrayGrüsse[1] = new FunGrüsse("Willkomm", "Привет, приветствие")
ArrayGrüsse[2] = new FunGrüsse("Willkommen", "приветствие")
ArrayGrüsse[3] = new FunGrüsse("Salut", "приветствие, салют")
ArrayGrüsse[4] = new FunGrüsse("Gruß", "поклон, привет, приветствие, салют, отдание чести")
ArrayGrüsse[5] = new FunGrüsse("Begrüßung", "поклон, чествование, приветствие, салют")
ArrayGrüsse[6] = new FunGrüsse("Tschüss!", "До встречи!, Пока!")
TabGrüsse = "<TABLE Id=\"SyTb\"><TR>"
/* Формирование строк таблицы */
for(i=0;i<=ArrayGrüsse.length-1;i++)
{
TabGrüsse += "<TR><TD>"+ArrayGrüsse[i].a
TabGrüsse += "</TD><TD>" + ArrayGrüsse[i].b + "</TD></TR>"
}
TabGrüsse += "</TABLE>"

function GrüsseGrüsse()
{
document.getElementById("Txt").innerHTML = (TabGrüsse);
StyleDeutschDb()
}
//*************************** Составные вежливые обращения ************************************************************
function FunGgr(a, b)
{
this.a = a  //
this.b = b	//
}
//
ArrayGgr = new Array()
ArrayGgr[0] = new FunGgr("Herzlich willkommen!", "Сердечно приветствую!")
ArrayGgr[1] = new FunGgr("Alles Guten!", "Всего хорошего!")
ArrayGgr[2] = new FunGgr("Guten Morgen!", "Доброе утро!")
ArrayGgr[3] = new FunGgr("Guten tag!", "Доброый день!")
ArrayGgr[4] = new FunGgr("Guten abend!", "Доброый вечер!")
ArrayGgr[5] = new FunGgr("Gute Nacht!", "Доброй ночи!")
ArrayGgr[6] = new FunGgr("Viel Glück!", "Много счастья!")
ArrayGgr[7] = new FunGgr("im neuen Jahr!", "в новом году!")
ArrayGgr[8] = new FunGgr("Glücklichen Rutsch ins neuen Jahr!", "Удачного скольжения в новом году!")
ArrayGgr[9] = new FunGgr("Alles Gute für das neue Jahr!", "Всего хорошего в новом году!")
ArrayGgr[10] = new FunGgr("Ich wünsche dir und deiner Familie ein glückliches und gesundes neues Jahr!", "Я желаю тебе и твоей семье счастья и здоровья в новом году!")
ArrayGgr[11] = new FunGgr("Ich grüße dich!", "Приветствую тебя!")
ArrayGgr[12] = new FunGgr("Darf ich herein?", "Можно мне войти?")
ArrayGgr[13] = new FunGgr("Darf ich heraus?", "Можно мне выйти?")
ArrayGgr[14] = new FunGgr("Darf ich durch?", "Можно мне сквозь?")
TabGr = "<TABLE Id=\"SyTb\"><TR>"
/* Формирование строк таблицы */
for(i=0;i<=ArrayGgr.length-1;i++)
{
TabGr += "<TR><TD>"+ArrayGgr[i].a
TabGr += "</TD><TD>" +ArrayGgr[i].b + "</TD></TR>"
}
TabGr += "</TABLE>"

function GrsGgrsse()
{
document.getElementById("Txt").innerHTML = (TabGr);
StyleDeutschDb()
}
//*************************** Alphabet ************************************************************
function E(name)
{
this.name = name
}
// 
function Alph(A, B, D, E)
{
this.A = A 	//
this.B = B 	//
this.D = D 	//
this.E = E	//
}
hab = new Array()
hab[0] = new Alph("A", "a", "Ä", "ä")
hab[1] = new Alph("B", "b", " ", " ")
hab[2] = new Alph("C", "c", " ", " ")
hab[3] = new Alph("D", "d", " ", " ")
hab[4] = new Alph("E", "e", " ", " ")
hab[5] = new Alph("F", "f", " ", " ")
hab[6] = new Alph("G", "g", " ", " ")
hab[7] = new Alph("H", "h", " ", " ")
hab[8] = new Alph("I", "i", " ", " ")
hab[9] = new Alph("J", "j", " ", " ")
hab[10] = new Alph("K", "k", " ", " ")
hab[11] = new Alph("L", "l", " ", " ")
hab[12] = new Alph("M", "m", " ", " ")
hab[13] = new Alph("N", "n", " ", " ")
hab[14] = new Alph("O", "o", "Ö", "ö")
hab[15] = new Alph("P", "p", " ", " ")
hab[16] = new Alph("Q", "q", " ", " ")
hab[17] = new Alph("R", "r", " ", " ")
hab[18] = new Alph("S", "s", "ß", " ")
hab[19] = new Alph("T", "t", " ", " ")
hab[20] = new Alph("U", "u", "Ü", "ü")
hab[21] = new Alph("V", "v", " ", " ")
hab[22] = new Alph("W", "w", " ", " ")
hab[23] = new Alph("X", "x", " ", " ")
hab[24] = new Alph("Y", "y", " ", " ")
hab[25] = new Alph("Z", "z", " ", " ")

TabA = "<TABLE BORDER=1><TR>"
TabA +=" <TH>Groß</TH><TH>Klein</TH><TH>Umlaut</TH><TH>Umlaut</TH></TR>"
/* Формирование строк таблицы */
for(i=0;i<=hab.length-1;i++)
{
TabA += "<TR><TD>" + hab[i].A
TabA += "</TD><TD>"+hab[i].B
TabA += "</TD><TD>"+hab[i].D
TabA += "</TD><TD>" + hab[i].E + "</TD></TR>"
}
TabA += "</TABLE>"
function AlphabetD()
{
document.getElementById("Txt").innerHTML = (TabA);
StyleDeutschDb()
}
//*************************** Okonhania Окончания ************************************************************
function Okon(a, b, c)// конструктор списка
{
this.a = a  //
this.b = b	  //
this.c = c	  //
}
//  Здесь можно любое количество строк
ArraOkon = new Array()
ArraOkon[0] = new Okon("ich", "я", "e")
ArraOkon[1] = new Okon("du",  "ты", "st")
ArraOkon[2] = new Okon("Sie", "Вы", "en")
ArraOkon[3] = new Okon("er",  "он", "t")
ArraOkon[4] = new Okon("sie", "она", "t")
ArraOkon[5] = new Okon("es",  "оно", "t")
ArraOkon[6] = new Okon("man", " ", "t")
ArraOkon[7] = new Okon("wir", "мы", "en")
ArraOkon[8] = new Okon("ihr", "вы", "t")
ArraOkon[9] = new Okon("sie", "они", "en")
//
TabOkon = "<TABLE Id=\"SyTb\"><TR>"
TabOkon +=" <TH>Местоимение</TH><TH>Перевод</TH><TH>Окончание</TH></TR>"
/* Формирование строк таблицы */
for(i=0;i<=ArraOkon.length-1;i++)
{
TabOkon += "<TR><TD>"+ArraOkon[i].a
TabOkon += "</TD><TD>"+ArraOkon[i].b
TabOkon += "</TD><TD>" + ArraOkon[i].c + "</TD></TR>"
}
TabOkon += "</TABLE>"
//
function Okonhania()
{
document.getElementById("Txt").innerHTML = (TabOkon);
StyleDeutschDb()
}
//*************************** FragUrs Вопрос причины ************************************************************
function FragUrs(a, b)
{
this.a = a  //
this.b = b	//
}
//  Здесь можно любое количество строк
ArrayFragUrs = new Array()
ArrayFragUrs[0] = new FragUrs("Um?", "во?")
ArrayFragUrs[1] = new FragUrs("Wie viel?", "Сколдько?")
ArrayFragUrs[2] = new FragUrs("Wie viele?", "Как много?")
ArrayFragUrs[3] = new FragUrs("Wie oft?", "Как часто?")
ArrayFragUrs[4] = new FragUrs("Wie lange?", "Как долго?")
ArrayFragUrs[5] = new FragUrs("Wie wait?", "Как далеко?")
ArrayFragUrs[6] = new FragUrs("Wieso?", "Отчего?")
ArrayFragUrs[7] = new FragUrs("Warum?", "Почему?")
ArrayFragUrs[8] = new FragUrs("Weshalb?", "Почему?")
ArrayFragUrs[9] = new FragUrs("Weswegen?", "Из-за чего?")
TabFragUrs = "<TABLE Id=\"SyTb\"><TR>"
TabFragUrs +="<TH colspan='2'>Fragen</TH>"
/* Формирование строк таблицы */
for(i=0;i<=ArrayFragUrs.length-1;i++)
{
TabFragUrs += "<TR><TD>"+ArrayFragUrs[i].a
TabFragUrs += "</TD><TD>" +ArrayFragUrs[i].b + "</TD></TR>"
}
TabFragUrs += "</TABLE>"

function FragUrsF()
{
document.getElementById("Txt").innerHTML = (TabFragUrs);
StyleDeutschDb()
}
//*************************** Fragn ************************************************************
function Fragn(a, b)// конструктор списка
{
this.a = a  //
this.b = b	//
}
//  Здесь можно любое количество строк
ArrayFrag = new Array()
ArrayFrag[0] = new Fragn("Wann?", "Когда?")
ArrayFrag[1] = new Fragn("Woher?", "Откуда?")
ArrayFrag[2] = new Fragn("Wo?", "Где?")
ArrayFrag[3] = new Fragn("Wohin?", "Куда?")
ArrayFrag[4] = new Fragn("Wer?", "Кто?")
ArrayFrag[5] = new Fragn("wen?", "(A.) кого?")
ArrayFrag[6] = new Fragn("wem?", "(D.) кому?")
ArrayFrag[7] = new Fragn("Welcher?", "Какой?")
ArrayFrag[8] = new Fragn("Welche?", "Какая?")
ArrayFrag[9] = new Fragn("Welches?", "Какое?")
ArrayFrag[10] = new Fragn("Wessen?", "Чей?")
ArrayFrag[11] = new Fragn("Über wen?", "О ком?")
ArrayFrag[12] = new Fragn("Worüber?", "О чём?")
ArrayFrag[13] = new Fragn("Was?", "Что?")
ArrayFrag[14] = new Fragn("Wie?", "Как?")
TabFragZeit = "<TABLE Id=\"SyTb\"><TR>"
TabFragZeit +="<TH colspan='2'>Fragen</TH>"
/* Формирование строк таблицы */
for(i=0;i<=ArrayFrag.length-1;i++)
{
TabFragZeit += "<TR><TD>"+ArrayFrag[i].a
TabFragZeit += "</TD><TD>" + ArrayFrag[i].b + "</TD></TR>"
}
TabFragZeit += "</TABLE>"

function FragF()
{
document.getElementById("Txt").innerHTML = (TabFragZeit);
StyleDeutschDb()
}
//*************************** FragZeit ************************************************************
function FragZeit(a, b)// конструктор списка
{
this.a = a  //
this.b = b	//
}
//  Здесь можно любое количество строк
ArrayFragN = new Array()
ArrayFragN[0] = new FragZeit("Wie spät ist es?", "Сколько время? (Как поздно это есть?)")
ArrayFragN[1] = new FragZeit("Wie viel Uhr ist es?", "Сколько время? (Как много часов это есть?)")
ArrayFragN[2] = new FragZeit("Um viel Uhr ist es?", "Во сколько? (Во много часов это есть?)")

TabFragN = "<TABLE Id=\"SyTb\"><TR>"
TabFragN +="<TH colspan='2'>Fragen zur Zeit</TH>"
/* Формирование строк таблицы */
for(i=0;i<=ArrayFragN.length-1;i++)
{
TabFragN += "<TR><TD>"+ArrayFragN[i].a
TabFragN += "</TD><TD>" + ArrayFragN[i].b + "</TD></TR>"
}
TabFragN += "</TABLE>"

function FragZeitF()
{
document.getElementById("Txt").innerHTML = (TabFragN);
StyleDeutschDb()
}
//*************************** DemonstrativePronomen ************************************************************
function DemPro(a, b)// конструктор списка
{
this.a = a  //
this.b = b	//
}
//  Здесь можно любое количество строк
ArrayDemPro = new Array()
ArrayDemPro[0] = new DemPro("", "")
ArrayDemPro[1] = new DemPro("", "")
ArrayDemPro[2] = new DemPro("dieser", "этот")
ArrayDemPro[3] = new DemPro("diese", "эта")
ArrayDemPro[4] = new DemPro("dieser", "это")
ArrayDemPro[5] = new DemPro("", "")
ArrayDemPro[6] = new DemPro("", "")
ArrayDemPro[7] = new DemPro("diese", "эти")
ArrayDemPro[8] = new DemPro("", "")
ArrayDemPro[9] = new DemPro("", "")

TabDemPro = "<TABLE Id=\"SyTb\"><TR>"
/* Формирование строк таблицы */
for(i=0;i<=ArrayDemPro.length-1;i++)
{
TabDemPro += "<TR><TD>"+ArrayDemPro[i].a
TabDemPro += "</TD><TD>" + ArrayDemPro[i].b + "</TD></TR>"
}
TabDemPro += "</TABLE>"

function DemonstrativePronomen()
{
document.getElementById("Txt").innerHTML = (TabDemPro);
StyleDeutschDb()
}
//*************************** NegWort ************************************************************
function NegWort(a, b)// конструктор списка
{
this.a = a  //
this.b = b	//
}
//  Здесь можно любое количество строк
ArrayNegWort = new Array()
ArrayNegWort[0] = new NegWort("nicht", "не")
ArrayNegWort[1] = new NegWort("noch nicht", "еще не")
ArrayNegWort[2] = new NegWort("nichts", "ни")
ArrayNegWort[3] = new NegWort("nichts alles", "ничего")
ArrayNegWort[4] = new NegWort("nie", "никогда")
ArrayNegWort[5] = new NegWort("noch nie", "еще никогда")
ArrayNegWort[6] = new NegWort("niemals", "ни разу")
ArrayNegWort[7] = new NegWort("niemand", "никто")
ArrayNegWort[8] = new NegWort("niemandem", "никому")
ArrayNegWort[9] = new NegWort("nirgendwo", "нигде")
ArrayNegWort[10] = new NegWort("nirgends", "нигде")
ArrayNegWort[11] = new NegWort("ohne", "без")

TabNegWort = "<TABLE Id=\"SyTb\"><TR>"
/* Формирование строк таблицы */
for(i=0;i<=ArrayNegWort.length-1;i++)
{
TabNegWort += "<TR><TD>"+ArrayNegWort[i].a
TabNegWort += "</TD><TD>" + ArrayNegWort[i].b + "</TD></TR>"
}
TabNegWort += "</TABLE>"

function NegativeWort()
{
document.getElementById("Txt").innerHTML = (TabNegWort);
StyleDeutschDb()
}
//*************************** Konjuktion ************************************************************
function KonjuktionF(a, b)// конструктор списка
{
this.a = a  //
this.b = b	//
}
//  Здесь можно любое количество строк
ArrayKon = new Array()
ArrayKon[0] = new KonjuktionF("und", "и")
ArrayKon[1] = new KonjuktionF("aber", "но")
ArrayKon[2] = new KonjuktionF("oder", "или")
ArrayKon[3] = new KonjuktionF("denn", "так как")
ArrayKon[4] = new KonjuktionF("nicht..., sondern", "не..., а")

TabKon = "<TABLE Id=\"SyTb\"><TR>"
/* Формирование строк таблицы */
for(i=0;i<=ArrayKon.length-1;i++)
{
TabKon += "<TR><TD>"+ArrayKon[i].a
TabKon += "</TD><TD>" + ArrayKon[i].b + "</TD></TR>"
}
TabKon += "</TABLE>"

function Konjukt()
{
document.getElementById("Txt").innerHTML = (TabKon);
StyleDeutschDb()
}
//*************************** Окончания Substantive *******************************************************
function FunSubstantive(a, b, c)
{
this.a = a
this.b = b
this.c = c
}
Arra = new Array()
Arra[0] = new FunSubstantive("Мужское окончание", "Женское окончание", "Средний род")
Arra[1] = new FunSubstantive("ant", "heit", "chen")
Arra[2] = new FunSubstantive("ent",  "keit", "lein")
Arra[3] = new FunSubstantive("ist", "ung", "ment")
Arra[4] = new FunSubstantive("at",  "ik", "tun")
Arra[5] = new FunSubstantive("oge", "ie", "um")
Arra[6] = new FunSubstantive("ismus", "enz", " ")
Arra[7] = new FunSubstantive("or", "ion", " ")
Arra[8] = new FunSubstantive("ich", "ur", " ")
Arra[9] = new FunSubstantive("ling", "ität", " ")
//
TabSubstantive = "<TABLE Id=\"SyTb\"><TR>"
TabSubstantive +=" <TH>Der</TH><TH>Die</TH><TH>Das</TH>"
/* Формирование строк таблицы */
for(i=0;i<=Arra.length-1;i++)
{
TabSubstantive += "<TR><TD>"+Arra[i].a
TabSubstantive += "</TD><TD>"+Arra[i].b
TabSubstantive += "</TD><TD>" + Arra[i].c + "</TD></TR>"
}
TabSubstantive += "</TABLE>"
//
function GetSubstantive()
{
document.getElementById("Txt").innerHTML = (TabSubstantive);
StyleDeutschDb()
}
//*************************** Wollen Хотеть. *******************************************************
function FunWollen(a, b, c)
{
this.a = a
this.b = b
this.c = c
}
Arra = new Array()
Arra[0] = new FunWollen("ich", "will", "я хочу")
Arra[1] = new FunWollen("du",  "willst", "ты хочеш")
Arra[2] = new FunWollen("Sie", "wollen", "Вы хотите")
Arra[3] = new FunWollen("er",  "will", "он хочет")
Arra[4] = new FunWollen("sie", "will", "она хочет")
Arra[5] = new FunWollen("es",  "will", "оно хочет")
Arra[6] = new FunWollen("man", "will", "хочет")
Arra[7] = new FunWollen("wir", "wollen", "мы хотим")
Arra[8] = new FunWollen("ihr", "wollt", "вы хотите")
Arra[9] = new FunWollen("sie", "wollen", "они хотият")
//
TabWollen = "<TABLE  Id=\"SyTb\"><TR>"
TabWollen +=" <TH></TH><TH></TH><TH>Перевод</TH></TR>"
/* Формирование строк таблицы */
for(i=0;i<=Arra.length-1;i++)
{
TabWollen += "<TR><TD>"+Arra[i].a
TabWollen += "</TD><TD>"+Arra[i].b
TabWollen += "</TD><TD>" + Arra[i].c + "</TD></TR>"
}
TabWollen += "</TABLE>"
//
function GetWollen()
{
document.getElementById("Txt").innerHTML = (TabWollen);
StyleDeutschDb()
}
//*************************** Sollen Мочь, по собственному решению. *******************************************************
function FunSollen(a, b, c)
{
this.a = a
this.b = b
this.c = c
}
Arra = new Array()
Arra[0] = new FunSollen("ich", "soll", "я могу")
Arra[1] = new FunSollen("du",  "sollst", "ты можеш")
Arra[2] = new FunSollen("Sie", "sollen", "Вы можете")
Arra[3] = new FunSollen("er",  "soll", "он может")
Arra[4] = new FunSollen("sie", "soll", "она может")
Arra[5] = new FunSollen("es",  "soll", "оно может")
Arra[6] = new FunSollen("man", "soll", "может")
Arra[7] = new FunSollen("wir", "sollen", "мы можем")
Arra[8] = new FunSollen("ihr", "sollt", "вы можете")
Arra[9] = new FunSollen("sie", "sollen", "они могут")
//
TabSollen = "<TABLE Id=\"SyTb\"><TR>"
TabSollen +=" <TH></TH><TH></TH><TH>Перевод</TH></TR>"
/* Формирование строк таблицы */
for(i=0;i<=Arra.length-1;i++)
{
TabSollen += "<TR><TD>"+Arra[i].a
TabSollen += "</TD><TD>"+Arra[i].b
TabSollen += "</TD><TD>" + Arra[i].c + "</TD></TR>"
}
TabSollen += "</TABLE>"
//
function GetSollen()
{
document.getElementById("Txt").innerHTML = (TabSollen);
StyleDeutschDb()
}
//*************************** Müssen Должен, по собственному решению. *******************************************************
function FunMussen(a, b, c)
{
this.a = a
this.b = b
this.c = c
}
Arra = new Array()
Arra[0] = new FunMussen("ich", "muss", "я должен")
Arra[1] = new FunMussen("du",  "musst", "ты должен")
Arra[2] = new FunMussen("Sie", "müssen", "Вы должны")
Arra[3] = new FunMussen("er",  "muss", "он должен")
Arra[4] = new FunMussen("sie", "muss", "она должена")
Arra[5] = new FunMussen("es",  "muss", "оно должено")
Arra[6] = new FunMussen("man", "muss", "должен")
Arra[7] = new FunMussen("wir", "müssen", "мы должны")
Arra[8] = new FunMussen("ihr", "müsst", "вы должны")
Arra[9] = new FunMussen("sie", "müssen", "им, должны")
//
TabMussen = "<TABLE Id=\"SyTb\"><TR>"
TabMussen +=" <TH></TH><TH></TH><TH>Перевод</TH></TR>"
/* Формирование строк таблицы */
for(i=0;i<=Arra.length-1;i++)
{
TabMussen += "<TR><TD>"+Arra[i].a
TabMussen += "</TD><TD>"+Arra[i].b
TabMussen += "</TD><TD>" + Arra[i].c + "</TD></TR>"
}
TabMussen += "</TABLE>"
//
function GetMussen()
{
document.getElementById("Txt").innerHTML = (TabMussen);
StyleDeutschDb()
}
//*************************** Mögen Любить, нравиться. ************************************************************
function FunMogen(Hab, Ha, H)// конструктор списка
{
this.Hab = Hab  //
this.Ha = Ha	  //
this.H = H	  //
}
Arra = new Array()
Arra[0] = new FunMogen("ich", "mag", "я люблю, нравиться.")
Arra[1] = new FunMogen("du",  "magst", "ты любишь, нравиться.")
Arra[2] = new FunMogen("Sie", "mögen", "Вы любите, нравиться.")
Arra[3] = new FunMogen("er",  "mag", "он любит, нравиться.")
Arra[4] = new FunMogen("sie", "mag", "она любит, нравиться.")
Arra[5] = new FunMogen("es",  "mag", "оно любит, нравиться.")
Arra[6] = new FunMogen("man", "mag", "любть, нравиться.")
Arra[7] = new FunMogen("wir", "mögen", "мы любим, нравиться.")
Arra[8] = new FunMogen("ihr", "mögt", "вы любите, нравиться.")
Arra[9] = new FunMogen("sie", "mögen", "им, нравиться.")
//
TabMogen = "<TABLE Id=\"SyTb\"><TR>"
TabMogen +=" <TH></TH><TH></TH><TH>Перевод</TH></TR>"
/* Формирование строк таблицы */
for(i=0;i<=Arra.length-1;i++)
{
TabMogen += "<TR><TD>"+Arra[i].Hab
TabMogen += "</TD><TD>"+Arra[i].Ha
TabMogen += "</TD><TD>" + Arra[i].H + "</TD></TR>"
}
TabMogen += "</TABLE>"
//
function GetMogen()
{
document.getElementById("Txt").innerHTML = (TabMogen);
StyleDeutschDb()
}
//*************************** Möchten ************************************************************
function FunMochten(Mocht, Ha, H)// конструктор списка
{
this.Mocht = Mocht  //
this.Ha = Ha	  //
this.H = H	  //
}
Arra = new Array()
Arra[0] = new FunMochten("ich", "möchte", "я хотел бы")
Arra[1] = new FunMochten("du",  "möchtest", "ты хотел бы")
Arra[2] = new FunMochten("Sie", "möchten", "Вы хотели бы")
Arra[3] = new FunMochten("er",  "möchte", "он хотел бы")
Arra[4] = new FunMochten("sie", "möchte", "она хотела бы")
Arra[5] = new FunMochten("es",  "möchte", "оно хотело бы")
Arra[6] = new FunMochten("man", "möchte", "хотело бы")
Arra[7] = new FunMochten("wir", "möchten", "мы хотели бы")
Arra[8] = new FunMochten("ihr", "möchtet", "вы хотели бы")
Arra[9] = new FunMochten("sie", "möchten", "они хотели бы")
//
TabMochten = "<TABLE Id=\"SyTb\"><TR>"
TabMochten +=" <TH></TH><TH></TH><TH>Перевод</TH></TR>"
/* Формирование строк таблицы */
for(i=0;i<=Arra.length-1;i++)
{
TabMochten += "<TR><TD>"+Arra[i].Mocht
TabMochten += "</TD><TD>"+Arra[i].Ha
TabMochten += "</TD><TD>" + Arra[i].H + "</TD></TR>"
}
TabMochten += "</TABLE>"
//
function GetMochten()
{
document.getElementById("Txt").innerHTML = (TabMochten);
StyleDeutschDb()
}
//*************************** Konnen ************************************************************
function FunKonnen(Hab, Ha, H)// конструктор списка
{
this.Hab = Hab  //
this.Ha = Ha	  //
this.H = H	  //
}
Arra = new Array()
Arra[0] = new FunKonnen("ich", "kann", "я могу")
Arra[1] = new FunKonnen("du",  "kannst", "ты можешь")
Arra[2] = new FunKonnen("Sie", "können", "Вы можете")
Arra[3] = new FunKonnen("er",  "kann", "он может")
Arra[4] = new FunKonnen("sie", "kann", "она может")
Arra[5] = new FunKonnen("es",  "kann", "оно может")
Arra[6] = new FunKonnen("man", "kann", "можно")
Arra[7] = new FunKonnen("wir", "können", "мы можем")
Arra[8] = new FunKonnen("ihr", "könnt", "вы можете")
Arra[9] = new FunKonnen("sie", "können", "они могут")
//
TabKonnen = "<TABLE Id=\"SyTb\"><TR>"
TabKonnen +=" <TH></TH><TH></TH><TH>Перевод</TH></TR>"
/* Формирование строк таблицы */
for(i=0;i<=Arra.length-1;i++)
{
TabKonnen += "<TR><TD>"+Arra[i].Hab
TabKonnen += "</TD><TD>"+Arra[i].Ha
TabKonnen += "</TD><TD>" + Arra[i].H + "</TD></TR>"
}
TabKonnen += "</TABLE>"
//
function GetKonnen()
{
document.getElementById("Txt").innerHTML = (TabKonnen);
StyleDeutschDb()
}
//*************************** Dürfen ************************************************************
function FunDurfen(Hab, Ha, H)// конструктор списка
{
this.Hab = Hab  //
this.Ha = Ha	  //
this.H = H	  //
}
Arra = new Array()
Arra[0] = new FunDurfen("ich", "darf", "я могу")
Arra[1] = new FunDurfen("du",  "darfst", "ты можешь")
Arra[2] = new FunDurfen("Sie", "dürfen", "Вы можете")
Arra[3] = new FunDurfen("er",  "darf", "он может")
Arra[4] = new FunDurfen("sie", "darf", "она может")
Arra[5] = new FunDurfen("es",  "darf", "оно может")
Arra[6] = new FunDurfen("man", "darf", "можно")
Arra[7] = new FunDurfen("wir", "dürfen", "мы можем")
Arra[8] = new FunDurfen("ihr", "dürft", "вы можете")
Arra[9] = new FunDurfen("sie", "dürfen", "они могут")
//
TabDürfen = "<TABLE Id=\"SyTb\"><TR>"
TabDürfen +=" <TH></TH><TH></TH><TH>Перевод</TH></TR>"
/* Формирование строк таблицы */
for(i=0;i<=Arra.length-1;i++)
{
TabDürfen += "<TR><TD>"+Arra[i].Hab
TabDürfen += "</TD><TD>"+Arra[i].Ha
TabDürfen += "</TD><TD>" + Arra[i].H + "</TD></TR>"
}
TabDürfen += "</TABLE>"
//
function DurfenDurfen()
{
document.getElementById("Txt").innerHTML = (TabDürfen);
StyleDeutschDb()
}
//*************************** Быть Sein ************************************************************
function Sei(Eins, abc, ichh)// конструктор списка
{
this.Eins = Eins  //
this.abc = abc	  //
this.ichh = ichh	  //
}
//  Здесь можно любое количество строк
Arra = new Array()
Arra[0] = new Sei("ich", "bin", "я есть")
Arra[1] = new Sei("du",  "bist", "ты есть")
Arra[2] = new Sei("Sie", "sind", "Вы есть")
Arra[3] = new Sei("er",  "ist", "он есть")
Arra[4] = new Sei("sie", "ist", "она есть")
Arra[5] = new Sei("es",  "ist", "оно есть")
Arra[6] = new Sei("man", "ist", "есть")
Arra[7] = new Sei("wir", "sind", "мы есть")
Arra[8] = new Sei("ihr", "seid", "вы есть")
Arra[9] = new Sei("sie", "sind", "они есть")
//
TabSein = "<TABLE Id=\"SyTb\"><TR>"
TabSein +=" <TH>Pronomen</TH><TH>Präsens</TH><TH>Перевод</TH></TR>"
/* Формирование строк таблицы */
for(i=0;i<=Arra.length-1;i++)
{
TabSein += "<TR><TD>"+Arra[i].Eins
TabSein += "</TD><TD>"+Arra[i].abc
TabSein += "</TD><TD>" + Arra[i].ichh + "</TD></TR>"
}
TabSein += "</TABLE>"
//
function SeinSein()
{
document.getElementById("Txt").innerHTML = (TabSein);
StyleDeutschDb()
}
//*************************** иметь Haben ************************************************************
function Habe(Hab, Ha, H)// конструктор списка
{
this.Hab = Hab  //
this.Ha = Ha	  //
this.H = H	  //
}
//  Здесь можно любое количество строк
Arra = new Array()
Arra[0] = new Habe("ich", "habe", "я имею")
Arra[1] = new Habe("du",  "hast", "ты имеешь")
Arra[2] = new Habe("Sie", "haben", "Вы имеете")
Arra[3] = new Habe("er",  "hat", "он имеет")
Arra[4] = new Habe("sie", "hat", "она имеет")
Arra[5] = new Habe("es",  "hat", "оно имеет")
Arra[6] = new Habe("man", "hat", "иметь")
Arra[7] = new Habe("wir", "haben", "мы имеем")
Arra[8] = new Habe("ihr", "habt", "вы имеете")
Arra[9] = new Habe("sie", "haben", "они имеют")
//
Tpr = "<TABLE Id=\"SyTb\"><TR>"
Tpr +=" <TH>Pronomen</TH><TH>Präsens</TH><TH>Перевод</TH></TR>"
/* Формирование строк таблицы */
for(i=0;i<=Arra.length-1;i++)
{
Tpr += "<TR><TD>"+Arra[i].Hab
Tpr += "</TD><TD>"+Arra[i].Ha
Tpr += "</TD><TD>" + Arra[i].H + "</TD></TR>"
}
Tpr += "</TABLE>"
//
function HabenHaben()
{
document.getElementById("Txt").innerHTML = (Tpr);
StyleDeutschDb()
}
//*************************** Possessiv Weiblich ************************************************************
function car(Eins, abc)// конструктор списка
{
this.Eins = Eins  //
this.abc = abc	  //
}
//  Здесь можно любое количество строк
acar = new Array()
acar[0] = new car("meine", "моя")
acar[1] = new car("deine", "твоя")
acar[2] = new car("Ihre", "Ваша")
acar[3] = new car("seine", "его")
acar[4] = new car("ihre", "её")
acar[5] = new car("seine", "его")
acar[6] = new car("uns(e)re", "наша")
acar[7] = new car("eure", "ваша")
acar[8] = new car("ihre", "их")

Tpw = "<TABLE Id=\"SyTb\"><TR>"
Tpw +=" <TH style='border:1px solid #000000; background-color:Lavender'></TH>\
<TH style='border:1px solid #000000; background-color:Lavender; font-size:120%'></TH></TR>"
/* Формирование строк таблицы */
for(i=0;i<=acar.length-1;i++)
{
Tpw += "<TR><TD style='border:1px solid #000000; background-color:LightCyan'>"+acar[i].Eins
Tpw += "</TD><TD style='border:1px solid #000000; background-color:LightCyan'>" + acar[i].abc + "</TD></TR>"
}
Tpw += "</TABLE>"

function tTpw()
{
document.getElementById("Txt").innerHTML = (Tpw);
StyleDeutschDb()
}
//*************************** PossessivPlural ************************************************************
function car(Eins, abc)// конструктор списка
{
this.Eins = Eins  //
this.abc = abc	  //
}
//  Здесь можно любое количество строк
acar = new Array()
acar[0] = new car("meine", "мой")
acar[1] = new car("deine", "твой")
acar[2] = new car("Ihre", "ваш")
acar[3] = new car("seine", "его")
acar[4] = new car("ihre", "её")
acar[5] = new car("seine", "его")
acar[6] = new car("uns(e)re", "наши")
acar[7] = new car("eure", "ваши")
acar[8] = new car("ihre", "их")

Tpp = "<TABLE Id=\"SyTb\"><TR>"
Tpp +=" <TH style='border:1px solid #000000; background-color:Lavender'></TH>\
<TH style='border:1px solid #000000; background-color:Lavender; font-size:120%'></TH></TR>"
/* Формирование строк таблицы */
for(i=0;i<=acar.length-1;i++)
{
Tpp += "<TR><TD style='border:1px solid #000000; background-color:LightCyan'>"+acar[i].Eins
Tpp += "</TD><TD style='border:1px solid #000000; background-color:LightCyan'>" + acar[i].abc + "</TD></TR>"
}
Tpp += "</TABLE>"

function tTpp()
{
document.getElementById("Txt").innerHTML = (Tpp);
StyleDeutschDb()
}
//*************************** PossessivNeutrum ************************************************************
function car(Eins, abc)// конструктор списка
{
this.Eins = Eins  //
this.abc = abc	  //
}
//  Здесь можно любое количество строк
acar = new Array()
acar[0] = new car("mein", "мое")
acar[1] = new car("dein", "твое")
acar[2] = new car("Ihr", "ваше")
acar[3] = new car("sein", "его")
acar[4] = new car("ihr", "её")
acar[5] = new car("sein", "его")
acar[6] = new car("unser", "наше")
acar[7] = new car("euer", "ваше")
acar[8] = new car("ihr", "их")

Tpn = "<TABLE Id=\"SyTb\"><TR>"
Tpn +=" <TH style='border:1px solid #000000; background-color:Lavender'></TH>\
<TH style='border:1px solid #000000; background-color:Lavender; font-size:120%'></TH></TR>"
/* Формирование строк таблицы */
for(i=0;i<=acar.length-1;i++)
{
Tpn += "<TR><TD style='border:1px solid #000000; background-color:LightCyan'>"+acar[i].Eins
Tpn += "</TD><TD style='border:1px solid #000000; background-color:LightCyan'>" + acar[i].abc + "</TD></TR>"
}
Tpn += "</TABLE>"

function tTpn()
{
document.getElementById("Txt").innerHTML = (Tpn);
StyleDeutschDb()
}
//*************************** Possessiv Mann ************************************************************
function car(Eins, abc)// конструктор списка
{
this.Eins = Eins  //
this.abc = abc	  //
}
//  Здесь можно любое количество строк
acar = new Array()
acar[0] = new car("mein", "мой")
acar[1] = new car("dein", "твой")
acar[2] = new car("Ihr", "Ваш")
acar[3] = new car("sein", "его")
acar[4] = new car("ihr", "её")
acar[5] = new car("sein", "его")
acar[6] = new car("unser", "наш")
acar[7] = new car("euer", "ваш")
acar[8] = new car("ihr", "их")

Tpm = "<TABLE Id=\"SyTb\"><TR>"
Tpm +=" <TH style='border:1px solid #000000; background-color:Lavender'></TH>\
<TH style='border:1px solid #000000; background-color:Lavender; font-size:120%'></TH></TR>"
/* Формирование строк таблицы */
for(i=0;i<=acar.length-1;i++)
{
Tpm += "<TR><TD style='border:1px solid #000000; background-color:LightCyan'>"+acar[i].Eins
Tpm += "</TD><TD style='border:1px solid #000000; background-color:LightCyan'>" + acar[i].abc + "</TD></TR>"
}
Tpm += "</TABLE>"
function tTpm()
{
document.getElementById("Txt").innerHTML = (Tpm);
StyleDeutschDb()
}
//*************************** Reflexive ************************************************************
function Reflexive(Eins, abc)// конструктор списка
{
this.Eins = Eins  //
this.abc = abc	  //
}
//  Здесь можно любое количество строк
Ref = new Array()
Ref[0] = new Reflexive("mich", "себя")
Ref[1] = new Reflexive("dich",  "себя")
Ref[2] = new Reflexive("Sich", "себя")
Ref[3] = new Reflexive("sich",  "себя")
Ref[4] = new Reflexive("sich", "себя")
Ref[5] = new Reflexive("sich",  "себя")
Ref[6] = new Reflexive("uns", "себя")
Ref[7] = new Reflexive("euch", "себя")
Ref[8] = new Reflexive("sich", "себя")

TabRef = "<TABLE Id=\"SyTb\"><TR>"
TabRef +=" <TH style='border:1px solid #000000; background-color:Lavender'></TH>\
<TH style='border:1px solid #000000; background-color:Lavender; font-size:120%'></TH></TR>"
/* Формирование строк таблицы */
for(i=0;i<=Ref.length-1;i++)
{
TabRef += "<TR><TD style='border:1px solid #000000; background-color:LightCyan'>"+Ref[i].Eins
TabRef += "</TD><TD style='border:1px solid #000000; background-color:LightCyan'>" + Ref[i].abc + "</TD></TR>"
}
TabRef += "</TABLE>"

function tTpr()
{
document.getElementById("Txt").innerHTML = (TabRef);
StyleDeutschDb()
}
//*************************** DativPronomen ************************************************************
function car(Eins, abc)// конструктор списка
{
this.Eins = Eins  //
this.abc = abc	  //
}
//  Здесь можно любое количество строк
acar = new Array()
acar[0] = new car("mir", "мне")
acar[1] = new car("dir",  "тебе")
acar[2] = new car("Ihnen", "Вам")
acar[3] = new car("ihm",  "ему")
acar[4] = new car("ihr", "ей")
acar[5] = new car("ihm",  "этому")
acar[6] = new car("uns", "нам")
acar[7] = new car("euch", "вам")
acar[8] = new car("ihnen", "им")

Tdp = "<TABLE Id=\"SyTb\"><TR>"
Tdp +=" <TH style='border:1px solid #000000; background-color:Lavender'></TH>\
<TH style='border:1px solid #000000; background-color:Lavender; font-size:120%'></TH></TR>"
/* Формирование строк таблицы */
for(i=0;i<=acar.length-1;i++)
{
Tdp += "<TR><TD style='border:1px solid #000000; background-color:LightCyan'>"+acar[i].Eins
Tdp += "</TD><TD style='border:1px solid #000000; background-color:LightCyan'>" + acar[i].abc + "</TD></TR>"
}
Tdp += "</TABLE>"

function fTdp()
{
document.getElementById("Txt").innerHTML = (Tdp);
StyleDeutschDb()
}
//*************************** Местоимение *************************************************************
function car(Eins, abc)// конструктор списка
{
this.Eins = Eins  //
this.abc = abc	  //
}
//  Здесь можно любое количество строк
acar = new Array()
acar[0] = new car("ich", "я")
acar[1] = new car("du",  "ты")
acar[2] = new car("Sie", "Вы")
acar[3] = new car("er",  "он")
acar[4] = new car("sie", "она")
acar[5] = new car("es",  "оно")
acar[6] = new car("wir", "мы")
acar[7] = new car("ihr", "вы")
acar[8] = new car("sie", "они")
T = "<TABLE Id=\"SyTb\"><TR>"
T +=" <TH style='border:1px solid #000000; background-color:Lavender'></TH>\
<TH style='border:1px solid #000000; background-color:Lavender; font-size:120%'></TH></TR>"
/* Формирование строк таблицы */
for(i=0;i<=acar.length-1;i++)
{
T += "<TR><TD style='border:1px solid #000000; background-color:LightCyan'>"+acar[i].Eins
T += "</TD><TD style='border:1px solid #000000; background-color:LightCyan'>" + acar[i].abc + "</TD></TR>"
}
T += "</TABLE>"

function tText()
{
document.getElementById("Txt").innerHTML = (T);
StyleDeutschDb()
}
//*************************** UmlautPng ********************************************************
function AlphabetDPng()
{
document.getElementById("image").src = "AlphabetD.png";
document.getElementById("image").style.display="block";
document.getElementById("image").style.position="absolute";
document.getElementById("image").style.top="1%";
document.getElementById("image").style.right="1%";
}


