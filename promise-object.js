let promise=new Promise((resolve,reject)=>{
    const x='a';
    const y='a';

    if(x===y)
    {
        resolve();
    }
    else
    {
        reject();
    }
})

promise.then(()=>{
    console.log("success");
})

.catch(()=>{
    console.log("failure");
})