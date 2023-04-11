import { Footer, Header } from "../../shared/components/grid";
import {
	ClientSection,
	CounterSection,
	ServicePoints,
	SmallHeroSection,
	VideoSection,
} from "../../shared/components/sections";
import { ServiceDetail } from "../../shared/components/sections/ServiceDetail/ServiceDetail";
import { WhatWeDoItem } from "../../shared/components/ui";

export const ServiceSingle = () => {
	return (
		<>
			<Header></Header>
			<SmallHeroSection
				title={"Service Single"}
				subTitle={"Home / Services Single"}
			></SmallHeroSection>
			<ServiceDetail></ServiceDetail>
			<ClientSection></ClientSection>
			<VideoSection></VideoSection>
			<ServicePoints></ServicePoints>
			<CounterSection></CounterSection>
			<Footer></Footer>
		</>
	);
};
