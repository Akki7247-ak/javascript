const accountId = 111
let accountEmail = "akki@gmail.com"
var accountPassword ="1111"

accountCity = "Jaipur"

let accountState;

/*
 we are not using var beacouse 
of block scope and functional scope
*/

// accountId = 123
accountEmail = "pre@gmail.com"
accountPassword = "12345"
accountCity ="bhopal"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
