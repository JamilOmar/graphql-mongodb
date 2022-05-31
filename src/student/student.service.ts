import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './dto/create-student-input.dto';
import { Student } from './student.entity';
import { v4 as uuid } from 'uuid';
@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  getStudents() {
    return this.studentRepository.find();
  }
  getStudent(id: string) {
    return this.studentRepository.findOne({ id });
  }
  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    const { firstName, lastName } = createStudentInput;
    const lesson = this.studentRepository.create({
      id: uuid(),
      firstName,
      lastName,
    });
    return this.studentRepository.save(lesson);
  }
  getManyStudents(studentIds: string[]): Promise<Student[]> {
    return this.studentRepository.find({
      where: {
        id: {
          $in: studentIds,
        },
      },
    });
  }
}
