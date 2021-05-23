import Heading from "../../layout/Heading";
import PostList from "./PostList";

export default function AddPostPage() {
	return (
		<>
			<div className="edit-form">
				<Heading size="4" content="Rediger et av dine innlegg i porteføljen:" />
				<PostList/>
			</div>
		</>
	);
}