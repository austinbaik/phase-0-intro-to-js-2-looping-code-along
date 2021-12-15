
function writeCards(names, event){

    let printCard =[]

    for (let i = 0; i < names.length; i++){

        printCard.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
return printCard;
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");



function countDown(number) {
    while (number >= 0){
        console.log(number--);
    }

}


