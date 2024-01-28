// import assert from 'node:assert';
// let firstName="ram";
// firstName='Shekar';
// lastName='purna'
// console.log(firstName+" "+lastName);

// console.log(firstName+" "+lastName);

// const interest=1;

// console.log(interest);

// let name='shekar';//string literal
// let age=23;//number literal
// let isMale=true;//boolean literal
// let surName=undefined;//undefined literal
// let selectedcolor=null;//null literal

// let person1=[
//     {
//         pname : 'teena',
//         page : 21,
//         sex :'female'
//     },
//     {
//         pname : 'reena',
//         page : 22,
//         sex :'female'
//     },
//     {
//         pname : 'meena',
//         page : 23,
//         sex :'female'
//     },
//     {
//         pname : 'leena',
//         page : 24,
//         sex :'male'
//     }
// ]

// let k=person1.filter(p=>p.sex == 'female');

// console.log(k , "here");

// let selectedoption='pname';
// person1[selectedoption]='raju11';
// let selectedoption1='page';
// console.log(person1.pname);
// console.log(person1[selectedoption1]);
// //console.log(person1.selectedoption1.page);

// let selectedArray=[];//empty array
// let seclectedItems=['shirt','pant','cap'];
// console.log(person1[0].pname);

// function cool(name)
// {
//     return 'hello function'+" "+name;
// }
// let tfun=cool();
// console.log(cool('shekar'));

// let vehicles=['cars','bikes','vans',1];
// console.log(vehicles);
// console.log(vehicles[0]);
// console.log(vehicles[1]);
// console.log(vehicles[2]);
// console.log(vehicles[4]);
// console.log(vehicles[undefined]);
// console.log(vehicles);
// console.log(vehicles[3]='famous');
// console.log(vehicles);
// console.log(vehicles[4]=22);

// const circle =
// {

//     radius: 1,

//     location:{
//     x:{
//         a:79
//       },
//       y:1
//     },

//     isVisible: true,

//     fun: function helo()
//     {
//         console.log('funny with function name');
//     },
//     fun1 :function h()
//     {
//         return "2nd function in object";
//     }
// };

// circle.fun();
// console.log(circle['location']['x']['a']);
// console.log(circle.location.x['a']);
// console.log(circle.isVisible);
// circle.fun;
// console.log(circle.fun1 ());

// function fun1 ()
// {
//     console.log('Hello shekar');

//     let newWay = (bb) =>
//     {
//         console.log('Hello shekar from fun 2'+' neha');
//     }
//     newWay();
// };

// fun1();

// function lookup()
// {
//     const lookupobj = {
//             "alpha":"Adams",
//              "bravo":"Boston",
//             "charlie":"Chicago",
//             "delta":"Denver",
//             "echo":"Easy",
//             "foxtrot":"Frank"
//     }

//     let result=lookupobj;

//     return result;

// }
// console.log(lookup());

// const tfactor=10;

// const myakala =shekar;
// myakala.watch ='titan';

// console.log(myakala);

// shekar.shoes='puma sneakers';

// console.log(myakala.run());

// console.log(myakala);

// //const pi;  //const must ne initialised
// pi=3.14;
// console.log(pi);//always const can be used when you know that the values cant be changed in future.

// //const t=66;

// const t=44;
// console.log(t);
//const rr="peacefully";
//shekar.run();
// "use strict";
// console.log(rr);
// let x=this;
// console.log(x);

// function deff()
// {
//     return this;
//  }
// "use strict";
//  document.getElementById("44").innerHTML=deff();
//  console.log(deff());

// const shekar = {shirt : 'buffalo', pant : 'denin',run : function() { return "he is running by wearing "+this.shirt+" "+this.pant}};

// const rr={
//    shirt:'crocadle',
//    pant : 'playboy by rr object'
// }

// let shekarwithrr= shekar.run.bind(rr);
// console.log(shekarwithrr());
//document.getElementById("55").innerHTML= shekarwithkaran();
//console.log(shekar.run());
//document.getElementById("66").innerHTML= shekar.run();

// const books =
// {
//     topicwise : function topics(price)
//                 {
//                     return this.name+" "+this.author+" "+price+ " "+this;
//                 }
// }

// const book11 =
// {
//     name:212345678,
//     author:123456
// }
// alert(JSON.(book11));

// const book13=
// {
//     name:'for new to learning javascript',
//     author:'by jinney'
// }

//document.getElementById("77").innerHTML=books.topicwise.call(book11,699);
//console.log(books.topicwise.call(book11,799));

 myObject={

 }
let one = 1;
let two=2;
console.log( typeof one ); // number

const books = {
  topicwise: function topics(price, exercise) {
    return this.name + "  " + this.author + "   " + price + "  " + exercise;
  },
};

const book11 = {
  name: 212345678,
  author: 123456,
};
// alert(JSON.(book11));

const book13 = {
  name: "for new to learning javascript",
  author: "by jinney",
};

// document.getElementById("77").innerHTML=books.topicwise.call(book11,[699,"10exercise"]);
console.log(books.topicwise.apply(book11, ["999", "applyexercise"]));

const bookss = {
  topicwise: function topics(price, exercise) {
    return this.name + "  " + this.author + "  " + price + "  " + exercise;
  },
};

const book111 = {
  name: 212345678111,
  author: 123456111,
};
// alert(JSON.(book11));

const book133 = {
  name: "for new to learning javascript",
  author: "by jinney",
  "last seen": "21/10/2023",
};

// document.getElementById("77").innerHTML=books.topicwise.call(book11,[699,"10exercise"]);
let x = bookss.topicwise.call(book111, 8899, "callexercise");
console.log(book133["last seen"]);

const shekar = {
  shirt: "buffalo",
  pant: "denin",
  run: function helo() {
   console.log("he is running by wearing "+this.shirt+" "+"and "+this.pant);
  }
};
let tosavethis=shekar.run.bind(shekar);
setTimeout(tosavethis,2000);

let t1=22;
function add()
{
   return t1+t1;
}
console.log(add());


function myfunction()
{
   return document.getElementById("100").innerHTML=addclosures()+"here is my sytars"+ String.fromCharCode(0xd83c, 0xdf03);;
}


const addclosures =( 
   function() 
   {
      let c=0;
      return   function()
      {
         c+=1;
         return c;
      }
   }
) ();

a=99;

