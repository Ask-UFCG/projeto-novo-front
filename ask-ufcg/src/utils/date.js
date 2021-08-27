import format from 'date-fns/format';

export const getValueDateWithHours = (date) => {
  return date ? format(new Date(date), 'dd/MM/yyyy HH:mm:ss') : '-';
};
