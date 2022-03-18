import styles from "./Home.module.css";
import savings from "../../image/savings.svg";
import LinkButton from "../../layout/LinkButton";

function Home() {
  return (
    <section className={styles.homeContainer}>
      <h1>
        Bem-vindo ao <span>Costs</span>
      </h1>
      <p>Comece a gerecenciar os seus proejtos agora mesmo</p>
      <LinkButton to="/new-project" text="Criar Projeto" />
      <img src={savings} alt="Costs" />
    </section>
  );
}
export default Home;
