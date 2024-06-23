// #!/usr/bin/env node
import inquirer from "inquirer";
inquirer
    .prompt([
    {
        type: "number",
        name: "num1",
        message: "Enter your first number",
    },
    {
        type: "number",
        name: "num2",
        message: "Enter your second number",
    },
    {
        type: "list",
        name: "operation",
        message: "Select Operation",
        choices: ["+", "-", "*", "/"], // corrected 'choices' spelling
    },
])
    .then((answers) => {
    const { num1, num2, operation } = answers;
    if (operation === "+") {
        const result = num1 + num2;
        console.log("Sum:", result);
    }
    else if (operation === "-") {
        const result = num1 - num2;
        console.log("Subtraction:", result);
    }
    else if (operation === "*") {
        const result = num1 * num2;
        console.log("Multiplication:", result);
    }
    else if (operation === "/") {
        const result = num1 / num2;
        console.log("Division:", result);
    }
    else {
        console.log("Invalid operation selected");
    }
});
