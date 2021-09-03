let card = document.querySelectorAll('.card');
// saat gambar diarahi kursor akan muncul Mark, 
// untuk menghindari gambar diklaim orang lain atau disalahgunakan

for (cards of card) {
    cards.addEventListener('mouseover', function (event) {
        if (event.target.id === "LA1") {
            event.target.setAttribute("src", "assets/gambar/lineartbr.jpg");
            return;
        } else if (event.target.id === "VA1") {
            event.target.setAttribute("src", "assets/gambar/vektorbr.jpg");
            return;
        } else if (event.target.id === "LA2"){
            event.target.setAttribute("src", "assets/gambar/la2br.jpg");
            return;
        } else if (event.target.id === "LA3"){
            event.target.setAttribute("src", "assets/gambar/la3br.jpg");
            return;
        } else if (event.target.id === "M1"){
            event.target.setAttribute("src", "assets/gambar/m_hpbr.jpg");
            return;
        } else if (event.target.id === "M2"){
            event.target.setAttribute("src", "assets/gambar/m_bukubr.jpg");
            return;
        } else if (event.target.id === "F1"){
            event.target.setAttribute("src", "assets/gambar/flatbr.jpg");
            return;
        } 
    });

    cards.addEventListener('mouseout', function (event) {
        if (event.target.id === "LA1") {
            event.target.setAttribute("src", "assets/gambar/lineart.jpg");
            return;
        }
        if (event.target.id === "VA1") {
            event.target.setAttribute("src", "assets/gambar/vektor.jpg");
            return;
        }
        if (event.target.id === "LA2"){
            event.target.setAttribute("src", "assets/gambar/la2.png");
            return;
        }
        if (event.target.id === "LA3"){
            event.target.setAttribute("src", "assets/gambar/la3.png");
            return;
        }
        if (event.target.id === "M1"){
            event.target.setAttribute("src", "assets/gambar/m_hp.jpg");
            return;
        }
        if (event.target.id === "M2"){
            event.target.setAttribute("src", "assets/gambar/m_buku.jpg");
            return;
        }
        if (event.target.id === "F1"){
            event.target.setAttribute("src", "assets/gambar/flat.png");
            return;
        } 
    });
}