function cool()
{
  console.log(a+a);
}
cool();

//document.getElementById("66").innerHTML ="4"+64;

function ff()
{
return document.write("hello shekar");
}
//alert(8+9);

let s="sh_ekar";
console.log(s.length);
console.log(s.substring(s.length-5));
console.log(s.split("_").pop());
console.log(s.indexOf("ar"));
console.log(s.slice(-3));
console.log(s.slice(0,3));
console.log(s.slice(3));

console.log(0/0);
console.log(0/"cool");
console.log("cool"/233);
console.log(cool*10);
console.log("tell"+899+499);
console.log(22+"22"+3);
console.log("22"+22*3);
console.log(22-"22"-3);
console.log(typeof("33"));
console.log(typeof(33));
console.log(NaN);
console.log(typeof(ggg));
console.log(33/"helo");
console.log(typeof(0)-typeof(0));
const objj=Symbol();
console.log(typeof(objj));
console.log(objj);
const jj="undefined";
console.log( typeof(jj) );

const buses = 
{
  
  color:"red",
  engine:"v8",
  engine:"v99",
  [Symbol.isConcatSpreadable]:true,
}

const mysymbol=Symbol("engine");
buses[mysymbol]="v12";
const mysymbol1=Symbol("tyres");
buses[mysymbol1] ="MRF";
console.log(buses);
console.log("Angular-forms");



// let k;
// k=100;
// console.log("hello" +k);
// function  he()
// {
//   let k=12;
//   console.log("hello" +k);
//   return  he();
// }
// he();
// console.log("hello" +k);

console.log( "4" == 4 );//compare only values
console.log( "4" === "4" );//compare first priority for typeof and second priority for values
console.log(4===4); //here there is no typeof needed because here both are in numbers only.

console.log(isNaN(2/"dddd"));
console.log(2*"cool");
console.log(2*"2");
console.log(0-0);
console.log(-0-0);
console.log(0/0);
var w=10;           ///we can redeclare the var variables 
console.log(w);
var w=20;
console.log(w);

xx=1000;
console.log(xx);
var xx;//for older versions before==> ES6(ECMA SCRIPT 6)


const strr="hera rama hare krishna hare rama hare hare";//after ES6==>ECMA SCRIPT 6( European Computer Manufacturers Association)

console.log(strr.length);//for direct output

const charsett={};//creating a another obj to put the each charater in that obj

for(let i of strr)//i am using (for of) loop to iterate one character , even space of strr 
{
  if(charsett[i])//using if condition wheather that charsett contains that particulat strr[i] before in that particular charsett obj before
  {
    charsett[i]+=1; //if true then that particular charsett[i]==>strr[i]==>incresed by 1
  }
  else{
    charsett[i]=1;//if not their at first means then we will keep that particular charsett[i]==>strr[i]==>1
  }
}//runs this loop until the strr[i]==last elements

console.log(charsett);//will print new (charsett obj) with key values pair where keys are count of that particular character alue os character
first.js  

{
  let team="india";
  var captain="virat";
  const cen="150";
}
console.log(captain);
//console.log(team);  
//console.log(cen);
let sname="gunnam";
sname="chennase";
console.log(sname);


//console.log(name22);

//console.log(process.memoryUsage());




let ln='kamalakar srivasthavan';
let gg=ln.slice(0,4);
console.log(gg);
gg= null;
console.log(gg);
console.log(ln);

const person={
  emid:111,
  emname:'raj reddy',
  age:23,
  hobbies:['reading','playing chess','exercise'],
}



const chairs={
  chtype:'360 degree',
  emname:'chairs tcs',
  personid:111,
}

function getOwner(chairs,persons)
{
  return persons.find
  (
    (person)=>
  person.id===chairs.person
  )
}
getOwner=null;
const name='shekar';
newPerson=person;
let hobbies=newPerson.hobbies;
console.log(person);
console.log(newPerson);
console.log(newPerson.emname);
console.log(newPerson.emid);
console.log(newPerson.age);
console.log(person.emname);
console.log(person.emid);
console.log(person.age);
console.log(person);
console.log(newPerson);
console.log(newPerson['age']);
newPerson=null;
let fanName=NaN;
//console.log(newPerson.age);
console.log(person.age);
console.log(person);
console.log(typeof(fanName));
console.log(typeof(tttt));
console.log(typeof(null));
console.log(typeof(getOwner));

console.log(person.age);
console.log(hobbies);
let ss=parseInt("10330");
console.log(ss);
console.log();

//document.getElementById('strtoint').innerHTML=ss;
// const schools={
//   name:"Kts",
//   id:399,
// }
// console.log( parseInt(schools.id)+ ":" +schools.name)

// const myk={
//   "1" : "benz",
//   "2" : "audi",
// }
// console.log(parseInt(1)+":"+myk['1']);
// console.log(parseInt(2)+":"+myk['2']);


let son = {
   name: 'John',
 };

let dad = {
   name: 'Johnson',
   fss:{
    kamarthapu:{
      bloodgroup:'A'
    }
  }
}

console.log(dad.fss.kamarthapu.bloodgroup);
// son.dad =dad;
// dad.son =son;


// son=null;
// dad=null;

//console.log(dad.name);


friends ={
  name:'kiran',
  age11:24
}

clgfrd={
  name:{
    fn:'vinay',
    ln:'reddy' 
  },
  name22:{
    fn:'pradeep',
    ln:'yadav' 
  }
}
const groceries=['colgate','brush','hair oil','apples'];
//document.getElementById("300").innerHTML=JSON.stringify(clgfrd.name);



console.log(groceries);

console.log(Object.values(clgfrd));

// Strings have indices as enumerable own properties
console.log(Object.values("foo")); // ['f', 'o', 'o']
console.log(Object.values("upendar")); 
console.log(Object.values(200000)); 

