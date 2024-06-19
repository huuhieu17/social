import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PageService } from "./page.service";
import { PageGrpcControllerBase } from "./base/page.grpc.controller.base";

@swagger.ApiTags("pages")
@common.Controller("pages")
export class PageGrpcController extends PageGrpcControllerBase {
  constructor(protected readonly service: PageService) {
    super(service);
  }
}
