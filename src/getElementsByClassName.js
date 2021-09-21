// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
//Get every element of ClassName
var getElementsByClassName = function(className) { //className is a string
  //Store elements in array
  var elements = [];

  //Recursive function
  var classSearch = function(element) { //element is an Object
    if (element.classList && element.classList.contains(className)) {
      elements.push(element);
    }

    element.childNodes.forEach(function(child) {
      classSearch(child);
    });
  };
  //Use document.body
  classSearch(document.body);
  return elements;
};
