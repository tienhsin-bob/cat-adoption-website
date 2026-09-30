$(function(){
	var showArr =['img/r1.webp','img/r2.jpg','img/r3.webp']; //圖片陣列
	setInterval(function(){	//定時更换背景
		$("header").css("backgroundImage","url("+showArr[fRandomBy(0,2)]+")");
	},2500);
	function fRandomBy(under, over){ //設定隨機數的範圍
		switch(arguments.length){ 
			case 1: return parseInt(Math.random()*under+1); 
			case 2: return parseInt(Math.random()*(over-under+1) + under); 
			default: return 0; 
		} 
	}
});
