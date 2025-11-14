// immediately invoked function expressions (IIFE)


(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
    
}) ();

( (name) => {
    //unamed IIFE
    console.log(`DB CONNECTED TWO ${name} `);
    
} ) ('abhishek')