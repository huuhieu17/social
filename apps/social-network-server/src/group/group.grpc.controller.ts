import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GroupService } from "./group.service";
import { GroupGrpcControllerBase } from "./base/group.grpc.controller.base";

@swagger.ApiTags("groups")
@common.Controller("groups")
export class GroupGrpcController extends GroupGrpcControllerBase {
  constructor(protected readonly service: GroupService) {
    super(service);
  }
}
