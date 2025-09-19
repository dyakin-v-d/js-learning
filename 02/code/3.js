function once(fn) {
  let called = false;
  let result;

  return function(...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args); // сохраняем результат
    }
    return result; // при повторных вызовах возвращаем тот же результат
  };
}

// Пример
const test = () => console.log(111);
const testOnce = once(test);

testOnce(); // 111
testOnce(); // ничего не выводит
testOnce(); // ничего не выводит
