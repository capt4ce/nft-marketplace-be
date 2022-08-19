import { Module } from "@nestjs/common";
import { NetworkModuleBase } from "./base/network.module.base";
import { NetworkService } from "./network.service";
import { NetworkResolver } from "./network.resolver";

@Module({
  imports: [NetworkModuleBase],
  providers: [NetworkService, NetworkResolver],
  exports: [NetworkService],
})
export class NetworkModule {}
