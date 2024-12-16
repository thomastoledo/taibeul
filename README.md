# Tabulous

A lightweight and powerful library for performing advanced operations on JavaScript arrays. Whether you need intersections, unions, differences, or optimized processing of large datasets, **`tabulous`** has you covered!

## Features

- ✨ **Intersection, Union, Difference**: Handle array set operations with ease.
- 🔄 **Remove duplicates**: Keep your arrays unique.
- ⚡ **Optimized for performance**: Designed for large datasets.
- 🔍 **Advanced search**: Search with custom predicates.
- 📋 **Custom sorting**: Flexible sorting with user-defined comparators.
- 🛠️ **Dependency-free**: Lightweight and fast.

---

## Installation

Install via `npm` or `yarn`:

```bash
npm install tabulous
```

Or:

```bash
yarn add tabulous
```

---

## Usage

### Import the library

```typescript
import {
  intersection,
  union,
  difference,
  unique,
  customSort,
  findBy,
  smartConcat,
  optimizedDifference
} from 'tabulous';
```

---

### Examples

#### **1. Intersection**

Find elements common to both arrays:

```typescript
const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];

console.log(intersection(arr1, arr2)); // [2, 3]
```

---

#### **2. Union**

Merge two arrays, keeping only unique values:

```typescript
const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];

console.log(union(arr1, arr2)); // [1, 2, 3, 4, 5]
```

---

#### **3. Difference**

Find elements in one array but not the other:

```typescript
const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];

console.log(difference(arr1, arr2)); // [1]
```

---

#### **4. Remove Duplicates**

Clean up duplicates in an array:

```typescript
const arr = [1, 1, 2, 3, 3];

console.log(unique(arr)); // [1, 2, 3]
```

---

#### **5. Custom Sorting**

Sort arrays with your own logic:

```typescript
const arr = [5, 2, 9, 1];

console.log(customSort(arr, (a, b) => a - b)); // [1, 2, 5, 9]
```

---

#### **6. Advanced Search**

Find an object in an array using a predicate:

```typescript
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

console.log(findBy(users, (user) => user.name === 'Alice')); // { id: 1, name: 'Alice' }
```

---

#### **7. Smart Concatenation**

Merge multiple arrays, removing duplicates:

```typescript
const arr1 = [1, 2];
const arr2 = [2, 3];
const arr3 = [3, 4];

console.log(smartConcat(arr1, arr2, arr3)); // [1, 2, 3, 4]
```

---

#### **8. Optimized Difference for Large Arrays**

Handle huge datasets efficiently:

```typescript
const largeArray1 = Array.from({ length: 1_000_000 }, (_, i) => i);
const largeArray2 = Array.from({ length: 500_000 }, (_, i) => i * 2);

console.log(optimizedDifference(largeArray1, largeArray2)); // [All odd numbers from 0 to 1,000,000]
```

---

## API Reference

### **`intersection<T>(array1: T[], array2: T[]): T[]`**

Returns elements common to both arrays.

### **`union<T>(array1: T[], array2: T[]): T[]`**

Returns unique elements from both arrays.

### **`difference<T>(array1: T[], array2: T[]): T[]`**

Returns elements in `array1` that are not in `array2`.

### **`unique<T>(array: T[]): T[]`**

Returns a new array with duplicate values removed.

### **`customSort<T>(array: T[], comparator: (a: T, b: T) => number): T[]`**

Sorts an array using a custom comparator function.

### **`findBy<T>(array: T[], predicate: (item: T) => boolean): T | undefined`**

Returns the first element matching the predicate.

### **`smartConcat<T>(...arrays: T[][]): T[]`**

Merges multiple arrays into one, removing duplicates.

### **`optimizedDifference<T>(array1: T[], array2: T[]): T[]`**

Finds the difference between two arrays using a `Set` for efficiency.

---

## License

MIT

---

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.  
