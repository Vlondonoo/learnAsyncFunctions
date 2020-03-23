const util = require('util');
const sleep = util.promisify(setTimeout) //convierte funciones que se manejan con callback a funciones promesas


module.exports ={
   async taskOne(){
       try{
       // throw new Error('Problemas') //Lanza un error
        await sleep(4000);
       
         return 'one value returned'
       } catch(e){
            console.error(e);
       }
    
    },
    async taskTwo(){
        await sleep(2000);
        return 'returned two value'
    }
}