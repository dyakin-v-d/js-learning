function memoize(fn) {
  const cache = new Map();

  return function(...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log('Возвращаем из кэша:', args);
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

function slowAdd(a, b) {
  console.log('Вычисляем...');
  return a + b;
}

const memoizedAdd = memoize(slowAdd);

console.log(memoizedAdd(2, 3));
console.log(memoizedAdd(2, 3)); 
console.log(memoizedAdd(4, 5)); 
