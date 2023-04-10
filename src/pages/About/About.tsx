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
			<RewievsSection></RewievsSection>
			<FormSection></FormSection>
			<Footer></Footer>
		</>
	);
};
