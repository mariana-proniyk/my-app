import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Services } from "./pages/Services/Services";
import { ServiceSingle } from "./pages/ServiceSingle/ServiceSingle";
import {
	Blog,
	BlogSingle,
	ContactUs,
	ErrorNotFound,
	FAQ,
	Pricing,
	Project,
	Team,
	TeamSingle,
} from "./pages";
import { ProjectSingle } from "./pages/ProjectSingle/ProjectSingle";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/services" element={<Services />} />
				<Route path="/service-single" element={<ServiceSingle />} />
				<Route path="/pricing" element={<Pricing />} />
				<Route path="/project" element={<Project />} />
				<Route path="/project-detail" element={<ProjectSingle />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/blog-detail" element={<BlogSingle />} />
				<Route path="/team" element={<Team />} />
				<Route path="/team-detail" element={<TeamSingle />} />
				<Route path="/contact" element={<ContactUs />} />
				<Route path="/faq" element={<FAQ />} />
				<Route path="/error" element={<ErrorNotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
