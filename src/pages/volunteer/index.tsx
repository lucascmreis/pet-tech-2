import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../home/Home.module.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DialogLogin from "../../components/DialogLogin";
import { Content } from "../home/Home";

const Post = ({ name = "", desc = "", src = "" }) => {
  return (
    <div className="flex w-1/3 flex-wrap p-2">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div
          style={{
            backgroundImage: `url(${src})`,
            width: "100%",
            height: 300,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">{desc}</p>
        </div>
      </div>
    </div>
  );
};
const Volunteer = () => {
  return (
    <>
      <div className="bg-white">
        <Header />
        <div className="container mx-auto">
          <h1 className="pt-5 font-body text-4xl font-semibold  text-white dark:text-primary md:text-4xl lg:text-4xl">
            Gatos
          </h1>

          <div className="pt-3 sm:w-3/4">
            <p className="font-body text-xl font-light text-primary dark:text-primary">
              Cuidados com a saúde do seu bichano! Como evitar contaminações!
            </p>
          </div>
          <div className={styles.content_main}>
            <Link
              to="register"
              className={`${styles.circle} ${styles.circle_9}`}
            >
              <Content title="Veterinário Voluntario " desc="Agenda" />
            </Link>
            <Link to="agenda" className={`${styles.circle} ${styles.circle_8}`}>
              <Content title="Veterinário Voluntario " desc="Agenda" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />;
    </>
  );
};

export default Volunteer;
