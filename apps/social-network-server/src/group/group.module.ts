import { Module } from "@nestjs/common";
import { GroupModuleBase } from "./base/group.module.base";
import { GroupService } from "./group.service";
import { GroupController } from "./group.controller";
import { GroupGrpcController } from "./group.grpc.controller";
import { GroupResolver } from "./group.resolver";

@Module({
  imports: [GroupModuleBase],
  controllers: [GroupController, GroupGrpcController],
  providers: [GroupService, GroupResolver],
  exports: [GroupService],
})
export class GroupModule {}
