import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Student') //how it should be named
export class StudentType {
  @Field((type) => ID)
  id: string;
  @Field()
  firstName: string;
  @Field()
  lastName: string;
}
