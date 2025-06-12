// A promise is an oblject that gives either a result or a failure of an async operation


const promise = new Promise((resolve, reject) => {
    console.log("got the user!")
    setTimeout(() => {
        resolve({user: 'ed'})
    }, 2000);
})

promise.then(user => {
    console.log(user);
})