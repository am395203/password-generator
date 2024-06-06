'use strict';

const passwordBox = document.getElementById("password");
const length = 15;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const special = "@#$%^&*()_+~|}{][></-=";

const allChar = upperCase + lowerCase + numbers + special;

function generate(){
    let password = "";

    while(password.length < length){
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}