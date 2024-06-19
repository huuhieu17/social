import { Module } from "@nestjs/common";
import { PostModuleBase } from "./base/post.module.base";
import { PostService } from "./post.service";
import { PostController } from "./post.controller";
import { PostGrpcController } from "./post.grpc.controller";
import { PostResolver } from "./post.resolver";

@Module({
  imports: [PostModuleBase],
  controllers: [PostController, PostGrpcController],
  providers: [PostService, PostResolver],
  exports: [PostService],
})
export class PostModule {}
