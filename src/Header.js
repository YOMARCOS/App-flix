const header = document.querySelector('header')
function headerRender(){

header.innerHTML = `  <div class="container-fluid h-100">
<div class="row  justify-content-center" id="header-row">
  <h1 class="text-white font-secundary mt-2 " ><span id="logo">Miru+</span></h1>
  <div class="col-lg-7  col-md-8 col-sm-10 text-center mt-5">
    <h1 class="text-white font-secundary title-shadow">Séries, filmes, animes e muito mais.</h1>
    <h2 class="text-white h2 title-shadow">Assista quando e onde quiser</h2>
    <button class="btn btn-primary bg-btn-red p-3 mt-5" onclick="menu()">
      <h2 >Assista Agora</h2>
    </button>
  </div>
</div>
</div>`
}

function headerRender2(){
header.innerHTML = `

  <div class="container-fluid">
  <div class="row">
    <div class="col-12">
      <!-- navbar -->
      <nav class="navbar navbar-expand-lg " data-bs-theme="dark">

        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">
            <h1 class="text-white font-secundary" id="logo">Miru+</h1>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#section-filmes">Filmes</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#section-series">Séries</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#section-animes
                ">Animes</a>
              </li>
            </ul>

          </div>
        </div>


      </nav>

    </div>
  </div>
  <!-- Carousel -->
  <div class="row  justify-content-center " id="">
    <div class="col-12 text-center p-0">
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner ">
          <div class="carousel-item active text-center">
            <button type="button" class="btn btn-red btn-outline-danger carousel-caption w-30">
              <h1 class="btn-red"><a href="#section-series" class="text-decoration-none text-white">Assista agora </a></h1>
            </button>

            <img src="./assets/boysS2_01-978x652.jpg" class="d-block w-100" alt="...">

          </div>
          <div class="carousel-item">

            <button type="button" class="btn btn-red btn-outline-danger carousel-caption" href="#section-filmes">
              <h1 class="btn-red"><a href="#section-filmes" class="text-decoration-none text-white">Assista agora </a></h1>
            </button>
            <img src="./assets/ironmannn.jpg" class="d-block w-100 " alt="...">

          </div>
          <div class="carousel-item">
            <img src="./assets/BB_S2_KA_HORIZ_NOTEXT-small.jpg" class="d-block w-100" alt="...">

            <button type="button" class="btn btn-red btn-outline-danger carousel-caption" href="#section-series">
              <h1 class="btn-red"><a href="#section-series" class="text-decoration-none text-white">Assista agora </a></h1>
            </button>
          </div>
        </div>
        <span class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"></span>
        <span class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"></span>
      </div>

    </div>
  </div>
</div>`
}

headerRender()

