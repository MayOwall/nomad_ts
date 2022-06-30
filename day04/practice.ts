// generic을 사용하는 이유

/* type SuperPrint = {
   (arr: number[]): void;
   (arr: boolean[]): void;
   .....
 }; 
*/

// generic 사용하기
type SuperPrint = {
  <TypePlaceholder>(arr: TypePlaceholder[]): void;
};

const superPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};

superPrint([1, 2, 3, 4]);
superPrint([true, false, false, true]);
superPrint(["hello", 1]);

// 여러개의 generic 사용하기
type MultyGeneric = {
  <T, M>(arr: T[], brr: M): void;
};

const multyGeneric: MultyGeneric = (arr, brr) => {
  arr.forEach((i) => console.log(i, brr));
};

multyGeneric([1, 2, 3], "brr");

// 일반 함수에서 generic 사용하기
function justFunction<V>(a: V[]) {
  return a[0];
}

// Alias에서 generic 사용하기
type JustObject<E> = {
  name: string;
  extraInfo: E;
};

const justObject: JustObject<{ year: number }> = {
  name: "name",
  extraInfo: {
    year: 2021,
  },
};
