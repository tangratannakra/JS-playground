function rgb(r, g, b) {
    let integerArray = [r, g, b];
    let rgbCode = '';
    let hexX = '';
    let hex = '';

    integerArray.forEach(element => {
        rgbCode = testBorders(element);
        rgbCode < 16 ? hexX = '0' + rgbCode.toString(16) : hexX = rgbCode.toString(16);
        hex = hex + hexX;
    })

    function testBorders(rgbCode) {
        rgbCode > 255 ? rgbCode = 255 : rgbCode;
        rgbCode < 0 ? rgbCode = 0 : rgbCode;

        return rgbCode;
    }

    return hex.toUpperCase();
}

console.log(rgb(78, 206, 19))

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