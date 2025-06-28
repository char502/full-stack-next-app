import { ZodError } from 'zod';

export type ActionState = {
  status?: 'SUCCESS' | 'ERROR';
  message: string;
  payload?: FormData;
  // An object with string keys
  // And every string key has an array of strings

  // The string represents the key for the input field
  // And for every string, could have one or nultiple error messages in there

  // Or undefined if no error present
  fieldErrors: Record<string, string[] | undefined>;
  timestamp: number;
};

export const EMPTY_ACTION_STATE: ActionState = {
  message: '',
  fieldErrors: {},
  timestamp: Date.now(),
};

export const fromErrorToActionState = (
  error: unknown,
  formData: FormData
): ActionState => {
  // If validation error with Zod, return first error message
  if (error instanceof ZodError) {
    // console.log(error.flatten().fieldErrors);
    return {
      status: 'ERROR',
      message: '',
      fieldErrors: error.flatten().fieldErrors,
      payload: formData,
      timestamp: Date.now(),
    };
    // If another error instance, return error message
    // e.g. database/ORM error
  } else if (error instanceof Error) {
    return {
      status: 'ERROR',
      message: error.message,
      fieldErrors: {},
      payload: formData,
      timestamp: Date.now(),
    };
    // If not an error instance but something else crashed
    // return generic error message
  } else {
    return {
      status: 'ERROR',
      message: 'An unknown error occured',
      fieldErrors: {},
      payload: formData,
      timestamp: Date.now(),
    };
  }
};

export const toActionState = (
  status: ActionState['status'],
  message: string
): ActionState => {
  return { status, message, fieldErrors: {}, timestamp: Date.now() };
};
