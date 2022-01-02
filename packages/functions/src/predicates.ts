import { complement, either, isEmpty, isNil } from "ramda";

export const isDefined = complement(isNil);

export const isDefinedNonEmpty = complement(either(isEmpty, isNil));
