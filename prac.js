/* Armstrong number */
function armstrong()
{
    var num1 = document.getElementById('fnum').value;

    var temp, rem , final = 0 
 
    temp = num1 ;

    while(num1 != 0)
    {
        rem = num1 % 10 ;
        final = final + (rem * rem * rem);
        num1 = parseInt(num1 /10) ;
    }

    if(final == temp)
    {
        document.getElementById('result').innerHTML = "YES";
    }
    else
    {
        document.getElementById('result').innerHTML = "NO";
    }

    

}

/* Palindrome number */
function palindrome()
{
    var num1 = document.getElementById('fnum').value;

    var temp, rem , final = 0 
 
    temp = num1 ;

    while(num1 != 0)
    {
        rem = num1 % 10 ;
        final = (final * 10) + rem ;
        num1 = parseInt(num1 /10) ;
    }

    if(final == temp)
    {
        document.getElementById('result').innerHTML = "YES";
    }
    else
    {
        document.getElementById('result').innerHTML = "NO";
    }
 
}

/* Odd/Even number */
function oddeven()
{
    num1 = document.getElementById('fnum').value;

    if (num1%2 != 0) {
        document.getElementById('result').innerHTML = "number is odd";
    }
    else{
        document.getElementById('result').innerHTML = "number is even"; 
    }
}

/* Prime number */
function prime()
{
    num1 = document.getElementById('fnum').value;
    
    let count = 0 ;
    
    for (let i = 1; i <= num1; i++)
    {
        if(num1 % i == 0 )
        {
           count++;
        }
    }
    if (count == 2 )
    {
        document.getElementById('result').innerHTML = "YES";
    }
    else
    {
        document.getElementById('result').innerHTML = "NO";
    }
}


/* clear result */
function clr()
{
    document.getElementById('result').innerHTML = " ";
}


