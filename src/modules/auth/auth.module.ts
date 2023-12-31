import {Module} from "@nestjs/common";
import {CoreModule} from "../../core/core.module";
import {AuthController} from "./auth.controller";
import {AuthService} from "./auth.service";
import {UserModule} from "../user/user.module";
import {UserService} from "../user/user.service";


@Module({
  imports: [CoreModule, UserModule],
  controllers: [AuthController],
  providers: [AuthService, UserService]
})

export class AuthModule {
}
