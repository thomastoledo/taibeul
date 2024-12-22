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
  } from './taibeul';
  
  describe('Taibeul Utility Functions', () => {
    describe('intersection', () => {
      test('finds common elements between two arrays', () => {
        expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
      });
  
      test('returns empty array if no common elements', () => {
        expect(intersection([1, 2], [3, 4])).toEqual([]);
      });
  
      test('handles empty arrays', () => {
        expect(intersection([], [1, 2])).toEqual([]);
      });
    });
  
    describe('union', () => {
      test('returns unique elements from both arrays', () => {
        expect(union([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
      });
  
      test('handles duplicates across arrays', () => {
        expect(union([1, 1, 2], [2, 3, 3])).toEqual([1, 2, 3]);
      });
  
      test('handles empty arrays', () => {
        expect(union([], [1, 2])).toEqual([1, 2]);
      });
    });
  
    describe('difference', () => {
      test('returns elements in the first array but not in the second', () => {
        expect(difference([1, 2, 3], [2, 3])).toEqual([1]);
      });
  
      test('returns the first array if no elements are in the second', () => {
        expect(difference([1, 2], [3, 4])).toEqual([1, 2]);
      });
  
      test('handles empty arrays', () => {
        expect(difference([], [1, 2])).toEqual([]);
      });
    });
  
    describe('unique', () => {
      test('removes duplicates from an array', () => {
        expect(unique([1, 1, 2, 3, 3])).toEqual([1, 2, 3]);
      });
  
      test('handles arrays with no duplicates', () => {
        expect(unique([1, 2, 3])).toEqual([1, 2, 3]);
      });
  
      test('handles empty arrays', () => {
        expect(unique([])).toEqual([]);
      });
    });
  
    describe('isEqual', () => {
      test('checks if two arrays are equal', () => {
        expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
      });
  
      test('returns false for arrays with different lengths', () => {
        expect(isEqual([1, 2], [1, 2, 3])).toBe(false);
      });
  
      test('supports custom comparator', () => {
        expect(isEqual([{ a: 1 }], [{ a: 1 }], (a, b) => JSON.stringify(a) === JSON.stringify(b))).toBe(true);
      });
    });
  
    describe('customSort', () => {
      test('sorts an array using a custom comparator', () => {
        expect(customSort([3, 1, 2], (a, b) => a - b)).toEqual([1, 2, 3]);
      });
  
      test('handles already sorted arrays', () => {
        expect(customSort([1, 2, 3], (a, b) => a - b)).toEqual([1, 2, 3]);
      });
    });
  
    describe('findBy', () => {
      test('finds the first element matching a predicate', () => {
        expect(findBy([1, 2, 3], (item) => item > 1)).toBe(2);
      });
  
      test('returns undefined if no element matches', () => {
        expect(findBy([1, 2, 3], (item) => item > 3)).toBeUndefined();
      });
    });
  
    describe('smartConcat', () => {
      test('merges multiple arrays and removes duplicates', () => {
        expect(smartConcat([1, 2], [2, 3], [3, 4])).toEqual([1, 2, 3, 4]);
      });
  
      test('handles single arrays', () => {
        expect(smartConcat([1, 2, 3])).toEqual([1, 2, 3]);
      });
  
      test('handles empty arrays', () => {
        expect(smartConcat([], [])).toEqual([]);
      });
    });
  
    describe('optimizedDifference', () => {
      test('returns elements in the first array but not in the second (large arrays)', () => {
        expect(optimizedDifference([1, 2, 3, 4, 5], [4, 5, 6, 7])).toEqual([1, 2, 3]);
      });
  
      test('handles empty arrays', () => {
        expect(optimizedDifference([], [1, 2])).toEqual([]);
      });
  
      test('returns empty array if the first array is fully contained in the second', () => {
        expect(optimizedDifference([1, 2], [1, 2, 3])).toEqual([]);
      });
    });
  });
  