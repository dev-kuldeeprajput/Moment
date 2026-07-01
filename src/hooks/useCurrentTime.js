import { useEffect, useState } from 'react';

export function useCurrentTime() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    let timer;

    const scheduleNextTick = () => {
      const now = new Date();
      setTime(now);
      timer = setTimeout(scheduleNextTick, 1000 - now.getMilliseconds());
    };

    scheduleNextTick();

    return () => clearTimeout(timer);
  }, []);

  return time;
}
