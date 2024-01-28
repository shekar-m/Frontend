// const a=Number();
// const b=Number(undefined);
// console.log(a);
// console.log(b);
exports.additon = function (a,b) {
    return a+b;
  };

const word1 = "ab";
const word2 = "pqruybstf";
// const w1=word1.split("");
// const w2=word2.split("");;

let res="";
    let i=0;
    while(i<word1.length && i<word2.length)
    {
      res=res+word1[i];
      res=res+word2[i];
      i=i+1;
    }
    if(word1.length>i)
    {
        res=res+word1.slice(i);
    }
    if(word2.length>i)
    {
        res=res+word2.slice(i);
    }
console.log(res);

const ar444= [5,6,2,7,4];
console.log(ar444.sort());

let w777=ar444[ar444.length-1];
console.log("7",w777);
let x777=ar444[ar444.length-2];
console.log("6",x777);
let y444=ar444[0];
let z444=ar444[1];
console.log(y444);
console.log(z444);
let a444=w777 * x777;
console.log("a444",w777*x777);
let b444=y444*z444;
console.log(b444);
console.log(a444-b444);



const nums=[1,6,7,5,2,4,10,6,4];
console.log(nums.sort(function (a, b) { return b - a }));
let sr="ahEelloAEI";
 //let sr22=sr.split("");
//console.log(sr22);
//const set1 = new Set(['a','e','i','o','u','A','E','I','O','U']);
//set1.forEach((e,i)=>set1.has(e)==i);
let indexarr=[];
for(let i=0;i<sr.length;i++)
{
  if(sr[i]==='a')
  {
    indexarr.push(sr.at(i));
  }
  else if(sr[i]==='e')
  {
    indexarr.push(sr.at(i));
  }
  else if(sr[i]==='i')
  {
    indexarr.push(sr.at(i));
  }
  else if(sr[i]==='o')
  {
    indexarr.push(sr.at(i));
  }
  else if(sr[i]==='u')
  {
    indexarr.push(sr.at(i));
  }
  else if(sr[i]==='A')
  {
    indexarr.push(sr.at(i));
  }
  else if(sr[i]==='E')
  {
    indexarr.push(sr.at(i));
  }
  else if(sr[i]==='I')
  {
    indexarr.push(sr.at(i));
  }
  else if(sr[i]==='O')
  {
    indexarr.push(sr.at(i));
  }
  else if(sr[i]==='U')
  {
    indexarr.push(sr.at(i));
  }
}
console.log(indexarr);
console.log(indexarr.reverse());

for(let i=0;i<indexarr.length;i++)
{
  console.log("at i position value",indexarr[i]);
    console.log("at i position value",sr[i]);
    if(sr[i]==='a')
    {
      console.log("inside if block a");
      sr.replace(sr[i],indexarr[i]);
      break;
    }
   else if(sr[i]==='e')
    {
      console.log("inside if block e");
      sr.replace(sr[i],indexarr[i]);
      break;
    }
    else if(sr[i]==='i')
    {
      console.log("inside if block i");
      sr.replace(sr[i],indexarr[i]);
      break;
    }
    else if(sr[i]==='o')
    {
      console.log("inside if block o");
      sr.replace(sr[i],indexarr[i]);
      break;
    }
    else if(sr[i]==='u')
    {
      console.log("inside if block u");
      sr.replace(sr[i],indexarr[i]);
      break;
    }
    else if(sr[i]==='A')
    {
      console.log("inside if block A");
      sr.replace(sr[i],indexarr[i]);
      break;
    }
    else if(sr[i]==='E')
    {
      console.log("inside if block E");
      sr.replace(sr[i],indexarr[i]);
      break;
    }
    else if(sr[i]==='I')
    {
      console.log("inside if block I");
      sr.replace(sr[i],indexarr[i]);
      break;
    }
    else if(sr[i]==='O')
    {
      console.log("inside if block O");
      sr.replace(sr[i],indexarr[i]);
      break;
    }
    else if(sr[i]==='U')
    {
      console.log("inside if block U");
      sr.replace(sr[i],indexarr[i]);
      break;
    }
}




