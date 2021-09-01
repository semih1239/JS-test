// 1 -- Programming Basic
function Jackpot() {
    for (let i = 1; i < 101; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log(i + '--Jackpot!')
        }
        else if (i % 3 === 0) {
            console.log(i + '--This is divisibleby 3')
        }
        else if (i % 5 === 0) {
            console.log(i + '--This is divisible by 5')
        }
        else {
            console.log(i)
        }
    }
}
Jackpot()

// 2 -- DOM manipulation
const button = document.createElement('button')
button.innerText = 'Click Me'
document.body.appendChild(button)

button.addEventListener('click', imageFunction)

function imageFunction() {
    const img = document.createElement('img')
    img.src = `https://source.unsplash.com/random/200x200?sig=${getRandom()}`
    document.body.appendChild(img)
}

function getRandom() {
    return Math.ceil(Math.random() * 100)
}

// 3 -- Async API calls

fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(data => {
        const names = data.data.map(data => data.first_name).slice(0, 3)
        names.forEach(name => {
            const h1 = document.createElement('h1')
            h1.innerText = name
            document.body.appendChild(h1)
        })
    })
