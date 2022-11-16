import { InputType, Int, Field } from '@nestjs/graphql'
import { Column } from 'typeorm'

@InputType()
export class CreateCategoryInput {
  @Field()
  @Column()
  name: string
}