//************************************/
s="ahEelloAEI";
let vowels = ['a','e','i','o','u'];
  let arr = [];
  for(let x of s)
  {
    console.log(x)
      if(vowels.includes(x.toLowerCase()))
      {
          arr.push(x);
      }
  }  
  console.log("herearr",arr);
  let  n= arr.length-1;
  let result = "";
  for(let x of s)
  {
      if(vowels.includes(x.toLowerCase()))
      {
          result+=arr[n];
          n--;
      } 
      else
      {
          result+=x;
      }
  }
console.log(result);
let leetc1 = " a good   example ".trim();

console.log(leetc1);
console.log(leetc1.split(" ").filter(e => String(e).trim()).reverse().join().replaceAll(","," "));
console.log("look",leetc1.split(" ").reverse().join().replaceAll(","," "));

let leetc2 = [-1,1,0,-3,3];
let pro=1;
newlletc3=[];
let ref=0;
for(let i=0;i<leetc2.length;i++)
  {
    pro=pro*leetc2[i];
  };
 console.log("pro",pro);
 for(let i=0;i<leetc2.length;i++)
 {
  ref=pro/leetc2[i];
  if(ref==isNaN)
  {
    ref=0;
  }
  newlletc3.push(ref);
 }
console.log(newlletc3);

console.log();

const prices=[3,2,3];
let money=3;
console.log(prices.sort((a,b)=>a-b));
let choco1=prices[0];
let choco2=prices[1];
let totalmoneyforchocos=choco1+choco2;
console.log(totalmoneyforchocos);
if(totalmoneyforchocos<=money)
{
  console.log(money-totalmoneyforchocos);
}
else
{
  console.log(money);
}



const points =[1,2,3,4,4,5,5,8];
let size=2;
var chunkedarray=[];
var j=0;
for(let j=0;j<points.length;j+=size)
{
  chunkedarray.push(points.slice(j,j+size));
  //j+=size;
}
console.log(chunkedarray);
Array.prototype.lasttt = function() {
    
  if(this!="")
  {
       return this[this.length-1];
  }
  else
  {
      return -1;
  } 
};

// const aff=[""];
// console.log(aff.lasttt());

// for(var j=1;j<=3;j++)
// {
//   console.log(setTimeout(()=>{console.log(j);},1000));
// }

// console.log()
function higher(fn)
{
  var val="code";
  fn(val);
}

higher(function(val)
{
  console.log("js "+val);
});
console.log("here",!!"false");//assumption ==>true
const obj={1:'a',2:'b'};
const set=new Set([1,2]);

console.log(obj.hasOwnProperty('1'));
console.log(obj.hasOwnProperty(1));
console.log(set.has('1'));
console.log(set.has(1));

const a={};
const b={key:'b'};  1
const c={key:'c'};
a[b]=123;
a[c]=56;
console.log(a[b]); 

const a3=new Date();
console.log(a3.toLocaleString("es",{timezone:'Ist'}));
const amount=10000.2341341132;

console.log(amount.toLocaleString("en-IN",
{
  maximumFractionDigits:5,
  style:"currency",
  currency:"INR"
}));

console.log(a3.toLocaleString("es",
{
  style:"currency",
  currency:"INR"
}));


let leet3= "011101";
console.log(leet3);
//let alt=leet3.split("");
let one=[];
let two=[];
for(let i=0;i<leet3.length;i++)
{

  let x=leet3.slice(0,i+1).split("");
  console.log("here",x);
 
}
console.log("here 0",one.length);
console.log("here 1",two.length);
// console.log(Math.abs((one.length+two.length)-1));
// console.log(two.length);
const korean = new Intl.Locale('ko', {
  script: 'Kore',
  region: 'KR',
  hourCycle: 'h23',
  calendar: 'gregory',
});

const japanese = new Intl.Locale('ja-Jpan-JP-u-ca-japanese-hc-h12');

console.log(korean.baseName, japanese.baseName);
// Expected output: "ko-Kore-KR" "ja-Jpan-JP"

console.log(korean.hourCycle,korean.calendar, japanese.hourCycle,japanese.calendar);
// Expected output: "h23" "h12"

