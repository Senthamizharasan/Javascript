function water() {
    return new Promise((resolve, reject) => { // Fixed 'reslove' to 'resolve'
        setTimeout(() => {
            const waterfilled = true;
            if (waterfilled) {
                resolve("Water can filled");
            } else {
                reject("Water not filled");
            }
        }, 4000);
    });
}

function roomclean() {
    return new Promise((resolve, reject) => { // Fixed 'reslove' to 'resolve'
        setTimeout(() => {
            const roomcleaned = true;
            if (roomcleaned) {
                resolve("Room cleaned");
            } else {
                reject("Room not cleaned");
            }
        }, 2000);
    });
}

function trash() {
    return new Promise((resolve, reject) => { // Fixed 'reslove' to 'resolve'
        setTimeout(() => {
            const trashout = false;
            if (trashout) {
                resolve("Trash out");
            } else {
                reject("Trash out not completed");
            }
        }, 1000);
    });
}

async function perform() {
    try {
        const watertask = await water();
        console.log(watertask); // Fixed to log the task result, not the function

        const cleantask = await roomclean();
        console.log(cleantask); // Fixed to log the task result, not the function

        const trashtask = await trash();
        console.log(trashtask); // Fixed to log the task result, not the function

        console.log("All tasks completed");
    } catch (error) {
        console.log(error); // Logs the error properly
    }
}

perform();