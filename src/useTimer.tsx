import { useState, useEffect } from 'react';


export default function useTimer(): [number, () => void, () => void] {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  let timeout: NodeJS.Timeout;

  useEffect(() => {
    if (isRunning) {
      timeout = setTimeout(() => {
        setTimer(timer + 1);
      }, 1000);
    }
  }, [timer, isRunning])

  function startTimer() {
    setIsRunning(true);
  }

  function resetTimer() {
    setIsRunning(false);
    clearTimeout(timeout);
    setTimer(0);
  }

  return [timer, startTimer, resetTimer]
}

