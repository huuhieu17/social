import { Module } from "@nestjs/common";
import { PageModuleBase } from "./base/page.module.base";
import { PageService } from "./page.service";
import { PageController } from "./page.controller";
import { PageGrpcController } from "./page.grpc.controller";
import { PageResolver } from "./page.resolver";

@Module({
  imports: [PageModuleBase],
  controllers: [PageController, PageGrpcController],
  providers: [PageService, PageResolver],
  exports: [PageService],
})
export class PageModule {}