const locale = new Intl.Locale("ja-Jpan-JP-u-ca-kf-lower");
console.log(locale.language);
console.log(locale.script); // Prints "Latn"
console.log(locale.region); 
console.log(locale.calendar);
console.log(locale.caseFirst);
console.log(locale.collation);

//console.log(locale.region); // Prints "Latn"
 // Prints "Latn"
 // Prints "Latn"

//let monthsmapleet=new Map([['Jan',1],['Feb',2],['Mar',3],['Apr',4],['May',5],['Jun',6],['Jul',7],['Aug',8],['Sep',9],['Oct',10],['Nov',11],['Dec',12]]);
// let todaydate=new Date("23 April 2024");
// let perfectdate="";
// let dateformate=todaydate.toString();
// console.log(typeof(todaydate));
// console.log(typeof(dateformate));
// let ardate=dateformate.split(" ");
// console.log(ardate);
// //let stroreing=ardate[1];
// //console.log(monthsmap);
// //for(monthsmap.length)
// monthsmap.forEach(function(value,key)
// {
//   if(key===ardate[1])
//   {
//     console.log(`${ardate[2]}-0${value}-${ardate[3]} ${ardate[0]}`)
//   }
// });
// let kk=Array.from(monthsmap);
// for(let l=0;l<([...kk].length);l++)
// {
//   console.log(kk[l]);
// }
// console.log(...kk);
let ar11=[11,22,55,33,44,22,33,44,22,999];
let settopic=new Set(ar11);
//console.log(settopic.); q
console.log(Array.from(settopic).sort().join("").replace("3","87").replace("3","87"));
console.log(Object.is(NaN,-NaN));
console.log(typeof(NaN));
console.log(isNaN(NaN)===isNaN(NaN));
console.log(Object.is(0,-0));
const name11="shekar";
name22="consistency is more important";
console.log("delete11",delete name11);
console.log("delete22", delete name22);

const date11 = new Date(Date.UTC(2022,11,28,12,35,23));
console.log(date11.toUTCString());
console.log(date11.toUTCString());
const ar12=[10,254,432,77,8,9,23.54];
// console.log(ar12.toReversed());


// console.log(Object.is(null,null));
// console.log(undefined==undefined);




//console.log(`${ardate[2]}-${ardate[1]}-${ardate[3]}`);



//let date="20th Jan 2052";
// var reformatDate = function(date4) {
//   let monthsmap=new Map([['Jan',01],['Feb',2],['Mar',3],['Apr',4],['May',5],['Jun',6],['Jul',7],['Aug',8],['Sep',9],['Oct',10],['Nov',11],['Dec',12]]);
  
//   let ardate=date4.split(" ");
//   let day=ardate[0].split("").slice(0,2).join("");
//   console.log(day);
  // monthsmap.forEach((value,key)=>
  //   //console.log("inside foreach");
  //   if(key==ardate[1])
  //   {
  //     //console.log("here value is",value);
  //     //console.log("here day is",day);
  //     //console.log("here year is",ardate[2]);
  //    `${ardate[2]}-${value.padStart(2, '0')}-${day}`;
  //   }
  // )
//reformatDate("20th Jan 2052");
// console.log(date.split(" "));
// let ardateleet=date.split(" ");
// let day=ardateleet[0].split("").slice(0,2).join("");
// monthsmapleet.forEach(function(value,key)
// {
//   if(key===ardateleet[1])
//   {
//    console.log(`${ardateleet[2]}-${value}-${day}`);
//   }
// });




























//console.log("heree",prices.reduce((e,i)=> e+prices[i]<=money,prices[0]));





// console.log(leetc1.split(" "));
// let newleet1=leetc1.split(" ").reverse();
// console.log(typeof(newleet1),newleet1.trim());
// newleet1.trimStart();
// newleet1.trimEnd();
// console.log(newleet1);
// for(let i=0;i<newleet1.length;i++)
// {
//   if(newleet1[0]==" "&& newleet1[newleet1.length-1]==" ")
//   {
//     newleet1.unshift();
//     console.log(newleet1.join());
    
