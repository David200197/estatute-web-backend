import { applyDecorators } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import 'reflect-metadata';

export function ApiEitherResponse<L, R>(
  leftStatus: number,
  leftDescription: string,
  rightStatus: number,
  rightDescription: string,
) {
  const leftType = Reflect.getMetadata(
    'design:returntype',
    this.prototype,
    'getLeft',
  );
  const rightType = Reflect.getMetadata(
    'design:returntype',
    this.prototype,
    'getRight',
  );

  return applyDecorators(
    ApiResponse({
      status: leftStatus,
      description: leftDescription,
      type: leftType,
      isArray: Array.isArray(leftType), // Define el tipo de respuesta para el caso Left
    }),
    ApiResponse({
      status: rightStatus,
      description: rightDescription,
      type: rightType,
      isArray: Array.isArray(rightType), // Define el tipo de respuesta para el caso Right
    }),
  );
}
