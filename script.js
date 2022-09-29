function myDisplayer(sum) {
    console.log(sum);
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);
  
  





  setTimeout(()=>{
    console.log("1")
    
        setTimeout(()=>{
        console.log("2")
    
            setTimeout(()=>{
            console.log("3")
    
                setTimeout(()=>{
                console.log("4")
    
                    setTimeout(()=>{
                console.log("5")
    
                    setTimeout(()=>{
                    console.log("6")
    
                        setTimeout(()=>{
                        console.log("7")
                                       },7000)
                                 },6000)
                            },5000)
                    },4000)
             },3000)
       },2000)
},1000)








  setTimeout(() => {
    let a = new Promise((resolve,reject) => 
    {resolve(setTimeout(() => 
        {console.log('1')
            setTimeout(() => {
                console.log('2')
                setTimeout(() => {
                    console.log('3')
                    setTimeout(() => {
                        console.log('4')
                        setTimeout(() => {
                            console.log('5')
                            setTimeout(() => {
                                console.log('6')
                                setTimeout(() => {
                                    console.log('7')
                                }, 7000);
                            }, 6000);
                        }, 5000);
                    }, 4000);
                }, 3000);
            }, 2000);
        }, 1000));
    })
    a.then().catch();
});






let a = new Promise((resolve,reject)=>{
    let a = "check"
    if(a == "check"){
        resolve("promise Resolved")
    }
    else reject("promise Reject")

})
a.then((data)=>{console.log(data)}).catch((data)=>{console.log(data)})
            




let words = document.querySelectorAll(".word");
        console.log()
        const animateAll = (animate) => 
        {setTimeout(() => {
                animate(words[0]);
                setTimeout(() => {
                    animate(words[1]);
                    setTimeout(() => {
                        animate(words[2]);
                    }, 1000)
                }, 1000)
            }, 1000)
        }
        const animate = (word) => {
            word.classList.add("animate");
        }
        animateAll(animate);







        let x= new Promise((resolve,reject)=>{
            let a= 99;
             if(a == 99){
                resolve ("resolved")
             } 
             else reject ("rejected")
        })
        
        x.then((a)=>{console.log(a)}).catch((a)=>{console.log(a)})








        async function callback(){
        
            let x= new Promise((resolve,reject)=>{
                let a= 99;
                 if(a == 99){
                    resolve ("resolved")
                 } 
                 else reject ("rejected")
            })
            
            await x.then((a)=>{console.log(a)}).catch((b)=>{console.log(b)})
            console.log("async and await")
            }
            
            callback()










            let a1 = true;
            let b = new Promise((resolve, reject) => {
                let x = 100
                if(x > 10){
                    resolve("Resolved")
                }
                else{
                    reject("Rejected")
                }
            });
            
            Promise.all([a1,b]).then((a1) => {
              console.log(a1);
            });
            
            