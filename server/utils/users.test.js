const expect = require("expect");
const {Users} = require("./users");

describe("Users", () => {
    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: 1,
            name: "Zali",
            room: "Node"
        },{
            id: 2,
            name: "Gerda",
            room: "React"
        },{
            id: 3,
            name: "Tom",
            room: "Node"
        }];
    });

    it("should add a new user", () => {
        let users = new Users();
        let user = {
            id: "123",
            name: "Zali",
            room: "Node fans"
        };
        let resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it("should return names for node course", () => {
        let userList = users.getUserList("React");
        expect(userList).toEqual(["Gerda"]);
    });

    it("should remove a user", () => {
        let userId = 1;
        let user = users.removeUser(userId);
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it("should not remove a user", () => {
        let userId = 99;
        let user = users.removeUser(userId);
        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it("should find user", () => {
        let userId = 1;
        let user = users.getUser(userId);
        expect(user.id).toBe(userId);
    });

    it("should not find user", () =>{
        let userId = 99;
        let user = users.getUser(userId);
        expect(user).toNotExist();
    });


})