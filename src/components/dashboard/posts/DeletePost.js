import { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";

export default function DeletePostButton({ id }) {
	const [error, setError] = useState(null);

	const http = useAxios();
	const history = useHistory();

	const url = `/wp/v2/posts/${id}`;

    async function handleDelete() {
        const confirmDelete = window.confirm("Delete this post?");
    
        if (confirmDelete) {
            try {
                await http.delete(url);
                history.push("/dashboard");
            } catch (error) {
                setError(error);
            }
        }
    }

	return (
		<button type="button" id="delete" onClick={handleDelete}>
			{error ? "Error" : "Slett"}
		</button>
	);
}

DeletePostButton.propTypes = {
	id: PropTypes.number.isRequired,
};