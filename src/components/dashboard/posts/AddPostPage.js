import Heading from "../../layout/Heading";
import AddPostForm from "./AddPostForm";

export default function AddPostPage() {
	return (
		<>
			<div fluid="true" className="add-post-form">
				<Heading size="3" content="Opprett et nytt innleg" />
				<AddPostForm/>   
			</div>    
		</>
	);
}