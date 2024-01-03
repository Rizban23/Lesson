
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

function addList(){
    let text = document.getElementById('text').value
    let list = document.getElementById('list')
    let li = document.createElement('li')
    let txtNode = document.createTextNode(text);
    text.value= "";

    li.appendChild(txtNode);
    list.appendChild(li)
}