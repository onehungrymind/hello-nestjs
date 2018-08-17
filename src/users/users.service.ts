import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    users = [
        { id: '1', name: 'John Doe' },
        { id: '2', name: 'Jane Smith' },
        { id: '3', name: 'Joe Cool' },
        { id: '4', name: 'Bruce Lee' },
    ];

    all() {
        return this.users;
    }

    select(id) {
        return this.users.find(user => user.id === id);
    }

    create(user) {
        return `This action creates a new user`;
    }

    update(id, user) {
        return `This action updates the #${id} user`;
    }

    delete(id) {
        return `This action removes the #${id} user`;
    }
}
