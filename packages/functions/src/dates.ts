import differenceInCalendarDays from "date-fns/differenceInCalendarDays";

export const expiresIn = (d: string | Date): number =>
  differenceInCalendarDays(new Date(d), new Date());
