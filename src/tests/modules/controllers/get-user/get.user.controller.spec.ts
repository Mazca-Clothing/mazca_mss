import { Test, TestingModule } from "@nestjs/testing";
import { GetUserController } from "../../../../modules/get-user/get.user.controller";
import { GetUserService } from "../../../../modules/get-user/get.user.service";

describe("AppController", () => {
    let getUserController: GetUserController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [GetUserController],
            providers: [GetUserService]
        }).compile();

        getUserController = app.get<GetUserController>(GetUserController);
    });

    describe("root", () => {
        it('should return "Hello User!"', () => {
            expect(getUserController.getUser()).toBe("Hello User!");
        });
    });
});
