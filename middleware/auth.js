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
// console.log(user_permission);

class UserAuth {
  constructor(keys) {
    this.keys = keys;
  }

  // returning true if user have permission
  can(id, perm) {
    let auth = false;
    if (!id || !perm) {
      throw new Error('no input fields');
    } else {
      this.keys.forEach(key => {
        if (key.userId == id && key.permissionId == perm) {
          auth = true;
        }
      });
    }
    return auth;
  }

  // return single perm item
  allow(id, perm, [customId, customPerm] = ['userId', 'permissionId']) {
    if (!id || !perm) {
      throw new Error('no input fields');
    } else {
      return { [customId]: id, [customPerm]: perm };
    }
  }

  disallow(id, perm, [customId, customPerm] = ['userId', 'permissionId']) {
    if (!id || !perm) {
      throw new Error('no input fields');
    } else {
      return { [customId]: id, [customPerm]: perm };
    }
  }

  // private
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

  // private
  formatKeys(rawKeys, [customId, customPerm]) {
    const uniqueKeys = this.removeDuplicates(rawKeys);
    const formattedKeys = uniqueKeys.map(obj => {
      var rObj = {};
      rObj[customId] = obj.userId;
      rObj[customPerm] = obj.permissionId;
      return rObj;
    });
    return formattedKeys;
  }
}

module.exports.UserAuth = UserAuth;