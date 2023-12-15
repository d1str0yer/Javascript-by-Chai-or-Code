const account_number = 11211000001;
let account_holder = "Lalit Kumar";
var account_email = "lalit@lalit.com";
account_city = "Bengaluru";
let account_state = "Karnataka";
let has_signature = true;
let has_country; // undefined
/*
prefer not to use var
because of issue in block scope and functional scope.
*/

// account_number = 11211000002; // TypeError: Assignment to constant variable.
account_email = "lalit.kumar@bambooli.com";
account_city = "New Delhi";
account_state = "Delhi";

console.table([account_number, account_holder, account_email, account_city, account_state, has_signature, has_country]);
