<template>
    <div>
        <div class="row">
        <div class="col s12 center">
            <h3><i class="mdi-content-send brown-text"></i></h3>
            <h4>Atualizar Receita</h4>
            <hr>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <form class="col l7 s12">
                <div class="row">
                    <div class="input-field col l10 s10">
                        <input id="nome-receita" type="text" class="validate">
                        <label for="nome-receita">Nome da Prato</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s10 validate">
                        <select>
                            <option value="" disabled selected>Tipo de Prato</option>
                            <option value="1">Entrada</option>
                            <option value="2">Principal</option>
                            <option value="3">Sobremesa</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <di vclass="col s6">
                        <div class="input-field col l10 s10">
                            <textarea id="textarea1" class="materialize-textarea"></textarea>
                            <label for="textarea1">Receita</label>
                        </div>
                </div>
                <div class="row">
                    <div class="file-field input-field col s10">
                        <div class="btn">
                            <span>Imagem</span>
                            <input type="file">
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text">
                        </div>
                    </div>
                </div>
            </form>
            <div class="col l5 s12 center">
                <h3><i class="mdi-content-send brown-text"></i></h3>
                <div class="card">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="photos/lasanha.jpg">
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">Quinta-Feira</span>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">Card Title<i
                                class="material-icons right">close</i></span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <br>
    <div class="center">
        <button class="waves-effect waves-light btn">Atualizar</button>
    </div>
    <br>
    </div>
</template>
