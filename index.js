"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//#! /usr/bin/env node
const inquirer_1 = __importDefault(require("inquirer"));
inquirer_1.default
    .prompt([
    {
        type: "number",
        Name: "num1",
        message: "Enter your first number",
    },
    {
        type: "number",
        Name: "num2",
        message: "Enter your    Second number",
    },
    {
        type: "list",
        Name: "operation",
        message: "Select Operation",
        Choice: ["+", "-", "*", "/"],
    },
])
    .then((answers) => {
    if (answers.operation == "+") {
        const result = answers.num1 + answers.num2;
        console.log("Sum", result);
    }
    else if (answers.operation == "-") {
        const result = answers.num1 - answers.num2;
        console.log("Subtruction", result);
    }
    else if (answers.operation == "*") {
        const result = answers.num1 * answers.num2;
        console.log("multiplication", result);
    }
    else if (answers.operation == "/") {
        const result = answers.num1 / answers.num2;
        console.log("Devision", result);
    }
});
