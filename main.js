 myFunction = () => {
     var n = document.getElementById("myNumber").value;

     if (n >= 0 && n <= 1000) {
         fib = n => {
             var f = new Array(n + 2);
             f[0] = 0;
             f[1] = 1;
             for (i = 2; i <= n; i++) {
                 f[i] = f[i - 1] + f[i - 2];
             }
             return f[n];
         }

         document.getElementById("demo").innerHTML = ("Fibonacci of " + n + " is " + fib(n));
     } else {
         document.getElementById("demo").innerHTML = ("Enter a Number between 0-1000");
     }
 }