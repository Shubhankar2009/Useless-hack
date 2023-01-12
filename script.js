function Click() {
    let ball = document.getElementById('ball')
    ball.style.top = "200px"
    setTimeout(() => {
        ball.style.top = "700px"
    }, 1000);
}