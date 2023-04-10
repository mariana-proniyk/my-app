import { Footer, Header } from "../../shared/components/grid";
import {
	ContactSection,
	SmallHeroSection,
} from "../../shared/components/sections";
import { HowWeWork } from "../../shared/components/sections/HowWeWork/HowWeWork";
import { OfferSection } from "../../shared/components/sections/OfferSection/OfferSection";

export const Services = () => {
	return (
		<>
			<Header></Header>
			<SmallHeroSection
				title={"Services"}
				subTitle={"Home / Services"}
			></SmallHeroSection>
			<OfferSection></OfferSection>
			<HowWeWork></HowWeWork>
			<ContactSection></ContactSection>
			<Footer></Footer>
		</>
	);
};