console.log(groceries.length);
console.log(groceries[groceries.length-1]);
const random = ["mango tree",'peacock', [795,8,9,1,2,3,44,[33,440,22],55], [0, 1, 2,78,89,35,867,122],'eagle'];
console.log(random);
random[0]='Nan';
console.log(random[0]);
console.log(Object.values(random[0]));
console.log(random.indexOf('koyal'));
console.log(random.indexOf('eagle'));
console.log(random.indexOf('peacock'));
console.log(random.indexOf(2));
random.push('summer','winter');
console.log(random);
console.log(random.length);
let newlength=random.push("virat");
console.log(random.length);
console.log(random.unshift(88,55));
console.log(random);
console.log(random.unshift(2,22,33));
console.log(random);
console.log(random.unshift(1));
console.log(random.unshift(1,2,3,4,5));
console.log(random);
// let k=10,l=90;
// const j=900,e=108;
// console.log(k,l);
// console.log(j,e);
const pens={
  1:'dark',
  2:'smooth',
  3:'rush',
}
Array.prototype.unshift.call(pens,'heavy','harderr');
console.log(pens); 
const kk=[12,34,23,88,76];



const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3
fruits.length = 10;
console.log(fruits); 
fruits[7]='grapes';
console.log(Object.keys(fruits)); 
console.log(fruits.length);
console.log(fruits[8]);
console.log(Object.keys(fruits));
console.log(fruits);


// var http = require('http');
// var ad=require('./secjs.js');

// http.createServer
// (
//   function (req, res) 
// {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(ad.additon(2,7));
//   res.end();
// }
// )
// .listen(8080);

// import assert from 'node:assert';
// // WARNING: This does not throw an AssertionError!

// assert.deepEqual('+00000000', false);


let arr=[10,20,30,40,50];
console.log(0 in arr);
console.log("0" in arr);
console.log(9 in arr);
console.log("4" in arr);
console.log("1" in arr);
const years=[10,20,30,40,50];
console.log("difference between  index or keys  or objects 2 and 02 of arrays object");
console.log(arr["2"] !== arr["02"]);
console.log(arr['0']);
console.log(arr[0]);
arr.forEach(
  (element) => 
  console.log(element)
  );
for(let i=0;i<arr.length;i++)
{
  arr[i]=arr[i]*2;
}
console.log(arr);
if(arr.length>3)
{
  arr.length=3;
}
console.log((arr[4]));
console.log(typeof(empty));


"use strict";
const numbers = ["1", 2, 3, 4, 5];
// Object.defineProperty(numbers,"length", { writable: false} );
//  // TypeError: Cannot assign to read only property 'length' of object '[object Array]'
// numbers.push(5); // // TypeError: Cannot assign to read only property 'length' of object '[object Array]'
console.log(numbers);

const ae=["word"];
console.log(ae);
const helicaptor=[433];
const obj1 = { 0: 11, 1: 222, 2: 34, length: 3 , [Symbol.isConcatSpreadable]: true};
const obj2 = { 0: 100, 1: 200, 2: 300, length: 3};
console.log(helicaptor.concat(obj1, obj2));
console.log([12,24, ,13].concat([288, ,33]));
const telangana = {0:'hyd',1:'krm',2:'rj',length:3};
const andhra = {0:'nrl',1:'gdri',2:'tpi',length:3,[Symbol.isConcatSpreadable]: true,};
const rr=[0];
console.log(rr.concat(telangana,andhra));
console.log(Array.prototype.concat.call([1],2,3));
const  arrayLike={[Symbol.isConcatSpreadable]: true,
length: 2,
0: 1,
1: 2,
2: 99,
};
console.log(Array.prototype.concat(arrayLike, 3, 4)); // [1, 2, 3, 4]
const narray = [1, 2, 3, 4, 5];
console.log(...narray);
console.log("".concat([]));
console.log("".concat({}));
console.log("".concat(true));
console.log("".concat(null));
console.log(typeof("".concat(undefined)));
console.log(String.prototype.concat.call("cool", 1, 2, 3));

const vegetables = ["parsnip", "potato"];
const moreVegs = ["celery", "beetroot"];
vegetables.push(...moreVegs);
console.log(vegetables);
const plainObj = {};
Array.prototype.push.call(plainObj,'hoodies',16,23);
console.log(plainObj);
console.log(vegetables.pop());
console.log(vegetables);
console.log(vegetables.length);
const jk=[];
console.log((jk));

let rarebirds={
  0:'peacock',
  1:'vulture',
  2:'sparrow'
}

//const forestbirds=Object.assign({},rarebirds);
const forestbirds= {...rarebirds};
forestbirds[1]='hen';
console.log(rarebirds);
console.log(forestbirds);
const animals = ['ant','bison','camel', 'duck','elephant'];
console.log(animals.slice());
console.log(animals.slice(0,4));
console.log(animals.slice(1,2));
console.log(animals.slice(4,5));
console.log(animals.slice(3,5));
console.log(animals.slice(3));
console.log(animals.slice(-3));
console.log(animals.slice(-2));
console.log(animals.slice(-4));
console.log(animals.slice(-5));
console.log(animals.slice(1,-3));

const arraylikeObject = {

  length:4,
  0: 222,
  1: 321,
  2: 409,
  3: 383,
 // ignored by slice() since length is 3
};
console.log(Array.prototype.slice.call(arraylikeObject, 1, 4));
// [ 3, 4 ]


//aa[0]='cradle';
//console.log(animals);
//console.log(aa);

const slicess = Function.prototype.call.bind(Array.prototype.slice);

function list() {
  return slicess(arguments);
}
const forcancat = {0:10,1:30,2:29};
const list1 = list(23,78,46,902,674,forcancat); // [1, 2, 3]

console.log(list1);

console.log( [1, 2, , 4, 5].slice(1, 4) ); // [2, empty, 4]

function even(i)
{
   if(i%2===0)
   {
    return "even";
   }
   else
   {
    return "odd";
   }  
}

console.log(even(229));

console.log([12,10,8,9,6].some( (x) => x < 1) );
console.log([2, 5, 8, 1, 4].some((x) => x > 1) );


const TRUTHY_VALUES = [true, "true", 1];

function getBoolean(value) 
{
  if (typeof(value) === "string") {
    value = value.toLowerCase().trim();
  }

  return TRUTHY_VALUES.some((t) => t === value);
}

console.log(getBoolean(false)); // false
console.log(getBoolean("false")); // false
console.log(getBoolean(1)); // true
console.log(getBoolean("true")); // true
console.log([1,2,undefined,77].some((z)=>z==99));

const somemethodwithnonarrayobject = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: '3', // ignored by some() since length is 3
};
console.log(Array.prototype.some.call(somemethodwithnonarrayobject, (x) => typeof x ==="boolean"));
const reversenumbers = [3, 2, 4, 1, 5];
reversed=[...reversenumbers].reverse();
console.log(reversed);
console.log(reversenumbers);
const reversenumbers1 = [3, 2, 4, 1, ,5];
console.log(reversenumbers1.reverse(0,3));

