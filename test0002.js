function printPattern(n) {

    // Function to calculate nCr
    function nCr(n, r) {
        let res = 1;
        for (let i = 0; i < r; i++) {
            res = res * (n - i) / (i + 1);
        }
        return Math.floor(res);
    }

    for (let i = n; i >= 0; i--) {
        let row = "";

        // Add spaces (instead of dots)
        for (let s = 0; s < n - i; s++) {
            row += " ";  
        }

        
        for (let j = 0; j <= i; j++) {
            row += nCr(i, j) + " ";
        }

        console.log(row.trimEnd());
    }
}

printPattern(4);