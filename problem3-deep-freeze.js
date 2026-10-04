// Problem 3 - Deep Freeze
function deepFreeze(obj) {
  // Freeze nested objects first
  Object.values(obj).forEach((value) => {
    if (typeof value === "object" && value !== null && !Object.isFrozen(value)) {
      deepFreeze(value);
    }
  });

  // Then freeze the object itself and return it
  return Object.freeze(obj);
}

const config = deepFreeze({ api: { baseUrl: "https://x.com" , retries: 3 }, debug: false });
config.api.baseUrl = "https://changed.com"; // ignored
config.debug = true;                        // ignored
console.log(config.api.baseUrl, config.debug); // "https://x.com" false
console.log(Object.isFrozen(config.api));      // true
