const footer = document.querySelector('footer')
function footerRender(){
    footer.innerHTML = `
    <div class="container-fluid">
      <div class="row mt-5 justify-content-center mb-5">
        <div class="col">
          <p class="font-footer">Dúvidas? Ligue 0800 000 1111</p>

        </div>
      </div>
      <div class="row ">
        <div class="col">

          <ul class="">
            <li class="list-unstyled font-footer font-footer ">Perguntas frequentes</li>
            <li class="list-unstyled font-footer">Relações com investidores</li>
            <li class="list-unstyled font-footer">Formas de assistir</li>
            <li class="list-unstyled font-footer">Informações comporativas</li>
            <li class="list-unstyled font-footer">Só na AMCtv</li>
          </ul>
        </div>
        <div class="col">

          <ul>
            <li class="list-unstyled font-footer">Central de ajuda</li>
            <li class="list-unstyled font-footer">Carreiras</li>
            <li class="list-unstyled font-footer">Termos de uso</li>
            <li class="list-unstyled font-footer">Contato</li>
          </ul>
        </div>
        <div class="col">
          <ul>
            <li class="list-unstyled font-footer">Conta</li>
            <li class="list-unstyled font-footer">Politica de privacidade</li>
            <li class="list-unstyled font-footer">Politica de cookies</li>
            <li class="list-unstyled font-footer">Politica de reembolso</li>
          </ul>
        </div>
        <div class="col">
          <ul>
            <li class="list-unstyled font-footer">Media Center</li>
            <li class="list-unstyled font-footer">Avisos legais</li>
            <li class="list-unstyled font-footer">Teste de velocidade</li>
            <li class="list-unstyled font-footer">Sobre</li>
          </ul>
        </div>
      </div>
      <div class="row my-5 text-center">
        <div class="col">© 2023 </div>
      </div>
    </div>`
}

footerRender()