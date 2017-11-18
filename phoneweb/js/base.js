var nav=document.getElementsByClassName("nav")[0].children;
for(var i=0;i<nav.length;i++){
	nav[i].onclick=function(){
		for (var j=0;j<nav.length;j++) {
			nav[j].className=""
		}
		this.className="active"
	}
}
