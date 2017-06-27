var passcode = ~~(Math.random() * 999);
var tries = 10;
console.log("Guess a number from 0 to 999");

while (guess != passcode && tries > 0)
{
    console.log("you have " + tries + " guesses left")
    var guess = prompt("Enter a number(0 to 999)");
    tries = tries - 1;
    if (guess > passcode) 
    {
        console.log("Too high");
    }
    if (guess < passcode)
    {
        console.log("Too low");
    }
    if (guess == passcode)
    {
        console.log("You Win!");
    }
    else if (tries <= 0)
    {
        console.log("You Loose.")
        console.log (passcode)
    }
    else
    {
        console.log ("Wrong. Try again");
    }
}