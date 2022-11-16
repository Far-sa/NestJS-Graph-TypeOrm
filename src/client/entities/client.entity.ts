import { ObjectType, Field } from '@nestjs/graphql'
import { Category } from 'src/category/entities/category.entity'

import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@ObjectType()
@Entity()
export class Client {
  @Field()
  @PrimaryGeneratedColumn()
  id: string

  @Field()
  @Column({ unique: true })
  client_number: string

  @ManyToMany(() => Category)
  @JoinTable({
    name: 'Clients_Categories',
    joinColumn: {
      name: 'client',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'category',
      referencedColumnName: 'id',
    },
  })
  categories: Category[]

  @Field()
  @CreateDateColumn()
  create_at: Date

  @Field()
  @UpdateDateColumn()
  update_at: Date
}
