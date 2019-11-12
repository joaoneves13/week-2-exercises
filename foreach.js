const people = [
    { firstName: 'David', lastName: 'Stephenson' },
    { firstName: 'Rembert', lastName: 'Boom' },
    { firstName: 'Wouter', lastName: 'de Vos' },
]

function greet(person){
    console.log(`Hello ${person.firstName} ${person.lastName}! What a fine day today`)
}
people.forEach(greet)

function greetPersonal(person){
    console.log(`Good day Mr ${person.lastName}`)
}
people.forEach(greetPersonal)