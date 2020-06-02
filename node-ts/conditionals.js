var m = 1;
var count = 0;
// find the first multiple of 10 else log no more multiples as you check upto 100
while (m <= 100) {
    if (m % 5 == 0) {
        console.log("Multiple of 5: " + m);
        break;
    }
    m++;
    console.log("No more multiples " + m);
}
for (m = 0; m <= 10; m++) {
    if (m % 2 == 0) {
        console.log("Even numbers between 0 and 10 are: " + m);
        continue;
    }
    count++;
}
console.log("There are " + count + " odd numbers between 0 & 10 " + m);
// ENDLESS LOOP - WILL CRASH without the break close - uncomment to demo
// while (m<=100){
//     if(m % 10 == 0){
//         console.log(`Multiple of 10: ${m}`)
//     }  else {
//         console.log("No more multiples")
//     }
//     }    
