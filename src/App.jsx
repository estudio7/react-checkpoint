import { useState } from "react";
import { Card } from "./components/card";

// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente
function ValidateColorName(colorName) {
  return colorName.trim().length > 2;
}

function ValidateColorHex(corHexadecimal) {
  // const padraoCorHexadecimal = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  const padraoCorHexadecimal = /^#(?:[0-9a-f]{3}){1,2}$/i;
  return padraoCorHexadecimal.test(corHexadecimal);
}

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [colorName, setcolorName] = useState("");
  const [corHexadecimal, setCorHexadecimal] = useState("");
  const [cores, setColors] = useState([]);
  const [formularioErro, setFormularioErro] = useState(false);

  const registerColor = (event) => {
    event.preventDefault();
    if (
      ValidateColorHex(corHexadecimal) &&
      ValidateColorName(colorName)
    ) {
      setFormularioErro(false);
      let newId = cores.length;

      const newColorRegistred = {
        id: newId,
        colorName: colorName,
        corHexadecimal: corHexadecimal,
      };

      setColors([...cores, newColorRegistred]);
      setcolorName("");
      setCorHexadecimal("");
    } else {
      setFormularioErro(true);
    }
  };

  return (
    <div className="App">
      <section class="card-form" className={formularioErro ? "form-error" : ""}>
        <div className="tittle-wrapper">
          <h1>ADICIONAR NOVA COR</h1>
         {/*  <h2>Adicione seu cor favorito</h2> */}
        </div>

        <form class="row row-cols-lg-auto g-3 align-items-center" onSubmit={(event) => registerColor(event)}>
          {/* Comece a desenvolver o seu Código por aqui :) */}
          
            <div class="col-12" className="input">
            <label htmlFor="colorName">Nome: </label>
            <input
              id="colorName"
              type="text"
              value={colorName}
              onChange={(event) => setcolorName(event.target.value)}
            />
          </div>

          <div class="col-12">
            <label htmlFor="corHexadecimal">Cor: </label>
            <input
              id="corHexadecimal"
              placeholder="Insita sua cor no formato Hexadecimal"
              type="color"
              value={corHexadecimal}
              onChange={(event) => setCorHexadecimal(event.target.value)}
            />
          </div>

          <button type="submit" class="btn btn-form btn-primary">ADICIONAR</button>
        </form>
      </section>

      {formularioErro ? (
        <span>Por favor, verifique os dados inseridos no formulário</span>
      ) : null}

      <div className="tittle-wrapper">
        <h1>CORES FAVORITAS</h1>
      </div>

      <section>
        {cores.map((cor, index) => (
          <Card key={index} corData={cor} />
        ))}
      </section>
    </div>
  );
}

export default App;
