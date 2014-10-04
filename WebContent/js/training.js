var linkFrame = linkFrame || {
	
	link:{
		
	}
	
	
};

var portalFrame = linkFrame;

var Application = Application || {};

Application.CoreFunctionality = Application.CoreFunctionality || {};
Application.CoreFunctionality.Function1 = function(){
  alert('ok');
}//Function1

linkFrame.link.getPage = function(){
	window.alert("ok");
};

