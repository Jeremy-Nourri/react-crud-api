import { useOutletContext } from "react-router-dom";
import Task from "./Task";

function ListTasks() {

    const [ tasks ] = useOutletContext();

    return (
        <div>
            {tasks &&
              tasks.map((item) => (
                <Task key={item.id} {...item} />
              ))
            }
        </div>
     );
}

export default ListTasks;