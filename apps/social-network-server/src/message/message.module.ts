import { Module } from "@nestjs/common";
import { MessageModuleBase } from "./base/message.module.base";
import { MessageService } from "./message.service";
import { MessageController } from "./message.controller";
import { MessageGrpcController } from "./message.grpc.controller";
import { MessageResolver } from "./message.resolver";

@Module({
  imports: [MessageModuleBase],
  controllers: [MessageController, MessageGrpcController],
  providers: [MessageService, MessageResolver],
  exports: [MessageService],
})
export class MessageModule {}