const reverseofnonarrayobjects = {
  length: 3,
  unrelated: "foo",
  2: 4,
  3: 33, // ignored by reverse() since length is 3
};
console.log(Array.prototype.reverse.call(reverseofnonarrayobjects));



const playreverse = [32, 21, 49, 15, 35];
console.log([...playreverse].reverse());
console.log(playreverse);

const formapmethod = [3,4,5,6,7];

let res=formapmethod.map(
  (ele,id,mainarray)=>
  {
    if(ele<5)
    {
      console.log(ele,id,mainarray);
      return ele*3;
    }
    else
    {
      console.log(ele,id,mainarray);
      return ele;
    }
  }
)
console.log(res);

const playingmap=[100,200,300,400,500];
console.log(playingmap);
let mapresult=playingmap.map(
  ()=>
  {
    //console.log();
  }
)

console.log(mapresult);


let fee=(x,y)=>
{
  return (z)=>
  {
    return()=>
    {
      return 99;

    };
  };
}
console.log(fee()()());


const products = [
  { name: "sports car" },
  { name: "laptop" },
  { name: "phone" },
];

console.log(products[0].name);
console.log(products[1].name);
console.log(products[2].name);

const r = products.map(
  (product,index,Array) =>
  {
    let gst=1.5;
    product.price=3000+gst;
    return products;
  }
  )
// console.log(products);
// console.table(products);
console.table(r);

// const foreachfunvariable=(ele,index)=>
// {
//   console.log(`[${index}]=${ele}`);
// }
[222,333,444,555].forEach((ele,index)=>
{
  console.log(`${index}=${ele}`);
});


const words = ["one", "two", "three", "four"];
words.forEach((word) => {
  console.log(word);
  if (word === "three") {
    words.shift(); //'one' will delete from array
  }
}); // one // two // four

console.log(words); // ['two', 'three', 'four']

const numbersinwords = ["one", "two", "three", "four",[11],[1,[22],1]];

console.log(numbersinwords.flat(Infinity));
const arr5 = [1, 2, , 4, 5];
console.log(Object.keys(arr5.flat(2)));
console.log(arr5.flat(2));

const lalansons= {
  length:5,
  1:'a',
  2:'b',
  3:'c',
  4:['j','k',['i','j','k']]
}
console.log(Array.prototype.flat.call(lalansons,Infinity));

//ll=lalansons;
//console.log("byspreadoperator"+ll);

const lang=['c','c++','java'];
console.log(lang);
lang.forEach((x)=>{
  lang[0]='python';
  console.log(x);
});

console.log(lang);


const arrayLi = {
  length:4,
  0: 2,
  1: 3,
  2: 4,
  3: 5, // ignored by map() since length is 3
};

console.log(Array.prototype.map.call(arrayLi, (x) => x ** 2));

console.log(Array.from([1,2,3,4]));
const st='upendar kamarthapu'
let ii=
// console.log(Array.from(st,(x)=>{ if(x==['a','e','i','o','u'].forEach( (y)=>{
//   return y;
// })){x="@";}return x;}));
console.log(st);

const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
console.log(Array.from(map));
console.log(Array.from(map.keys()));
console.log(Array.from(map.values()));

function arrayfrom()
{
 return Array(arguments);
}
console.log(arrayfrom([1,2,3,4],1,3));
console.log(Array.from( { length: 6 }, (v,i) =>i+1));

const fishes=['sm','lg','md','xl'];
console.table(fishes.includes('xl',-100));

// function show()
// {
//   console.log('magic with functions');
// }

// const dd='show';
// globalThis.dd();

console.log([1,2,3,4].map((x)=> (x*2))); 

console.log(["1","2","3"].map(parseInt));


console.log(["1","2","3"].map((e)=>parseInt(e)));

console.log(["1","2","3"].map(Number));

console.log(["1.1","2.2","3"].map((Number)));

console.log(["1.1","2.2e2","3e300"].map((Number)));

console.log(["1.1","2.2e2","3e300"].map((str)=>parseInt(str)));

const strings = ["10", "10", "10"];
const numberrs = strings.map(parseInt);

console.log(numberrs);

if(undefined)
{
  console.log("wow");
}
else{
  console.log("not wow");
}

console.log([10, 20, 30].map(x => parseInt(x)));

const aaa=new Array(1);
console.log(aaa);

const hhh=[10, 20, 30];

console.log(hhh.at(-1));

console.log(Array.prototype.at.call(hhh,0));
const lms=[100, ,2,33,22,77,66,45];
const itr=lms.entries();
itr.next().value;
console.log(itr.next().value);
itr.next().value;
console.log(itr.next().value);


const array = ["a", "b", "c"];

const arrayEntries = array.entries();

for(let ele of arrayEntries)
{
  console.log(ele);
}

for(const [index,ele] of array.entries() )
{
  console.log(index+":"+ele);
}

const arrayentry = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: "d", // ignored by entries() since length is 3
};

for(const entry of Array.prototype.entries.call(arrayentry))
{
  console.log(entry);
}


// const ar1=[1,2,3,4,5,6];
// const ar2=[1,2,3,4,5,3];
// function arrayequalornot(ar11,ar12)
// {
// if(ar11.every(x=>ar12.includes(x)));
// {
//   return 'equal';
// }
// else
// {
//   return "not equal";
// }
// }

//console.log(arrayequalornot);


const ar13 = ['a', 'b'];
const ar14 = ['c', 'd', 'a', 'z', 'g', 'b'];

if(ar13.every(r => ar14.includes(r)))
{
  console.table('Found all of', ar13, 'in', ar14);
}

else
{
  console.table('Did not find all of', ar13, 'in', ar14);
}


const ar16 = ['r', 'a', 'd', 'a', 'r'];
const ar15 = ['a', 'd','a','t'];
if(ar15.every( (x)=>ar16.includes(x)) )
{
  console.log("yes");
}
else{
  console.log("no");
}

const ar17 = ['a', '','a','t'];
console.log(ar17.every((x)=>x!==undefined));


const ar20 = {
  length: 3,
  0: a,
  1: "b",
  2: "c",
  3: 345, // ignored by every() since length is 3
};
console.log(
  Array.prototype.every.call(ar20, (x) => typeof x === "string"),
); // true

