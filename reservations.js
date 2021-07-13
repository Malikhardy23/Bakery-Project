// VARIABLES 

const firstName = document.getElementById("firstName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const date = document.getElementById("date");
const time = document.getElementById("time");
const guests = document.getElementById("guests");
const userInput = document.getElementsByClassName("userInfo");

// PLACEHOLDER
firstName.placeholder = "Full Name";
email.placeholder = "email";
phone.placeholder = "phone";
date.placeholder = "00/00/0000";
time.placeholder = "3:00 p.m";
guests.placeholder = "How many guests?";

// appending time to select dynamically 

userTime();

function userTime(){
    let option1 = document.createElement("option");
    let option2 = document.createElement("option");
    let option3 = document.createElement("option");
    let option4 = document.createElement("option");
    let option5 = document.createElement("option");

    // ASSIGN OPTION TEXT

    option1.text = "11 a.m to 12 p.m";
    option2.text = "1 p.m to 2 p.m";
    option3.text = "3 p.m to 4 p.m";
    option4.text = "5 p.m to 6 p.m";
    option5.text = "7 p.m to 8 p.m";


    // APPENDING OPTIONS TO PARENT

    time.appendChild(option1);
    time.appendChild(option2);
    time.appendChild(option3);
    time.appendChild(option4);
    time.appendChild(option5);
}


// appending guest amount to select dynamically 

userGuests();

function userGuests(){
     let option1 = document.createElement("option");
     let option2 = document.createElement("option");
     let option3 = document.createElement("option");

    option1.text = "1 to 2 guests";
    option2.text = "2 to 3 guests";
    option3.text = "4 guests";

     guests.appendChild(option1);
     guests.appendChild(option2);
     guests.appendChild(option3);
}