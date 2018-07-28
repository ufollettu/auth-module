// from db calls (need promise result to be a json object)
const permissions = [
  {
    action: "no access",
    value: "0"
  },
  {
    action: "use this funcion",
    value: "1"
  },
  {
    action: "use a second function",
    value: "2"
  },
  {
    action: "use another function",
    value: "3"
  },
  {
    action: "last function to use",
    value: "4"
  }
];
const users = [
  {
    name: "admin",
    id: "1"
  },
  {
    name: "pasquale",
    id: "2"
  },
  {
    name: "rajo",
    id: "3"
  },
  {
    name: "guest",
    id: "4"
  }
];

const user_permission = require("../middleware/user_permission.json");

class UserAuth {
  constructor(keys) {
    this.keys = keys;
  }

  // returning true if user have permission
  can(id, perm) {
    let auth = false;
    if (!id || !perm) {
      console.log("error");
    } else {
      this.keys.forEach(key => {
        if (key.userId == id && key.permissionId == perm) {
          auth = true;
        }
      });
    }
    return auth;
  }

  // return permission array
  allow(id, perm) {
    const data = { userId: id, permissionId: perm };
    if (!id || !perm) {
      console.log("no input");
    } else {
      this.keys.forEach(key => {
        if (id !== key.userId || perm === key.permissionId) {
          console.log("id non esiste oppure permesso esiste");
        } else {
          this.keys.push(data);
        }
      });
    }
    return (this.keys = this.removeDuplicates(this.keys));
  }

  // return permission array
  disallow(id, perm) {
    if (!id || !perm) {
      console.log("error");
    } else {
      const result = this.keys.findIndex(data => {
        return data.userId === id && data.permissionId === perm;
      });
      this.keys.splice(result, 1);
    }
    return (this.keys = this.removeDuplicates(this.keys));
  }

  removeDuplicates(arr) {
    const userIds = [];
    const result = arr.filter((element, index, array) => {
      var tempArr = element.userId + "" + element.permissionId;
      if (userIds.indexOf(tempArr) === -1) {
        userIds.push(tempArr);
        return element;
      }
    });
    result.sort((a, b) => {
      return a.userId - b.userId;
    });
    return result;
  }
}

module.exports.UserAuth = UserAuth;
