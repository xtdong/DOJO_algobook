/*** Setting and Swapping ***/
var myNumber = 42;
var myName = "Tong";
var tempName = myName;
myName = myNumber;
myNumber = tempName;
console.log(myName, myNumber)

/*** Print -52 to 1066 ***/
for (var i = -52; i < 1067; i++){
  console.log(i)
}

/*** Don’t Worry, Be Happy ***/
var beCheerful = ("good morning");
for (var i = 1; i < 99; i++){
  console.log(beCheerful);
}

/*** Multiples of Three – but Not All ***/
for (var i = 3; i > -300; i--){
  if (i % 3 == 0){
    if (i == -3 || i == -6){
      continue;
    }
    console.log(i);
  }
}

/*** Printing Integers with While ***/
var number = 2000;
while (number < 5281){
  console.log(number);
  number++
}

/*** You Say It’s Your Birthday ***/
var month = 1;
var day = 5;

if (month === 1 && day === 2){
  console.log("How did you know?")
} else {
  console.log("Just another day ....")
}

/*** Leap Year ***/
function leapyear(year){
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
    console.log(year)
  }
}
var x = leapyear(2009);

/*** Print and Count ***/
var num = 0;
for (var i = 512; i < 4097; i++){
  if (i % 5 === 0){
  console.log(i);
  num = num + 1;
  }
}
console.log(num);

/*** Multiples of Six ***/
var num = 6;
while (num < 60000){
  console.log(num);
  num ++;
}

/*** Counting, the Dojo Way ***/
for (var i = 1; i < 101; i++){
  if (i % 5 === 0){
    console.log("Coding");
  }
  if (i % 10 === 0){
    console.log("Dojo");
  }
  console.log(i);
}

/*** What Do You Know? ***/
function incoming(number){
  console.log(number);
}
var x = incoming(230)

/*** Whoa, That Sucker’s Huge ***/
function sumOdd(){
 console.log(0);
}

/*** Countdown by Fours ***/
var i = 2016;
while (i > 0){
  console.log(i);
  i -= 4;
}

/*** Flexible Countdown ***/
function countdown(arr){
  var highNum = arr[0];
  var lowNum = arr[0];
  var mult = arr[arr.length - 1];
  
  for (var i = 1; i < arr.length; i++){
    if (arr[i] > highNum){
      highNum = arr[i];
    }
    if (arr[i] < lowNum){
      lowNum = arr[i];
    }
  }
  for (var num = highNum; num > lowNum; num -= mult){
    console.log(num);
  }
}
var arr = countdown([2,9,3,6]);

/*** The Final Countdown ***/
function countDown(param1,param2,param3,param4){
  var i = param2;
  while (i < param3){
    if (i % param1 === 0 && i !== param4){
      console.log(i);
    }
    i++;
  }
}
var numbers = countDown(6,3,40,5);
