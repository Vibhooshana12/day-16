let container=document.createElement("div")
container.className="container"
document.body.append(container)

let span1=document.createElement("span")
span1.setAttribute("id","main")
container.append(span1)

function countdown(value, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            document.getElementById("main").innerHTML = `<h1><b>${value}</b></h1>`;
            resolve();
        }, delay);
    });
}

async function start_Countdown() {
    try {
        for (let i = 10; i >= 1; i--) {
            await countdown(i, 1000);
        }
        await countdown("Happy Independence Day", 1000);
    } catch (error) {
        console.error(error);
    }
}
start_Countdown();
