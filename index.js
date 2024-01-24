async function getAdvice() {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  console.log(data.slip.advice);
}

getAdvice(); // Call function
