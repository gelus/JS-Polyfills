(function(){
	if([].forEach)return
	Array.prototype.forEach = function(f,t){
		var i = 0;
		while(i < this.length){
			if(i in this){
				f.call(t, this[i], i, this)
			}
			i++
		}
	}
})()