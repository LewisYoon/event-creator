import { WEEKDAYS } from '../utils/calendarUtils';
import { DayCell } from './DayCell';

interface CalendarGridProps {
  weeks: (number | null)[][];
}

export function CalendarGrid({ weeks }: CalendarGridProps) {
  return (
    <table>
      <thead>
        <tr>
          {WEEKDAYS.map((weekday) => (
            <th key={weekday} scope="col">
              {weekday}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {weeks.map((week, weekIndex) => (
          <tr key={weekIndex}>
            {week.map((day, dayIndex) => (
              <DayCell key={dayIndex} day={day} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
