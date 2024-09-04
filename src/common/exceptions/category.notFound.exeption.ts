import { HttpException, HttpStatus } from '@nestjs/common';

export class CategoryNotFoundException extends HttpException {
  constructor(ctgId: string) {
    super(`${ctgId} Category Not Found`, HttpStatus.NOT_FOUND);
  }
}
