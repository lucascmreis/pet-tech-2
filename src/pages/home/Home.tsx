import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

import DialogLogin from "../../components/DialogLogin";

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
  1px 5px 60px rgba(16, 16, 16, .2)`,
};

export const Content = ({ title = "", desc = "" }) => {
  return (
    <div className="w-[200px] justify-center align-middle">
      <div className="mb-1 pr-2 pl-2">
        <h2
          className="font-semibold text-white text-3xl tracking-tighter font-display"
          style={{ ...textShadow }}
        >
          {title}
        </h2>
      </div>
      <p className="paragraph text-lg text-primary">{desc}</p>
    </div>
  );
};

function Home() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((prev) => !prev);

  return (
    <div
      className={styles.content}
      style={{ backgroundImage: "url(/assets/bg.png)" }}
    >
      <div className={styles.content_title}>
        <img src="/assets/logo.png" width={300} alt="logo" />
        <h2 className="font-semibold text-4xl mb-2 text-[#ba724e]">Pet Tech</h2>
      </div>
      <main className={styles.content_main}>
        <Link to="idosos" className={`${styles.circle} ${styles.circle_1}`}>
          <Content
            title="Idosos"
            desc="Cuidados, dicas e soluções para manter a saúde dos idosos no convívio com seus gatos!"
          />
        </Link>
        <Link to="contato" className={`${styles.circle} ${styles.circle_2}`}>
          <Content title="Equipe" desc="Quem fez e faz!" />
        </Link>

        <Link to="purchase" className={`${styles.circle} ${styles.circle_4}`}>
          <Content
            title="Comprar ou adotar"
            desc="Como decidir? E o que fazer?"
          />
        </Link>
        <Link to="gatos" className={`${styles.circle} ${styles.circle_5}`}>
          <Content
            title="Gatos"
            desc="Cuidados com a saúde do seu bichano! Como evitar contaminações!"
          />
        </Link>
        <Link to="pets-shop" className={`${styles.circle} ${styles.circle_6}`}>
          <Content
            title="Pet shops"
            desc="Onde encontrar o que você precisa?"
          />
        </Link>

        <Link to="hospitais" className={`${styles.circle} ${styles.circle_8}`}>
          <Content
            title="Hospitais e clínicas"
            desc="Encontre perto da sua casa!"
          />
        </Link>
        <Link to="volunteer" className={`${styles.circle} ${styles.circle_9}`}>
          <Content title="Veterinário Voluntario " desc="Agenda" />
        </Link>
      </main>
      <DialogLogin open={open} handleOpen={handleOpen} />
    </div>
  );
}

export default Home;