//   } 
// 
// /**
//  * @param {string} date
//  * @return {string}
//  */
// var reformatDate = function(date) {
//   //date="06rd Jan 2032";
//  let day = date.length === 13 ? `${date[0]}${date[1]}` : `0${date[0]}`;
//  console.log(day);
//  let mon = date.length === 13 ? `${date[5]}${date[6]}${date[7]}` : `${date[4]}${date[5]}${date[6]}`;
//  console.log(mon);
//  let obj = {
//      "Jan": "01",
//      "Feb": "02",
//      "Mar": "03",
//      "Apr": "04",
//      "May": "05",
//      "Jun": "06",
//      "Jul": "07",
//      "Aug": "08",
//      "Sep": "09",
//      "Oct": "10",
//      "Nov": "11",
//      "Dec": "12"
//  };
//  let month = obj[mon];
 
//  let year = date.length === 13 ? `${date[9]}${date[10]}${date[11]}${date[12]}` : `${date[8]}${date[9]}${date[10]}${date[11]}`;
 
//  console.log(year);
 
//  return `${year}-${month}-${day}`;
//  /*dateArr[0] = dateArr[0].slice(0,-2).padStart(2, '0');
//  let obj = {
//      "Jan": "01",
//      "Feb": "02",
//      "Mar": "03",
//      "Apr": "04",
//      "May": "05",
//      "Jun": "06",
//      "Jul": "07",
//      "Aug": "08",
//      "Sep": "09",
//      "Oct": "10",
//      "Nov": "11",
//      "Dec": "12"
//  };
//  return `${dateArr[2]}-${obj[dateArr[1]]}-${dateArr[0]}`;*/
//  };

// let obj11 = {
//   length:13,
//        "Jan": "01",
//        "Feb": "02",
//        "Mar": "03",
//        "Apr": "04",
//        "May": "05",
//        "Jun": "06",
//        "Jul": "07",
//        "Aug": "08",
//        "Sep": "09",
//        "Oct": "10",
//        "Nov": "11",
//        "Dec": "12"
//    };

//    console.log(Array.prototype.toReversed);

   const ar20=[10,20,30,40,50,60];
   //console.log(ar20.toSpliced(1,0,3999));
   //console.log(typeof(ar20.toString()).charAt(4));
   console.log(typeof(ar20.toString()));
   const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  console.log((matrix.toString().split(",")))//.replaceAll(',',""));

  const arr21 = [];
  arr21.push(1, [3, arr21, 4], 2);
  console.log(arr21.toString()); // 1,3,,4,2
  console.log(Array.prototype.toString.call({ join: () => 1 }));
  console.log(Array.prototype.toString.call({join:()=>12+10}));
  const tostringobjverify={
    1:10,
    2:88
  };
  console.log(Array.prototype.toString.call({join:()=>{110,88}}));
  const ar23=[10,20,30,402,1023,12,21222];
  console.log(ar23.unshift(2222));
  console.log(ar23);
  const unshiftverify = {
    length: 3,
    unrelated: "foo",
    2: 4,
  };
  console.log(Array.prototype.unshift.call(unshiftverify,876,563214),"here",unshiftverify);
  const valuesmethod=ar23.values();
for(i of valuesmethod)
{
  console.log(i);
}

const valuemethodsverifyobj = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: "d", // ignored by values() since length is 3
};
for(const entry of Array.prototype.values.call(valuemethodsverifyobj))
{
  console.log(entry);
}

const itrr=ar23.values();
console.log(itrr.next().value);
console.log(itrr.next());
console.log(itrr.next());
console.log(itrr.next());
console.log(itrr.next());
console.log(itrr.next());
console.log(itrr.next());
console.log(itrr.next());
console.log(itrr.next());
for(const  e of [12234, ,233,44].values())
{
  console.log(e);
}


const words = ["mass","as","hero","superhero"];
for(let i=0;i<words.length;i++)
{
  for(let j=1;j<words.length;j++)
  {
    words[i]==words.includes(words[j])
  }
}

console.log(3+2+"@");
const ar999=[1,2,3,4,5,6,7,8,9];
let fund=2
console.log(ar999.with);


