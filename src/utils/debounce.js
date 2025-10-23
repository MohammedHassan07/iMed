import { useEffect } from "react";

function debounce(cb, ...dependency) {
useEffect(() => {
    const delayDebounce = setTimeout(() => {
      cb();
    }, 400); // wait 400ms after user stops typing
    return () => clearTimeout(delayDebounce);
  }, dependency);
}
export default debounce