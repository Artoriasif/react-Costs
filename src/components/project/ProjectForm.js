import Input from "../form/Input";
import styles from "./ProjectForm.module.css";
import Select from "../form/Select";
import SubmittButton from "../form/SubmittButton";
import { useEffect, useState } from "react";

function ProjectForm({ btnText }) {
  const [categories, setCategories] = useState([]); //O array esta vezio espera a resposta da api

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      //request de GET
      method: "GET",
      header: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <form className={styles.form}>
      <div>
        <Input
          type="text"
          text="nome do projeto"
          name="name"
          placeholder="Insira o nome do projeto"
        />
      </div>
      <div>
        <Input
          type="number"
          text="orçamento do projeto"
          name="budget"
          placeholder="Insira o orçamento total"
        />
      </div>
      {/* input com multipla escolha */}
      <div>
        <Select
          name="category_id"
          text="Selecione a categoria"
          options={categories}
        />
      </div>
      <div>
        <SubmittButton text={btnText} />
      </div>
    </form>
  );
}

export default ProjectForm;
