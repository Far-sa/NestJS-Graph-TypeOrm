import { ObjectType, Field } from '@nestjs/graphql'
import { Client } from 'src/client/entities/client.entity'
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Product } from '../../product/entities/product.entity'

@ObjectType()
@Entity()
export class Category extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column()
  name: string

  @OneToMany(
    () => Product,
    Product => Product.category,
  )
  products: Product[]

  @ManyToOne(() => Client)
  clients: Client[]

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  update_at: Date
}
