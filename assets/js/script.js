// 1) Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.

let arr = [1, 2, 3, 5];
sum = 0;

// function oddNums (array){

//     for (let i = 0; i < array.length; i++) {

//         if (arr[i]%2==1) {

//             sum+= arr[i];

//         }
//     }
//     console.log(sum);
// }

// oddNums(arr);


// let oddNums = (array) => {

//     for (let i = 0; i < array.length; i++) {

//         if (array[i]%2==1) {

//             sum+= arr[i];

//         }
//     }
//     console.log(sum);
// }

// oddNums(arr);



// 2) Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir.


// function factorial(n){

//     result = 1;

//     for (let i = 1; i <= n; i++) {

//         result*= i;

//     }

//     console.log(result);


// }

// factorial(3);


// let factorial = (m) =>{

//     result = 1;

//     for (let i = 1; i <= m; i++) {

//         result*= i;

//     }

//     console.log(result);

// }

// factorial(5);


//3) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.


// let num = [3,5];

// function getSumPower(num){

//     let result = 1;

//     for (let i = 0; i < num.length; i++) {

//         if (num[i] % 2 == 0) {

//             result = num[i] * num[i];
//             result += num[i];

//         }

//     }

//     console.log(result);

// }

// getSumPower(result);


//4) Funtiona-a  mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e, 
//ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin. 

// function login(username, password) {
//     if (username == "cavid@code.edu.az" && password == 12345) {

//         console.log("Giris olundu");
//     }
//     else {
//         console.log("Mail ve yaxud password sehvdir");
//     }
// }

// login("cavidcodeee, 22")


// let login = (username, password) => {

//     if (username == "cavid@code.edu.az" && password == 12345) {

//         console.log("Giris olundu");
//     }
//     else {
//         "Mail ve yaxud password sehvdir";
//     }

// }

// login("cavid@.code.edu.az, 12345");



// 5) Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.

let array = [2, 3, 5, 7, 8, 10];
count = 0;


// function evenNums (array){

//     for (let i = 0; i < array.length; i++) {

//         if (array[i]%2 == 0) {

//             count++;

//         }

//     }

//     console.log(count);

// }

// evenNums(array);


    // let evenNums = (array) =>{

    //     for (let i = 0; i < array.length; i++) {

    //         if (array[i]%2 == 0) {

    //             count++;
    //         }

    //     }

    //     console.log(count);
    // }

    // evenNums(array);


// 6) Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.


// function isDivided(n){

//     if (n % 3 == 0 && n % 7 == 0) {

//         console.log("bolunur")
//     }
//     else{
//         console.log("bolunmur")
//     }
// }

// isDivided(21);


// let isDivided = (n) =>{

//     if (n % 3 == 0 && n % 7 == 0) {

//         console.log("bolunur")
//     }
//     else{
//         console.log("bolunmur")
//     }
// }

// isDivided(25);



