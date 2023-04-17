import { Footer, Header } from "../../shared/components/grid";
import {
	BiographySection,
	SmallHeroSection,
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
				email={"info@yourdomain.com"}
				tel={"+1 (378) 400-1234"}
				web={"www.yourdomain.coms"}
				name={"John Smith"}
				work={"Designer"}
				text={
					"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrpobelie frandomised words which don't look even slightly believable."
				}
			></TeamItemSingle>
			<BiographySection></BiographySection>
			<Footer></Footer>
		</>
	);
};
