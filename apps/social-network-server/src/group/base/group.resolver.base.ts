/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Group } from "./Group";
import { GroupCountArgs } from "./GroupCountArgs";
import { GroupFindManyArgs } from "./GroupFindManyArgs";
import { GroupFindUniqueArgs } from "./GroupFindUniqueArgs";
import { DeleteGroupArgs } from "./DeleteGroupArgs";
import { GroupService } from "../group.service";
@graphql.Resolver(() => Group)
export class GroupResolverBase {
  constructor(protected readonly service: GroupService) {}

  async _groupsMeta(
    @graphql.Args() args: GroupCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Group])
  async groups(@graphql.Args() args: GroupFindManyArgs): Promise<Group[]> {
    return this.service.groups(args);
  }

  @graphql.Query(() => Group, { nullable: true })
  async group(
    @graphql.Args() args: GroupFindUniqueArgs
  ): Promise<Group | null> {
    const result = await this.service.group(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Group)
  async deleteGroup(
    @graphql.Args() args: DeleteGroupArgs
  ): Promise<Group | null> {
    try {
      return await this.service.deleteGroup(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
