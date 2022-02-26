
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
    var text=['h1','h2','h3','h4','h5','h6','a','p','small','label','button'];
    //var x=a.concat(h1,h2);
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
    var rnd=Rnd(0,text.length);
    if(rnd==0)//h1
    {
        var h1=document.getElementsByTagName('h1');
        for(var i=0;i<h1.length;i++)
        {
            h1[i].setAttribute('style','color:'+colorarray[rnd2]);
        }
    }
    else if(rnd==1)//h2
    {
        var h2=document.getElementsByTagName('h2');
        for(var i=0;i<h2.length;i++)
        {
            h2[i].setAttribute('style','color:'+colorarray[rnd2]);
        }
    }
    else if(rnd==2)//h3
    {
        var h3=document.getElementsByTagName('h3');
        for(var i=0;i<h3.length;i++)
        {
            h3[i].setAttribute('style','color:'+colorarray[rnd2]);
        }
    }
    else if(rnd==3)//h4
    {
        var h4=document.getElementsByTagName('h4');
        for(var i=0;i<h4.length;i++)
        {
            h4[i].setAttribute('style','color:'+colorarray[rnd2]);
        }
    }
    else if(rnd==4)//h5
    {
        var h5=document.getElementsByTagName('h5');
        for(var i=0;i<h5.length;i++)
        {
            h5[i].setAttribute('style','color:'+colorarray[rnd2]);
        }
    }
    else if(rnd==5)//h6
    {
        var h6=document.getElementsByTagName('h6');
        for(var i=0;i<h6.length;i++)
        {
            h6[i].setAttribute('style','color:'+colorarray[rnd2]);
        }
    }
    else if(rnd==6)//a
    {
        var a=document.getElementsByTagName('a');
        for(var i=0;i<a.length;i++)
        {
            a[i].setAttribute('style','color:'+colorarray[rnd2]);
        }
    }
    else if(rnd==7)//p
    {
        var p=document.getElementsByTagName('p');
        for(var i=0;i<p.length;i++)
        {
            p[i].setAttribute('style','color:'+colorarray[rnd2]);
        }
    }
    else if(rnd==8)//small
    {
        var small=document.getElementsByTagName('small');
        for(var i=0;i<small.length;i++)
        {
            small[i].setAttribute('style','color:'+colorarray[rnd2]);
        }
    }
    else if(rnd==9)//label
    {
        var label=document.getElementsByTagName('label');
        for(var i=0;i<label.length;i++)
        {
            label[i].setAttribute('style','color:'+colorarray[rnd2]);
        }
    }
    else if(rnd==10)//button
    {
        var button=document.getElementsByTagName('button');
        for(var i=0;i<button.length;i++)
        {
            button[i].setAttribute('style','color:'+colorarray[rnd2]);
        }
    }



   
}
function Rnd(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

btn3.onclick=function dropdownlist()
{
    var click = document.getElementById("drpdwn");
    console.log(click);
    click.innerHTML =  '<div class="dropdown show"><a  href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Products</a><div class="dropdown-menu" aria-labelledby="dropdownMenuLink"> <a class="dropdown-item" href="about-us.html">1</a><a class="dropdown-item" href="about-us2.html">2</a> <a class="dropdown-item" href="blog-detail.html">3</a> <a class="dropdown-item" href="blog-detail.html">3</a> <a class="dropdown-item" href="categories-grid.html">4</a> <a class="dropdown-item" href="checkout.html">5</a> <a class="dropdown-item" href="contact.html">6</a> <a class="dropdown-item" href="our-blog.html">7</a> <a class="dropdown-item" href="shop-bag.html">8</a> <a class="dropdown-item" href="shopping-cart.html">9</a> <a class="dropdown-item" href="categories.html">10</a></div></div>'; 


}