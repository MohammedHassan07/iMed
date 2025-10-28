import { useEffect } from "react";

function useDebounceEffect(callback, dependencies) {
  useEffect(() => {
    const handler = setTimeout(() => {
      callback();
    }, 400);

    return () => clearTimeout(handler);
  }, dependencies);
}

export default useDebounceEffect;
