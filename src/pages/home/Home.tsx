import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.content}>
      <div className={styles.content_title}>
        <h4>Idosos e Gatos</h4>
      </div>
      <main className={styles.content_main}>
        <div className={`${styles.circle} ${styles.circle_1}`}>
          <span className={styles.circle_title}><strong>Idosos</strong></span>
          <div className={styles.circle_desc}>
            <span>Cuidadaos, dicas e solucoes para manter a saude dos idoso no convivio com seus gatos!</span>
          </div>
        </div>
        <div className={`${styles.circle} ${styles.circle_2}`}>
          <span className={styles.circle_title}><strong>Equipe</strong></span>
          <div className={styles.circle_desc}>
            <span>Quem fez e faz!</span>
          </div>
        </div>
        <div className={`${styles.circle} ${styles.circle_3}`}>
          <span className={styles.circle_title}><strong>LOGIN</strong></span>
          <div className={styles.circle_desc}>
            <span>Entre aqui</span>
            <span>ou</span>
            <span>Cadastre-se!</span>
          </div>
        </div>
        <div className={`${styles.circle} ${styles.circle_4}`}>
          <span className={styles.circle_title}><strong>Comprar ou adotar</strong></span>
          <div className={styles.circle_desc}>
            <span>Como decidir?</span>
            <span>E o que fazer?</span>
          </div>
        </div>

        <div className={`${styles.circle} ${styles.circle_5}`}>
          <span className={styles.circle_title}><strong>Gatos</strong></span>
          <div className={styles.circle_desc}>
            <span>Cuidados com a saude do seu bichano! Como evitar contaminacoes!</span>
          </div>
        </div>
        <div className={`${styles.circle} ${styles.circle_6}`}>
          <span className={styles.circle_title}><strong>Pet shops</strong></span>
          <div className={styles.circle_desc}>
            <span>Onde encontrar o que voce precisa?</span>
          </div>
        </div>
        <div className={`${styles.circle} ${styles.circle_7}`}>
          <span className={styles.circle_title}><strong>Banco de dados</strong></span>
          <div className={styles.circle_desc}>
            <span>Informacoes sobre gatos e zoonoses</span>
          </div>
        </div>
        <div className={`${styles.circle} ${styles.circle_8}`}>
          <span className={styles.circle_title}><strong>Hospitais e clinicas</strong></span>
          <div className={styles.circle_desc}>
            <span>Encontre perto da sua casa!</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
