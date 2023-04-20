import { Footer, Header } from "../../shared/components/grid";
import {
	FormSection,
	QuotesSection,
	RewievsSection,
	SmallHeroSection,
} from "../../shared/components/sections";
import { WhatWeDo } from "../../shared/components/sections/WhatWeDo/WhatWeDo";

export const About = () => {
	return (
		<>
			<Header></Header>
			<SmallHeroSection
				title="About Us"
				subTitle="Home / About Us"
			></SmallHeroSection>
			<QuotesSection></QuotesSection>
			<WhatWeDo></WhatWeDo>
			<RewievsSection
				title={"What the People Thinks About Us"}
			></RewievsSection>
			<FormSection
				title={"Creative project? Let's have a productive talk."}
			></FormSection>
			<Footer></Footer>
		</>
	);
};
