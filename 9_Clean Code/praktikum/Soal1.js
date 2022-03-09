class User {
  constructor(id, username, password) {
    this.id = id;
    this.username = username;
    this.password = password;
  }
}

class UserService {
  constructor() {
    this.users = [];
  }

  // create user object, push to users array, and return the object
  addUser(id, username, password) {
    const user = new User(id, username, password);
    this.users.push(user);
    return user;
  }

  getAllUsers() {
    return this.users;
  }

  getUserById(userId) {
    return this.users.filter((user) => user.id === userId)[0];
  }
}

const userService = new UserService();

userService.addUser(1, 'Jhon', '123');
userService.addUser(2, 'Doe', '456');
userService.addUser(3, 'Mark', '789');
userService.addUser(4, 'Frank', '654');

console.log('Users List: ', userService.getAllUsers());
console.log('User with Id 3: ', userService.getUserById(3));
