"use client";

import { useEffect, useState } from "react";

// client rendering

export default function NewComponent() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 500);
  }, []);
  return <div>현재시각 : {date.toISOString()}</div>;
}
