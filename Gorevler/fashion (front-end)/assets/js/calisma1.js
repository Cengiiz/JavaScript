
var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var btn3=document.getElementById("btn3");

btn1.onclick=function imagegeturl()
{
    var imgs = document.getElementsByTagName("img");
    var imgSrcs = [];

    for (var i = 0; i < imgs.length; i++) {
        imgSrcs.push(imgs[i].src);
    }

    console.log(imgSrcs);
}
btn2.onclick=function textcolor()
{
    var alltext = $('body').text();
    var a=document.getElementsByTagName("a");
    var h1=document.getElementsByTagName("h1");
    var h2=document.getElementsByTagName("h2");
    var button=document.getElementsByTagName("button");
    var p=document.getElementsByTagName("p");
    //var x=a.concat(h1,h2);
    var atext=[];
    var h1text=[];
    var colorarray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
    
    var rnd2=Rnd(0,colorarray.length);
    var rnd3=Rnd(0,4);
    if(rnd3==0)
    {
        var rnd1=Rnd(0,a.length);
        a[rnd1].setAttribute('style','color:'+colorarray[rnd2]);
    }
    else if(rnd3==1)
    {
        var rnd1=Rnd(0,h1.length);
        h1[rnd1].setAttribute('style','color:'+colorarray[rnd2]);
    }
    else if(rnd3==2)
    {
        var rnd1=Rnd(0,h2.length);
        h2[rnd1].setAttribute('style','color:'+colorarray[rnd2]);
    }
    else if(rnd3==3)
    {
        var rnd1=Rnd(0,button.length);
        button[rnd1].setAttribute('style','color:'+colorarray[rnd2]);
    }
    else if(rnd3==4)
    {
        var rnd1=Rnd(0,p.length);
        p[rnd1].setAttribute('style','color:'+colorarray[rnd2]);
    }
}
function Rnd(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

btn3.onclick=function dropdownlist()
{
    var click = document.getElementById("list");
    if(click.style.display ==="none") {
       click.style.display ="block";
    } else {
       click.style.display ="none";
    } 
}