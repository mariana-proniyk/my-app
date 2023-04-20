import { Footer, Header } from "../../shared/components/grid";
import { SmallHeroSection } from "../../shared/components/sections";
import { QuestionSection } from "../../shared/components/sections/QuestionSection/QuestionSection";

export const FAQ = () => {
	return (
		<>
			<Header></Header>
			<SmallHeroSection title="Faq’s" subTitle="Home / Faq"></SmallHeroSection>
			<QuestionSection
				title={"Every Question Answered"}
				isImageRight={true}
			></QuestionSection>
			<QuestionSection
				title={"Project related questions"}
				isImageRight={false}
			></QuestionSection>
			<Footer></Footer>
		</>
	);
};
