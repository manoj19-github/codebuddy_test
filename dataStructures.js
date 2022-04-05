// level {1/2/3}

// level 2

const myArray=[1,2,3,4,6,7,8];
let filerEvenNumber=myArray.filter(arr=>arr%2==0);
console.log(filerEvenNumber);


var myInput="Elie";
const returnUpper=(data)=>{
  let pureData=data.toString();
  switch(pureData){
    case 'a':
      return 'A';
    case 'e':
      return 'E';
    case 'i':
      return 'I';
    case 'o':
        return 'O';
    case 'u':
        return 'U';
    default: return data

  }
}
const vowels=['i','o','a','e','u'];

let newVowels=vowels.map((vo,index)=>{
  if(vo==myInput[index]) return returnUpper(vo);
  return vo;
})
console.log(newVowels.toString());


let myMarks=[1, 3, 4, 6, 7, 8, 2, 5];
var max=0
myMarks.forEach((a)=>{
    if(a>max){
      max=a;
    }
});
console.log(max);
