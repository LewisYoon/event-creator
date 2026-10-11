interface DayCellProps {
  day: number | null;
}

export function DayCell({ day }: DayCellProps) {
  return <td>{day !== null ? day : ''}</td>;
}
