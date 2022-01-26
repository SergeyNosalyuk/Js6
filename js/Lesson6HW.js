// 1
// const myFunc = method => console.log(`JavaScript ${method} works`);
// console.log("start")
// // myFunc будет вызвана через 5 секунд
// let timeoutId = setTimeout(myFunc, 5000, 'setTimeout()');
// console.log("line 5")

// clearTimeout(timeoutId);

// 2
// let count = 0
// const myFunc = method => console.log(`JavaScript ${method} works`);

// // myFunc будет вызываться каждые 5 секунд
// setInterval(myFunc, 5000, 'setInterval()');


// 3
// const loopFunc = () => {
//   for(let i = 0; i < 999999999; i++);
//   alert('Loop finsihed');
// };

// const myFunc = method => alert(`JavaScript ${method} works`);

// loopFunc();
// loopFunc();

// // myFunc будет вызвана после завершения выполнения первого вызова loopFunc
// setImmediate(myFunc, 'setImmediate()');



// Task1
var color_td;
document.write("<table border='1px'>");

for(var i = 1; i < 10; i++) {
  document.write("<tr style='height:30px;'>");

  for(var j = 1; j < 10; j++) {
    if(j == 1 || i == 1) {
        color_td = "#ccc";
    }
    else {
        color_td = "#fff";
    }

    document.write("<td style='width:30px;background-color:" + color_td + "'>" + i*j + "</td>");
  }
  document.write("</tr>");
}

document.write("</table>");


// Task2

function getUnique(arr) {
    let result = [];
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push (str);
        }
    }

    return result;
}

let strings = [1, 1, 2, 2, 3];
alert ( getUnique(strings) );


// Task3


function sum (val) {
    var temp = val;
    sum = function() {
    var arg = arguments[0] ? arguments[0] : 0;
        return temp = temp + arg;
};
        return sum();
}
console.count(sum(3)); 
console.count(sum(8)); 
console.count(sum(4)); 
console.count(sum(27));
console.count(sum(180));



// Task4

 var op; 

 function func() {
   var result;
   var num1 = Number(document.getElementById("num1").value);
   var num2 = Number(document.getElementById("num2").value);
   switch (op) {
     case '+':
       result = num1 + num2;
       break;
     case '-':
       result = num1 - num2;
       break;
     case '*':
       result = num1 * num2;
       break;
     case '/':
       result = num1 / num2;
       break;
   }
   document.getElementById("result").innerHTML = result;
 }

