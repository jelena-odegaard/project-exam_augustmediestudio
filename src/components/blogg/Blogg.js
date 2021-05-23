import BlogPost from "./BlogPosts";
import Heading from "../layout/Heading";

export default function Blogg() {
	return (
		<>
			<div className="blog-container">
				<Heading content="Hva er nytt hos oss" />
				<BlogPost fluid="true"/>
			</div>
		</>
	);
}