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
  @PrimaryGeneratedColumn()
  id: string

  @Field()
  @Column()
  title: string

  @Field()
  @Column()
  description: string

  @ManyToOne(
    () => Category,
    Category => Category.products,
  )
  @JoinColumn({
    name: 'category_id',
  })
  category: Category
}
