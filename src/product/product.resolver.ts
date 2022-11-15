import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { ProductService } from './product.service'
import { Product } from './entities/product.entity'
import {} from '@nestjs/common'
import { CreateProductDTO } from './dto/create-product-input'

@Resolver(() => Product)
export class ProductResolver {
  constructor (private readonly productService: ProductService) {}

  @Query(() => [Product], { name: 'getAllProducts' })
  getAll () {
    return this.productService.getAll()
  }

  @Mutation(() => Product, { name: 'CreateProduct' })
  create (@Args('product') product: CreateProductDTO) {
    return this.productService.create(product)
  }
}