console.time("test_timer");
const adder = new Function("a", "b", "return a + b");
console.log(adder(2, 6));
console.timeEnd("test_timer");
//console.log(flying);
const numbers3999=new Function('a','b','c','d','e','f','g','h','i','return a+b+c+d+e+f+g+h+i' );
console.log(numbers3999(1,2,3,4,5,6,7,8,9));
console.log(ar999.reduce((prev,cur)=>prev+cur));

const ar29="abaac";
const ar28=ar29.split("");
console.log("Actual array length",ar28);
let actlen=ar28.length;
console.log(actlen);
console.log(ar28.join().replace(/(.),(?=\1)/g, '').split(','));
let updlen=ar28.join().replace(/(.),(?=\1)/g, '').split(',').length;
console.log(actlen-updlen);

//console.log((ar28.join("").replace(/(.),(?=\1)/g, '').split(',')))
//let len=(ar28.join("").replace(/(.),(?=\1)/g, '').split(',')).length;
//console.log(len);
//console.log(ar28.length-len);

//console.log(ar28); 
// for(i=0;i<ar28.length;i++)
// {  
//   for(j=1;j<ar28.length;j++)
//   {
//     if(ar28[i]==ar28[j])
//     {
//       console.log("if block");
//       let ss=ar28.slice(ar28.indexOf(ar28[j]));
//       console.log(ss);
//     }
//     else 
//     {
//       console.log("else block");
//       let hh=ar28.slice(ar28.indexOf(ar28[j]),0,ar28[j]);
//       console.log(hh);
//     }
//   }
// }
// //console.log(conseremove());

//console.log(ar28.every((e)=>ar28.indexOf(e)%2==0).);

console.log(String.raw({ raw: "testing" }, 0, 1, 2,3,4,5)); // 't0e1s2t'
const html = (strings, ...values) => String.raw({ raw: strings }, ...values);
// Some formatters will format this literal's content as HTML
const doc = html`<canvas>\n</canvas>`;
console.log(doc);
const litr=`<canvas>\n</canvas>`;
console.log(`Hi\n ${2 + 3}!`);
console.log(String.raw`something' + '&nbsp &nbsp &nbsp &nbsp &nbsp' + 'something`);
console.log(String.raw`Hi\n000A!`);
console.log(String.raw({raw:"shekar"},10,20,304,798,898));
const name39="shekar";
console.log(String.raw`hi\${name39}`);
console.log('hello world hello'.indexOf('world', -9));

console.log("mallareddy engineering college hyderabad".indexOf("Coll"));
const str33 = "To be, or not to be, that is the questione.";
let count = 0;
let position = str33.indexOf("e");

while (position !== -1) { 
  position = str33.indexOf("e", position + 1);
  count++;
}

console.log(count);
console.log(str33.replace('To be','Be the best'));
const uri = 'https://www.w3schools.com/x=шеллы';
const encoded = encodeURI(uri);
console.log("encoding here",encoded);
try 
{
  console.log("decodeing",decodeURI(encoded));
 
} 
catch (e) 
{
 
  console.error(e);
}

//encodeURI() will not encode: ~!@#$&*()=:/,;?+'

//encodeURIComponent() will not encode: ~!*()'

//The characters A-Z a-z 0-9 - _ . ! ~ * ' ( ) are not escaped.
const url = 'https://www.twitter.com';
console.log(encodeURI(url));
console.log(encodeURIComponent(url));

const nums11 = [1,3,4,1,2,3,1].sort((a,b)=>a-b);
//console.log([[...nums11]].);
console.log("Blue Whale, Killer Whale".lastIndexOf("Blue")); // returns -1

console.log("canal".lastIndexOf("a", 2));

console.log("undefined".localeCompare("undefined"));

console.log(String.fromCharCode(0xd83c, 0xdf03));
console.log(String.fromCodePoint(0x1f303));
console.log(String.fromCharCode(655356,655709));
console.log(String.fromCodePoint(9731, 9733, 9842, 0x10804));

console.log("mallareddy maisammaguda college".charCodeAt(4));
console.log("mallareddy maisammaguda college".charAt(4));
console.log("1BC".charCodeAt(0)); // returns 65
console.log("1BC".codePointAt(0)); // returns 65


