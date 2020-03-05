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
    let groupsFriends = {};
    let noFriends = [];

    for (let user = 2; user <= (n + 1); user++) {
        let friends = []
        for (let i = 2; i <= (n + 1); i++) {
            if ((i % user === 0 || user % i === 0) && user !== i) {
                friends.push(i)
                groupsFriends[user] = friends;

            } else if (i % user === 0) {
                noFriends.push(user)
            }
        }
    }

    return `${Object.keys(groupsFriends)} & ${noFriends.filter(element => {
        if( !(element in groupsFriends)){
            return element;
        }
    })}`;
}


//Note it outputs the clusters devided it 2 grups - with friends and no friends
//need to work on the expressions and result output
console.log(friendsGroups(10))