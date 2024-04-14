#!/usr/bin/env node 
import inquirer from "inquirer";
let myBal = 10000;
let myPin = 12345;
let myCurr = "USD";
const uName = await inquirer.prompt([{
        message: "Please Enter your Name",
        type: "String",
        name: "usName",
    }]);
const pin = await inquirer.prompt([{
        message: "Please enter your pin Code",
        type: "number",
        name: "usPin",
    }]);
if (pin.usPin === myPin) {
    console.log("Welcome", "" + uName.usName);
    console.log("Your Current Balance is", +myBal);
    const operator = await inquirer.prompt([{
            message: "Please Select from the Following",
            type: "list",
            name: "usSelection",
            choices: ["Fast Cash", "Cash Withdrawl", "Balance Inquiry"]
        }]);
    if (operator.usSelection === "Fast Cash") {
        const fCash = await inquirer.prompt([{
                message: "Please Select Denomination",
                type: "list",
                name: "usfCash",
                choices: ["1", "2", "5", "10", "20", "50", "100"]
            }]);
        myBal -= fCash.usfCash;
        console.log("Your Remaining Amount is", "" + myBal);
    }
    else if (operator.usSelection === "Cash Withdrawl") {
        const usWith = await inquirer.prompt([{
                message: "Please Enter Denomination",
                type: "number",
                name: "usWithdrawl"
            }]);
        if (usWith.usWithdrawl > myBal) {
            console.log("Insufficient Balance");
        }
        else {
            myBal -= usWith.usWithdrawl;
            console.log("Your Remaining Amount is", "" + myBal);
        }
    }
    else if (operator.usSelection === "Balance Inquiry") {
        console.log("Your Balance is ", "" + myBal);
    }
}
else {
    console.log("Wrong Pin");
}