const greetList = ["Hello", " ", "Venkat", "!"];
console.log("".concat(...greetList));

console.log("".concat(1,2,3,4,444));
console.log("".concat([1,2,3,44,]).replaceAll(",","*").split(""));
const car39="dodge,helcat,srt.";
console.log(car39.endsWith("srt",17));
console.log(car39.endsWith("cat",12));
console.log(" ".endsWith("Aa"));

const endss= function(searchString, position) 
{
  var subjectString = this.toString();
  if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) 
  {
    position = subjectString.length;
  }
  position -= searchString.length;
  var lastIndex = subjectString.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};
console.log("here it is",endss("shekar","6"));
console.log("coooler".endsWith("r"));
const str13 = "To be, or not to be, that is the question.";

console.log(str13.includes("To be")); // true
console.log(str13.includes("question")); // true
console.log(str13.includes("be")); // false
console.log(str13.includes("To be", 1)); // false
console.log(str13.includes("TO BE")); // false
console.log("space",str13.includes(",",str13.length-7)); // true//rememeber it is case sensitive .....
console.log("ronaldo is very good football player".toUpperCase().includes("GOOD",31));
console.log("ronoldo".includes("o"));
console.log("ronoldo".padStart(10,0).padEnd(13,"8"));

 const mobile="9505224036";
const mobilefunction=function(number11)
{
  return mobile.slice(-4).padStart(10,"*");
}
console.log(mobilefunction(String(9505224036)).replaceAll("*",0).split(""));
console.log(Number.MAX_VALUE-22);
let dog1="germanshepard";
console.log(dog1.repeat(1));
console.log();
const r11="Amélie".normalize("NFC");
const r12="Amélie".normalize("NFD");
console.log(r11==r12);
const dmarts="kolsheeth";
console.log(dmarts.slice(0,dmarts.length-2));

console.log("here buddy112212",dmarts.slice(100));
let splitstrarray="ronaldo is a hard player in football".split(" ",3);
console.log(splitstrarray);
//console.log("buddy",splitstrarray.split("",0));
console.log(Array.from("I💖U"))//.split(""));
//console.log(dog1);
// console.log(new Sttypeotring(""));4
const a3999 = '𝟘𝟙𝟚𝟛'.split('');
console.log(a3999);
console.log(Array.from('𝟘𝟙𝟚𝟛'));
function argumentsreturning()
{
  return arguments;
}

console.log((argumentsreturning("hello world")));
let encrpt="?!messi/!";
console.log(encodeURIComponent(encrpt));
console.log(decodeURIComponent(encodeURIComponent(encrpt)));
console.log("here1",arguments[0]);
const goats=[1,2,3,4];
console.log(1 in goats);
console.log(0 in goats);
console.log(0 in goats);
console.log("here buddy",4 in goats);
nums04 = [2,3,3,2,2,4,2,3,4];
let r33=nums04.sort(); 
let times=0;

for(let g=0;g<r33.length;g++)
{
  if(r33.includes(r33[0]))
  {
     r33=r33.filter((e)=>e!=r33[0]);
  }
  else
  {
    console.log(-1);
  }
}
const fs={
  1:"shekar",
  2:"uppi",
  3:"nasty noorul",
  4:"vinay",
}
let sym=Symbol();
let sym11=Symbol("4");
sym1="vinodh";
fs[sym11]=sym1;
console.log("here fs",fs);
const str = "A\uD835\uDC68";

const strIter = str[Symbol.iterator]();

for(let i of strIter)
{
  console.log("with symbol iterator function",i);
}
const sym100 = Symbol();
const sym200 = Symbol("foo");
const sym300 = Symbol("foo");
console.log(sym100===sym200);
console.log(typeof(Object((sym200))));
console.log(sym100[0]="good");
console.log(Object(sym100));
const grinder="pegion";
//console.log(Window["grinder"]);
// myObject = { value: 0 };
// anObjectName = "myObject";
// this[anObjectName].value++;

// console.log(this[anObjectName]);
// var anObjectName = "myObject";
// this[anObjectName] = "myvalue"
// console.log(myObject);



var sym10 = Symbol();
//console.log(window['sym']);
console.log("\'shekar\'");









