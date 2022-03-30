enum UserStatus {
    Admin = 1,
    Editor= 2,
    User = 3,
}

function checkStatus(status: number) {
      
    switch(status) {
        case UserStatus.Admin:
            console.log('é um admin');
            break;
        case UserStatus.Editor:
            console.log('É um editor');
            break;
        case UserStatus.User:
            console.log('É um user normal');
            break;
    }
}

checkStatus(3);