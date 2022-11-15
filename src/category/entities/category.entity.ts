import { ObjectType, Field, Int } from '@nestjs/graphql'
import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Product } from '../../product/entities/product.entity'

@ObjectType()
@Entity()
export class Category extends BaseEntity {
  
 @Field()
 @PrimaryGeneratedColumn()
 id:string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  update_at: Date

  @OneToMany(
    () => Product,
    Product => Product.category,
  )
  products: Product[]
}
