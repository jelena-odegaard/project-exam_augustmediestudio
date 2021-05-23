import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../common/FormError";
import useAxios from "../../../hooks/useAxios";
import Heading from "../../layout/Heading";
import DeletePostButton from "./DeletePost";

const schema = yup.object().shape({
	title: yup.string().required("Tittel er påkrevd"),
});

export default function EditPost() {
	const [post, setPost] = useState(null);
	const [updated, setUpdated] = useState(false);
	const [fetchingPost, setFetchingPost] = useState(true);
	const [updatingPost, setUpdatingPost] = useState(false);
	const [fetchError, setFetchError] = useState(null);
	const [updateError, setUpdateError] = useState(null);

	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	const http = useAxios();

	let { id } = useParams();

	const url = `wp/v2/posts/${id}`;

	useEffect(
		function () {
			async function getPost() {
				try {
					const response = await http.get(url);
					console.log("response", response.data);
					setPost(response.data);
				} catch (error) {
					console.log(error);
					setFetchError(error.toString());
				} finally {
					setFetchingPost(false);
				}
			}

			getPost();
		},
		
		[]
	);

	async function onSubmit(data) {
		setUpdatingPost(true);
		setUpdateError(null);
		setUpdated(false);

		console.log(data);

		try {
			const response = await http.put(url, data);
			console.log("response", response.data);
			setUpdated(true);
		} catch (error) {
			console.log("error", error);
			setUpdateError(error.toString());
		} finally {
			setUpdatingPost(false);
		}
	}

	if (fetchingPost) return <div>Loading...</div>;

	if (fetchError) return <div>Error loading post</div>;

	return (
		<>

		<div className="edit-delete-form">
				<Heading content="Rediger innlegg" />

				<form onSubmit={handleSubmit(onSubmit)}>
					{updated && <div className="success">Innlegget ble oppdatert</div>}

					{updateError && <FormError>{updateError}</FormError>}

					<fieldset disabled={updatingPost}>
						<div>
							<input name="title" defaultValue={post.title.rendered} placeholder="Tittel" ref={register} />
							{errors.title && <FormError>{errors.title.message}</FormError>}
						</div>

						<div>
							<input name="content" defaultValue={post.content.rendered} placeholder="Innhold" ref={register} />
						</div>

						<button>Oppdater</button>
						<DeletePostButton id={post.id} />
					</fieldset>
				</form>
			</div>
		</>
	);
}