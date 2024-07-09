import { Controller, Get } from "@nestjs/common";
import { GetUserService } from "./get.user.service";

@Controller()
export class GetUserController {
    constructor(private readonly getUserService: GetUserService) {}

    @Get("/user")
    getUser(): string {
        return this.getUserService.getUser();
    }
}
