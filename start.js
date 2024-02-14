//console.log('Мяу');

var amogus='gaga';

let red,green,orInBeetween;

const wall=['foo','bar'];


let me = wall[0] + wall[1];
//console.log(me);


const user = {
  name: 'John',
  age: 30,
};

//console.log(user.name);

//console.log(v);
var v=1;

animalType ='fish';
switch (animalType) {
    case 'dog': {
      const legs = 4
      const species = 'mammal'
      break
    }
  
    case 'fish': {
      const legs = 0;
      const swims = true;
      //console.log(legs);
      break
    }
  }


  function outer() {
    let a = 42;
  
    function inner() {
      console.log(a);
    };
  
    return inner;
  };
  
  const accessToInner=outer();
  //accessToInner();






  function counter() {
    // Мы используем let, потому что будем менять значение,
    // const не подойдёт.
    let state = 0;
  
    function increase() {
      state++;
    };
  
    function decrease() {
      state--;
    };
  
    // Функция valueOf будет выводить значение.
    function valueOf() {
      console.log(state);
    };
  
    // А наружу мы дадим только лишь доступ к этим функциям.
    // Вернём объект, значениями полей которого будут функции
    // increase и decrease.
    //
    // Прямого доступа к переменной state всё ещё нет,
    // но внешний код может изменять её состояние опосредованно —
    // через функции increase и decrease.
    return {
      increase,
      decrease,
      valueOf,
    }
  };
  
  const ticktock = counter();
  const ticktock2 =counter();

  ticktock.increase();
  ticktock.valueOf();
  //Такое контролируемое сокрытие доступа с помощью области видимости называется замыканием.
  //Замыкания удобны тем, что каждый новый вызов создаёт отдельную область, в которой значения абсолютно независимы друг от друга: На примере ticktick2
  ticktock2.decrease();
  ticktock2.valueOf();



  chg=7;
  function noChange() {
    chg=10;
  };
  noChange();
  console.log(chg);//а нам надо было 7)) это проблема поднятия







  (function gora() {
    console.log('бляяя фейс');
  })();//это IIFE функция вызывается сразу после объявления
 
  /* 
 
 IIFE состоит из двух частей:

Функция с лексической областью видимости, заключённая в круглые скобки
Мгновенно выполняющееся функциональное выражение ()
Функция внутри скобок создаёт внутри себя область видимости, доступ к которой есть только у неё. Всё, что внутри функции, остаётся только внутри.

*/
(function () {
    let name = "Дока Дог";
    console.log(name);
})();

(function () {
    let name = "Гав-Гав";
    console.log(name);
})();

// Никаких конфликтов
/*
Также переменная, которой присвоено значение IIFE, хранит в себе результат выполнения функции, но не саму функцию.

let result = (function () {
    let name = "Дока Дог";
    return name;
})();

console.log(result); //Дока Дог
*/