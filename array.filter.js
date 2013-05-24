if(![].filter){
	Array.prototype.filter = function(f,t){
		var Rar = []
			,	i = 0;
		while(i<this.length){
			if(i in this){
				if(f.call(t,this[i], i, this))Rar.push(this[i]);
			}
			i++
		}
		return Rar;
	}
}