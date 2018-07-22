const expect = require('expect');
const { Users } = require('./users');

describe('Users', () => {
  let users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: 1,
      name: 'Zali',
      room: 'Node',
    }, {
      id: 2,
      name: 'Gerda',
      room: 'React',
    }, {
      id: 3,
      name: 'Tom',
      room: 'Node',
    }];
  });

  it('should add a new user', () => {
    users = new Users();
    const user = {
      id: '123',
      name: 'Zali',
      room: 'Node fans',
    };
    const resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([resUser]);
  });

  it('should return names for node course', () => {
    const userList = users.getUserList('React');
    expect(userList).toEqual(['Gerda']);
  });

  it('should remove a user', () => {
    const userId = 1;
    const user = users.removeUser(userId);
    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    const userId = 99;
    const user = users.removeUser(userId);
    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    const userId = 1;
    const user = users.getUser(userId);
    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    const userId = 99;
    const user = users.getUser(userId);
    expect(user).toNotExist();
  });
});
