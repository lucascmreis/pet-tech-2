import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

import DialogLogin from '../../components/DialogLogin';

const textShadow = {
  textShadow: `1px 1px 1px #666,
  1px 1px 1px #666,
  1px 1px 1px #666,
  1px 1px 1px #666,
  1px 1px 1px #666,
  1px 1px 1px #666,
  1px 1px 1px #666,
  1px 1px 1px #666,
  1px 1px 1px #666,
  1px 1px 1px #666,
  1px 5px 6px rgba(16, 16, 16, .4),
  1px 5px 10px rgba(16, 16, 16, .2),
  1px 5px 35px rgba(16, 16, 16, .2),
  1px 5px 60px rgba(16, 16, 16, .2)`
}

const Content = ({ title = '', desc = "" }) => {
  return (
    <div className="w-[200px]">
      <div className="mb-1 pr-2 pl-2">
        <h2 className='text-4xl font-semibold text-white text-3xl tracking-tighter font-display'
          style={{ ...textShadow }}
        >
          {title}
        </h2>
      </div>
      <p className='paragraph text-lg text-white' style={{ ...textShadow }}>
        {desc}
      </p>
    </div>
  )
}

function Home() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(prev => !prev)

  return (
    <div className={styles.content}>
      <div className={styles.content_title} style={{ marginBottom: 200 }}>
        <h1 className='text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10 aos-init aos-animate' style={{ ...textShadow, color: "#fff" }}>
          <strong>
            Idosos e Gatos
          </strong>
        </h1>
      </div>
      <main className={styles.content_main}>
        <Link to='elderly' className={`${styles.circle} ${styles.circle_1}`}>
          <Content title="Idosos" desc="Cuidados, dicas e soluções para manter a saúde dos idosos no convívio com seus gatos!" />
        </Link>
        <Link to='contact' className={`${styles.circle} ${styles.circle_2}`}>
          <Content title="Equipe" desc="Quem fez e faz!" />
        </Link>
        {/* <div className={`${styles.circle} ${styles.circle_3}`} onClick={handleOpen}>
          <Content title="LOGIN" desc="Entre aqui ou Cadastre-se!" />
        </div> */}
        <Link to='purchase' className={`${styles.circle} ${styles.circle_4}`}>
          <Content title="Comprar ou adotar" desc="Como decidir? E o que fazer?" />
        </Link>
        <Link to='cats' className={`${styles.circle} ${styles.circle_5}`}>
          <Content title="Gatos" desc="Cuidados com a saúde do seu bichano! Como evitar contaminações!" />
        </Link>
        <Link to='pets-shop' className={`${styles.circle} ${styles.circle_6}`}>
          <Content title="Pet shops" desc="Onde encontrar o que você precisa?" />
        </Link>
        {/* <Link to='information' className={`${styles.circle} ${styles.circle_7}`}>
          <Content title="Banco de dados" desc="Informações sobre gatos e zoonoses" />
        </Link> */}
        <Link to='hospitais' className={`${styles.circle} ${styles.circle_8}`}>
          <Content title="Hospitais e clinicas" desc="Encontre perto da sua casa!" />
        </Link>
      </main>
      <DialogLogin open={open} handleOpen={handleOpen} />
    </div>
  );
}

export default Home;
