import Heading from "../layout/Heading";
import { Link } from "react-router-dom";

export default function DashboardPage() {
	return (
		<>
			<div className="dashboard-container">
				<Heading size="3" content="Dashboard" />
				<div className="p-background">
					<p>her kan du redigere innlegg i bloggen din</p>
				</div>
				<ul>
					<Link to="dashboard/posts/AddPostPage"><li>Opprett et nytt innlegg</li></Link>
					<Link to="dashboard/posts/EditPostPage"><li>Rediger innlegg</li></Link>
				</ul>
			</div>
		</>
	);
}