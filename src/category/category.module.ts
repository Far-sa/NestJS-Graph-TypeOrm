import { Module } from '@nestjs/common'
import { CategoryService } from './category.service'
import { CategoryResolver } from './category.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Category } from './entities/category.entity'
import { ProductModule } from '../product/product.module'

@Module({
  imports: [TypeOrmModule.forFeature([Category]), ProductModule],
  providers: [CategoryResolver, CategoryService],
})
export class CategoryModule {}
