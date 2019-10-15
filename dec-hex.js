function rgb(r, g, b) {
    let hex = '';

    [r, g, b].forEach(element => {
        hex = hex + testBorders(element).toString(16);
    })

    function testBorders(num) {
        num > 255 ? num = 255 : num;
        num <= 0 ? num = 0 : num;
        num < 16 ? num = '0' + num.toString(16) : num;
        return num;
    }

    return hex.toUpperCase();
}

console.log(rgb(0, 0, 0))

//From Codewars

// function rgb(r, g, b){
//     return [r,g,b].map(function(x) {
//       return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
//     }).join('').toUpperCase();
//   }

// function rgb(r, g, b){
//     function toHex(a) { 
//       if (a <= 0) return '00';
//       else if (a >= 255) return 'FF';
//       else return a.toString(16).toUpperCase();
//     }
//     return toHex(r) + toHex(g) + toHex(b);
//   }