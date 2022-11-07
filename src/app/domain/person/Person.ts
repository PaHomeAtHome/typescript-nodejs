import { JsonController, Get, Post, Body, Param } from "routing-controllers";

import { App } from "infra/App";
import PersonService from "./PersonService";
import { IPerson } from "./PersonType";

@JsonController("/person")
export default class Person {
  public app = new App();
  public service = new PersonService();

  @Get()
  async getAll() {
    return await this.service.getAll();
  }

  @Get("/:id")
  async getOne(@Param("id") id: number) {
    return await this.service.getOne(id);
  }

  @Post()
  async setPerson(@Body() body: IPerson) {
    await this.service.setPerson(body);
    return "Person added";
  }
}
