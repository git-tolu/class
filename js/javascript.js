// logical operators
var year = 2024
if ((year % 400 == 0) || ((year % 100 != 0) && (year % 4 == 0))) {
     console.log(year + ' is a leap year')
}else(
    console.log(year + ' is not a leap year')
)


// comparism operators

var x  = 25;
var y = 35;
var z = "25";
console.log(x == z);
console.log(x === z);
console.log(x != y);
console.log(x !== z);
console.log(x < y);
console.log(x > y);
console.log(x <= y);
console.log(x >= y);

// events
function preview() {
    let inputValue = document.getElementById('textInput').value;
    
    mark = inputValue;
    if (mark > 85) {
        document.getElementById('text').innerText = 'grade a'
        console.log("A");
    } else if (70 >= mark <= 85) {
      console.log("b");
    } else {
      console.log("not same");
    }
}

// string
var str = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eveniet saepe accusantium, voluptatem debitis temporibus laudantium, ullam quisquam expedita fugiat incidunt illo. Voluptatum aperiam officia excepturi quidem esse quaerat possimus.`
var pos= str.indexOf('ipsum')
console.log(pos)
console.log(str.slice(0, 6))

console.log(str.replace('Lorem', 'replace'))
console.log(str.toLocaleUpperCase('lorem'));
console.log(str.toLowerCase('lorem'));
