(function(){
	if([].filter)return
		Array.prototype.filter = function(f,t){
			if(typeof f != "function")throw new TypeError(200, typeof f+" is not a function");	
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
})()