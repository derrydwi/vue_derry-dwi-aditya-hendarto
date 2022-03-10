class User {
  constructor({ id, username, password }) {
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
  addUser({ id, username, password }) {
    const user = new User({ id, username, password });
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

userService.addUser({ id: 1, username: 'Jhon', password: '123' });
userService.addUser({ id: 2, username: 'Doe', password: '456' });
userService.addUser({ id: 3, username: 'Mark', password: '789' });
userService.addUser({ id: 4, username: 'Frank', password: '654' });

console.log('Users List: ', userService.getAllUsers());
console.log('User with Id 3: ', userService.getUserById(3));
