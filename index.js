// String
let productName='Samosa'
let drinkName="Coke"
let buyersName="bright"

// Numbers
let age=70;
let productPrice=40;

// Booleans
let receiveValGift=true;


// BigInt
let BigNum=2346548369678796578653434;

// Arrays
let studentNames = ['chuks','bright','Victor','Prisca'];
alert(studentNames)

// Objects
let bright = {
    name : 'Bright',
    age : 50,
    isSomeonesVal : false,
    noOfKids : 3,
    stateOfOrigin: 'Aks',
    favColor: 'Yellow',
    kidsName: ['Prisca', 'Chuks', 'Toyo']
}

let foodQuest= prompt ('What would you like to order?')

 if (foodQuest !='') {
     alert(`Your order of ${foodQuest} is being processed`)
 }
 else {
     alert('invalid order')
 }
