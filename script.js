
// function calc(){
//     let num1 = parseInt(document.getElementById('num1').value)
//     let num2 = parseInt(document.getElementById('num2').value)
//     let oper = document.getElementById('operators').value
     

//   if  (oper === '+'){
//   document.getElementById('result').value = num1+num2;
//   }
//   if  (oper === '-'){
//     document.getElementById('result').value = num1-num2;
//     }
//   if  (oper === '*'){
//         document.getElementById('result').value = num1*num2;
//         }
//   if  (oper === '/'){
//             document.getElementById('result').value = num1/num2;
//             }
// }

// Task 2

// function addList(){
//     let text = document.getElementById('text').value
//     let list = document.getElementById('list')
//     let li = document.createElement('li')
//     let txtNode = document.createTextNode(text);
//     text.value= "";

//     li.appendChild(txtNode);
//     list.appendChild(li)
// }

// Task 3

// let input = document.getElementById('input');
// let result =document.getElementById('result');
// let inputType =document.getElementById('inputType');
// let resultType = document.getElementById ('resultType');
// let inputTypeValue,resultTypeValue

// input.addEventListener("keyup",myResult);
// inputType.addEventListener('change',myResult);
// resultType.addEventListener('change',myResult);


// inputTypeValue=inputType.value
// resultTypeValue=resultType.value
// function myResult (){
//  result.value = input.value
  // inputTypeValue=inputType.value
  // resultTypeValue=resultType.value


  //   if (inputTypeValue === "megabyte" && resultTypeValue === "kilobyte") {
      
  //     result.value = Number(input.value) * 1000;

  //         }else if    (inputTypeValue === "megabyte"  && resultTypeValue === "megabyte"){
  //     result.value = input.value
  //   }
   
  //   if (inputTypeValue === "kilobyte" && resultTypeValue === "megabyte") {
  //     result.value = Number(input.value) * 0.001;
         
     
  //     }else if    (inputTypeValue === "kilobyte"  && resultTypeValue === "kilobyte"){
  //       result.value = input.value
  //     }

     
    
  //     }


  // Task 4

  // function calculateArea() {
    // Получаем значения, введенные пользователем
  //   let length = parseFloat(document.getElementById("length").value);
  //   let width = parseFloat(document.getElementById("width").value);

   
  //   if (!isNaN(length) && !isNaN(width)) {
     
  //     let area = length * width;

  //     document.getElementById("result").innerHTML = `Area: ${area}`;
  //   } else {
      
  //     document.getElementById("result").innerHTML = "Пожалуйста, введите действительные цифры длины и ширины..";
  //   }
  // }