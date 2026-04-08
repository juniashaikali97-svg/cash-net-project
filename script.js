let loans = JSON.parse(localStorage.getItem("loans")) || [];

function saveData(){
localStorage.setItem("loans", JSON.stringify(loans));
displayLoans();
}

function addClient(){
alert("Client added successfully");
}

function giveLoan(){

let client = document.getElementById("loanClient").value;
let amount = parseFloat(document.getElementById("loanAmount").value);
let interest = parseFloat(document.getElementById("interestRate").value);

let total = amount + (amount * interest / 100);

let loan = {
client: client,
amount: amount,
interest: interest,
total: total,
paid: 0,
balance: total
};

loans.push(loan);

saveData();
}

function recordPayment(){

let client = document.getElementById("paymentClient").value.trim().toLowerCase();
let payment = parseFloat(document.getElementById("paymentAmount").value);

let found = false;

loans.forEach(function(loan){

if(loan.client.toLowerCase() === client){
loan.paid += payment;
loan.balance = loan.total - loan.paid;
found = true;
}

});

if(!found){
alert("Client loan not found");
}

saveData();
}

function displayLoans(){

let table = document.getElementById("loanTable");
table.innerHTML = "";

loans.forEach(function(loan){

let row = `
<tr>
<td>${loan.client}</td>
<td>${loan.amount}</td>
<td>${loan.interest}%</td>
<td>${loan.total}</td>
<td>${loan.paid}</td>
<td>${loan.balance}</td>
</tr>
`;

table.innerHTML += row;

});

}

displayLoans();