function darkMode(){
    let linkText = document.querySelectorAll('a');
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('h1').style.color ='yellowgreen' , borderBottom = '5px solid skyblue';
    document.querySelector('ol').style.color ='snow';
    linkText[0].style.color ='orange';
    linkText[1].style.color ='orange';
    linkText[2].style.color ='orange';
    document.querySelector('h2').style.color = 'yellow';
    document.querySelector('p').style.color = 'snow';
    document.querySelector('div').style.borderLeft ='5px solid skyblue';
}
function lightMode(){
    let linkText = document.querySelectorAll('a');
    document.querySelector('body').style.backgroundColor = 'snow';
    document.querySelector('h1').style.color ='black' , borderBottom = '5px solid pink';
    document.querySelector('ol').style.color ='darkblue';
    linkText[0].style.color ='purple';
    linkText[1].style.color ='purple';
    linkText[2].style.color ='purple';
    document.querySelector('h2').style.color = 'black';
    document.querySelector('p').style.color = 'black';
    document.querySelector('div').style.borderLeft ='5px solid pink';
}
