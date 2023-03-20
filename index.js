1//Return the First Element in an Array
//Create a function that takes an array containing only numbers and return the
// first element.

function getFirstValue(numbers){
    let number = numbers[0]
    return number
  }
  
  2//Given two arguments, return an array which contains these two arguments.
  function makePair(x,y){
    return [x, y]
  }
  
  3//Reverse an Array
  // Write a function to reverse an array.
  function reverse(arr){
    let x = arr.reverse()
    return [x]
  }
  
 4 //Create a function that takes an array of numbers or letters and returns a
 // string.
  function arrayToString(numbers){
    return numbers.join('')
    
  }
  
  5// Array Indexing
  //Given an index and an array, return the value of the array with the
  // given index.
  function valueAt(arr, i){
    if(i >= arr.length){
    }
    return arr[Math.floor(i)]
  }
  
  //6. Find the Index 
  //Create a function that finds the index of a given item.
   function search(arr1, arr2){
    return arr1.indexOf(arr2)
   }
  
  
  
  //7. Check if an Array Contains a Given Number
  //Write a function to check if an array contains a particular number.
  function check(numbers, i){
     if(numbers.includes(i)){
  return true
  }
     return false 
  }
  //8. Invert an Array
  // Create a function that takes an array of numbers arr and returns an inverted array.
  function invertArray(arr){
  let x = []
  arr.forEach(function(el){
    let y = el * -1
    x.push(y)
  })
  return x
  }
    
  //9. Skip the Drinks with Too Much Sugar
  // Write a function that takes an array of drinks and returns an array of only drinks with no sugar in them. Drinks that contain sugar (in this challenge) are:
      function skipTooMuchSugarDrinks(arr){
        let res = []
        arr.forEach(function(x){
          if(x != 'cola' && x != 'fanta'){
            res.push(x)
          }
        })
        return res
      }
      
  10.// Filter Strings from Array
  //Create a function that takes an array of strings and numbers, and filters 
  //out the array so that it returns an array of integers only.
  function filterArray(arr){
    let res =  arr.filter(function(x){
       return typeof x == 'number'
    })
      return res
    }
   
  //11. The Forbidden Letter
  //Given a letter and an array of words, return whether the letter does not appear in any of the words.
  function forbiddenLetter(str, arr){
    let el = arr.join('')
    if(el.includes(str)){
     return false
    }
    return true
  }
  
  //12. Cleaning Up Messy Arrays
  //Create a function that takes an array. This array will contain numbers represented as strings.
  
  //Your function should split this array into two new arrays. The first array should contain only even numbers. The second only odd. Then, wrap these two arrays in one main array and return it.
   function cleanUpArray(arr){
     let res = []
     let res1 = arr.filter(function(x){
       return x % 2 === 0
     })
     let res2 = arr.filter(function(x){
       return x % 2 !== 0
     })
     res.push(res1)
     res.push(res2)
     return res
   }
   
  //13. String Pairs
  //Create a function that takes a string str and returns an array of two-paired characters. If the string has an odd number of characters, add an asterisk * in the final pair.
  function stringPairs(word){
    if (word.length == 0) {
      return []
    }
    return (word.length % 2 ? word + '*' : word).match(/../g);
  }
  
  //14. Word Endings
  //Create a function that adds a string ending to each member in an array.
  
 function addEnding(arr, str){
  let res = []
arr.forEach(function(x){
  let y = x + str
  res.push(y)
})
  return res
}

  //15. Spelling it Out
  //Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.
    
  function spelling(letters){
    for (let i = 0; i < letters.length; i++){
    res.push(letters.slice(0,i + 1))
         }
      return res
        }
     