if(![].some)return
	Array.prototype.some = function(f,t){
		var Rar = false
			,	i = 0;
		while(i<this.length && !Rar){
			if(i in this)Rar = f.call(t, this[i], i, this);
			i++;
		}
		return Rar;
	}
}