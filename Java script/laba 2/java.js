const userInput = prompt("Write number");
const number = parseInt(userInput);

if(!isNaN(number)) {
    const multiplesOfFive = [];
    for (let i = 5; i <= number; i +=5){
        multiplesOfFive.push(i);
    }

    if (multiplesOfFive.length > 0) {
        alert("Numbers that are multiples of 5 to " + number + ";");

        for(const num of multiplesOfFive) {
            alert(num);
        }
    }else {
        alert("Sorry, no numbers")
    }

} else {
    alert("Mistake: write number")
}

