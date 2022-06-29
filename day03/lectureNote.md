# Functions

## 3.0 Call Signatures

call signature란 하무 이름 위에 커서를 올렸을 때 뜨는<br/>
파라미터 타입 정보, 리턴 타입 정보 등을 말한다.

<br/>

즉 타입스크립트가 생각하는 함수 호출, 반환에 대한 규칙

<br/>

이러한 call signature는 직접 만들 수 있다.

```tsx
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;
```

<br/>

call signature를 미리 지정 해 줌으로써<br/>
함수에 일일히 타입을 지정 해 주지 않아도 된다는 장점이 있다.

<br>
<br>

## 3.1 Overloading

패키지, 라이브러리는 오버로딩을 매우 많이 사용한다.<br/>
그러므로 오버로딩에 대해 잘 아는 것이 필요하다.<br/>

### 오버로딩이란?

오버로딩은 하나의 함수가 여러개의 call signature를 가졌을 때 발생한다.<br/><br/>

즉 하나의 함수에서<br/>
2개 이상의 다른 매개변수 타입 또는 리턴 타입을 가지는 것을 의미한다.<br/><br/>

타스에서는 오버로드 signature를 작성하여<br/>
오버로딩을 만들 수 있다.<br/><br/>

오버로딩의 예시 : Next.js<br/>

```tsx
Router.push({
  path: "/home",
  state: 1,
});

Router.push("/home");
//다른 타입의 인자를 보냈음에도 똑같이 작동하는 것을 볼 수 있다.
```

```tsx
type Config = {
	path: string,
	state: object
}

type Push = {
	(path: string): void
	(config: Config): void
}

//config의 타입에 따라 다르게 작동할 수 있도록 해 준다.
const push: Push = (config) => {
	if(typeof config === "string") {
		console.log(config);
	} else {
		console.log(config.path);
	}
```

<br/>

오버로딩 타입은<br/>
인자의 개수를 다르게 지정 해 줄 수도 있다.<br/><br/>

```tsx
type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

//c는 옵션이므로 ?:를 통해 선택사항이라고 말해주는 것이 필요하다.
const add: Add = (a, b, c?: number) => {
  // 그리고 c에 대한 조건문도 작성 해주자~
  if (c) return a + b + c;
  return a + b;
};
```
