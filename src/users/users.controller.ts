import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';

@Controller('users')
export class UsersController {
  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    console.log(dto);
  }
}
