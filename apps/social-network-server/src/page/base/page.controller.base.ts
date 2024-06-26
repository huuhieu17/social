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
import { PageService } from "../page.service";
import { PageCreateInput } from "./PageCreateInput";
import { Page } from "./Page";
import { Post } from "../../post/base/Post";
import { PageFindManyArgs } from "./PageFindManyArgs";
import { PageWhereUniqueInput } from "./PageWhereUniqueInput";
import { PageUpdateInput } from "./PageUpdateInput";

export class PageControllerBase {
  constructor(protected readonly service: PageService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Page })
  @swagger.ApiBody({
    type: PageCreateInput,
  })
  async createPage(@common.Body() data: PageCreateInput): Promise<Page> {
    return await this.service.createPage({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Page] })
  @ApiNestedQuery(PageFindManyArgs)
  async pages(@common.Req() request: Request): Promise<Page[]> {
    const args = plainToClass(PageFindManyArgs, request.query);
    return this.service.pages({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Page })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async page(
    @common.Param() params: PageWhereUniqueInput
  ): Promise<Page | null> {
    const result = await this.service.page({
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
  @swagger.ApiOkResponse({ type: Page })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: PageUpdateInput,
  })
  async updatePage(
    @common.Param() params: PageWhereUniqueInput,
    @common.Body() data: PageUpdateInput
  ): Promise<Page | null> {
    try {
      return await this.service.updatePage({
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
  @swagger.ApiOkResponse({ type: Page })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePage(
    @common.Param() params: PageWhereUniqueInput
  ): Promise<Page | null> {
    try {
      return await this.service.deletePage({
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
