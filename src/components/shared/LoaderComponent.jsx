import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import layoutSelectors from "/src/store/selectors/layout";
import classNames from "/src/utilities/classNames";

const LoaderComponent = (props) => {
  const { className, ...propsRest } = props;

  const [initLoading, setInitLoading] = useState(true);
  const loading = useSelector(layoutSelectors.selectIsLoading);

  // Ref to all <path> elements
  const pathsRef = useRef([]);

  const body = document.body;

  useEffect(() => {
    const finishedAnimations = [];

    const handleAnimationFinished = () => {
      // Add temp content to increment array's length so it matches the pathsRef array
      finishedAnimations.push(finishedAnimations.length);

      // Check if all paths animations are finished then remove the loader
      if (finishedAnimations.length === pathsRef.current.length) {
        setTimeout(() => {
          body.classList.remove("init-loading", "loading");
          setInitLoading(false);
        }, 250);
      }
    };

    const launchInitLoader = () => {
      // If document is visible, stop event listener and launch the loader
      if (!document.hidden) {
        document.removeEventListener("visibilitychange", launchInitLoader);

        const paths = pathsRef.current;
        body.classList.remove("init-loading-pending");
        body.classList.add("init-loading");

        // Check when each path's animation finishes
        paths.map((path) =>
          path.addEventListener("animationend", handleAnimationFinished)
        );
      } else {
        // Add init loader pending to hide content when user switches tabs
        body.classList.add("init-loading-pending");
      }
    };

    if (pathsRef.current.length > 0 && initLoading) {
      // Launch loader on page load if page is visible, if not, add event listener to the page visibility
      launchInitLoader();

      if (document.visibilityState === "hidden") {
        document.addEventListener("visibilitychange", launchInitLoader);
      }
    }

    return () => {
      pathsRef.current.map((path) =>
        path.removeEventListener("animationend", handleAnimationFinished)
      );

      document.removeEventListener("visibilitychange", launchInitLoader);
    };
  }, [pathsRef]);

  useEffect(() => {
    body.classList.add("loading");
    setTimeout(() => body.classList.remove("loading"), 350);
  }, [loading]);

  return (
    <div
      className={classNames("loader", initLoading ? "loader--init" : "")}
      {...propsRest}
    >
      <svg viewBox="0 0 192 77" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          ref={(el) => (pathsRef.current[0] = el)}
          d="M10.04 76.5C14.7345 76.5 18.54 72.6944 18.54 68C18.54 63.3056 14.7345 59.5 10.04 59.5C5.34562 59.5 1.54004 63.3056 1.54004 68C1.54004 72.6944 5.34562 76.5 10.04 76.5Z"
          stroke="#AB2BC0"
          strokeMiterlimit="10"
          className="logo-path-1"
          fill="none"
        ></path>
        <path
          ref={(el) => (pathsRef.current[1] = el)}
          d="M0.53997 7.50002C0.86997 4.41002 1.53997 2.50002 3.53997 1.50002C4.74997 0.890015 8.63997 -0.849985 16.54 2.50002C34.3 10.03 65.52 40.28 61.54 64.5C61.1 67.2 60.11 73.22 55.54 75.5C51.8 77.37 46.25 76.44 44.54 73.5C42.4 69.83 46.83 65.64 48.54 60.5C59.54 27.5 -1.30003 24.88 0.53997 7.50002Z"
          stroke="#AB2BC0"
          strokeMiterlimit="10"
          className="logo-path-2"
          fill="none"
        ></path>
        <path
          ref={(el) => (pathsRef.current[2] = el)}
          d="M41.54 7.50002C41.87 4.41002 42.54 2.50002 44.54 1.50002C45.75 0.890015 49.64 -0.849985 57.54 2.50002C75.3 10.03 106.52 40.28 102.54 64.5C102.1 67.2 101.11 73.22 96.54 75.5C92.8 77.37 87.25 76.44 85.54 73.5C83.4 69.83 87.83 65.64 89.54 60.5C100.54 27.5 39.7 24.88 41.54 7.50002Z"
          stroke="#AB2BC0"
          strokeWidth="0.75"
          strokeMiterlimit="10"
          className="logo-path-3"
          fill="none"
        ></path>
        <path
          ref={(el) => (pathsRef.current[3] = el)}
          d="M171.95 28.76C170.31 24.73 180.33 19.19 178.64 14.54C176.98 9.95 165.43 10.32 164.42 10.36C143.1 11.21 122.88 31.27 125.95 37.96C129.35 45.39 159.01 31.08 170.28 44.65C175.52 50.96 175.02 61.18 171.12 67.23C160.87 83.11 124.64 74.22 123.45 67.23C123.12 65.28 125.38 62.62 127.63 62.21C131.08 61.58 132.98 66.47 137.67 68.9C145.57 73 159.36 69.04 161.09 62.21C162.47 56.74 156.22 49.15 149.38 47.16C144.11 45.63 141.83 48.39 133.49 48.83C131.77 48.92 116.61 49.72 113.42 43.81C109.4 36.37 124.16 17.84 141.86 8.68C148.12 5.44 165.31 -3.45 178.66 4.5C188.01 10.07 194.29 23.19 190.37 28.75C186.66 34 173.63 32.83 171.97 28.75L171.95 28.76Z"
          stroke="#1E73E4"
          strokeWidth="0.75"
          strokeMiterlimit="10"
          className="logo-path-4"
          fill="none"
        ></path>
      </svg>
    </div>
  );
};

export default LoaderComponent;
