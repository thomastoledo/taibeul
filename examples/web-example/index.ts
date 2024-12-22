import {
    intersection,
    union,
    difference,
    unique,
    isEqual,
    customSort,
    findBy,
    smartConcat,
    optimizedDifference,
  } from 'taibeul';
  
  // Example: Intersection of arrays
  const array1 = [1, 2, 3, 4];
  const array2 = [3, 4, 5, 6];
  console.log('Intersection:', intersection(array1, array2)); // [3, 4]
  
  // Example: Union of arrays
  console.log('Union:', union(array1, array2)); // [1, 2, 3, 4, 5, 6]
  
  // Example: Difference between arrays
  console.log('Difference (array1 - array2):', difference(array1, array2)); // [1, 2]
  
  // Example: Unique elements
  const duplicates = [1, 2, 2, 3, 4, 4];
  console.log('Unique:', unique(duplicates)); // [1, 2, 3, 4]
  
  // Example: Array equality
  console.log('Are arrays equal:', isEqual([1, 2, 3], [1, 2, 3])); // true
  
  // Example: Custom sorting
  const unsorted = [3, 1, 2];
  console.log('Custom Sort:', customSort(unsorted, (a, b) => a - b)); // [1, 2, 3]
  
  // Example: Find by predicate
  console.log('Find by condition:', findBy(array1, (item) => item > 2)); // 3
  
  // Example: Smart concat
  console.log('Smart Concat:', smartConcat([1, 2], [2, 3], [3, 4])); // [1, 2, 3, 4]
  
  // Example: Optimized difference for large arrays
  console.log('Optimized Difference:', optimizedDifference(array1, array2)); // [1, 2]
  