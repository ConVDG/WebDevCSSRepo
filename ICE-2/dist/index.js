"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const calculator_1 = __importDefault(require("./calculator"));
let promptSync = (0, prompt_sync_1.default)();
const readInput = () => {
    console.log("Welcome to the calculator. Choose one of the following options");
    console.log("1. add");
    console.log("2. subtract");
    console.log("3. multiply");
    console.log("4. divide");
    console.log("5. exit");
    const option = Number.parseInt(promptSync(">> "));
    if (option !== 5) {
        console.log("Enter the first number");
        const a = Number(promptSync(">> "));
        console.log("Enter the second number");
        const b = Number(promptSync(">> "));
        let c;
        switch (option) {
            case 1:
                {
                    c = calculator_1.default.add(a, b);
                    console.log(`a + b = ${c}`);
                }
                break;
            case 2:
                {
                    c = calculator_1.default.subtract(a, b);
                    console.log(`a - b = ${c}`);
                }
                break;
            case 3:
                {
                    c = calculator_1.default.multiply(a, b);
                    console.log(`a * b = ${c}`);
                }
                break;
            case 4:
                {
                    c = calculator_1.default.divide(a, b);
                    console.log(`a / b = ${c}`);
                }
                break;
        }
        readInput();
    }
};
readInput();
console.log("Thank you for using calculator. Good Bye");
//# sourceMappingURL=index.js.map