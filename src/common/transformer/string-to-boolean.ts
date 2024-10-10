import { Transform } from 'class-transformer';

export const StringToBoolean = () =>
  Transform(({ value }) => {
    if (value === 'true') {
      return true;
    }
    if (value === 'false') {
      return false;
    }
    return value;
  });
