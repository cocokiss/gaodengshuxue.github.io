function show1(x){
	
	for(var j=1;j<=n0;j++)
	if(x==j){
		str='<div id="nav2">';
		for(var i=1;i<=arr[j-1].length;i++){
		str=str+'<div class="v2" onclick="show2('+j+','+i+')">'+arr[j-1][i-1]+'</div>';
		}
		str=str+'</div>';
		str=str+'<div id="dv2">aa</div>';
	document.getElementById("dv1").innerHTML=str;
	}
	}