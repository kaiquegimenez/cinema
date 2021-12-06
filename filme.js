function changeImage(image) {
  if (image === 1) {
      document.getElementById("image_principal").src = "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/91/47/20224867.jpg";
  } else if (image === 2) {
    document.getElementById("image_principal").src = "https://img.elo7.com.br/product/zoom/26928B5/big-poster-o-senhor-dos-aneis-o-retorno-do-rei-lo03-90x60-cm-presente-geek.jpg";
  } else {
    document.getElementById("image_principal").src = "https://www.omelete.com.br/imagens/cinema/news/lotr_rotk/poster_aragornp.jpg";
  }
}