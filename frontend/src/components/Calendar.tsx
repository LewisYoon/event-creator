import { CalendarHeader } from './CalendarHeader';
import { CalendarGrid } from './CalendarGrid';
import { getCalendarWeeks, getMonthYearTitle } from '../utils/calendarUtils';

export function Calendar() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const title = getMonthYearTitle(currentDate);
  const weeks = getCalendarWeeks(year, month);

  return (
    <main>
      <CalendarHeader title={title} />
      <CalendarGrid weeks={weeks} />
    </main>
  );
}
