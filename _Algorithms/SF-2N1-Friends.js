// In a particular social network friends are automatically allocated to users by the system and users cannot add friends of their choice on their own. There are currently N users on the social network, labeled from 2 to N + 1.
// For every ith user (where i ranges from 2 to N + 1), the system allocated all the users labeled with multiples of i as the user's friends (if possible).
// One day, all users of the social network come together for a meeting and form groups such that each person in a group is a direct friend or a friend of friend of every other person of that group.
// Find the total number of groups.

//Inputs: 5 and 10
//Outpust: 2 and 3

// Explanation:
// Two groups will be formed: 2, 3, 4, 6 5

// Explanation :
// Three groups will be formed: 2, 3, 4, 5, 6, 8, 9, 10

function friendsGroups(n) {
    let users = {};
    let mutual = [];
    let single = [];

    for (let user = 2; user <= (n + 1); user++) {
        let friends = []
        for (let i = 2; i <= (n + 1); i++) {
            if (user !== i) {
                if ((user % i === 0) || i % user === 0) {
                    friends.push(i);
                }
            }
            users[user] = friends;
        }
    }

    for (let user in users) {
        if (users[user] != 0) {
            mutual.push(user)
        } else {
            single.push(user)
        }

    }
    //return `${mutual.toString()} \n ${single.toString()} ` ==== stipud, just return the number of groups!!!! I am so kind to myself :D

    return mutual.length === 0 ? single.length : 1 + single.length; // AND HERE YOU ARE! THANK YOU! 
}
console.log(friendsGroups(5))