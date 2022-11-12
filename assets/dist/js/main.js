document.addEventListener('DOMContentLoaded', (event) => {
    var myModal = new bootstrap.Modal(document.getElementById("myModal"), {});
        document.onreadystatechange = function () {
        myModal.show();
        let aceitamusica = document.querySelector('button#play');
        let musicadeemo = document.querySelector('audio');
        aceitamusica.addEventListener('click', (event) =>{
            musicadeemo.play();
            myModal.hide();
        })

    };
})