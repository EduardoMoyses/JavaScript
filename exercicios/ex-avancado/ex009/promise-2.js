//  Promise.all() vs Promise.race()

const promise1 = new Promise((resolve, reject) => {
    resolve('promise 1 resolvido')
})

const promise2 = new Promise((resolve, reject) => {
    resolve('promise 2 resolvido')
})

const promise3 = new Promise((resolve, reject) => {
    resolve('promise 3 resolvido')
})

Promise.all([promise1, promise2, promise3] ).then((messagens) => {
    console.log(messagens)
})