const ar21 = [111, 2232, 3123, 4421,88];
console.log(ar21.fill(2,1,3));
console.log(ar21);

console.log([1,2,3].fill(4));
console.log([1,2,3].fill(4,2));
console.log([1,2,3].fill(4,3));
console.log([1,2,3].fill(33,1));
console.log([1,2,3].fill(122,0,1));
console.log([1,2,3,9,88].fill(4,1,1));
console.log([1,2,3,555].fill(7,-1,-2));
console.log([1,2,3,599].fill(909,-1,-1));
console.log([1,2,3].fill(48,3));
console.log([1,2,3].fill(1211,2));

const a22=Array(3).fill({});
a22[0].hi0='hello0';
a22[1].hi1='hello1';
console.log(a22);


const a23=new Array(3);
console.log(a23);
for(let i=0;i<a23.length;i++)
{
  arr[i]=new Array(4).fill(10);
}



const tempGirls = Array(5).fill("girl", 1);

console.log(tempGirls);

const tempGirlss = {length:3};

let lk=Array.prototype.fill.call(tempGirlss,11);

console.log(lk);

console.log(Array.from(lk));

const feelings = [10000, 20000, 30000, 40000, 50000];
let resfeelings=feelings.filter( (x)=>x>20000)
console.log(resfeelings);
console.log(feelings);

const findprimenumbers=[1,-2,3,4,2,5,6,7,8,9,10,11,12,13,14,15,16,17];

const findprimenumbersresult=findprimenumbers.filter(isprime);

console.log(findprimenumbersresult);

function isprime(num)
{
  for(let i=2;num>i;i++)
  {
    if(num%i===0)
    {
      return false;
    }
  }
  return num>1;
}


const jsonids= [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: "undefined" },
];

let invalidcounts=0;
function finditembyid(b)
{
  if(Number.isFinite(b.id) && b.id!== 0)
  {
    return true;
  }
  invalidcounts++;
  return false;
}

const resultofjsonids=jsonids.filter(finditembyid);
console.log(resultofjsonids);
console.log(invalidcounts);

console.log([1, , undefined].filter((x) => x === " ")); // [undefined]
console.log([1, , undefined].filter((x) => x !== 2)); // [1, undefined]




//console.log(Array.prototype.filter.call(ar24, (x) => x));
// [ 'a', 'b' ]

const mobileproducts=[
  {
    sumsung:15000,
    iphone:()=>
    {
      let gst=12;
      return ()=>
      {
        return 4000;

      };
    },
    redminote5pro:19000,
  }
]
console.log(mobileproducts[0].iphone()());



const fruitss = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter((el) => el.includes(query));
}

console.log(filterItems(fruitss, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruitss, "ban")); // ['banana', 'mango', 'orange']


let fragrances = ["spray", "limit", "exuberant", "destruction", "elite", "present","spray"];

const resfragrances=fragrances.filter((word,index,array)=>
{
  array.pop();
  return word.length<6;
})

console.log(resfragrances);
console.log(fragrances);









const dupliaarray=[10,20,30,40,10,20,30,60,70,80];
let duplicates=dupliaarray.filter((ele,index,array)=>
array.indexOf(ele)==index);
console.log(duplicates);

const ar25= [5, 1, 80, 130, 449];
const findresult=ar25.find((x,index,array)=>x>6 );
console.log(findresult);

// const ar26= ['s','h', 'e', 'k','a','r'];
// const filterresult1=ar26.filter((x,index,array)=> {if (x in ['a','e','i','o','u']) {delete(x)}} );
// console.log(filterresult1);


const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 4 },
];

const findresult1=inventory.find(({quantity}) => quantity===2);

console.log(findresult1);
console.log(inventory[0]['quantity']);
console.log(inventory[1]['quantity']);


console.log(inventory[1]["name"]);
const ar27 = [50, 18, , , , 58, 69];
console.log(ar27.find((x,index,arr)=>x>=58));



const inventory1 = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 4 },
];


function isbananas(fruit)
{
  return fruit['quantity'] ===4;
}

console.log(inventory1.find(isbananas));


const inventory2 = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "fish", quantity: 1 },
  { name: "cherries", quantity: 5 },
];


function isfruit(fruit)
{
  return fruit.quantity<1;
}
console.log(inventory2.findLast(isfruit));
console.log(inventory2.findLast(({quantity}) => quantity<2));


const ar26= {
  length:3,
  0: 2,
  1: 7.3,
  2: 4,
  3: 3, // ignored by findLast() since length is 3
};





const flateg=[10,20,304,4,[45,60],70,[22]];

const flatres= flateg.flat(2);

console.log(flatres);
console.log( flateg);


console.log(typeof(Array.prototype.findLast.call(ar26,(x) =>Number.isInteger(x))));

const ar28 = [1, 2, 3, 4];
const n=ar28.length;

const ar29=new Array(n*2);
for(let i=0;i<n;i++)
{
  const x=ar28[i];
  ar29[i*2]=x;
  ar29[i*+1]=x*2;
}
console.log(ar29);

const ar30 = [-3, 20, 17, -33, -4, 18];
//         |\  \  x   |  | \   x   x   |
//        [4,1, 4,   20, 16, 1,       18]

const result = ar30.flatMap( (n) => {
  if (n < 0) {
    console.log("cooling");
    return [];
  }
  return n%2===0 ? [n] : [n-1,1];

}
  );

console.log("only flatmap applied at here",result);
//only map applied at here [ [], [ 20 ], [ 16, 1 ], [], [], [ 18 ] ]


const ar31 = {
  length: 3,
  0: 1,
  1: 2,
  2: 3,
  3: 4, // ignored by flatMap() since length is 3
};
console.log("ar31 output",Array.prototype.flatMap.call(ar31, (x) =>[x,x*2] ));
console.log("ar31 output",Array.prototype.flatMap.call(ar31, (x) => x,x*2));
console.log("ar31 output",Array.prototype.flatMap.call(ar31, (x) =>({length:1,0:x}) ));
// [1, 2, 2, 4, 3, 6]

console.log([1, 2, , 4, 5].flatMap((x) => [x, x * 2])); // [1, 2, 2, 4, 4, 8, 5, 10]

const array1 = ['a', 'b', 'c'];

