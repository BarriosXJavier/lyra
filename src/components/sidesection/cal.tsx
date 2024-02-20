"use client"

import { useState } from "react";
import Calendar from "react-calendar";
import "./calendar-styles.css";

const CalendarSection: React.FC = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date: Date | Date[]) => {
    setDate(date as Date);
  };

  return (
    <section>
      <Calendar onChange={onChange} value={date} />
    </section>
  );
};

export default CalendarSection;

