import React from 'react'
import styled from 'styled-components';

export const Header = () => {
	return (
		<Wrap>
			<Name>Ragav Kumar</Name>
			<Title>Full Stack Developer</Title>
		</Wrap>
	);
}

const Wrap = styled.div`
	color: white;
	font-size: 4vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-shadow: 2px 2px 2px #00007F7F;
	font-weight: bolder;
	font-family: 'Share Tech Mono', fantasy;
	p {
		margin: 0;
	}
`
const Name = styled.p``;
const Title = styled.p``;