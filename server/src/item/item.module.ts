import { Module } from "@nestjs/common";
import { ItemModuleBase } from "./base/item.module.base";
import { ItemService } from "./item.service";
import { ItemResolver } from "./item.resolver";

@Module({
  imports: [ItemModuleBase],
  providers: [ItemService, ItemResolver],
  exports: [ItemService],
})
export class ItemModule {}
