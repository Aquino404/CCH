class UserService {
    getUserById(id) {
        console.log(`Consultando banco de dados para o usuário com ID: ${id}`);
        return { id, nome: `Usuário ${id}` };
    }
}

class UserServiceProxy {
    constructor() {
        this.userService = new UserService();
        this.cache = {};
    }

    getUserById(id) {
        if (this.cache[id]) {
            console.log(`Recuperando do cache o usuário com ID: ${id}`);
            return this.cache[id];
        }
        const user = this.userService.getUserById(id);
        this.cache[id] = user;
        return user;
    }
}

const userServiceProxy = new UserServiceProxy();

console.log(userServiceProxy.getUserById(1));

console.log(userServiceProxy.getUserById(1));

console.log(userServiceProxy.getUserById(2));