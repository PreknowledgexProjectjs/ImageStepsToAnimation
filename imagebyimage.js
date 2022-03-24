//( ImageByImage Main )//
function imagebyimage(total_steps = 1 , id = 'img' , delay = 5000 , dir = "/./", repeat = false){
	var in_step = 0;
	var interval_sec = setInterval(function(){
		in_step = in_step + 1;

		if(in_step == total_steps){ 
			if (repeat == true) {
				in_step = 0;
			}else{
				clearInterval(interval_sec); return;
			}
		};
		if(in_step == 0) return;
		$(id).attr('src',`${dir}${in_step}.jpg`);
	},delay);
}