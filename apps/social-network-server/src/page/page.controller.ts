import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PageService } from "./page.service";
import { PageControllerBase } from "./base/page.controller.base";

@swagger.ApiTags("pages")
@common.Controller("pages")
export class PageController extends PageControllerBase {
  constructor(protected readonly service: PageService) {
    super(service);
  }
}
