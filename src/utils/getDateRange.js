import moment from 'moment';

export default function getDateRange() {
  // returns 28-day range starting from the current date
  return [moment(), moment().add(55, 'days')];
}
