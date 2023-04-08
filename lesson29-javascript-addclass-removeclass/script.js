// div = document.getElementById('sty');

// document.write(div.innerText) // or .outerHTMl

// secondDiv = document.createElement('div')
// thirdDiv = document.createElement('div')
// secondDiv.innerText = div.innerText
// thirdDiv.innerText = div.innerText
// document.body.append(secondDiv)
// document.body.append(thirdDiv)


// for (i = 0; i < 2; i++) {
//     document.body.innerHTML += '<div>' + div.innerText + '</div>'
// }

// function currentDate(event){
//     time = document.getElementById('time')
//     date = new Date;
//     time.innerText = date
//     console.log(event)
// }

p = document.getElementById('p')
img = document.getElementById('img')

img.addEventListener('click', function () {
    p.classList.add('active')
    p.classList.remove('disabled')
})
img.addEventListener('dblclick',function(){
    p.classList.remove('active');
    p.classList.add('disabled')
})
