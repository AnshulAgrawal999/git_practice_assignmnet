//program to check whether a given string is a palindrome or not

let str  =  "saippuakivikauppias"  ;

let bag = ""  ;

for ( let i = 0 ; i < str.length ; i++ )
{
    bag = str[i] + bag  ;
}

if( str === bag )
{
    console.log("The given string is a palindrome.");
}
    
else
{
    console.log("The given string is not a palindrome.");
}