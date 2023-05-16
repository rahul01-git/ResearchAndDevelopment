import "./App.css";

function App() {
  const learnReactPromise = new Promise((resolve, reject) => {
    let x = 1;
    if (x === 1)
      setTimeout(() => {
        resolve("success bcz x = 1");
      }, 2000);
    else reject("error bcz x != 1");
  });

  learnReactPromise
    .then((msg) => console.log(msg))
    .catch((msg) => console.log(msg));

  console.log("arko kei vairaxa");
  return (
    <>
      <div>Hello world</div>
    </>
  );
}

export default App;
