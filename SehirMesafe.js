/**
 * 
 */
const ilVektoru =["ADANA","ADIYAMAN","AFYONKARAHİSAR","AĞRI","AMASYA","ANKARA","ANTALYA","ARTVİN",
"AYDIN","BALIKESİR","BİLECİK","BİNGÖL","BİTLİS","BOLU","BURDUR","BURSA"];

const mesafeMatrisi=[
	[0,335,575,966,603,567,535,1035,874,903,773,636,732,690,646,842],
	[335,0,910,648,632,814,870,751,1209,1238,1040,348,414,931,981,1109,],
	[575,910,0,1318,597,300,290,1243,345,328,212,1095,1285,420,169,277],
	[966,648,1318,0,738,1141,1428,396,1540,1569,1361,356,234,1147,1423,1418],
	[603,632,597,736,0,413,825,695,938,831,623,643,833,409,762,680],
	[492,742,256,1054,333,0,542,979,597,536,316,892,1082,191,421,385],
	[535,870,291,1428,825,543,0,1466,339,507,474,1171,1267,682,121,539],
	[1035,751,1243,396,693,979,1466,0,1584,1460,1252,403,560,1038,1408,1309],
	[874,1209,345,1640,938,597,339,1584,0,296,520,1404,1594,716,269,445],
	[903,1238,328,1567,832,536,507,1460,296,0,246,1414,1604,422,395,151],
	[733,1045,212,1358,622,316,475,1251,520,245,0,1194,1384,212,252,94],
	[636,348,1095,356,641,892,1171,403,1404,1414,1194,0,194,1052,1187,1264],
	[732,414,1285,234,832,1082,1267,562,1594,1604,1384,194,0,1242,1377,1454],
	[690,936,420,1145,409,191,683,1038,716,422,213,1050,1240,0,561,271],
	[657,992,169,1423,762,421,122,1408,269,395,353,1187,1377,561,0,418],
	[842,1114,277,1416,680,385,540,1309,445,151,94,1264,1454,271,418,0]
];
const tasitMatrisi =[
[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
];
var matrisBoyutu=mesafeMatrisi[0].length;

const mesafeVeTasitMatrisi = Array.of(
	new Array(matrisBoyutu),
	new Array(matrisBoyutu)
);

const ucakSiniri = 749.999,  trenSiniri=499.999, otobusSiniri=99.999;

function sayfaYukle()
{
	var sehir1Nesnesi = document.getElementById("select-1");
    var sehir2Nesnesi = document.getElementById("select-2");
    var sehir1 = document.createElement("option"); // Doğru
    var sehir2 = document.createElement("option"); // Doğru
    sehir1.innerText = sehir1.innerHTML = sehir1.text = sehir1.value = "Seçiniz";
    sehir1Nesnesi.append(sehir1);
    sehir2.innerText = sehir2.innerHTML = sehir2.text = sehir2.value = "Seçiniz";
    sehir2Nesnesi.append(sehir2);
	
	for(let sehirGeciciDizgi of ilVektoru)
	{
		sehir1=document.createElement("option");
		sehir2=document.createElement("option");
		sehir1.innerHTML=sehir1.value=sehirGeciciDizgi;
		sehir2.innerHTML=sehir2.value=sehirGeciciDizgi;
		sehir1Nesnesi.append(sehir1);
		sehir2Nesnesi.append(sehir2);
	}
	mesafeVeTasitMatrisi[0]=[...mesafeMatrisi];
	mesafeVeTasitMatrisi[1]=[...tasitMatrisi];
	ucBoyutluDiziyiYazdir();
}
function ucBoyutluDiziyiYazdir()
{
	const ucak=0, otobus=1,taksi=2,ilIci=3,tren=4;
	const tasitlar=["Uçak","Otobüs","Taksi","İl içi","Tren"];
	var k,l;
	var geciciDizgi="";
	var x=mesafeVeTasitMatrisi;
	
	for(k=0; k<matrisBoyutu; k++)
	{
		for(l=0; l<matrisBoyutu; l++)
		{
			if(k!= l)
			{
				if(x[0][k][l] > ucakSiniri)
					x[1][k][l]=ucak;
				else if (x[0][k][l]>trenSiniri)
					x[1][k][l]=tren;
				else if(x[0][k][l]>otobusSiniri)
					x[1][k][l]=otobus;
				else
					x[1][k][l]=taksi;
			}
			else //aynı zamanda mesafe==0'dı
				x[1][k][l]=ilIci;
		}
	}
	
	var anaCizelge = document.getElementById("ana-cizelge");
	var satir;
	var hucre;
	var satirNo=0,sutunNo=0,ilDikeySirasi=0;
	
	while(satirNo<=matrisBoyutu)
	{
		sutunNo=0;
		satir=anaCizelge.insertRow(satirNo);
		if(satirNo==0)
		{
			hucre=satir.insertCell(sutunNo);
			hucre.style.backgroundColor="#999999F";
			hucre.style.textAlign="center";
			hucre.innerHTML="<span class=\"span-2\">\\ </span";
			
			for(sutunNo=1; sutunNo <= ilVektoru.length; sutunNo++)
			{
				geciciDizgi+= ilVektoru[sutunNo-1].slice(0,7);
				hucre=satir.insertCell(sutunNo);
				hucre.innerHTML=geciciDizgi;
				geciciDizgi="";
			}
			sutunNo=0;
			satir=anaCizelge.insertRow(++satirNo);
		}
		while(sutunNo<=matrisBoyutu)
		{
			if(sutunNo==0)
			{
				geciciDizgi+= ilVektoru[ilDikeySirasi++].slice(0,7);
				hucre=satir.insertCell(sutunNo);
				hucre.innerHTML=geciciDizgi;
				geciciDizgi="";
			}
		
			else{
				let km= x[0][satirNo-1][sutunNo-1];
				hucre=satir.insertCell(sutunNo);
				if(km>0)
					geciciDizgi += km + " km, ";
				else
					hucre.style.backgroundColor='#DDDDDDD';
					
				geciciDizgi+=tasitlar[x[1][satirNo-1][sutunNo-1]];
				hucre.innerHTML=geciciDizgi;
				geciciDizgi="";
			}
			sutunNo++;
		}
		satirNo++;
	}
}

function sehirSecildiOrtak()
{
	var sehir1Nesnesi=document.getElementById("select-1");
	var sehir2Nesnesi=document.getElementById("select-2");
	
	if((sehir1Nesnesi.selectedIndex !=0)&&(sehir2Nesnesi.selectedIndex !=0)&&
	(sehir1Nesnesi.selectedIndex !=sehir2Nesnesi.selectedIndex ))
	{
		var secilenSehir1=sehir1Nesnesi.value;
		var secilenSehir2=sehir2Nesnesi.value;
		
		let sehir1Dizini=sehir1Nesnesi.selectedIndex-1;
		let sehir2Dizini=sehir2Nesnesi.selectedIndex-1; //seçiniz satırı nediyle
		
		let mesafe=mesafeMatrisi[sehir1Dizini][sehir2Dizini];
		
		document.getElementById("span-1").innerText=secilenSehir1 + " ile " + secilenSehir2 + " arasındaki mesafe: "+ mesafe + " km";	
	}
	
}