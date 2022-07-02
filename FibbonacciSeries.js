// fibbonacci(2) = [0,1]
// fibbonacci(3) = [0,1,1]
// fibbonacci(7) = [0,1,1,2,3,5,8]

function fibbonacci(n){
    const fib = [0,1];
    for(var i=2;i<n;i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
}

console.log(fibbonacci(18));