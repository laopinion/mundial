$(document).ready(function() {
  //cuenta regresiva
  $('.contador').countdown('2018/06/14', function(event) {
    $('#dia').html(event.strftime('%D '));
    $('#hora').html(event.strftime('%H '));
    $('#minuto').html(event.strftime('%M '));
    $('#segundo').html(event.strftime('%S '));
  });

  /* Nota principal ultima noticias */
  const urlNotaPrincipal =
    'http://localhost/siteLaopinion/api/views/mundialrusia?display_id=services_1';

  fetch(urlNotaPrincipal, { cache: 'no-cache' })
    .then(function(res) {
      return res.json();
    })
    .then(function(notas) {
      notas.map(function(nota) {
        $('#notas .notaPrincipal h3').html(nota.node_title);

        if (nota.tipo == 'Video') {
          $('#notas .notaPrincipal .img').html(nota.imagesvideo);
          const iconVideo = document.createElement('span');
          iconVideo.setAttribute('class', 'iconVideo');
          document
            .querySelector('#notas .notaPrincipal')
            .appendChild(iconVideo);
        } else if (nota.tipo == 'Galería de imagenes') {
          $('#notas .notaPrincipal .img').html(nota.imagenes);
          const iconGaleria = document.createElement('span');
          iconGaleria.setAttribute('class', 'iconGaleria');
          document
            .querySelector('#notas .notaPrincipal')
            .appendChild(iconGaleria);
        } else {
          $('#notas .notaPrincipal .img').html(nota.imagen);
        }
      });
    });

  /* Mas notas ultimas noticias */
  const urlMasNotas =
    'http://localhost/siteLaopinion/api/views/mundialrusia?display_id=services_2&offset=1';

  fetch(urlMasNotas, { cache: 'no-cache' })
    .then(function(res) {
      return res.json();
    })
    .then(function(notas) {
      notas.map(function(nota, index) {
        const container = document.createElement('div');
        const img = document.createElement('div');
        const h3 = document.createElement('h3');
        const sombra = document.createElement('div');

        container.setAttribute('class', 'nota');
        img.setAttribute('class', 'img');
        sombra.setAttribute('class', 'sombra');

        h3.innerHTML = nota.node_title;

        if (nota.tipo == 'Video') {
          img.innerHTML = nota.imagesvideo;
          const iconVideo = document.createElement('span');
          iconVideo.setAttribute('class', 'iconVideo');
          container.appendChild(iconVideo);
        } else if (nota.tipo == 'Galería de imagenes') {
          img.innerHTML = nota.imagenes;
          const iconGaleria = document.createElement('span');
          iconGaleria.setAttribute('class', 'iconGaleria');
          container.appendChild(iconGaleria);
        } else {
          img.innerHTML = nota.imagen;
        }

        container.appendChild(img);
        container.appendChild(h3);
        container.appendChild(sombra);
        document.querySelector('#notas .masNotas').appendChild(container);
      });
    });

  /* Notas finales mundiales */
  const urlFinalesPrincipal =
    'http://localhost/siteLaopinion/api/views/mundialrusia?display_id=services_3&offset=3';

  fetch(urlFinalesPrincipal, { cache: 'no-cache' })
    .then(function(res) {
      return res.json();
    })
    .then(function(notas) {
      notas.map(function(nota, index) {
        $('#finalesMundiales .finales .principal h3').html(nota.node_title);

        if (nota.tipo == 'Video') {
          $('#finalesMundiales .finales .principal .img').html(
            nota.imagesvideo
          );
          const iconVideo = document.createElement('span');
          iconVideo.setAttribute('class', 'iconVideo');
          document
            .querySelector('#finalesMundiales .finales .principal')
            .appendChild(iconVideo);
        } else if (nota.tipo == 'Galería de imagenes') {
          $('#finalesMundiales .finales .principal .img').html(nota.imagenes);
          const iconGaleria = document.createElement('span');
          iconGaleria.setAttribute('class', 'iconGaleria');
          document
            .querySelector('#finalesMundiales .finales .principal')
            .appendChild(iconGaleria);
        } else {
          $('#finalesMundiales .finales .principal .img').html(nota.imagen);
        }
      });
    });

  /* Mas notas finales mundiales */
  const urlFinalesNotas =
    'http://localhost/siteLaopinion/api/views/mundialrusia?display_id=services_4&offset=5';

  fetch(urlFinalesNotas, { cache: 'no-cache' })
    .then(function(res) {
      return res.json();
    })
    .then(function(notas) {
      notas.map(function(nota, index) {
        const container = document.createElement('div');
        const img = document.createElement('div');
        const h3 = document.createElement('h3');
        const sombra = document.createElement('div');

        container.setAttribute('class', 'nota nota-' + index);
        img.setAttribute('class', 'img');
        sombra.setAttribute('class', 'sombra');

        h3.innerHTML = nota.node_title;

        if (nota.tipo == 'Video') {
          img.innerHTML = nota.imagesvideo;
          const iconVideo = document.createElement('span');
          iconVideo.setAttribute('class', 'iconVideo');
          container.appendChild(iconVideo);
        } else if (nota.tipo == 'Galería de imagenes') {
          img.innerHTML = nota.imagenes;
          const iconGaleria = document.createElement('span');
          iconGaleria.setAttribute('class', 'iconGaleria');
          container.appendChild(iconGaleria);
        } else {
          img.innerHTML = nota.imagen;
        }

        container.appendChild(img);
        container.appendChild(h3);
        container.appendChild(sombra);
        document
          .querySelector('#finalesMundiales .finales .masNotas')
          .appendChild(container);
      });
    });

  const urlFinalesPrincipal2 =
    'http://localhost/siteLaopinion/api/views/mundialrusia?display_id=services_5&offset=1';

  fetch(urlFinalesPrincipal2, { cache: 'no-cache' })
    .then(function(res) {
      return res.json();
    })
    .then(function(notas) {
      notas.map(function(nota, index) {
        $('#finalesMundiales .finales2 .principal h3').html(nota.node_title);
        if (nota.tipo == 'Video') {
          $('#finalesMundiales .finales2 .principal .img').html(
            nota.imagesvideo
          );
          const iconVideo = document.createElement('span');
          iconVideo.setAttribute('class', 'iconVideo');
          document
            .querySelector('#finalesMundiales .finales2 .principal')
            .appendChild(iconVideo);
        } else if (nota.tipo == 'Galería de imagenes') {
          $('#finalesMundiales .finales2 .principal .img').html(nota.imagenes);
          const iconGaleria = document.createElement('span');
          iconGaleria.setAttribute('class', 'iconGaleria');
          document
            .querySelector('#finalesMundiales .finales2 .principal')
            .appendChild(iconGaleria);
        } else {
          $('#finalesMundiales .finales2 .principal .img').html(nota.imagen);
        }
      });
    });

  const urlFinalesNotas2 =
    'http://localhost/siteLaopinion/api/views/mundialrusia?display_id=services_6&offset=3';

  fetch(urlFinalesNotas2, { cache: 'no-cache' })
    .then(function(res) {
      return res.json();
    })
    .then(function(notas) {
      notas.map(function(nota, index) {
        const container = document.createElement('div');
        const img = document.createElement('div');
        const h3 = document.createElement('h3');
        const sombra = document.createElement('div');

        container.setAttribute('class', 'nota nota-' + index);
        img.setAttribute('class', 'img');
        sombra.setAttribute('class', 'sombra');

        h3.innerHTML = nota.node_title;

        if (nota.tipo == 'Video') {
          // $('#notas .notaPrincipal .img').html(nota.imagesvideo);
          img.innerHTML = nota.imagesvideo;
          const iconVideo = document.createElement('span');
          iconVideo.setAttribute('class', 'iconVideo');
          container.appendChild(iconVideo);
        } else if (nota.tipo == 'Galería de imagenes') {
          // $('#notas .notaPrincipal .img').html(nota.imagenes);
          img.innerHTML = nota.imagenes;
          const iconGaleria = document.createElement('span');
          iconGaleria.setAttribute('class', 'iconGaleria');
          container.appendChild(iconGaleria);
        } else {
          // $('#notas .notaPrincipal .img').html(nota.imagen);
          img.innerHTML = nota.imagen;
        }

        container.appendChild(img);
        container.appendChild(h3);
        container.appendChild(sombra);
        document
          .querySelector('#finalesMundiales .finales2 .masNotas')
          .appendChild(container);
      });
    });

  const urlFinalesPrincipal3 =
    'http://localhost/siteLaopinion/api/views/mundialrusia?display_id=services_7&offset=2';

  fetch(urlFinalesPrincipal3, { cache: 'no-cache' })
    .then(function(res) {
      return res.json();
    })
    .then(function(notas) {
      notas.map(function(nota, index) {
        $('#finalesMundiales .finales3 .principal h3').html(nota.node_title);

        if (nota.tipo == 'Video') {
          $('#finalesMundiales .finales3 .principal .img').html(
            nota.imagesvideo
          );
          const iconVideo = document.createElement('span');
          iconVideo.setAttribute('class', 'iconVideo');
          document
            .querySelector('#finalesMundiales .finales3 .principal')
            .appendChild(iconVideo);
        } else if (nota.tipo == 'Galería de imagenes') {
          $('#finalesMundiales .finales3 .principal .img').html(nota.imagenes);
          const iconGaleria = document.createElement('span');
          iconGaleria.setAttribute('class', 'iconGaleria');
          document
            .querySelector('#finalesMundiales .finales3 .principal')
            .appendChild(iconGaleria);
        } else {
          $('#finalesMundiales .finales3 .principal .img').html(nota.imagen);
        }
      });
    });

  const urlFinalesNotas3 =
    'http://localhost/siteLaopinion/api/views/mundialrusia?display_id=services_8&offset=3';

  fetch(urlFinalesNotas3, { cache: 'no-cache' })
    .then(function(res) {
      return res.json();
    })
    .then(function(notas) {
      notas.map(function(nota, index) {
        const container = document.createElement('div');
        const img = document.createElement('div');
        const h3 = document.createElement('h3');
        const sombra = document.createElement('div');

        container.setAttribute('class', 'nota nota-' + index);
        img.setAttribute('class', 'img');
        sombra.setAttribute('class', 'sombra');

        h3.innerHTML = nota.node_title;

        if (nota.tipo == 'Video') {
          // $('#notas .notaPrincipal .img').html(nota.imagesvideo);
          img.innerHTML = nota.imagesvideo;
          const iconVideo = document.createElement('span');
          iconVideo.setAttribute('class', 'iconVideo');
          container.appendChild(iconVideo);
        } else if (nota.tipo == 'Galería de imagenes') {
          // $('#notas .notaPrincipal .img').html(nota.imagenes);
          img.innerHTML = nota.imagenes;
          const iconGaleria = document.createElement('span');
          iconGaleria.setAttribute('class', 'iconGaleria');
          container.appendChild(iconGaleria);
        } else {
          // $('#notas .notaPrincipal .img').html(nota.imagen);
          img.innerHTML = nota.imagen;
        }

        container.appendChild(img);
        container.appendChild(h3);
        container.appendChild(sombra);
        document
          .querySelector('#finalesMundiales .finales3 .masNotas')
          .appendChild(container);
      });
    });

  $('#estadios .slideEstadios ul .estadio').click(function() {
    const active = $(this).data('active');
    const estadios = document.querySelectorAll('#estadios .estadio');
    // console.log(estadios);

    if (active == 0) {
      $(this)
        .find('.info')
        .addClass('active');
      $(this).addClass('active');
      $(this).data('active', 1);
    } else {
      $(this)
        .find('.info')
        .removeClass('active');
      $(this).data('active', 0);
      $(this).removeClass('active');
      document.querySelector('#estadios').style.height = '485px';
    }

    for (let estadio of estadios) {
      // console.log(estadio);
      if ($(estadio).hasClass('active')) {
        document.querySelector('#estadios').style.height = '750px';
      }
    }
  });

  $('#estadiosMovil .slideEstadiosMovil ul .estadio').click(function() {
    const active = $(this).data('active');
    const estadios = document.querySelectorAll('#estadiosMovil .estadio');
    // console.log(estadios);

    if (active == 0) {
      $(this)
        .find('.info')
        .addClass('active');
      $(this).addClass('active');
      $(this).data('active', 1);
    } else {
      $(this)
        .find('.info')
        .removeClass('active');
      $(this).data('active', 0);
      $(this).removeClass('active');
      document.querySelector('#estadiosMovil').style.height = '485px';
    }

    for (let estadio of estadios) {
      // console.log(estadio);
      if ($(estadio).hasClass('active')) {
        document.querySelector('#estadiosMovil').style.height = '750px';
      }
    }
  });

  $('#balones .slideBalones ul .balon').click(function() {
    const active = $(this).data('active');
    const balones = document.querySelectorAll('#balones .balon');
    // console.log(balones);

    if (active == 0) {
      $(this)
        .find('.info')
        .addClass('active');
      $(this).addClass('active');
      $(this).data('active', 1);
    } else {
      $(this)
        .find('.info')
        .removeClass('active');
      $(this).data('active', 0);
      $(this).removeClass('active');
      document.querySelector('#balones').style.height = '350px';
    }

    for (let balon of balones) {
      // console.log(balon);
      if ($(balon).hasClass('active')) {
        document.querySelector('#balones').style.height = '620px';
      }
    }
  });

  $('#balonesMovil .slideBalonesMovil ul .balon').click(function() {
    const active = $(this).data('active');
    const balones = document.querySelectorAll('#balonesMovil .balon');
    // console.log(balones);

    if (active == 0) {
      $(this)
        .find('.info')
        .addClass('active');
      $(this).addClass('active');
      $(this).data('active', 1);
    } else {
      $(this)
        .find('.info')
        .removeClass('active');
      $(this).data('active', 0);
      $(this).removeClass('active');
      document.querySelector('#balonesMovil').style.height = '350px';
    }

    for (let balon of balones) {
      // console.log(balon);
      if ($(balon).hasClass('active')) {
        document.querySelector('#balonesMovil').style.height = '620px';
      }
    }
  });
});

