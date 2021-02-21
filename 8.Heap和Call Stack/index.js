const addOne = value => value + 1;
const addTwo = value => addOne(value + 1);
const addThree = value => addTwo(value + 1);
const calculation = () => addThree(1) + addTwo(2);
// 函数调用
calculation();