array1.map((element) => element>'a');


const mapper = new Map([
  ["a"],
  ["b"],
]);
console.log(Array.from(mapper.values()));

const map1   =  new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
console.log(Array.from(map1.values()));





const set = new Set(["foo", "bar", "baz", "foo"]);

console.log(Array.from(set));




function f(g,t,u) {
  return [g,t,u];
}

console.log(f(1, 2, 3));
//Symbol s=new Symbol();
//console.log(Array.from(1,2,3,4));

console.log(Array.from([1, 2, 3], (x) => x + x));
console.log(Array.from({ length: 10 }, (v, i) => i+1));

function NotArray(len) {
  console.log("NotArray called with length", len);
}
console.log(Array.from.call(NotArray, new Set(["foo", "bar", "baz"])));

console.log(Array.from({ 0:11,1:22,2:33,length: 3}, (v, i) =>v));

const tt=[1, 3, 5];

console.log(Array.isArray(tt));
console.log(Array.isArray(Array.prototype));
console.log(Array.isArray([]));
console.log(Array.isArray(new Array()));
console.log(Array.isArray(new Int16Array()));
console.log(Array.isArray(new Uint32Array()));

console.log(Array.from.call(NotArray, { length: 3, 0: "foo",1:'cool'}));

console.log(typeof null === 'object');
console.log(typeof(null));
console.log(typeof(object));
console.log(typeof null !== "null");
console.log(typeof(["hello", "world"]));

// const iframe = document.createElement("iframe");
// document.body.appendChild(iframe);
// const xArray = window.frames[window.frames.length - 1].Array;
// const arr31 = new xArray(1, 2, 3); // [1, 2, 3]

// // Correctly checking for Array
// console.log(Array.isArray(arr31)); // true
// // The prototype of arr is xArray.prototype, which is a
// // different object from Array.prototype
// console.log(arr instanceof Array); // false

function C() {}
function D() {}

const o = new C();

// true, because: Object.getPrototypeOf(o) === C.prototype

console.log(C.prototype);
console.log("instanceof operator==>",o instanceof C);


// const loca = document.getElementById("222");

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } 
//   else {
//     loca.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }

// function showPosition(position) {
//   loca.innerHTML = "Latitude: " + position.coords.latitude +
//   "<br>Longitude: " + position.coords.longitude;
// }


// const iframe = document.createElement("iframe");
// document.body.appendChild(iframe);
// const xArray = window.frames[window.frames.length - 1].Array;
// const arr31 = new xArray(1, 2, 3); // [1, 2, 3]

// // Correctly checking for Array
// Array.isArray(arr31); // true
// The prototype of arr is xArray.prototype, which is a
// different object from Array.prototype
//arr instanceof Array; // false

const elements = null; 

//let joinres=elements.join();
// console.log(joinres);
// console.log(elements);            
console.log(typeof(elements));         

console.log([1,2,,3].join("+"));
console.log([1,2,undefined,,3].join("+"));
const ar32 = {
  length:3,
  0: 2,
  1: 3,
  2: 4,
  3: 5,
  
  // ignored by join() since length is 3
};
console.log(Array.prototype.join.call(ar32));
console.log(Array.prototype.join.call(ar32,'-'));


const ar33 = ['a', 'b', 'c'];
const iterator = ar33.keys();
let ar34=[];
for(let indexs of iterator)
{
  console.log(indexs);
  ar34.push(indexs);
}

console.log(ar34);

const ar35 = ["a", , "c"];
const iterator1 = Object.keys(ar35);
const iterator2 =[...ar35.keys()];
console.log(iterator1);
console.log(iterator2);

const ar36={
  length:3,
  0:22,
  1:34,
  2:55
};

for(let i of Array.prototype.keys.call(ar36))
{
  console.log(i);
}
const ar37 = [8, 5, 9, 2,NaN];

console.log("lastindexof",ar37.lastIndexOf(9, 3)); // 0
console.log("lastindexof",ar37.lastIndexOf(5, -1)); // 0
console.log("lastindexof",ar37.lastIndexOf(NaN)); // 0



const ar38 = {
  length: 3,
  0: 2,
  1: 3,
  2: 2,
  3: 5, // ignored by lastIndexOf() since length is 3
};
console.log(Array.prototype.lastIndexOf.call(ar38,3,2))



const kvArray =
 [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];


console.log(kvArray);


const reformattedArray = kvArray.map(( obj ) =>{ return {[obj.key]: obj.value} });

console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]

//console.log(kvArray);

const retailorprice=[20,30,40];
let total=0;
const withtax=retailorprice.map((cost)=>
{
  total=total+cost;
  return cost*1.5;
});
console.log(withtax);
console.log(total);

const ar39=[9,10,11,12];
console.log(ar39.lastIndexOf(11,-2));
console.log(ar39.lastIndexOf(10,3));

console.log(Array.of(1,2,3,4,5));


function NotArray11(len) {
  console.log("NotArray called with length", len);
}

console.log(Array.of(12,14,15,17,19));
console.log(Array.of.call({},12,14,15,17,19));
console.log(Array.of.call(Object,(12,13)));
console.log(Array.of.call(NotArray11,12,13));

const ar40=[12,45,66,23,111,970];
console.log(ar40.slice(-2));


console.log(ar40.pop());
console.log(ar40);
const plainObj1 = {};
// There's no length property, so the length is 0
console.log(Array.prototype.pop.call(plainObj1));
console.log(plainObj1);

const domesticanimals = ['pigs', 'goats', 'sheep'];
console.log(domesticanimals.push('hens'));
console.log(domesticanimals);
console.log(domesticanimals.unshift('hens'));
console.log(domesticanimals);

const vegetables11 = ["parsnip", "potato"];
const moreVegs12 = ["celery", "beetroot"];

// Merge the second array into the first one
let pureflat=vegetables11.flat(vegetables11.push(moreVegs12));

console.log(pureflat);

const reduceeg=[10,20,30,40,50]
let c=0;
console.log(reduceeg.reduce((acc,val,index)=>
{
  console.log(acc,val,index);
 for(const i of reduceeg)
 {
  if(acc<val)
  {
    return val; 
  }
  else{
    return acc;
  }
}
},
reduceeg[0]));




const reversear42=[10,20,304,40,111];
console.log(reversear42.reverse());
console.log(reversear42);

