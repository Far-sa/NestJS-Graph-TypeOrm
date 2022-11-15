import { Field, ObjectType } from '@nestjs/graphql'
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import { Category } from '../../category/entities/category.entity'

@ObjectType()
@Entity()
export class Product {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column()
  title: string

  @Field()
  @Column()
  description: string

  @Field()
  @Column()
  quantity: number

  @Field()
  @Column()
  price: number

  @Field()
  @Column()
  onSale: boolean

  @ManyToOne(
    () => Category,
    Category => Category.products,
  )
  @JoinColumn({
    name: 'category_id',
  })
  category: Category
}
