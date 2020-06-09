let map = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function messageDecode(msg) {

    let helperArr = [msg[0]];
    for (let i = 0; i < msg.length; i++) {
        const a = msg[i]
        const b = msg[i + 1]

        if (a + b <= 26) {
            helperArr.push(a + b);
        }
        const c = msg[i + 2];
        const d = msg[i + 3];
        if (c + d <= 26) {
            helperArr.push(c + d);
        }
    }

    return helperArr.length


}



console.log(messageDecode("1223624"))