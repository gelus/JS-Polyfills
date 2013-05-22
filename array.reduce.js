(function(){
	if([].reduce)return
	Array.prototype.reduce = function(f,init){
		var	i = 0
			, Rar = (init)? init:this[i++];
		while(i<this.length){
			if(i in this){
				Rar = f(Rar,this[i],i,this)
			}
			i++;
		}
		return Rar
	}
})()