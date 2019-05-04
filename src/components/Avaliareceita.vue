<template>
  <div>
    <div class="row">
      <div class="col s12 center">
        <h3>
          <i class="mdi-content-send brown-text"></i>
        </h3>
        <h4>Avaliar Receitas</h4>
        <hr>
      </div>
    </div>

    <section>
      <div class="container">
        <div class="section">
          <div class="row">
            <form class="col s12">
              <div class="row">
                <div class="input-field col s6">
                  <i class="material-icons prefix">search</i>
                  <input id="icon_prefix" type="text" class="validate">
                  <label for="icon_prefix">Pesquisar Receitas</label>
                </div>
              </div>
            </form>
          </div>

          <div class="row">
            <div class="col s12 m6 l4 center">
              <h3>
                <i class="mdi-content-send brown-text"></i>
              </h3>
              <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="photos/macarronada.jpg">
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">Macarronada</span>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">
                    Avaliar
                    <i class="material-icons right">close</i>
                  </span>
                  <div class="input-field col s12 validate">
                    <select>
                      <option value disabled selected>Pontuar</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="3">4</option>
                      <option value="3">5</option>
                    </select>
                  </div>
                  <div class="center">
                    <button class="waves-effect waves-light btn">Atualizar Pontos</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="col s12 m6 l4 center">
              <h3>
                <i class="mdi-content-send brown-text"></i>
              </h3>
              <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="photos/fricase.jpg">
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">Fricase</span>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">
                    Avaliar
                    <i class="material-icons right">close</i>
                  </span>
                  <div class="input-field col s12 validate">
                    <select>
                      <option value disabled selected>Pontuar</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="3">4</option>
                      <option value="3">5</option>
                    </select>
                  </div>
                  <div class="center">
                    <button class="waves-effect waves-light btn">Atualizar Pontos</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="col s12 m6 l4 center">
              <h3>
                <i class="mdi-content-send brown-text"></i>
              </h3>
              <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="photos/peixe.jpg">
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">Peixe</span>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">
                    Card Title
                    <i class="material-icons right">close</i>
                  </span>
                  <div class="input-field col s12 validate">
                    <select>
                      <option value disabled selected>Pontuar</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="3">4</option>
                      <option value="3">5</option>
                    </select>
                  </div>
                  <div class="center">
                    <button class="waves-effect waves-light btn">Atualizar Pontos</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
