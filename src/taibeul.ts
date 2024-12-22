
/**
 * Finds the intersection of two arrays.
 */
export function intersection<T>(array1: T[], array2: T[]): T[] {
  return array1.filter((item) => array2.includes(item));
}

/**
 * Finds the union of two arrays.
 */
export function union<T>(array1: T[], array2: T[]): T[] {
  return Array.from(new Set([...array1, ...array2]));
}

/**
 * Finds the difference between two arrays.
 */
export function difference<T>(array1: T[], array2: T[]): T[] {
  return array1.filter((item) => !array2.includes(item));
}

/**
 * Removes duplicates from an array.
 */
export function unique<T>(array: T[]): T[] {
  return Array.from(new Set(array));
}

/**
 * Compares two arrays for equality using a custom comparator function.
 */
export function isEqual<T>(
  array1: T[],
  array2: T[],
  comparator: (a: T, b: T) => boolean = (a, b) => a === b
): boolean {
  if (array1.length !== array2.length) {
    return false;
  }
  return array1.every((item, index) => comparator(item, array2[index]));
}

/**
 * Sorts an array using a custom comparator function.
 */
export function customSort<T>(
  array: T[],
  comparator: (a: T, b: T) => number
): T[] {
  return [...array].sort(comparator);
}

/**
 * Finds the first element that matches a predicate.
 */
export function findBy<T>(
  array: T[],
  predicate: (item: T) => boolean
): T | undefined {
  return array.find(predicate);
}

/**
 * Merges multiple arrays into one, removing duplicates.
 */
export function smartConcat<T>(...arrays: T[][]): T[] {
  return unique(arrays.slice(1).reduce((acc, curr) => acc.concat(curr), arrays[0]));
}

/**
 * Optimized difference for large arrays using a Set.
 */
export function optimizedDifference<T>(array1: T[], array2: T[]): T[] {
  const set2 = new Set(array2);
  return array1.filter((item) => !set2.has(item));
}
