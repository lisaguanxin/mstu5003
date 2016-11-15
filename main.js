//example:

var user = {
        fullName: "Xin",
        age: 21,
        single: true,
        hobbies: ["HTML", "CSS", "JS"],};

      var bestFriend = [
          {
            fullName: "Lisa",
            age: 21,
            single: true,
            hobbies: ["C++", "ID", "JS"],
        }, {
            fullName: "Mary",
            age: 22,
            single: true,
            hobbies: ["HTML", "CSS", "JS"],
        }, {
            fullName: "June",
            age: 23,
            single: false,
            hobbies: ["HTML", "ID", "JS"],
        }];

        
        function printFriendList(firendList) {
          for (var i = 0, i < user.bestFriend.length; i++) {
                console.log(user.bestFriends[i].name);
            }
        }
        /*alert (user.fullName);
        alert (user.bestfriend.fullName);
        call a fucrion: user.sayHello;
        */
