//函数申明 函数提升
fun1();
function fun1() {
  return "fun1"
}
//函数表达式 报错函数未定义
fun2();
var fun2 = function() {
  return "fun2";
}
//匿名函数 相当于函数申明 ，报错因为未赋值，需要函数名
function() {
  return "fun3";
}

//立即执行函数 适用于函数表达式
var fun4 = function() {
  console.log("立即执行函数（函数表达式）");
}();

function fun4_1() {
  console.log("以上相当于此");
}
fun4_1();

//不适用于此
function fun5() {
  console.log("fun5");
}();

//() + * ! - 可将函数申明转化为函数表达式，以实现函数申明型的立即执行
(function(a) {
  console.log(a)
})("fun6");
