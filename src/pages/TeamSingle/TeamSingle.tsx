import { Footer, Header } from "../../shared/components/grid";
import {
	BiographySection,
	FormSection,
	RewievsSection,
	SmallHeroSection,
	SubBiographySection,
} from "../../shared/components/sections";
import { TeamItemSingle } from "../../shared/components/ui/TeamItemSingle/TeamItemSingle";

export const TeamSingle = () => {
	return (
		<>
			<Header></Header>
			<SmallHeroSection
				title={"Professional Single"}
				subTitle={"Home / Team Single"}
			></SmallHeroSection>
			<TeamItemSingle
				name={"John Smith"}
				work={"Designer"}
				text={
					"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrpobelie frandomised words which don't look even slightly believable."
				}
			></TeamItemSingle>
			<BiographySection></BiographySection>
			<SubBiographySection></SubBiographySection>
			<RewievsSection title={"Our Team Members"}></RewievsSection>
			<FormSection
				title={"Contact Me"}
				text={
					"Save my name, email, and website in this browser for the next time I comment."
				}
			></FormSection>
			<Footer></Footer>
		</>
	);
};
