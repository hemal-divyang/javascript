const myPromise = new Promise((resolve,reject)=>{
    let a = true;
    setTimeout(()=>{
        return a ? resolve('a is found!'): reject('sorry, no a');
    },3000)
});
myPromise
.then(res=>{console.log(res)})
.catch(err=>{console.log(err)})