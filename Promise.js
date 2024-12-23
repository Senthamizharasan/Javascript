function water() {
    return new Promise((reslove, reject)=>{
setTimeout (()=>{
    reslove("Water can filled")
},4000)
    })
   
}

function roomclean() {
    return new Promise((reslove, reject)=>{
setTimeout (()=>{
    reslove("Room cleaned")
},2000)
    })
    
}

function trash() {
    return new Promise((reslove, reject)=>{
setTimeout (()=>{
    reslove("trash out")
},1000)
    })
    
}

water().then(value=>{console.log(value);return roomclean()})
.then(value=>{console.log(value);return trash()
})
.then(value=>{console.log(value);console.log("All Task completed");

})