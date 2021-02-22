import React from 'react'
import styled from 'styled-components';
import headPic from '../img/mugshot.png';

interface MugshotProps {
	type?: "normal"
	width: number;
}

export const Mugshot = ( { width }: MugshotProps ) => {
	return (
		<Wrap width={width}>
			<Head src={headPic} alt="Picture of Ragav Kumar" title="Picture of Ragav Kumar" />
		</Wrap>
	)
};

const Wrap = styled.div<{ width: number }>`
	border-radius: 50px;
	width: ${p => p.width}px;
	height: ${p => p.width}px;
	overflow: hidden;
`;
const Head = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 50px;
	padding: 10px;
	opacity: 0.95;
`;