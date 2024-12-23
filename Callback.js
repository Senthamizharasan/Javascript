//Callback hell

// function Task1(x) {
//     console.log("Task1");
//     x()
    
// }

// function Task2(y) {
//     console.log("Task2");
//     y()
    
// }

// function Task3(z) {
//     console.log("Task3");
//     z()
    
// }

// function Task4() {
//     console.log("Task4");
    
    
// }
// Task1(()=>{
//     Task2(()=>{
//         Task3(Task4)
//     })
// })

//Callback hell

function Task1(x) {
    setTimeout(()=>{
        console.log("Task1");
        x()
    },4000)
    
    
}

function Task2(y) {
    setTimeout(()=>{
        console.log("Task2");
        y()
     
    },500)
       
}

function Task3(z) {
    setTimeout(()=>{
        console.log("Task3");
        z()
    },3000)
      
}

function Task4() {
    setTimeout(()=>{
        console.log("Task4");
        
    },2000)
     
    
}
Task1(()=>{
    Task2(()=>{
        Task3(Task4)
    })
})
 