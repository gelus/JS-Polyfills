(function(){
	if([].every)return
		Array.prototype.every = function(f,t){
			var Rar = true
				,	i = 0;
			while(i<this.length && Rar){
				if(i in this)Rar = f.call(t, this[i], i, this);
				i++;
			}
			return Rar;
		}
})()