import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../common/FormError";
import useAxios from "../../../hooks/useAxios";
import MediaSelector from "../media/MediaSelector";

const schema = yup.object().shape({
	title: yup.string().required("Title is required"),
});

export default function AddPostForm() {
	const [submitting, setSubmitting] = useState(false);
	const [serverError, setServerError] = useState(null);

	const history = useHistory();
	const http = useAxios();

	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	async function onSubmit(data) {
		setSubmitting(true);
		setServerError(null);

		data.status = "publish";

		if (data.featured_media === "") {
			data.featured_media = null;
		}

		console.log(data);

		try {
			const response = await http.post("/wp/v2/posts", data);
			console.log("response", response.data);
			history.push("/dashboard");
		} catch (error) {
			console.log("error", error);
			setServerError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}

	return (
			<>
			<div  className="add-form">
				<form onSubmit={handleSubmit(onSubmit)}>
					{serverError && <FormError>{serverError}</FormError>}
					<fieldset disabled={submitting}>
						<div>
							<input name="title" placeholder="Tittel" ref={register} />
							{errors.title && <FormError>{errors.title.message}</FormError>}
						</div>

						<div>
							<textarea name="content" placeholder="Innhold" ref={register} />
						</div>

						<div>
							<MediaSelector register={register} />
						</div>
						<button>{submitting ? "Submitting..." : "Submit"}</button>
					</fieldset>
				</form>
			</div>
		</>
	);
}