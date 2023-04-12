import { Footer, Header } from "../../shared/components/grid";
import {
	NewsSection,
	PostSection,
	SmallHeroSection,
} from "../../shared/components/sections";

export const Blog = () => {
	return (
		<>
			<Header></Header>
			<SmallHeroSection
				title={"Articles & News"}
				subTitle={"Home / Blog"}
			></SmallHeroSection>
			<PostSection></PostSection>
			<NewsSection></NewsSection>
			<Footer></Footer>
		</>
	);
};
