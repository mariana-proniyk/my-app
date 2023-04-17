import { Footer, Header } from "../../shared/components/grid";
import {
	SmallHeroSection,
	TeamSection,
} from "../../shared/components/sections";

export const Team = () => {
	return (
		<>
			<Header></Header>
			<SmallHeroSection
				title={"Our Professional"}
				subTitle={"Home / Team"}
			></SmallHeroSection>
			<TeamSection></TeamSection>
			<Footer></Footer>
		</>
	);
};
