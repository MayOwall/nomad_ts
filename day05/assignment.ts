class Word {
  constructor(public term: string, public def: string) {}
}

const 수박 = new Word("수박", "여름 과일. 박과에 속하는 덩굴식물");
const 살구 = new Word(
  "살구",
  "여름 과일. 장미과에 속하는 수목인 살구나무의 열매"
);
const 복숭아 = new Word(
  "복숭아",
  "여름 과일. 장미과에 속하는 복숭아나무의 열매"
);
const 참외 = new Word(
  "참외",
  "여름 과일. 박과에 속하는 한해살이 덩굴식물, 멜론의 일종"
);

type Words = {
  [key: string]: string;
};
const alertNoExist = (method: string, term: string): string => {
  return `${method} : Word ${term} does not exist in the dictionary.\nPlease check the word.`;
};

class Dict {
  private words: Words;

  constructor() {
    this.words = {};
  }

  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
      return `Word [${word.term}] is successfully added.`;
    }
    return `Word [${word.term}] is already exist.`;
  }
  get(term: string) {
    if (this.words[term]) {
      return `${term} : ${this.words[term]}`;
    }
    return alertNoExist("GET", term);
  }
  delete(term: string) {
    if (this.words[term]) {
      delete this.words[term];
      return `Word [${term}] is successfully deleted.`;
    }
    return alertNoExist("DELETE", term);
  }
  update(term: string, def: string) {
    if (this.words[term]) {
      this.words[term] = def;
      return `Word [${term}]'s definition is successfully updated.`;
    }
    return alertNoExist("UPDATE", term);
  }
  showAll() {
    const wordList = Object.keys(this.words);
    if (wordList.length) {
      return `단어 목록 : ${wordList.map((word) => {
        return word;
      })}`;
    }
    return `There is no words in dictionary`;
  }
  count() {
    const count = Object.keys(this.words).length;
    if (count !== 0) {
      return `단어 수 : ${count}`;
    }
    return "There is no words in dictionary";
  }
}

const fruitDict = new Dict();

console.log(fruitDict.showAll());

console.log(fruitDict.add(수박));
console.log(fruitDict.add(살구));
console.log(fruitDict.add(복숭아));
console.log(fruitDict.add(복숭아));
console.log(fruitDict.add(참외));

console.log(fruitDict.showAll());
console.log(fruitDict.count());

console.log(fruitDict.get("수박"));
console.log(fruitDict.get("포도"));

console.log(fruitDict.delete("수박"));
console.log(fruitDict.delete("포도"));

console.log(fruitDict.showAll());
console.log(fruitDict.count());
