function wave(str) {
    let resultArry = [];

    let arr = str.split('');
    console.log(arr)

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ' ') continue;
        resultArry.push(str.substr(0, i) + str[i].toUpperCase() + str.substr(i + 1, str.length));
    }


    // for (let i = 0; i < str.length; i++) {
    //           newStr  = str.substr(0, i) + str[i].toUpperCase() + str.substr(i + 1, str.length); 
    //           resultArry.push(newStr);   
    //      }


    // let workArr = str.split(' ');

    // workArr = workArr.map(el => {
    //     let newStr;
    //     for (let i = 0; i < el.length; i++) {
    //       newStr  = el.substr(0, i) + el[i].toUpperCase() + el.substr(i + 1, el.length); 
    //       resultArry.push(newStr);   
    //     }
    //     return [resultArry];
    // });

    // console.log(workArr)

    //return resultArry;

    // let spaceArr = str.split(' ');
    // console.log(spaceArr);

    // let index = str.indexOf(' ');
    // let newStr = str.replace(/\s/g, '');
    // let newArr = toUpper(newStr);
    // newArr.map(el => el.substr(0, index) + ' ' + el.substr(index));


    return resultArry;
}

console.log(wave(" blah blah "));

//   wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]