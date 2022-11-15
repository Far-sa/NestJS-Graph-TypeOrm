import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateProductDTO {
    @Field()
  title: string

  @Field()
  description: string
}
