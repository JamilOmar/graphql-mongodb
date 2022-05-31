import { Field, ID, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';
import { type } from 'os';

@InputType()
export class AssignStudentsToLessonInput {
  @IsUUID('4')
  @Field((type) => ID)
  lessonId: string;

  @IsUUID('4', { each: true })
  @Field((type) => [ID])
  studentIds: string[];
}
