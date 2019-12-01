let s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

function meeting(s) {
    let invitationList = [],
        resulArray = [];

    let arr = s.toUpperCase().split(';');
    arr.forEach(el => {
        arr = el.split(':');
        invitationList.push({
            firstName: arr[0],
            lastName: arr[1]
        });
    })

    invitationList.sort((a, b) => {
        if (a.lastName > b.lastName) {
            return 1;
        } else if (a.lastName < b.lastName) {
            return -1;
        }


        if (a.firstName > b.firstName) {
            return 1;
        } else if (a.firstName < b.firstName) {
            return -1;
        } else {
            return 0;
        };
    });

    invitationList.forEach(el => resulArray.push([`(${el.lastName}, ${el.firstName})`]));
    return resulArray.join('');
}

// function meeting(s) {
//     let string = s.toUpperCase().split(';')
//                   .map(x => x.split(':').reverse().join(', '))
//                   .sort()
//                   .join(')(')
//     return '(' + string + ')'
//   }

console.log(meeting(s));