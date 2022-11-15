import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Product } from './entities/product.entity'
import { CreateProductDTO } from './dto/create-product-input'

@Injectable()
export class ProductService {
  constructor (
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  getAll () {
    return this.productRepository.find()
  }
  async create (product: CreateProductDTO): Promise<Product> {
    const item = await this.productRepository.create(product)
    return this.productRepository.save(item)
  }
}
