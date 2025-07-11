function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
    return new Promise((resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;

        function flip() {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);

            if (result === "heads") {
                headsCount++;
                if (headsCount === 5) {
                    resolve(`It took ${attempts} tries to flip five "heads"`);
                    return;
                }
            } else {
                headsCount = 0;
            }

            // Continue flipping asynchronously
            setTimeout(flip, 0); // allow the event loop to process
        }

        flip(); // Start flipping
    });
}

fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err));

console.log("When does this run now?");