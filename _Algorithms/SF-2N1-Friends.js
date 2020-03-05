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

console.log(friendsGroups(20))