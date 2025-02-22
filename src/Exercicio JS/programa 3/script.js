let counterTitle = document.getElementById("counter").innerHTML;

function addCounter () {
    counterTitle = (Number(counterTitle + 1))
    return (
        counter.innerHTML = counterTitle 
    )
}

function minusCounter() {
    counterTitle = (Number(counterTitle - 1))

    if (counterTitle < 0) {
        counterTitle = 0
    }

    return (
        counter.innerHTML = counterTitle 
    )
}

function resetCounter() {
    counterTitle = 0
    return (
        counter.innerHTML = counterTitle 
    )
}
