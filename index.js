// var carName = "Sakib"
// if(true) {
//     var carName = "Volvo";

//     console.log(carName);
// }
// console.log(carName);

function myfunction(){
    a = 1234546;
    // console.log(a.toString());
    // console.log(typeof(a.toString()));
    // console.log((a.toString()).split(''));
    let b = (a.toString()).split('');
    let c = [];
    for (let index = 0; index < b.length; index++) {
        const element = b[index];
        c.push(parseInt(element));
    }
    return(c);
}  

myfunction();