let slideIndexFinales = 1;
showDivsFinales(slideIndexFinales);

function siguienteFinales(n) {
  showDivsFinales((slideIndexFinales += n));
}

function showDivsFinales(n) {
  let i;
  let x = document.getElementsByClassName('slideFinales');
  if (n > x.length) {
    slideIndexFinales = 1;
  }
  if (n < 1) {
    slideIndexFinales = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
    x[i].classList.remove('fade-in');
  }
  x[slideIndexFinales - 1].style.display = 'block';
  x[slideIndexFinales - 1].classList.add('fade-in');
}

let slideIndexEstadios = 1;
showDivsEstadios(slideIndexEstadios);

function siguienteEstadio(n) {
  showDivsEstadios((slideIndexEstadios += n));
}

function showDivsEstadios(n) {
  let i;
  let x = document.getElementsByClassName('slideEstadios');
  if (n > x.length) {
    slideIndexEstadios = 1;
  }
  if (n < 1) {
    slideIndexEstadios = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
    x[i].classList.remove('fade-in');
  }
  x[slideIndexEstadios - 1].style.display = 'block';
  x[slideIndexEstadios - 1].classList.add('fade-in');
}

/* ---------------------------------------------------- */

let slideIndexEstadiosMovil = 1;
showDivsEstadiosMovil(slideIndexEstadiosMovil);

