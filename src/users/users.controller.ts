import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { UserCreateDto, UserUpdateDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    all() {
        return this.usersService.all();
    }

    @Get(':id')
    select(@Param('id') id) {
        return this.usersService.select(id);
    }

    @Post()
    create(@Body() user: UserCreateDto) {
        return this.usersService.create(user);
    }

    @Put(':id')
    update(@Param('id') id, @Body() user: UserUpdateDto) {
        return this.usersService.update(id, user);
    }

    @Delete(':id')
    remove(@Param('id') id) {
        return this.usersService.delete(id);
    }
}
