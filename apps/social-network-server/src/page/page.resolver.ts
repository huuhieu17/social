import * as graphql from "@nestjs/graphql";
import { PageResolverBase } from "./base/page.resolver.base";
import { Page } from "./base/Page";
import { PageService } from "./page.service";

@graphql.Resolver(() => Page)
export class PageResolver extends PageResolverBase {
  constructor(protected readonly service: PageService) {
    super(service);
  }
}
