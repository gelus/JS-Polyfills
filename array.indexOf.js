if(![].indexOf){
	Array.prototype.indexOf = function(v,i){
		var i = (i)? i:0;
		while(i<this.length){
			if(i in this && this[i] == v)return i
			i++
		}
		return -1;
	}
}