import { useEffect } from 'react';

export default function useEvent(event, handler) {

  useEffect(() => {

    // To initiate the event
    window.addEventListener(event, handler);

    // To cleanup the event every time we re-render the component
    return () => {
      window.removeEventListener(event, handler);
    };
  });
}