console.log([1, , 3].reverse());
console.log([1, , 3, 4].reverse());








const ar44 = [3, 2, 4, 1, 5];
const resrev=[...ar44].reverse();
console.log(resrev);
console.log(ar44);


// http.createServer
// (
//   function (req, res) 
// {
//   res.writeHead(400, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }

// )

// .listen(8081);



const ar43 = {
  length:4,
  2: 4,
  3: 33, 
  4:90
};

console.log("cool",Array.prototype.reverse.call(ar43));



const arobj=
[
  1,2,3,4
  ];
  console.log(0 in arobj);
  console.log(9 in arobj);
  console.log("3" in arobj);
  console.log(4 in arobj);

  const ar45 = {
    length: 3,
    unrelated: "foo",
    2: 4,
  };
  Array.prototype.push.call(ar45, 1, 2);
  console.log(ar45[0]);
  console.log(ar45[1]);
  console.log(ar45[2]);
  console.log(ar45[3]);
  console.log(ar45[4]);


  const names = ["Andrew", "Tyrone", "Paul", "Maria", "Gayatri"];

  while (typeof(i = names.shift()) !== "undefined") {
    console.log(i);
  }

  console.log(names);


  

const functionConstructor=Function(
  "function findlargest(arr){return Math.max(...arr)};return findlargest",
) 
console.log(functionConstructor.call({}).call({},[2, 4, 1, 8, 5]));


const sayHello = new Function(
  "return function (name) { return `Hello, ${name}` }",
);
console.log(sayHello()("shekar"));
console.log(sayHello()("shekar").length);
console.log(functionConstructor().length);

// var gv=10;
// function f111()
// { 
//   const gv=200;
//   return new Function("return gv;");
// }

// function f222()
// {
  
//   function f()
//   {
//     const gv=200;
//     return gv;
//   }
//   return f;
// }

// const ref111=f111();
// const ref222=f222();
// console.log(ref111());
// console.log(reff222());



console.log(Function.length); // 1
console.log((() => {a=10;return a}).length);

console.log(((...args) => {}).length);

console.log(((a, b, c) => {}).length);

function foo() {};
console.log(foo.bind({}).name); 
//console.log(foo.call({}).name); 
//console.log(foo.apply({}).name); 


function Foo() {};
const foo1 = new Foo();

if (foo1.constructor.name === "Foo") {
  console.log("'foo1' is an instance of 'Foo'");
} else {
  console.log("Oops!");
}

// function someFunction() {}

// Object.defineProperty(someFunction)= "otherFunction";
// console.log(someFunction.name);

const st1="cart";
console.log(typeof(st1));
const stobject=new String("cool");
console.log(stobject);
const dd="shekar";
console.log(st1.charAt(1));
console.log(dd[0]);
console.log(dd[1]);
console.log(dd[2]);
console.log(dd[3]);
console.log(dd[4]);
console.log(dd[5]);

const ar50=[];
for(let i=0;i<dd.length;i++)
{
  ar50.push(dd[i]);
}
console.log(ar50);

function areEqualCaseInsensitive(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}
console.log(areEqualCaseInsensitive("shekar","Shekar"))

const a55=10;
const b66=30;
console.log(a55- -b66);

const s1 ="2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
// console.log(eval(s1)); // returns the number 4
// console.log(eval(s2)); // returns the string "2 + 2"
console.log(typeof(s1)); // returns the string "2 + 2"

const s3='shekar';
console.log(s3.length);
console.log(typeof (new String("hello")) === "object");
console.log(Number.EPSILON);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NaN);
console.log(Number.MIN_SAFE_INTEGER);

//console.log(typeof(eval('2 + 2')));
//console.log(type)

// "use strict";
// console.log(typeof(eval(("2+2"))));
//.log(typeof([]+[]));
let sss=new String("consistency");
console.log(sss.toString());
console.log(sss.valueOf());
console.log(`${sss}`);
console.log(2+2);

//console.log(typeof());
console.log(11+false);
//console.log(9007199254740991n+ln4);//typeerror will come
console.log(1+2+3+4+5+true+"consistency");
console.log("consistency"+1+2+3+4+5+true);
console.log(true+true);
console.log(BigInt(2)+2n);
console.log(2n+BigInt(2));
console.log("stringthing ",Boolean(2n));
console.log("code unit of 1 emoji","😄".split(""));
console.log([..."🇺🇳"]);
console.log(typeof(String(undefined)));
const str3 = new String("Hello world"); // a === "Hello world" is false
const str4 = String("Hello world"); 
console.log(str3==="Hello world");
console.log(str4==="Hello world");
const strsymbol=Symbol("consistency in hardwork");
//console.log(`${strsymbol}`);//TypeError: Cannot convert a Symbol value to a string
//console.log("cool"+strsymbol);//TypeError: Cannot convert a Symbol value to a string
//console.log("".concat(strsymbol));//TypeError: Cannot convert a Symbol value to a string
//console.log(new String(strsymbol));//TypeError: Cannot convert a Symbol value to a string
console.log(String(strsymbol));
['\ud83d', '\ude04']
function getcharacters(str)
{
  return [...str].length;
}

console.log(getcharacters("ud83d\ude04 abcdr"));


const myString = "bluebells";


myString.length = 4;
console.log(myString); // "bluebells"
console.log(myString.length);

console.log(`\"${myString.charAt(4)}\"`);

console.log("\'hello consistency\'");

console.log("consistency is more important"[2]);
// console.log([1,2,3,4].charAt(10));

const re11="a";
const re12="a";
if( re11<re12)
{
  console.log(`${re11}` +" is less than "+ `${re12}`);
}
else if(re11>re12)
{
  console.log(`${re11}` +" is greater than "+ `${re12}`);
}
else{
  console.log(`${re11}` +" is equal "+ `${re12}`);
}

console.log("start directly in stack and give it to console.");
function one11()
{
  console.log(setTimeout(()=>{
    console.log("in settimeout callback function")
  },3000));
}
function two11()
{
  console.log("end directly in stack via function and give it to console")
}
one11();
two11();
console.log("end directly in stack and give it to console.");
const modes=["1",'NEFT','Demand draft','cheque printing at hdfc','Internal to external','Hocheque printing'];
console.log(modes.includes(modes[0].toString()));
const arr100 = [1, 2, 3]; 
const rest = [...arr100]; 
const last = rest.slice(0,-1);
console.log(last);
const sym = Symbol("consistency");
console.log(sym);

