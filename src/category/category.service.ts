import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateCategoryInput } from './dto/create-category.input'
import { UpdateCategoryInput } from './dto/update-category.input'
import { Category } from './entities/category.entity'
import { ProductService } from '../product/product.service'
import { Product } from 'src/product/entities/product.entity'

@Injectable()
export class CategoryService {
  constructor (
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    private productService: ProductService,
  ) {}
  async create (createCategoryInput: CreateCategoryInput): Promise<Category> {
    const cat = await this.categoryRepository.create(createCategoryInput)
    return await this.categoryRepository.save(cat)
  }

  async findAll (): Promise<Category[]> {
    return await this.categoryRepository.find()
  }

  async findOne (id: string): Promise<Category> {
    return await this.categoryRepository.findOneById(id)
  }

  update (id: string, updateCategoryInput: UpdateCategoryInput) {
    return `This action updates a #${id} category`
  }

  remove (id: string) {
    return `This action removes a #${id} category`
  }

  async getProduct (): Promise<Product[]> {
    return this.productService.getAll()
  }
}
