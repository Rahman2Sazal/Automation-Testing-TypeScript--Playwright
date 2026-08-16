let greetings: string | null = "Hello, World!";

if (greetings !== null) {
    console.log(greetings.toUpperCase());
}
 else {
    console.log("No greetings available.");
}



function printMessage(message: string | null) {
    if (message !== null) {
        console.log(message.toUpperCase());
    } else {
        console.log("No message available.");
    }
}

printMessage("Hello, TypeScript!");
printMessage(null);