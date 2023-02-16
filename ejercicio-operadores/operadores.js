// OPERADOR ||
console.log(false || {});//OR siempre se queda con lo que no es false
console.log("string" || true);//OR siempre se queda con la primera que no es false
console.log([] || 100);//OR siempre se queda con la primera que no es false
console.log(null || "Prueba");//Para OR, null es false, por lo que se queda con la que no es false
console.log("" || true);//Para OR, "" es false, por lo que se queda con la que no es false
console.log(undefined || false);//Para OR, undefined es false, por lo que pasa a la siguiente que es false y se queda con ella

// Operador &&
console.log(false && {});//Con AND se tienen que cumplir ambas, en cuanto la primera es false, se queda con eso
console.log("string" && true);//Como se cumplen ambas, se queda con la ultima
console.log([] && 100);//Como se cumplen ambas, se queda con la ultima
console.log(null && "Prueba");//Para AND, null es false, como la primera no se cumple, se queda con esa
console.log("" && true);//Para AND, "" es false, como no se cumple se queda con esa
console.log(undefined && false);//Para AND, undefined es false, como no se cumple se queda con esa

// Operador ??
console.log(false ?? {});//Para Nullish Coalescing, solo null y undefinied trabajan con false, por lo que al cumplirse false, se queda con el
console.log("string" ?? true);//Como la primera se cumple se queda con esa
console.log([] ?? 100);//Como la primera se cumple se queda con esa
console.log(null ?? "Prueba");//Para Nullish Coalescing null es false, como la segunda se cumple se queda con esa
console.log("" ?? true);//Como la primera se cumple se queda con esa
console.log(undefined ?? false);//Para Nullish Coalescing solo null y undefined son como false, como false no lo es, la segunda se cumple y se queda con esa