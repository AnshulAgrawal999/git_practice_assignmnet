// Problem 1 : To check whether a number is Prime or not

let num = 57;

if ( num == 2 )
    {
        console.log ( "It is a Prime number" )  ;
    }
    
    else if ( num%2==0 )
    {
        let flag = false  ;
        
        for ( let i = 3 ; i*i<=num ; i=i+2 )
        {
            if ( num%i==0 )
            {
                continue  ;
            }
            
            flag = 1  ;
            break  ;
        }
        
        if ( flag )
        {
            console.log ( "It is not a Prime number" )  ;
        }
        
        else
        {
            console.log ( "It is a Prime number" )  ;   
        }
    }
    
    else
    {
        console.log ( "It is a Prime number" )  ;
    }