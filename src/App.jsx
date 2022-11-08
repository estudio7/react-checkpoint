
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs


  return (
    <div className="App">
      <header>
        <div class="row">
          <div class="container">
            <h1>Lista de Filmes</h1>
          </div>
        </div>


      </header>
      <h2> Adicione seu titulo e selecione o genero do filme</h2>



      <form class="row row-cols-lg-auto g-3 align-items-center">
        <div class="col-12">
          <label class="visually-hidden" for="inlineFormInputGroupUsername">
            Nome do filme
          </label>
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              id="inlineFormInputGroupUsername"
              placeholder="Nome do filme"
            />
          </div>
        </div>

        <div class="col-12">
          <label class="visually-hidden" for="inlineFormSelectPref">
            Preference
          </label>
          <select name="generos" class="form-control" id="generos" multiple="">
            <option value="0">Seleccione</option>
            <option value="1">Action</option>
            <option value="2">Adventure</option>
            <option value="3">Animation</option>
            <option value="4">Comedy</option>
            <option value="5">Crime</option>
            <option value="6">Drama</option>
            <option value="7">Family</option>
            <option value="8">Fantasy</option>
            <option value="9">History</option>
            <option value="10">Horror</option>
            <option value="11">Music</option>
            <option value="12">Mystery</option>
            <option value="13">Romance</option>
            <option value="14">Science Fiction</option>
            <option value="15">Thriller</option>
            <option value="16">TV Movie</option>
            <option value="17">War</option>
            <option value="18">Western</option>
          </select>
        </div>



        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Adicionar
          </button>
        </div>
      </form>
    </div>
  );
}

export default App