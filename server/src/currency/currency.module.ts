import { Module } from "@nestjs/common";
import { CurrencyModuleBase } from "./base/currency.module.base";
import { CurrencyService } from "./currency.service";
import { CurrencyResolver } from "./currency.resolver";

@Module({
  imports: [CurrencyModuleBase],
  providers: [CurrencyService, CurrencyResolver],
  exports: [CurrencyService],
})
export class CurrencyModule {}
