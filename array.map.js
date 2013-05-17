(function(){
	if([].map)return
		Array.prototype.map = function(f,t){
			if(typeof f != "function")throw new TypeError(200, typeof f+" is not a function");
			var Rar = []
				,	i = 0;
			while(i<this.length){
				if(i in this)Rar.push(f.call(t, this[i]));
				i++
			}
			return Rar;
		}
})()