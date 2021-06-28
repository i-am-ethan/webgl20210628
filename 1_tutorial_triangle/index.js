main()

function main() {
    const canvas = document.getElementById("canvas")
    if (!canvas) {
        alert("canvasの使用に失敗しました")
        return
    }

    const ctx = canvas.getContext("2d")

    ctx.beginPath(); //描画開始
    ctx.moveTo(120, 10) //開始地点
    ctx.lineTo(200, 150) //向かう方向
    ctx.lineTo(40, 150)
    ctx.closePath() //描画閉じる
    ctx.fillStyle = "rgba(0, 0, 255, 1.0)"; //塗りつぶす色
    ctx.fill() //塗りつぶす

}