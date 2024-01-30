let a = '';
document.getElementById('block').onclick =() =>{
    if(document.querySelector('.visib.active'))
    {
        document.querySelector('.visib.active').classList.toggle('active')
    }
    if (a != 'about') {
        document.querySelector('.about').classList.toggle('active')
        a= 'about'
    } else a = ''
    // console.log(a)


}
document.getElementById('block-btn').onclick =() =>{
    if(document.querySelector('.hidden.active'))
    {
        document.querySelector('.hidden.active').classList.toggle('active')
    }
    if (a != 'drop') {
        document.querySelector('.drop').classList.toggle('active')
        a= 'drop'
    } else a = ''
    console.log(a)
}
// document.querySelector('.menuBar').onclick = () => {
//     if (document.querySelector('header.active')) {
//         document.querySelector('header').classList.remove('active')
//     }else document.querySelector('header').classList.add('active')
// }

document.querySelector('.menuBar').onclick = () => {
    document.querySelector('header').classList.toggle('active')
}


// document.getElementById('block').onclick =() =>{
//     if (visib) {
//         visib.style.height = '150px';
//     }else {
//         ltest_1_1.style.background = 'none';
//     }
// }




