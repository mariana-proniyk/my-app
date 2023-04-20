import { Footer, Header } from "../../shared/components/grid";
import {
	LocationSection,
	SmallHeroSection,
} from "../../shared/components/sections";
import { ContactForm } from "../../shared/components/sections/ContactForm/ContactForm";

export const ContactUs = () => {
	return (
		<>
			<Header></Header>
			<SmallHeroSection
				title={"Contact Us"}
				subTitle={"Home / Contact"}
			></SmallHeroSection>
			<ContactForm></ContactForm>
			<LocationSection></LocationSection>
			<Footer></Footer>
		</>
	);
};
