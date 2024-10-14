// const doubleIt = (num) => num*2
// console.log(doubleIt(5))

// const doMath = (x,y,z) => {
//     let sum = x+y;
//     sum -= z
//     return sum
// }

// console.log(doMath(20,40,30))

// const numbers = [34,57,8,9,54,45]
// const newNumbers=[...numbers]

// numbers.push(94)
// numbers.push(44)
// numbers.push(98)

// console.log(numbers)
// console.log(newNumbers)

// const heroes =[
//     {name:'batman',profession:'killing',dialouge:'i am vengance',killCount:50000},
//     {name:'superman',profession:'saving',dialouge:'not impresssed',killCount:500},
//     {name:'loki',profession:'killing',dialouge:'i am loki of asgard',killCount:10000000},
//     {name:'ironman',profession:'saving',dialouge:'i am ironman',killCount:800}
// ]

// // heroes.forEach(hero => console.log(hero.name))
// // heroes.map(hero => console.log(hero.dialouge))
// const dgHeroes = heroes.find(hero => hero.killCount > 10000)
// console.log(dgHeroes)

// const info ={
//     name:'John Wick',
//     profession:'serial-killer',
//     killCount:100000,
//     position:'alive'
// }

// const{name,position,killCount,profession} = info;
// console.log(name)
// console.log(killCount)

const num =52

console.log(JSON.stringify(num))