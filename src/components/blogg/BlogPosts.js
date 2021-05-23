import { useState, useEffect } from "react";
import Heading from "../layout/Heading";
import useAxios from "../../hooks/useAxios";

export default function BlogPost() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const http = useAxios();

	useEffect(function () {
		async function getPosts() {

			try {
				const response = await http.get("wp/v2/posts");
				console.log("response", response);
				setPosts(response.data);
			} catch (error) {
				console.log(error);
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}

		getPosts();
		
	}, []);

	if (loading) return <div>Loading posts...</div>;

	if (error) return <div>{}</div>;


	return (
		<ul className="posts">
			{posts.map((posts) => {
				return (
					<div id="blogpost" key={posts.id}>
						<Heading size="3" content={posts.title.rendered}/>
                        <div dangerouslySetInnerHTML={{__html:posts.content.rendered}}/>
                        <img fluid="true" id="featured_img" src={posts.jetpack_featured_media_url} alt={posts.title.rendered} />  
					</div>
				);
			})}
		</ul>
	);
}