const obj12={
  a123:1,
  b123:2
}

const sy=Symbol("a123");
obj12[sy]="consistency in hardwork";
console.log(obj12);
const s12="contsisency";
const ar133=Array.from(s12);
const palindrome11=ar133.slice(2,7);
console.log(palindrome11);
console.log(palindrome11.sort());

const implicit1=(a)=>{return 115;};//implicit return single line
const implicit2=(q)=>(12);//implicit return,multi line

console.log(implicit1());

console.log(implicit2());
const s13="A\uD87E\uDC04Z";

console.log([...s13].length);
const str = "A\uD835\uDC68";

const strIter = str[Symbol.iterator]();

for(let i of strIter)
{
  console.log("with symbol iterator function",i);
}
// console.log(strIter.next().value); // "A"
// console.log(strIter.next().value)

const s0 = "A\uD835\uDC68";
const ar121=(s0.split(""));
ar121.forEach((e)=>(console.log(e)));
const obj11={
  1:555,
  2:577,
  3:89,
  4:990,
  5:9314,
}
console.log("by spred operator" , {10:222,22:324,...obj11});

const s15="consistency";

const strtest=s15.at(-10);

console.log(strtest);

console.log(s15);

let n122=354678;
let ar500=[];
while(n122!=0)
{
 let  n122result=n122%10;
  n122=Math.trunc(n122/10);
  ar500.push(n122result);
}  
console.log("here is my new arrray",ar500.reverse());

let n12=8766755;
let convertnumtostring=String(n12);
console.log("convertnumtostring",typeof(convertnumtostring),typeof(n12));
for(i of convertnumtostring)
{
  console.log(i);
}
const str100="hello, maintain consistency in hardwork daily and understand the things how they work properly";
console.log("str100"[2]);

const str12="consistency is more important";
console.log("here is empty string because the index position is not their so it return empty string",str12.charAt(100));
console.log(str12.charAt(str12.length-1));
console.log("it will give the value from the index position from 4th of the particular string==>  "+str12.charAt(4.9));
console.log("here it is giving undefined due to it not taking decimal positions in the index position with bracket notation"+str12[1.9]);
console.log("if no index position is given means it will give 0th positin index value from that particular string ==>"+ str12.charAt());
const ar51=['c','o','n','s','i','s','t','e','n','c','y'];
console.log(ar51.reverse()[0]);
//console.log(ar51);
const ar52=[1,2,33,55,65,98];
console.log([...ar52].reverse());
//console.log(spreading);
console.log(ar52);
console.log([1,2,3]+[,2,3,4]);
JSON.stringify( {1:22,2:55,3:99} + {1:56,2:53,3:9,4:545});
const obj100={name1:'neha'};
const obj13={ ...obj100,name:'shekar',age:24,};

console.log(obj13);
// const toRevers=ar52.toReverse();
// console.log(toRevers);

const arrayLike11 = {
  length: 3,
  unrelated: "foo",
  2: 4,
  3: 33, // ignored by reverse() since length is 3
};
console.log(Array.prototype.reverse.call(arrayLike11));
const ar101=[10,"4",,,,20,30,,,,,,,40,,50];
console.log(ar101.reverse());
console.log(ar101.length);
const str133="projecthelp";
console.log("str133 length",str133.length);
console.log(str133.split("").reverse().join());
console.log(2+'2'*'2'+2);
const str13="school students";
console.log(str13.split("").join());
const ar103=[10,20,30,405,50,60];
const ana1="winter";
const ana2="tinwer";
const ana11=ana1.split("").sort().join();
console.log(ana11);

const ana22=ana2.split("").sort().join();;
console.log(ana22);

if(ana22===ana11);
{
  console.log("anagram");  
}

const ar201=[1012,202,330,140,50];
const ar202=[10,20,30,40,50];
const arrayequals=ar201.every((e,i)=>e==ar202[i]);

if(ar201.length==ar202.length && arrayequals)
{
  console.log("arrays are equal");
}

else
{
  console.log("not equals"); 
}

const ar204=[3,75,6,43,22];
console.log(ar204.sort());
const strops=['e','g','k','a','l'];
console.log(strops.reverse());

//const months = ['Jan', 'March', 'April', 'June','july','august','september'];
//console.log("here",months.splice(0,0,'Feb'),months);
//const resultForToSplicedMethod = months.toSpliced(3,2);//need node version >=20.0 
//console.log(resultForToSplicedMethod);//need node version >=20.0
//console.log(months.length/2);
const ar205=[12,43,144,89,756];
ar205.splice(0,undefined,);

//delete ar205[0];
console.log(ar205);
const ar207=[1,2,22,4,5,6,6,5];
const ar208=[6,7,812,9,10];

//console.log("here",...new Set(ar207));
//ar208.filter((e,i)=>ar208.indexOf(i)===e);
const k3=[...new Set(ar207)] //...new Set(ar208);
const k4=[...new Set(ar208)] 
console.log("k3",k3);
console.log("k4",k4);

//...new Set(ar208);
//const armerge1=_.uniq(ar207,false);

const hk=[...k3,...k4];
const k5=[...new Set(hk)];
console.log("k5",k5);

console.log(   Array.from(   new Set(ar207.concat(ar208).sort((ar207,ar208)=>ar207-ar208))   )     );

//const k5=[new Set(];
//console.log(k5);
//console.log(k4);

const ar209=[103,23,40,384];

const ar210=[108,231,420,38,23];

console.log( Array.from(ar209,(x)=>{if(x%2==0){return "even"} else{return "odd"} }));

const str001="AA";
console.log("ccc",str001==Number(str001));
//const str002="A";
if(str001==str001.toLowerCase() && str001!=" " && str001!=Number(str001))
{
  console.log("LOWERCASE","1");
}

else if(str001==str001.toUpperCase() && str001!=" "&& str001!=Number(str001))
{
  console.log("HERE UPERCASE","-1");
}

else
{
  console.log("NOT UPPER OR LOWER ","0");
}

const word1 = "abc";
const word2 = "pqr";
const w1=word1.split("");
const w2=word2.split("");
const mergerarray=[];
for(i of w1)
{
  const k000=w1.splice(i+1,0,w2[i]);
  mergerarray.push(k000);
}
console.log(mergerarray);































