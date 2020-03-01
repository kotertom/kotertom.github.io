import Head from "components/head";
import { styled } from "linaria/react";
import React, { FunctionComponent } from "react";

const Main = styled.main``;

const Header = styled.header``;

const Title = styled.h1``;

const IndexPage: FunctionComponent = () => {
	return (
		<>
			<Head />
			<Main>
				<Header>
					<Title>tom koter</Title>
				</Header>
			</Main>
		</>
	);
};
export default IndexPage;
