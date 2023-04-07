import { Footer, Header } from "../../shared/components/grid";
import {
	AboutUsSection,
	ClientSection,
	ContactSection,
	CounterSection,
	HomeHeroSection,
	ProjectSection,
	WorkSection,
} from "../../shared/components/sections";
import { ArticlesSection } from "../../shared/components/sections/ArticlesSection/ArticlesSection";
import { TestimonialSection } from "../../shared/components/sections/TestimonialSection/TestimonialSection";

export const Home = () => {
	return (
		<>
			<Header></Header>
			<HomeHeroSection></HomeHeroSection>
			<WorkSection></WorkSection>
			<AboutUsSection></AboutUsSection>
			<TestimonialSection></TestimonialSection>
			<ClientSection></ClientSection>
			<ProjectSection></ProjectSection>
			<CounterSection></CounterSection>
			<ArticlesSection></ArticlesSection>
			<ContactSection></ContactSection>
			<Footer></Footer>
		</>
	);
};
