const fs = require('fs');

setTimeout(()=> console.log('Timer 1 Finished'),0);

fs.readFile('./a-file.txt',() =>{
    setTimeout(() => console.log('Timer 2 finished'),0);
    setTimeout(() => console.log('Timer 3 finished'),3000);
    setImmediate(() => console.log('Immediate finished'));
    console.log('I/O Finished');
    });

    console.log("HELLO FROM THE OTHER SIDE");