import { Footer, Header } from "../../shared/components/grid";
import {
	AboutUsSection,
	ClientSection,
	HomeHeroSection,
	WorkSection,
} from "../../shared/components/sections";
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
			<Footer></Footer>
		</>
	);
};
