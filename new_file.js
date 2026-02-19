
// var, let, const
// let e const são variáveis melhores e bloqueadas.

//String, Numbers, Boolean, null, undefined, Symbol

const nome = 'Anilson';
const idade = 29;

// concatenando

//console.log( 'meu nome é ' + nome + ' e minha idade é ' + idade);
//console.log(`Meu nome é ${nome} e minha idade é ${idade}`);

const palavra = "Hello World";

console.log(palavra.split(' '));

//Arrays - variáveis que armazenam mais de um valor e começam no valor 0

/*
const fruits = new Array("apple", 'banana', 'orange', 4, 5);

fruits[5] = 'grape';

fruits.push('cabelo');

fruits.unshift('romã');

fruits.pop();

console.log(Array.isArray(''));

console.log(fruits.indexOf('banana'));

console.log(fruits)
*/

const person = {
    firstName: 'Anilson',
    lastName: 'Nogueira',
    age: 29,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: 'Rua 1',
        city: 'Mogi das Cruzes',
        state: 'SP'
    }
}

console.log(person.address.city);

person.email = 'anilson_nogueira@gshow.com.br';

console.log(person.email);

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
]

console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//For loop
/*
for (let i = 0 ; i<=10 ; i++){
    console.log(`For loop number: ${i}`);
}
let i =0;
while(i < 10){
    console.log(`while loop number: ${i}`);
    i++;
}

for (let t of todos){
    console.log(t.text);
}
*/
//forEach, map, filter

todos.forEach(function(todo){
    console.log(todo.text);
})


const todoText = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})

console.log(todoText);

//Conditionals
/*
const x = 11;
const y = 4;

if (x > 11 && y > 5){
    console.log('x is greater than 11 and y is greater than 5');
} else if (x > 11 || y > 5){
    console.log('x is greater than 11 or y is greater than 5');
} else {
    console.log('x is less than 11 and y is less than 5');
}
*/

/* switch
const x = 11;

const color = 'green';

console.log(color);

switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break
}
*/


//Class da pra colocar funções dentro de classes, e criar objetos a partir delas.

class Person {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }

}


// Instanciar objeto
const person1 = new Person('Anilson', 'Nogueira', '02-01-1997');
const person2 = new Person('Larissa', 'Cavalari', '6-23-1996');

console.log(person2);
console.log(person1.getFullName());

const ul = document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Testando';
ul.children[1].innerText = 'Oi gostoso';
ul.lastElementChild.innerHTML = '<h2>Deixa eu pegar no seu</h2>';

const btn = document.querySelector('.btn');
//btn.style.backgroundColor = 'red';

btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
})