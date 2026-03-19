import { useEffect } from "react";
import { useLoading } from "../context/LoadingProvider";

const Loading = () => {
  const { setIsLoading } = useLoading();

  useEffect(() => {
    import("./utils/initialFX").then((module) => {
      const checkAndRun = () => {
        if (document.querySelector(".landing-info h3")) {
          if (module.initialFX) {
            module.initialFX();
          }
          setIsLoading(false);
        } else {
          requestAnimationFrame(checkAndRun);
        }
      };
      requestAnimationFrame(checkAndRun);
    });
  }, [setIsLoading]);

  return null;
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent: number = 100;
  
  function clear() {
    setLoading(100);
  }

  function loaded() {
    return Promise.resolve(100);
  }
  return { loaded, percent, clear };
};
