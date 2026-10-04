// Problem 1 - Deep Equal
function deepEqual(objA, objB) {
  // Same value or same reference (also handles equal primitives)
  if (objA === objB) return true;

  // If either is not an object (or is null), they can't be deeply equal
  if (
    typeof objA !== "object" || objA === null ||
    typeof objB !== "object" || objB === null
  ) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  // Different number of keys means different objects
  if (keysA.length !== keysB.length) return false;

  // Every key in A must exist in B with an equal value (recursive)
  for (const key of keysA) {
    if (!Object.hasOwn(objB, key)) return false;
    if (!deepEqual(objA[key], objB[key])) return false;
  }

  return true;
}

console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // true
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })); // false
console.log(deepEqual({ a: 1 }, { a: 1, b: 2 }));                     // false
