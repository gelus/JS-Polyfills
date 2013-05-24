if(![].lastIndexOf){
	Array.prototype.lastIndexOf = function(v,i){
		var i = (i)? i:this.length;
		while(i>=0){
			if(i in this && this[i] == v)return i
			i--
		}
		return -1;
	}
}