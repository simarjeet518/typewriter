const sentence = "hello there from lighthouse labs";
  let interval = 1000;
 for(let char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
    },interval);
    interval += 50;
 }
 setTimeout(()=>{
    process.stdout.write('\n');
   },interval+1000);