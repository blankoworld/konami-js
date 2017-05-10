var scarabify_count = 0;
scarabify_add = function() {
	scarabify_count += 1;
	var sfa_url = './';
	var file = 'dance_';
	var count = 8;
	if (Math.random() > .7) {
		file = 'dance_';
	}
	file += Math.ceil(Math.random()*count) + '.gif';
	var div = document.createElement('div');
	div.style.position = 'fixed';
	
	var numType = 'px';
	var heightRandom = Math.random()*.75;
	var windowHeight = 768;
	var windowWidth = 1024;
	var height = 0;
	var width = 0;
	var de = document.documentElement;
	if (typeof(window.innerHeight) == 'number') {
		windowHeight = window.innerHeight;
		windowWidth = window.innerWidth;
	} else if(de && de.clientHeight) {
		windowHeight = de.clientHeight;
		windowWidth = de.clientWidth;
	} else {
		numType = '%';
		height = Math.round( height*100 )+'%';
	}
	
	div.onclick = scarabify_add;
	div.style.zIndex = 10;
	div.style.outline = 0;
	
	if( scarabify_count==8 ) {
		file = 'dance_6.gif';
		div.style.top = Math.max( 0, Math.round( (windowHeight-389)/2 ) )  + 'px';
		div.style.left = Math.round( (windowWidth-214)/2 ) + 'px';
		div.style.zIndex = 1000;
	} else {
		if( numType=='px' ) div.style.top = Math.round( windowHeight*heightRandom ) + numType;
		else div.style.top = height;
		div.style.left = Math.round( Math.random()*90 ) + '%';
	}
	
	var img = document.createElement('img');
	//img.setAttribute('src',sfa_url+'images/'+file);
	img.setAttribute('src',sfa_url+'scarabes/'+file);
	var body = document.getElementsByTagName('body')[0];
	body.appendChild(div);
	div.appendChild(img);
	
	// Add stylesheet.
	if (scarabify_count == 5) {
		var cssExisting = document.getElementById('__scarabify_css');
		if (!cssExisting) {
			var head = document.getElementsByTagName("head")[0];
			var css = document.createElement('link');
			css.id = '__scarabify_css';
			css.type = 'text/css';
			css.rel = 'stylesheet';
			css.href = sfa_url+'scarabify.css';
			css.media = 'screen';
			head.appendChild(css);
		}
		scarabify_replace();
	}	
}

scarabify_replace = function() {
	// Replace text.
	var hc = 6;
	var hs;
	var h;
	var k;
	var words = ['Lolz','XD','Xptdr','Omfg','Noob','^_^','Mdr','All your base are belong to us','Sale','Suxxor', 'Roxxor', 'Kikoolol'];
	while(hc >= 1) {
		hs = document.getElementsByTagName('h' + hc);
		for (k = 0; k < hs.length; k++) {
			h = hs[k];
			h.innerHTML = words[Math.floor(Math.random()*words.length)] + ' ' + h.innerHTML;
		}
		hc-=1;
	}
}
