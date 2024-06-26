import { INestApplication } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { grpcClientOptions } from "./grpc.client.options";
import { generateKafkaClientOptions } from "./kafka/generateKafkaClientOptions";
import { MicroserviceOptions } from "@nestjs/microservices";
import { generateRedisClientOptions } from "./redis/generateRedisClientOptions";

export async function connectMicroservices(app: INestApplication) {
  const configService = app.get(ConfigService);
  app.connectMicroservice<MicroserviceOptions>(grpcClientOptions);
  app.connectMicroservice<MicroserviceOptions>(generateKafkaClientOptions(configService));
  app.connectMicroservice<MicroserviceOptions>(generateRedisClientOptions(configService));
}
