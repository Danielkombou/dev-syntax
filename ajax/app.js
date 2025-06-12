// asynchronous function

console.log("Start")


function loginUser(email, password, callback) {
    setTimeout(() => {
        console.log("Waiting data here")
        callback({userEmail: email})
    }, 3000)
}

const user = loginUser('danielkombou7@gmail.com', 123456, user => {
    console.log(user)
})

console.log('End')