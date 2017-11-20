var navs=document.getElementsByClassName("nav")[0].children;
var block=document.getElementById("block")
for(var i=0;i<navs.length;i++){
	navs[i].index=i
	navs[i].onclick=function(){
		for (var j=0;j<navs.length;j++) {
			navs[j].className=""
		}
		this.className="active"
		block.style.top="-200"*this.index+"px"
	}
}
