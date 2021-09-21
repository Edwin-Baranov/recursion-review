// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:

/*[true, false]
'true'
'{"result":true,"count":42}'

var parseJSON = function(json) {
    //Array


  //Objects
  if (json[0] === '{') {
    var result = {};
    var endIndex = 0;

    parseJSON(json.substring(1, ))

  }


  //String
  if(json[0] === '"') {
    return json.substring(1,json.length-1);
  }

  // boolean
  if (json === 'true') {
    return true;
  }

  if (json === 'false') {
    return false;
  }

  //Everthing else
  return parseFloat(json);
};*/
