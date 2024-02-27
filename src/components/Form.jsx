import { useRef } from "react";
import { useParams, useSearchParams, useOutletContext, useNavigate } from "react-router-dom";
import { apiUrl } from "../API/axios";
import { v4 as uuidv4 } from "uuid";

function Form() {

    const {taskId} = useParams();
    const [ searchParams ] = useSearchParams();
    const mode = searchParams.get("mode") ?? "add";

    const [tasks, setTasks] = useOutletContext();

    console.log(taskId);

    const task = tasks.find(item => item.id === Number(taskId));

    const navigate = useNavigate();

    const inputTitre = useRef();
    const inputDescription = useRef();
    const inputAuteur = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (mode === "delete") {
                try {
                    apiUrl.delete(taskId);
                } catch (error) {
                    console.error(error.message);
                    throw error;
                }

        } else if (mode === "edit") {

            const taskUpdated = {
                titre: inputTitre.current.value,
                description: inputDescription.current.value,
                auteur: inputAuteur.current.value
            };
                try {
                    apiUrl.put({taskUpdated});
                } catch (error) {
                    console.error(error.message);
                    throw error;
                }

        } else {

                const newTask = {
                    id: uuidv4(),
                    titre: inputTitre.current.value,
                    description: inputDescription.current.value,
                    auteur: inputAuteur.current.value
                };
                try {
                    apiUrl.post(newTask);
                } catch (error) {
                    console.error(error.message);
                    throw error;
                }

        }
        navigate("/")
    }
        
    return ( 
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="titre">Titre</label>
            <input 
                type="text" 
                id="titre" 
                required={mode != "delete"}
                disabled={mode === 'delete'} 
                ref={inputTitre} 
                defaultValue={task?.titre} 
            />
            <label htmlFor="description">Description</label>
            <input 
                type="text" 
                id="description" 
                ref={inputDescription} 
                required={mode != "delete"} 
                defaultValue={task?.description} 
            />
            <label htmlFor="auteur">Auteur</label>
            <input 
                type="text" 
                id="auteur" 
                ref={inputAuteur} 
                required={mode != "delete"} 
                defaultValue={task?.auteur} 
            />
            <button type="submit">{mode}</button>
        </form>
     );
}

export default Form;