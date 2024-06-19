import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MessageService } from "./message.service";
import { MessageGrpcControllerBase } from "./base/message.grpc.controller.base";

@swagger.ApiTags("messages")
@common.Controller("messages")
export class MessageGrpcController extends MessageGrpcControllerBase {
  constructor(protected readonly service: MessageService) {
    super(service);
  }
}
