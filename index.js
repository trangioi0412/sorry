let buttonDisplay = document.querySelector('.action_button');
buttonDisplay.addEventListener('click', () => {
    let textBox = document.getElementById('text');
    textBox.style.display = 'block';
})

let buttonNo = document.querySelector('.box-text-action_button_no');

buttonNo.addEventListener('click', ()=>{
    buttonNo.style.display = 'none';

    setTimeout(() => {
        let bottomBtn = Math.round(Math.random() * (200 - 100) + 100);
        let rightBtn = Math.round(Math.random() * (200 - 100) + 100);
        buttonNo.style.position  = 'absolute';
        buttonNo.style.bottom  = bottomBtn+ 'px';
        buttonNo.style.right  = rightBtn+'px';
        buttonNo.style.display = 'block';
    },1000)
})

let buttonYes = document.querySelector('.box-text-action_button_yes');

buttonYes.addEventListener('click', () => {
    document.getElementById('text').style.display = 'none';
    document.getElementById('text1').style.display = 'block'
})
