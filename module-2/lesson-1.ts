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
function filterNumbers(
  array: number[],
  test: (value: number) => boolean
): number[] {
  const result: number[] = [];

  for (const val of array) {
    if (test(val)) {
      result.push(val);
    }
  }

  return result;
}

// ... and now strings
//function filterString(

export {};
