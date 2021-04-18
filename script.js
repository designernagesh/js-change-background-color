let btnFixedColor = document.querySelector('.btn-fixed-color'),
    btnHexColor = document.querySelector('.btn-hex-color'),
    btnRGBColor = document.querySelector('.btn-rgb-color'),
    selectColor =  document.querySelector('.selectColor'),
    result = document.querySelector('.reult');


//Change Background using static Colors from an Array
let colorsArray = ['Red', 'Green', 'Blue', 'Yellow', 'Grey', 'Gold', 'Silver', 'Cyan', 'Pink', 'rgb(0,0,10)', '#ffaa00', 'rgba(0,0,0,0.5)', 'lightblue', 'lightgreen', 'navyblue'];

btnFixedColor.addEventListener('click', ()=>{    
    let randomNo = Math.floor(Math.random() * colorsArray.length);
    let randomColor = colorsArray[randomNo];

    result.textContent = randomColor;
    document.body.style.backgroundColor = colorsArray[randomNo];
})


//Change Background using by Generating HexColor e.g. #FFaa78
let hexColorArray = ['A', 'B', 'C', 'D', 'E', 'F', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

btnHexColor.addEventListener('click', ()=>{
    let hexaColor = '#';
    for(var i = 0; i<6; i++){
        let char = Math.floor(Math.random() * hexColorArray.length)
        hexaColor += hexColorArray[char];
    }

    result.textContent = hexaColor;
    document.body.style.backgroundColor = hexaColor
})


//Change Background using by Generating HexColor e.g. rgb(0, 191, 255);
btnRGBColor.addEventListener('click', ()=>{
    let rgbColor = '';
    let randomColor1 = '';
    let randomColor2 = '';
    let randomColor3 = '';
    
    for(var i = 0; i<=255; i++){
        randomColor1 = Math.floor(Math.random() * i);
        randomColor2 = Math.floor(Math.random() * i);
        randomColor3 = Math.floor(Math.random() * i);
    }

    rgbColor = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;    
    
    result.textContent = rgbColor;
    document.body.style.backgroundColor = rgbColor; 
})

//Change Background using Slect Box Colors
for(var i=0; i<colorsArray.length; i++){
    let option = colorsArray[i];
    let element = document.createElement('option');
    element.textContent = option;
    element.value = option;
    selectColor.appendChild(element);
}

selectColor.addEventListener('change', function(){    
    document.body.style.backgroundColor = this.value;
})