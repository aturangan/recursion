// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var results = []; 
	
	function testClasses(element) {
	  if (element.className !== undefined && element.classList.contains(className)) {
	    results.push(element); 
	  }
	  
	  if (element.childNodes) {
	    element.childNodes.forEach(function(node) {
	      testClasses(node);
	    });
	  }
	 }
	
	testClasses(document.body);
	return results;	
};

