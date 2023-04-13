import { Footer, Header } from "../../shared/components/grid";
import { BlogStore, SmallHeroSection } from "../../shared/components/sections";

export const BlogSingle = () => {
	return (
		<>
			<Header></Header>
			<SmallHeroSection></SmallHeroSection>
			<BlogStore></BlogStore>
			<Footer></Footer>
		</>
	);
};
