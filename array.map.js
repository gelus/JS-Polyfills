(function(){
	if([].map)return
		Array.prototype.map = function(f,t){
			var Rar = []
				,	i = 0;
			while(i<this.length){
				if(i in this)Rar.push(f.call(t, this[i],i,this));
				i++
			}
			return Rar;
		}
})()