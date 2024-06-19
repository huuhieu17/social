import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ["post", "comment", "like", "user", "page", "message", "group"],
    protoPath: [
      "src/post/post.proto",
      "src/comment/comment.proto",
      "src/like/like.proto",
      "src/user/user.proto",
      "src/page/page.proto",
      "src/message/message.proto",
      "src/group/group.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
