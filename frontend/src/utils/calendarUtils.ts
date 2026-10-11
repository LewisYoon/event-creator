export const WEEKDAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
] as const;

export function getMonthYearTitle(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
}

export function getCalendarWeeks(year: number, month: number): (number | null)[][] {
  // Number of days in the given month (day 0 of month + 1 gives the last day of month)
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Day of the week for the 1st day of the month (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const firstDayOfWeek = new Date(year, month, 1).getDay();

  // Offset to align with Monday as the first day of the week (Monday = 0, Sunday = 6)
  const startOffset = (firstDayOfWeek + 6) % 7;

  const days: (number | null)[] = [];

  // Leading empty days before the first day of the month
  for (let i = 0; i < startOffset; i++) {
    days.push(null);
  }

  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  // Group days into weeks of 7 days
  const weeks: (number | null)[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    const week = days.slice(i, i + 7);
    while (week.length < 7) {
      week.push(null);
    }
    weeks.push(week);
  }

  return weeks;
}
