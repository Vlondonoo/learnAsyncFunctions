const {taskOne ,taskTwo} = require('./tasks');

async function main(){
    try{
        console.time('medida del time');
        const results = await Promise.all([taskOne(),taskTwo()])
        // let value = await taskOne();
        // let value2 = await taskTwo();
        console.timeEnd('medida del time');
        console.log('taskOne',results[0]);
        console.log('taskOne',results[1]);
        // console.log('taskOne',value);
        // console.log('taskTwo',value2);
    }catch(e){
        console.error(e);
   }


}

main();
