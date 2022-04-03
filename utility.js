
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




function slugify(text) {
  return text
    .toString()               // Cast to string (optional)
    .normalize("NFKD")        // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
    .toLowerCase()            // Convert the string to lowercase letters
    .trim()                   // Remove whitespace from both sides of a string (optional)
    .replace(/\s+/g, "-")     // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-");  // Replace multiple - with single -
}

