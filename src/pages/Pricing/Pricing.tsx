import { Footer, Header } from "../../shared/components/grid";
import {
	PriceSection,
	SmallHeroSection,
} from "../../shared/components/sections";

export const Pricing = () => {
	return (
		<>
			<Header></Header>
			<SmallHeroSection
				title={"Pricing & Plan"}
				subTitle={"Home / Priceing"}
			></SmallHeroSection>
			<PriceSection></PriceSection>
			<Footer></Footer>
		</>
	);
};
