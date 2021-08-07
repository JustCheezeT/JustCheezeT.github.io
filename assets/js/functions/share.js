function share() {
    var dummy = document.createElement('input'),
        text = window.location.href;

    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);

    document.getElementById("share").textContent = "Copied!"
    setTimeout(function() {
        document.getElementById("share").textContent = "Chia sẻ!"
    }, 3000);
}