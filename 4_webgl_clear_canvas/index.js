function main() {
    const canvas = document.getElementById("canvas")

    const gl = canvas.getContext("webgl")
    if (!gl) {
        alert("WebGLコンテキストの取得に失敗")
        return
    }

    //canvasの色の設定
    gl.clearColor(0.0, 0.0, 0.0, 1.0)
    gl.clear(gl.COLOR_BUFFER_BIT) //描画領域を指定したクリアカラーでクリアする
}

main()