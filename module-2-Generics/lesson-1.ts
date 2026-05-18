// this will filter anything ...
function filterUntyped(array: any[], test: (value: any) => boolean): any[] {
  const result: any[] = [];

  for (const val of array) {
    if (test(val)) {
      result.push(val);
    }
  }

  return result;
}

// filter numbers

// ... and now strings

export {};
