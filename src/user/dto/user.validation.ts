import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export function IsAdult(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isAdult',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          console.log('value: ', value);
          console.log('args: ', args);
          const toDay = new Date();
          const birthDay = value;
          const age = toDay.getFullYear() - birthDay.getFullYear();
          if (age < 18) {
            return false;
          } else {
            return true;
          }
        },
      },
    });
  };
}
