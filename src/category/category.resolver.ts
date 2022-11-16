import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { CategoryService } from './category.service'
import { Category } from './entities/category.entity'
import { CreateCategoryInput } from './dto/create-category.input'
import { UpdateCategoryInput } from './dto/update-category.input'
import { Product } from 'src/product/entities/product.entity'

@Resolver(() => Category)
export class CategoryResolver {
  constructor (private readonly categoryService: CategoryService) {}

  @Mutation(() => Category, { name: 'createCategory' })
  createCategory (
    @Args('createCategoryInput') createCategoryInput: CreateCategoryInput,
  ) {
    return this.categoryService.create(createCategoryInput)
  }

  @Query(() => [Category], { name: 'getAllCategories' })
  findAll () {
    return this.categoryService.findAll()
  }

  @Query(() => Category, { name: 'getCategoryById' })
  findOne (@Args('id') id: string) {
    return this.categoryService.findOne(id)
  }

  // @Mutation(() => Category)
  // updateCategory (
  //   @Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput,
  // ) {
  //   return this.categoryService.update(
  //     updateCategoryInput.id,
  //     updateCategoryInput,
  //   )
  // }

  @Mutation(() => Category)
  removeCategory (@Args('id', { type: () => Int }) id: string) {
    return this.categoryService.remove(id)
  }

  @ResolveField(() => Product)
  products (@Parent() category: Category) {
    return this.categoryService.getProduct()
  }
}
