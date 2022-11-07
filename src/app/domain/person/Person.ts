import { JsonController, Get } from "routing-controllers";

import { App } from "infra/App";

@JsonController()
export default class Person {
  public app = new App();
  @Get("/person/getHello")
  async getHello() {
    return "Hello";
  }
}
