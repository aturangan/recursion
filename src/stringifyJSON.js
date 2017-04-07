
var stringifyJSON = function(obj) {

	if (obj === null) {
	  return 'null';
	}
	
	else if (typeof obj === 'number' || typeof obj === 'boolean') {
	  return obj.toString();
	}
	
	else if (typeof obj === 'string') {
	  return '"' + obj + '"';
	}
	
	
	else if (Array.isArray(obj)) {
	  return '[' + obj.map(function(item) {
	    return stringifyJSON(item);
	    }) + ']'; 
	}
	
	else if (typeof obj === 'object') {
	  var stringObj = [];
	
	  for (var prop in obj) {
	    if (stringifyJSON(obj[prop]) !== undefined) {
	      stringObj.push(stringifyJSON(prop) + ':' + stringifyJSON(obj[prop]));
	    }
	  }
	  
	  return '{' + stringObj + '}';
	} 
};