const media =[
    {
        title:'The Dark Knight',
        image:'../assets/desktop-wallpaper-the-dark-knight-poster-2008-dark-knight-dark-knight-joker-2008.jpg',
        link:'https://www.youtube.com/embed/8sB1HTghkg4', 
        type: 'Filme'
    },
    {
        title:'Iron Man',
        image:'../assets/ironman.jpg',
        link:'https://www.youtube.com/embed/8ugaeA-nMTc',
        type: 'Filme'

        
    },
    {
        title:'Loki',
        image:'../assets/loki.jpg',
        link:'https://www.youtube.com/embed/wmlcMkj2H70',  
        type: 'Serie'
    },
    {
        title:'The Punisher',
        image:'../assets/the_punisher_s2_d__banner_by_anotherguyy7_df8qnam-pre.jpg',
        link:'https://www.youtube.com/embed/NYHglZcJm7c ',
        type: 'Serie'
    },
    {
      title:'The Boys',
      image:'../assets/boysS2_01-978x652.jpg',
      link:'https://www.youtube.com/embed/q5l-2R7E_48',
      type: 'Serie'  
    },
    {
      title:'One Piece',
      image:'../assets/onepiece.png',
      link:'https://www.youtube.com/embed/QJgivRAeEjY',
      type: 'Anime'
    },
    {
      title:'Kimetsu no Yaiba',
      image:'../assets/kimetsu.jpg',
      link:'https://www.youtube.com/embed/YhrA6hjQbTw',
      type: 'Anime'
    },
    {
      title:'Naruto',
      image:'../assets/naruto.jpg',
      link:'https://www.youtube.com/embed/4FgCV8FY8C8',
      type: 'Anime'
    },
    {
      title:'Spiderman',
      image:'../assets/spiderman.jpg',
      link:'https://www.youtube.com/embed/_yhFofFZGcc',
      type: 'Filme'
    },
    {
        title: "Super Campeões",
        image: "../assets/capitao-tsubasa-2019-banner.jpg",
        link: "https://www.youtube.com/embed/bAG-gHiqslU",
        type: "Anime"
    },
    {
title: "Breaking Bad",
image: "../assets/bbheisen.jpg",
link: "https://www.youtube.com/embed/FH_Pm-0kuFc",
type: "Serie"
    },
    {
      title:"Pulp Fiction",
      image:"../assets/pulp_fiction_banner_v3.png",
      link:"https://www.youtube.com/embed/gC2_AnMo6JE",
      type:"Filme"
    }
]

function movies() {
  const array = media.filter(item => item.type === 'Filme');
  console.log(array);
  const section = document.getElementById('section-filmes');
  renderize(section, array);
}

function series() {
  const array = media.filter(item => item.type === 'Serie');
  console.log(array);
  const section = document.getElementById('section-series');
  renderize(section, array);
}

function animes() {
  const array = media.filter(item => item.type === 'Anime');
  console.log(array);
  const section = document.getElementById('section-animes');
  renderize(section, array);
}

function renderize(section, array) {
  for (let index = 0; index < array.length; index++) {
      const element = array[index];
      const { title, image, link, type } = element;
    
      section.innerHTML += `
          <div class="col-lg-3 col-md-6 col-sm-10 mt-2 align-items-center d-flex flex-column ">
              <div class="card" style="width: 18rem;">
                  <img src="./assets/${image}" class="card-img-top card-image " alt="...">
                  <div class="card-body card-surprise bg-black rounded-bottom">
                      <p class="card-text text-white " >${title}</p>
                      <button  class="btn btn-red btn-outline-danger w-100" type="button" data-bs-toggle="modal" onclick="modal('${link}')" data-bs-target="#staticBackdrop" > Assista agora</button>
                  </div>
              </div> 
          </div>
      `;

  }

}

function modal(link){
  const modal = document.getElementById('modal-dialog');
 
    console.log(link)
    modal.innerHTML = `
    <iframe  src="${link}" width="100%" height="100%"  frameborder="0" allow="accelerometer; autoplay; "></iframe>
    ` 
}
