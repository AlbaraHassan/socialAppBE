import { Body, Controller, Delete, Get, Patch, Post, Query } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserCreateDto } from "./dto/userCreateDto";
import {UserUploadDto} from "./dto/userUpdateDto";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Post()
  async create(@Body() data: UserCreateDto) {
    return this.userService.create(data);
  }

  @Get("all")
  async getAll() {
    return this.userService.getAll();
  }

  @Get()
  async get(@Query("id") id: string) {
    return this.userService.get(id);
  }

  @Patch()
  async update(@Body() data: UserUploadDto) {
    return this.userService.update(data);
  }

  @Delete()
  async delete(@Query("id") id: string) {
    return this.userService.delete(id);
  }
}
