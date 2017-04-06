var words = ["ground", "control", "to", "major", "tom"];

var wordCount = map(words, function(word) {
  return word.length;
});

function map(list, callback){
  var newList = [];
  for(var index = 0; index < list.length; index ++){
    newList.push(callback(list[index]));
  }
  return newList;
}

console.log(words);
console.log(wordCount);