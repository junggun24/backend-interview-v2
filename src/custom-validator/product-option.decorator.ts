import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
  Validate,
} from 'class-validator';

@ValidatorConstraint({ name: 'isNumberArray', async: false })
export class IsNumberArrayConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    return this.isValid(value);
  }

  private isValid(arr: any[]): boolean {
    for (const elem of arr) {
      if (!Array.isArray(elem) || elem.length !== 4) {
        return false;
      }
      for (const arg of elem) {
        const value = this.checkInt(arg);
        if (!value) {
          return false;
        }
        parseInt(arg);
      }
    }
    return true;
  }
  private checkInt(value) {
    const isNumeric =
      'string' === typeof value &&
      !isNaN(parseFloat(value)) &&
      isFinite(value as any);
    return isNumeric;
  }

  defaultMessage(args: ValidationArguments) {
    return 'Each element of the array must be a number.';
  }
}
