const main = document.querySelector('main')

function mainRender() {
  main.innerHTML = `    <div class="container-fluid">
    <div class="row align-items-center justify-content-center border-bottom">
      <div class="col-lg-6 col-md-5 col-sm-12">
        <h1 class="text-white font-secundary p-2">FUCK HERO'S</h1>
        <h3 class="text-white h2 p-2">Descubra em <a href="" class="text-decoration-none">THE BOYS </a>que os verdadeiros hérois são pessoas comuns.</h3>
      </div>
      <div class="col-lg-6 col-md-5 col-sm-12 mt-1 p-0 ">
        <img src="./assets/7f6a0ef3-the-boys.jpg" alt="" class="img-fluid">
      </div>
    </div>
    <div class="row align-items-center justify-content-center mt-1 p-0 border-bottom">
      <div class="col-lg-6 col-md-5 col-sm-12 p-0 ">
        <img src="./assets/cozinhaHeisenberg.jpg" alt="" class="img-fluid ">
      </div>
      <div class="col-lg-6 col-md-5 col-sm-12 mt-5">
        <h1 class="text-white font-secundary p-2">SEJA UM COZINHEIRO</h1>
        <h3 class="text-white h2 p-2">Aprenda a cozinhar receitas incríveis com Walter White e Jesse Pinkman em <a href="" class="text-decoration-none">BREAKING BAD</a></h3>
      </div>
      
    </div>

    <div class="row align-items-center justify-content-center p-0 mt-1 border-bottom">
      <div class="col-lg-6 col-md-5 col-sm-12 mt-5 p-0">
        <h1 class="text-white font-secundary p-2">PIRATARIA É CRIME?</h1>
        <h3 class="text-white h2 p-2">Assista a <a href="" class="text-decoration-none">ONE PIECE</a>, se tornar um nakama é inevitável pequeno gafanhoto .</h3>
      </div>
      <div class="col-lg-6 col-md-5 col-sm-12 p-0 ">
        <img src="./assets/onepiece.png" alt="" class="img-fluid ">
      </div>
    </div>
    <div class="row justify-content-center mt-5">
      <div class="col-lg-8 col-md-10 col-sm-12 text-center">
        <h1 class="text-white font-secundary">Perguntas frequentes</h1>
        <div class="accordion accordion-flush mt-3 bg-primary" id="accordionFlushExample" data-bs-theme="dark">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Como faço para assistir filmes e séries no site?
              </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body mb-5">
                <h6>Para assistir filmes e séries em nosso site, siga estes passos:</h6>
                <ol>
                  <li class="text-start">Faça login na sua conta.</li>
                  <li class="text-start">Procure o filme ou série desejado usando a barra de pesquisa.</li>
                  <li class="text-start">Clique no título do filme ou série.</li>
                  <li class="text-start">Selecione a opção "Assistir agora" ou "Iniciar reprodução".</li>
                  <li class="text-start">Aproveite a transmissão em alta qualidade!</li>
                </ol>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Quais são as opções de pagamento disponíveis?
              </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
                <h6>Oferecemos diversas opções de pagamento para sua conveniência:</h6>
                <ul class="text-start">
                  <li>Cartão de crédito.</li>
                  <li>PayPal.</li>
                  <li>Transferência bancária.</li>
                  <li>Cartão-presente do nosso site.</li>
                </ul>
                Escolha a que melhor se adapta às suas necessidades e desfrute de nosso conteúdo premium!
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Posso baixar filmes e séries para assistir offline?
              </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body text-start">Sim, você pode baixar filmes e séries para assistir offline em
                nosso aplicativo
                móvel. Basta encontrar o conteúdo desejado, clicar em "Baixar" e ele estará disponível para você
                quando não estiver conectado à internet.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header bg-primary">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                Como faço para cancelar minha assinatura?
              </button>
            </h2>
            <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Cancelar sua assinatura é simples:
                <ol>
                  <li class="text-start">Faça login na sua conta.</li>
                  <li class="text-start">Acesse suas configurações de conta.</li>
                  <li class="text-start">Selecione a opção "Cancelar Assinatura".</li>
                  <li class="text-start">Confirme o cancelamento.</li>
                </ol>
                Lembre-se de que você pode reativar sua assinatura a qualquer momento.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                Como faço para entrar em contato com o suporte ao cliente?
              </button>
            </h2>
            <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Estamos sempre à disposição para ajudá-lo. Você pode entrar em contato com
                nosso suporte ao cliente:
                <ul class="text-start">
                  <li>Email: suporte@meusite.com</li>
                  <li>Telefone: +1 (123) 456-7890</li>
                  <li>Chat ao vivo em nosso site.</li>
                </ul>
                Estamos prontos para atender suas dúvidas e resolver quaisquer problemas que você possa ter.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row align-items-center justify-content-center">
        <div class="col-lg-6 col-md-6 col-sm-12 mt-5 text-center">
          <p class="text-white h2">Pronto para assistir?</p>
          <button class="btn  bg-btn-red p-3 mt-5" onclick="menu()">
            <h2 class="text-white" ">Assista Agora</h2>
          </button>
        </div>
      </div>

    </div>
  </div>`
}

function mainRender2() {
  main.innerHTML = `
    <br>
    <div class="container-fluid mt-5 justify-content-center">
      <div class=" row justify-content-center w-100" id="section-filmes"  >
         <h3 class="text-secondary mt-5">Filmes</h3>
        </div>
        <hr class="mt-5">
      </div>

      <div class="mt-5 mb-5 row justify-content-between" id="section-series">
        <h3 class="text-secondary">Séries</h3>
     
        </div>

        <hr class="mt-5">
      </div>
      <div class="mt-5 mb-5 row" id="section-animes">
        <h3 class="text-secondary">Animes</h3>
        <div ></div>
        
        </div>

        <hr class="mt-5 border">
      </div>

    </div>
    `
}
mainRender()