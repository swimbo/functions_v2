
// Write a function called 'getName' which takes a single object argument and returns the value of the 'name' property of the given object.
var person = {
  name: 'Luisa',
  age: 25,
  height: 65,
  weight: 140,
}
var getName = function(){
  console.log(person.name)
}

getName(person)

// getName({ name: 'Luisa', age: 25 }) should return 'Luisa'
getName({ name: 'Luisa', age: 25 })
// Write a function called 'totalLetters' which takes an array of strings and returns the total number of letters in all strings.
var myString = ['one', 'two', 'three']

function totalLetters(string){
  var combined = string.join('')
  console.log(combined.length)
  }

totalLetters(myString)

// totalLetters(['javascript', 'is', 'awesome']) should return 19

totalLetters(['javascript', 'is', 'awesome'])

// totalLetters(['what', 'happened', 'to', 'my', 'function']) should return 24
totalLetters(['what', 'happened', 'to', 'my', 'function'])
// Write a function called 'keyValue' which takes two arguments and returns a new object with a key of the first argument and the value of the second argument.

var myObject = {}

function keyValue(key,value){

  myObject[key] = value
  console.log(key,value)
}


// keyValue('city', 'Denver') should return Object {city: "Denver"}
keyValue('city','Denver')

// Write a function called 'negativeIndex' which takes an array and a negative number, and returns the value from the array at the given negative index, as if the array was circular, i.e. arr.length+num.
var negArray = ['larry','moe','curly','jane','jim','bob','joe']
var negNum = -2

function negativeIndex(negArray,negNum){
  console.log(negArray[negArray.length + negNum])
}
negativeIndex(negArray,negNum)

// negativeIndex(['a', 'b', 'c', 'd', 'e'], -2) should return 'd'
negativeIndex(['a', 'b', 'c', 'd', 'e'], -2)
// negativeIndex(['jerry', 'sarah', 'sally'], -1) should return 'sally'
negativeIndex(['jerry', 'sarah', 'sally'], -1)
// Write a function called 'removeM' which takes a single string argument and removes all 'm' characters from the string. The function won't actually modify
var mString = "the big giant mother fing string full of ms"
var newArray = []
function removeM(mString){
  var re = /m/g;
  var newString = mString.replace(re,'');
  console.log(newString)
  }
// console.log(mString)
removeM(mString)

// removeM('family') should return 'faily'
removeM('family')
// removeM('memory') should return 'eory'
removeM('memory')
// Write a function called 'printObject' which takes a single object argument and console.log's each key-value pair in the format key is value on separate lines.
var obj2 = {
  color : 'blue',
  size : 4,
  length : 34
}
function printObject(obj){
  for (var prop in obj) {
    console.log(prop + " = " + obj[prop]);
  }
}
printObject(obj2)

// printObject({ a: 10, b: 20, c: 30 }) should print: md a is 10 b is 20 c is 30
printObject({ a: 10, b: 20, c: 30 })

// printObject({ firstName: 'pork', lastName: 'chops' }) should print: md firstName is pork lastName is chops
printObject({ firstName: 'pork', lastName: 'chops' })

// Write a function called 'vowels' which takes a string and returns an array of all the vowels in the string, including duplicates.
var longString = 'Holy cow how many vowels can we get in this string!'

function vowels(string){
  var vowelArray = []
  string.join()
  console.log(string)
}
vowels(longString)

// vowels('alabama') should return ['a', 'a', 'a', 'a']

// vowels('What evil odd ducks!') should return ['a', 'e', 'i', 'o', 'u']
// Write a function called 'twins' which takes an array and returns true if every adjacent pair of items in the array is the same.
// twins(['a', 'a', 'b', 'b', 'c', 'c']) should return true
// twins(['a', 'a', 'b', 'c', 'd', 'd']) should return false
// twins(['a', 'a', 'b', 'z']) should return false
// twins(['a', 'a', undefined]) should return false
// Write a function called 'or' which takes an array of booleans and returns true if any one of them is true. Given an empty array, return false. If you find an item that is true, the function should return true immediately and not continue checking further values.
// or([false, false, true, false]) should return true
// or([false, false, false]) should return false
// or([]) should return false
// Write a function called 'unique' which takes an array of strings, and returns a new array consisting of the unique values (no duplicates).
// unique(['a', 'b', 'a', 'c', 'd', 'd']) should return ['a', 'b', 'c', 'd']
// unique(['todd', 'avery', 'maria', 'avery']) should return ['todd', 'avery', 'maria']
