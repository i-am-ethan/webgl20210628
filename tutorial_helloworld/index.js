main()

function main() {
    const canvas = document.getElementById("canvas")
    if (!canvas) {
        alert("canvasの使用に失敗しました")
        return
    }

    const ctx = canvas.getContext("2d")

    ctx.beginPath(); //描画開始
    ctx.moveTo(50, 100) //開始地点
    ctx.lineTo(70, 100)
    ctx.lineTo(70, 200)
    ctx.lineTo(50, 200)
    ctx.closePath() //描画閉じる
    ctx.fillStyle = "rgba(0, 0, 255, 1.0)"; //塗りつぶす色
    ctx.fill() //塗りつぶす

    ctx.beginPath(); //描画開始
    ctx.moveTo(90, 100) //開始地点
    ctx.lineTo(110, 100)
    ctx.lineTo(110, 200)
    ctx.lineTo(90, 200)
    ctx.closePath() //描画閉じる
    ctx.fillStyle = "rgba(0, 0, 255, 1.0)"; //塗りつぶす色
    ctx.fill() //塗りつぶす

    ctx.beginPath(); //描画開始
    ctx.moveTo(50, 150) //開始地点
    ctx.lineTo(110, 150)
    ctx.lineTo(110, 170)
    ctx.lineTo(70, 170)
    ctx.closePath() //描画閉じる
    ctx.fillStyle = "rgba(0, 0, 255, 1.0)"; //塗りつぶす色
    ctx.fill() //塗りつぶす





}