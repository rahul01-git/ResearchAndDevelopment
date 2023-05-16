import prompts from 'prompts';

const questions = [
    {
        type: 'text',
        name: 'length',
        message: 'length of password: ',
        validate: (input) => isNaN(input) ||input<4 ? 'Please enter a valid number(min-length: 4).' : true,
    },
    {
        type: 'confirm',
        name: 'numbers',
        message: 'want to include numbers ?'
    },
    {
        type: 'confirm',
        name: 'symbols',
        message: 'want to include symbols ?',
    },
]

prompts(questions).then((response) => {
    let password='';

    for(let i = 0;password.length<response.length;i++){
        if(response.numbers) password+=getNum()
        if(response.symbols) password+=getSymbol()
        password+=getAlphabet()
    }
    const choices = password.split('');
    password='';
    for(let i = 0;i<response.length;i++){
        let randomIndex = Math.floor(Math.random() * choices.length)
        password+=choices[randomIndex];
        choices.splice(randomIndex,1);
    }
    console.log(password);
})

function getAlphabet(){
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function getNum(){
    return Math.floor(Math.random() * 10);
}

function getSymbol(){
    const symbol = '!@#$%^&*()_-+=<>?';
    return symbol[Math.floor(Math.random()*symbol.length)]
}