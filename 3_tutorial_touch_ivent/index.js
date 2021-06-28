let ctx;

main()

function main() {
    const canvas = document.getElementById("canvas")
    if (!canvas) {
        alert("canvasを取得できませんでした")
    }

    ctx = canvas.getContext("2d")

    canvas.addEventListener("mousedown", (ev) => {
        const SIZE = 10;
        const x = ev.clientX
        const y = ev.clientY

        ctx.fillRect(x, y, SIZE, SIZE)
    })


    // canvas.onmousedown = click

    // function click(ev) {
    //     const SIZE = 10;
    //     const x = ev.clientX
    //     const y = ev.clientY

    //     ctx.fillRect(x, y, SIZE, SIZE)
    // }
}