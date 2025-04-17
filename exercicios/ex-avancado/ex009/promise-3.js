//  Promise.all() vs Promise.race()

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('promise 1 resolvido'), 1000)
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('promise 2 resolvido'), 500)
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('promise 3 resolvido'), 100)
})

Promise.race([promise1, promise2, promise3] ).then((message) => {
    console.log(message)
})