<html>  
<head>   
<title>   
Fibonacci Series using Recursion in JavaScript. </title>  
</head>  
<body style= "text-align: center;">  
<h2> Fibonacci Series in JavaScript Using Recursion </h2>  
  
<script>  
// Using Recursion to find the Fibonacci Series.  
function recur(num)  
{  
// when num is equal to 1, it returns 0 and 1  
if (num == 1)  
{  
return [0, 1];  
}  
else  
{  
// it continuously calls the recur function till n-1  
total = recur (num - 1);  
/* push function add previous two terms and returns store the result into the total variable. */   
total.push( total[ total.length - 1] + total[ total.length - 2]);  
return total;  
}  
  
}  
// Series of first 12 terms using Recursion.  
document.write("Fibonacci Series of f(12) in JavaScript: " + recur( 12 ) + "<br>");  
</script>  
</body>  
</html> 