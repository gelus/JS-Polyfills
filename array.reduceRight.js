if(![].reduceRight){
	Array.prototype.reduceRight = function(f,init){
		var	i = this.length-1
			, Rar = (init)? init:this[i--];
		while(i>=0){
			if(i in this){
				Rar = f(Rar,this[i],i,this)
			}
			i--;
		}
		return Rar
	}
}