function receivesAFunction(callback) {
    callback ()
}

const aNamedFunction = function aNamedFunction() {}

function returnsANamedFunction() {
    return aNamedFunction
}

function returnsAnAnonymousFunction() {
    return function () {}
}