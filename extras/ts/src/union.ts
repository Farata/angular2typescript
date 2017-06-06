// Based on https://www.typescriptlang.org/docs/handbook/advanced-types.html

function padLeft(value: string, padding: any ) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

console.log( padLeft("Hello world", 4));              // returns "    Hello world"
console.log( padLeft("Hello world", " Yakov says ")); // returns "  Yakov says  Hello world"

console.log( padLeft("Hello world", true));           // if padding had type any - runtime error


// Change the function signature to catch type error during compile time
// function padLeft(value: string, padding: string | number) {
// No need to throw an error either    
