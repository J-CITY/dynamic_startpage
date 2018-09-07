function setWallpaper() {
	let arrMin = [0, 12, 24, 36, 48, 60]
	
	let d = new Date();
	let h = d.getHours();
	let m = d.getMinutes();
	for (let i = 0; i < arrMin.length; ++i) {
		if (m < arrMin[i]) {
		} else {
			m = arrMin[i] == 60 ? arrMin[0] : arrMin[i]
			break
		}
	}
	let res = h > 9 ? ''+h : '0'+h
	res += m == 0 ? '0'+m : m
	document.getElementById('background-image').style.background = 'url(wall/'+res+'.png) no-repeat';
}