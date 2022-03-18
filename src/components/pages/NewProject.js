import ProjectForm from "../project/ProjectForm";
import styles from "./NewProject.module.css";

function NewProject() {
  return (
    <div>
      <h1>Criar projeto</h1>
      <p>Crie seu proijetos para depois adicionar serviços</p>
      <ProjectForm />
    </div>
  );
}
export default NewProject;
