const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

function drawHeart() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    let firstPoint = true;

    for (let t = 0; t <= Math.PI * 2; t += 0.01) {
        let x = 16 * Math.pow(Math.sin(t), 3);
        let y = 13 * Math.cos(t)
              - 5 * Math.cos(2 * t)
              - 2 * Math.cos(3 * t)
              - Math.cos(4 * t);

        let drawX = canvas.width / 2 + x * 9;
        let drawY = canvas.height / 2 - y * 9;

        if (firstPoint) {
            ctx.moveTo(drawX, drawY);   // IMPORTANT FIX
            firstPoint = false;
        } else {
            ctx.lineTo(drawX, drawY);
        }
    }

    ctx.closePath();
    ctx.fillStyle = "crimson";
    ctx.fill();
}

drawHeart();

canvas.addEventListener("click", () => {
    alert(
        "It's time you stick to growing old with me and plan on getting a dog and a cat and a horse and a giraffe with me, cuz I'm not leaving or letting you leave ❤️"
    );
});
