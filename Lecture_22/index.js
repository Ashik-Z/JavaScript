function HappyBirthday(username, userage) {
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday dear ${username}!`);
    console.log("Happy Birthday to you!");
    console.log(`You are ${userage} years old!`);
}
HappyBirthday("Syrian Dictator", 54);

function add(x, y) {
    return x+y;
}
let result = add(5, 6);
console.log(result);

function isValidEmail(email) {
    if (email.inscludes("@")) {
        return true;
    }
    else {
        return false;
    }
}