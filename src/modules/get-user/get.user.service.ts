import { Injectable } from "@nestjs/common";

@Injectable()
export class GetUserService {
    getUser(): string {
        return "Hello User!";
    }
}
