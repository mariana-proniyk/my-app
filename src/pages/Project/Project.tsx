import { Footer, Header } from "../../shared/components/grid";
import {
	ProjectBanner,
	SmallHeroSection,
} from "../../shared/components/sections";

export const Project = () => {
	return (
		<>
			<Header></Header>
			<SmallHeroSection
				title={"Our Project"}
				subTitle={"Home / Project"}
			></SmallHeroSection>
			<ProjectBanner></ProjectBanner>
			<Footer></Footer>
		</>
	);
};
