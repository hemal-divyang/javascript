//promise
let resolveAfter2Seconds =  new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });

//async call
async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds;
  console.log(result);
  // Expected output: "resolved"
}

asyncCall();
