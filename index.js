// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    drivers.push(name)
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver(){
    drivers.pop()
    drivers
}

function destructivelyRemoveFirstDriver(){
    drivers.shift()
    drivers
}

function appendDriver(name) {
    let arr = [...drivers, name]
    return arr
}

function prependDriver(name) {
    let arr = [name, ...drivers]
    return arr
}

function removeLastDriver() {
    let arr = drivers.slice(0, drivers.length - 1)
    return arr
}

function removeFirstDriver() {
    let arr = drivers.slice(1)
    return arr
}