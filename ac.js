function rotate(){
	d = new Date();
	htime = d.getHours();
	mtime = d.getMinutes();
	stime = d.getSeconds();
	hrotation = 30*htime+mtime/2;
	mrotation = 6*mtime;
	srotation = 6*stime;

	hhand.style.transform = `rotate(${hrotation}deg)`;
	mhand.style.transform = `rotate(${mrotation}deg)`;
	shand.style.transform = `rotate(${srotation}deg)`;
}
setInterval(rotate,1000);