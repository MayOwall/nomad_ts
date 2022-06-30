/*
generics. call signatures 등 이때까지 배운 것을 활용하여 아래 함수를 구현하세요.

last(arr): 이 함수는 array의 마지막 아이템을 리턴해야 합니다.
prepend(arr, item): 이 함수는 array의 시작에 아이템을 넣고, 리턴해야 합니다.
*/

function last<T>(arr: T[]): T {
  return arr[arr.length - 1];
}

function prepand<A>(arr: A[], item: any) {
  return arr.unshift(item);
}

console.log(last([1, 2, 3]));
console.log(prepand([1, 2, 3], "4"));
