import { pickBy, complement, either, isEmpty, isNil } from "ramda";

export const pickDefinedNonEmpty = pickBy(complement(either(isEmpty, isNil)));
