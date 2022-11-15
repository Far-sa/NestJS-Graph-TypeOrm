import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateProductDTO {
  @Field()
  title: string

  @Field()
  description: string

  @Field()
  quantity: number

  @Field()
  price: number

  @Field()
  onSale: boolean
}
