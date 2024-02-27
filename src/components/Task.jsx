/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Task({ titre, description, auteur, id }) {
    return ( 
        <article>
            <div>{titre}</div>
            <div>{description}</div>
            <div>{auteur}</div>
            <div>{id}</div>
            <Link to={`form/${id}?mode=edit`}>Modifier le contact</Link>
            <Link to={`form/${id}?mode=delete`}>Supprimer le contact</Link>
        </article>
     );
}

export default Task;