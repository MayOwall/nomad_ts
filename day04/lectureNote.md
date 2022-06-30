## 3.2 Polymorphism

마치 마약 이름같군

### 다형성( Polymorphism )이란 무엇일까?

다형성이란 프로그래밍 언어의 요소들(변수, 객체, 함수 등)이

다양한 자료형을 가질 수 있도록 허가되는 성질을 의미한다.

반대어 : **단형성 ( monomorphism )**

예 )

concrete type : 우리가 전부터 봐왔던 타입들

number, boolean, string….etc

### Generic이란?

타입을 함수의 파라미터처럼 사용하는 것을 의미한다.

즉 타입을 외부에서 받아서 그것을 내부에서 이용하는 것을 의미한다.

```tsx
// 타입 자리를 차지하고 있는 T가 파라미터처럼 내부에서 반복적으로 사용되는 것을 볼 수 있다.
function getText<T>(text: T): T {
  return text;
}
```

generic을 이용하면 call signature를 다형성을 가지도록 만들 수 있다.

generic을 이용해 call signature를 작성 해 보자.

### Generic을 이용하여 다양한 타입에 유연하게 반응하는 call signature 만들기

1. 타스한테 generic을 사용할 것이라고 알려준다. (꺽쇠로 generic 선언하기)
2. 꺽쇠에 쓴 변수명을 타입 자리에 넣어준다.
3. 해당 꺽쇠의 변수명을 call signature 내부에서 타입 대신 사용 해 준다.

```tsx
//TypePlaceholder라는 이름으로 선언된 generic. 보통은 T를 많이 사용한다.
type SuperPrint = {
  <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder;
};

const superPrint: SuperPrint = (arr) => arr[0];

superPrint([1, 2, 3, 4]);
superPrint([true, false, false, true]);
superPrint(["hello", 1]);
```

<br/>
<br/>

## 3.3 Generics Recap

### any를 generic으로 사용하지 않는 이유

any는 코드의 타입을 지켜주지 않기 때문이다.

generic은 들어온 타입을 기억하고 해당 타입으로 제한을 해주지만,

any는 그런거 없이 들어오는 마음대로 나가는 마음대로 자유롭게 풀어 놓는다.

코드를 더 지키기 위해서는 any보다는 generic을 사용하도록 하자.

### 여러개의 generic 사용하기

generic은 한꺼번에 여러개도 사용 가능하다.

예)

```tsx
type MultyGeneric = {
  <T, M>(arr: T[], brr: M): void;
};

const multyGeneric: MultyGeneric = (arr, brr) => {
  arr.forEach((i) => console.log(i, brr));
};

multyGeneric([1, 2, 3], "brr");
```

<br/>
<br/>

## 3.4 Conclusion

사실 라이브러리 등을 직접 만들지 않는 한

generic을 사용하는 일은 거의 없을 것이다.

generic이 실제로 어떻게 사용되는지 알아보자.

### 일반 함수에서 generic 사용하기

```tsx
function justFunction<V>(a: V[]) {
  return a[0];
}
```

### Alias에서 generic 사용하기 ( 타입의 확장 )

```tsx
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
```
