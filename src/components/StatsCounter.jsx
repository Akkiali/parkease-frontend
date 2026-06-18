import { useEffect, useState } from "react";

function StatsCounter({ end, suffix = "" }) {
   const [count, setCount] = useState(0);

   useEffect(() => {
      let start = 0;

      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
         start += increment;

         if (start >= end) {
            setCount(end);
            clearInterval(timer);
         } else {
            setCount(Math.floor(start));
         }
      }, 16);

      return () => clearInterval(timer);
   }, [end]);

   return (
      <>
         {count.toLocaleString()}
         {suffix}
      </>
   );
}

export default StatsCounter;