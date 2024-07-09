import { Module } from "@nestjs/common";
import { GetUserService } from "./get.user.service";
import { GetUserController } from "./get.user.controller";

@Module({
    imports: [],
    controllers: [GetUserController],
    providers: [GetUserService]
})
export class GetUserModule {}
