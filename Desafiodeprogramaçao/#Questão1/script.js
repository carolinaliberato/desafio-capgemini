function criandoUmaEscada(n){
    let arr = Array(n - 1).fill(' ')
    
    for (let i = n-1; i >= 0; i--) {
        arr[i] = '*';
        console.log(arr.join(''));
    }
}

criandoUmaEscada(6);
