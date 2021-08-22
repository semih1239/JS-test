// 1 -- Programming Basic
for(let i = 1; i<101; i++){
    if ((i % 3 === 0) && (i % 5 === 0)){
        console.log(i + '--Jackpot!')
        continue
    }
    else if(i % 3 === 0){
        console.log( i + '--This is divisibleby 3')
        continue
    }
    else if (i % 5 === 0){
        console.log(i + '--This is divisible by 5')
        continue
    }
    console.log(i)
}

// 2 -- DOM manipulation
const button = document.createElement('button')
button.innerText = 'Click Me'
document.body.appendChild(button)

button.addEventListener('click', imageFunction)

function imageFunction (){
    const img = document.createElement('img')
    img.src = 'https://phillipbrande.files.wordpress.com/2013/10/random-pic-14.jpg'
    document.body.appendChild(img)
}

// 3 -- Async API calls

fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(data => {
        for(i=0; i<3; i++){
            const h1 = document.createElement('h1')
            h1.innerText = data.data[i].first_name
            document.body.appendChild(h1)
        }
    })