function checkNumber(num: number):
void {
    if (num % 2 == 0) {
         console.log(num + "is Even");
    } else {
        console.log(num + "is Odd");
    }
}

for (let i : number =1; i<=5; i++) {
    checkNumber(i);
}

let count : number = 1 ;
while ( count <= 3){
    console.log("while loop count:" + count);
    count++;
}

let day: number = 2;

switch (day) {
    case 1 :
        console.log("Monday");
        break;
    case 2 :
        console.log("Tuesday");
        break;
    default :
        console.log("Other day");
}