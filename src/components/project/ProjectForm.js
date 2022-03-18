import Input from "../form/Input";
import styles from "./ProjectForm.module.css";
import Select from "../form/Select";
import SubmittButton from "../form/SubmittButton";

function ProjectForm({ btnText }) {
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
        <Select name="category_id" text="Selecione a categoria" />
      </div>
      <div>
        <SubmittButton text={btnText} />
      </div>
    </form>
  );
}

export default ProjectForm;
