import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/layout/Nav";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Process from "./components/process/Process";
import Portfolio from "./components/portfolio/Portfolio";
import Blogg from "./components/blogg/Blogg";
import Contact from "./components/contact/Contact";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import AddPostPage from "./components/dashboard/posts/AddPostPage";
import EditPostPage from "./components/dashboard/posts/EditPostPage";
import EditPostForm from "./components/dashboard/posts/EditPostForm";
import Footer from "./components/layout/Footer";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";
import BlogPosts from "./components/blogg/BlogPosts";

function App() {
	return (
        <AuthProvider>
            <Router>
				<Nav />
                <div>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/services" component={Services} />
                        <Route path="/process" component={Process} />
                        <Route path="/portfolio" component={Portfolio} />
                        <Route path="/blogg" component={Blogg} />
                        <Route path="/blogg/blogposts" component={BlogPosts}/>
                        <Route path="/contact" component={Contact} />
                        <Route path="/login" component={Login} />
						<Route path="/dashboard" exact component={Dashboard}/>
                        <Route path="/dashboard/posts/AddPostPage" component={AddPostPage}/>
                        <Route path="/dashboard/posts/EditPostPage" component={EditPostPage}/>
                        <Route path="/dashboard/posts/edit/:id" component={EditPostForm}/>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        </AuthProvider>
	);
}

export default App;