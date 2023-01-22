import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const DEFAULT_DATE_FORMAT = "d 'de' MMMM, yyyy";

export const formatDate = (date: Date, dateFormat?: string) =>
  format(date, dateFormat || DEFAULT_DATE_FORMAT, {
    locale: es,
  });