function siguienteEstadioMovil(n) {
  showDivsEstadiosMovil((slideIndexEstadiosMovil += n));
}

function showDivsEstadiosMovil(n) {
  let i;
  let x = document.getElementsByClassName('slideEstadiosMovil');
  if (n > x.length) {
    slideIndexEstadiosMovil = 1;
  }
  if (n < 1) {
    slideIndexEstadiosMovil = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
    x[i].classList.remove('fade-in');
  }
  x[slideIndexEstadiosMovil - 1].style.display = 'block';
  x[slideIndexEstadiosMovil - 1].classList.add('fade-in');
}

/* --------------------------------------------------------- */

let slideIndexBalones = 1;
showDivsBalones(slideIndexBalones);

function siguienteBalon(n) {
  showDivsBalones((slideIndexBalones += n));
}

function showDivsBalones(n) {
  let i;
  let x = document.getElementsByClassName('slideBalones');
  if (n > x.length) {
    slideIndexBalones = 1;
  }
  if (n < 1) {
    slideIndexBalones = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
    x[i].classList.remove('fade-in');
  }
  x[slideIndexBalones - 1].style.display = 'block';
  x[slideIndexBalones - 1].classList.add('fade-in');
}

let slideIndexBalonesMovil = 1;
showDivsBalonesMovil(slideIndexBalonesMovil);

function siguienteBalonMovil(n) {
  showDivsBalonesMovil((slideIndexBalonesMovil += n));
}

function showDivsBalonesMovil(n) {
  let i;
  let x = document.getElementsByClassName('slideBalonesMovil');
  if (n > x.length) {
    slideIndexBalonesMovil = 1;
  }
  if (n < 1) {
    slideIndexBalonesMovil = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
    x[i].classList.remove('fade-in');
  }
  x[slideIndexBalonesMovil - 1].style.display = 'block';
  x[slideIndexBalonesMovil - 1].classList.add('fade-in');
}
