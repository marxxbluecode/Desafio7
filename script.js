
var d = new Date()
const y = d.getFullYear()
console.log(y)

var name = 'Marx'
var idade = 23

function Cyberpunk(){
    console.log(`Boa tarde ${name}, em 2077 vc vai ter ${(2077 - y) + idade } anos`)
}

Cyberpunk('Marx', 23)
