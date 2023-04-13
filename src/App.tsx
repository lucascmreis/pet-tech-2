import './App.css';

function App() {
  return (
    <div className="content">
      <div className="content_title">
        <h4>Idosos e Gatos</h4>
      </div>
      <main className="content_main">
        <div className="circle circle_1">
          <span className='circle_title'><strong>Idosos</strong></span>
          <div className='circle_desc'>
            <span>Cuidadaos, dicas e solucoes para manter a saude dos idoso no convivio com seus gatos!</span>
          </div>
        </div>
        <div className="circle circle_2">
          <span className='circle_title'><strong>Equipe</strong></span>
          <div className='circle_desc'>
            <span>Quem fez e faz!</span>
          </div>
        </div>
        <div className="circle circle_3">
          <span className='circle_title'><strong>LOGIN</strong></span>
          <div className='circle_desc'>
            <span>Entre aqui</span>
            <span>ou</span>
            <span>Cadastre-se!</span>
          </div>
        </div>
        <div className="circle circle_4">
          <span className='circle_title'><strong>Comprar ou adotar</strong></span>
          <div className='circle_desc'>
            <span>Como decidir?</span>
            <span>E o que fazer?</span>
          </div>
        </div>

        <div className="circle circle_5">
          <span className='circle_title'><strong>Gatos</strong></span>
          <div className='circle_desc'>
            <span>Cuidados com a saude do seu bichano! Como evitar contaminacoes!</span>
          </div>
        </div>
        <div className="circle circle_6">
          <span className='circle_title'><strong>Pet shops</strong></span>
          <div className='circle_desc'>
            <span>Onde encontrar o que voce precisa?</span>
          </div>
        </div>
        <div className="circle circle_7">
          <span className='circle_title'><strong>Banco de dados</strong></span>
          <div className='circle_desc'>
            <span>Informacoes sobre gatos e zoonoses</span>
          </div>
        </div>
        <div className="circle circle_8">
          <span className='circle_title'><strong>Hospitais e clinicas</strong></span>
          <div className='circle_desc'>
            <span>Encontre perto da sua casa!</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
