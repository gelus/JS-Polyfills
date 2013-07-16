if(!function(){}.bind){
	Function.prototype.bind = function(){
		var me = this
			,	shift = [].shift
			,	he = shift.apply(arguments)
			, ar = arguments
		return function(){
			me.apply(he, ar);
		}
	}
}


// function fet(){
// 	console.log(arguments);
// }
// fet(1,2,3,4)