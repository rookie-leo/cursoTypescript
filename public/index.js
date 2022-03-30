"use strict";
var UserStatus;
(function (UserStatus) {
    UserStatus[UserStatus["Admin"] = 1] = "Admin";
    UserStatus[UserStatus["Editor"] = 2] = "Editor";
    UserStatus[UserStatus["User"] = 3] = "User";
})(UserStatus || (UserStatus = {}));
function checkStatus(status) {
    switch (status) {
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
