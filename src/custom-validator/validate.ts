import {
  ValidationArguments,
  ValidatorConstraintInterface,
} from 'class-validator';

export class CustomTextValidator implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    // Custom validation logic
    const isValid = true;
    return isValid;
  }

  defaultMessage(args: ValidationArguments) {
    // Custom error message
    return 'Custom validation failed';
  }
}
