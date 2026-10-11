interface CalendarHeaderProps {
  title: string;
}

export function CalendarHeader({ title }: CalendarHeaderProps) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}
