function water() {
    return new Promise((reslove, reject)=>{
setTimeout (()=>{
    const waterfilled =true;
    if (waterfilled) {
        reslove("Water can filled")
    } else {
        reject("Water not filled")
    }
    
},4000)
    })
   
}

function roomclean() {
    return new Promise((reslove, reject)=>{
setTimeout (()=>{
    const roomcleaned = true;
    if (roomcleaned) {
        reslove("Room cleaned")
    } else {
        reject("Room not cleaned")
    }
    
},2000)
    })
    
}

function trash() {
    return new Promise((reslove, reject)=>{
setTimeout (()=>{
    const trashout = false;
    if (trashout) {
        reslove("trash out")
    } else {
        reject("trash out not completed")
    }
    
},1000)
    })
    
}

water().then(value=>{console.log(value);return roomclean()})
.then(value=>{console.log(value);return trash()
})
.then(value=>{console.log(value);console.log("All Task completed");

})
.catch((error)=>{
    console.log(error);
});