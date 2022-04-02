
// Debounce - best for input
/**
 *
 * @param {function} callback
 * @param {integer-> milliseconds} delay
 * @returns callback function
 */
function debounce(callback, delay = 1000) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const updateDebounce = debounce(() => {
  // implement the desired code
  console.log("update debouce");
});





// throttle - best for continuous updates with delay
/**
 *
 * @param {fucntion} callback
 * @param {integer -> milliseconds} delay
 * @returns
 */
function throttle(callback, delay = 1000) {
  let shouldWait = false;
  let waitingArgs;

  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false;
    } else {
      callback(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    callback(...args);
    shouldWait = true;

    setTimeout(timeoutFunc, delay);
  };
}

const updateThrottle = throttle(() => {
  // implement the desired code
  console.log("update throtte");
});




// Deep copy / clone
function deepCopy(val) {
  return JSON.parse(JSON.stringify(val));
}
