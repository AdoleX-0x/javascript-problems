// Problem 2 - Object Diff (top-level keys only)
function diffObjects(oldObj, newObj) {
  const added = {};
  const removed = {};
  const changed = {};

  const oldKeys = new Set(Object.keys(oldObj));
  const newKeys = new Set(Object.keys(newObj));

  // Keys only in the new object were added
  for (const key of newKeys) {
    if (!oldKeys.has(key)) added[key] = newObj[key];
  }

  for (const key of oldKeys) {
    if (!newKeys.has(key)) {
      // Keys only in the old object were removed
      removed[key] = oldObj[key];
    } else if (oldObj[key] !== newObj[key]) {
      // Keys in both with different values were changed
      changed[key] = { from: oldObj[key], to: newObj[key] };
    }
  }

  return { added, removed, changed };
}

console.log(
  diffObjects(
    { name: "Setemi", role: "Engineer", country: "Jamaica" },
    { name: "Setemi", role: "Senior Engineer", city: "Kingston" }
  )
);
// { added: { city: 'Kingston' }, removed: { country: 'Jamaica' },
//   changed: { role: { from: 'Engineer', to: 'Senior Engineer' } } }
