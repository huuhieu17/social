/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { GroupService } from "../group.service";
import { GroupCreateInput } from "./GroupCreateInput";
import { Group } from "./Group";
import { Post } from "../../post/base/Post";
import { GroupFindManyArgs } from "./GroupFindManyArgs";
import { GroupWhereUniqueInput } from "./GroupWhereUniqueInput";
import { GroupUpdateInput } from "./GroupUpdateInput";

export class GroupControllerBase {
  constructor(protected readonly service: GroupService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Group })
  @swagger.ApiBody({
    type: GroupCreateInput,
  })
  async createGroup(@common.Body() data: GroupCreateInput): Promise<Group> {
    return await this.service.createGroup({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Group] })
  @ApiNestedQuery(GroupFindManyArgs)
  async groups(@common.Req() request: Request): Promise<Group[]> {
    const args = plainToClass(GroupFindManyArgs, request.query);
    return this.service.groups({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Group })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async group(
    @common.Param() params: GroupWhereUniqueInput
  ): Promise<Group | null> {
    const result = await this.service.group({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Group })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: GroupUpdateInput,
  })
  async updateGroup(
    @common.Param() params: GroupWhereUniqueInput,
    @common.Body() data: GroupUpdateInput
  ): Promise<Group | null> {
    try {
      return await this.service.updateGroup({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Group })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteGroup(
    @common.Param() params: GroupWhereUniqueInput
  ): Promise<Group | null> {
    try {
      return await this.service.deleteGroup({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
