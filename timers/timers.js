//setTimeout(() => { alert("1234"); }, 3000); /*´Códifo simplificado con un función*/
var timer = setInterval(() => { alert("12232") }, 3000); /*Par que repita el function */
setTimeout(() => { clearInterval(timer); }, 10 * 1000);