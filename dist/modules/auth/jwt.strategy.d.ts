import { Strategy } from 'passport-jwt';
import { ConfigService } from "@nestjs/config";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly config;
    constructor(config: ConfigService);
    validate(payload: any): Promise<{
        role: any;
        id: any;
        email: any;
    }>;
}
export {};
