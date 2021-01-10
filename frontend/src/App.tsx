import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Mugshot } from './components/Mugshot';

import circuit from './img/circuit.jpg';
import useDimensions from "react-cool-dimensions";
import { Menu } from './components/Menu';
import { Content } from './components/Content';
import { Header } from './components/Header';

export const App = () => {
	const [mugshotWidth, setMugshotWidth] = useState(100);
	const [cardBackSize, setCardBackSize] = useState<CardSizeProps>({
		width: 1600,
		height: 900,
		isPortrait: false,
	});
	const { ref:cardRef } = useDimensions<HTMLDivElement>({
		onResize: ({ width, height }) => {
			console.log(width, height);
			setMugshotWidth(width * .2);
			setCardBackSize({
				width: clamp(300, width, 1600),
				height: clamp(0, height, 900),
				isPortrait: width < height,
			});
		},
	});
	/* Wrap fills the entire screen, no problem. However, we want CardBack to be defined as follows:
		- Width: 300px - 1600px, at least 80% of available screen-width
		- Height: 95% of available height, to a max of 900px
	*/

	return (
		<BrowserRouter>
			<Wrap>
				<CardBack ref={cardRef} {...cardBackSize}>
					<Mugshot width={mugshotWidth} />
					<Header />
					<Menu />
					<Content />
				</CardBack>
			</Wrap>
		</BrowserRouter>
	);
}

const Wrap = styled.div`
	/* width: 100vw; */
	/* height: 100vh; */
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: "Exo 2", Arial, Helvetica, sans-serif;
	&, & * {
		box-sizing: border-box;
	}
	a {
		color: inherit;
		text-decoration: none;
	}
`;
interface CardSizeProps {
	width: number;
	height: number;
	isPortrait: boolean;
}
const CardBack = styled.div<CardSizeProps>`
	background-image: url(${circuit});
	background-color: #3495DC;
	background-position: center center;
	width: ${p => p.width}px;
	height: ${p => p.height}px;
	border-radius: 50px;

	display: grid;
	grid-template-columns: 1fr 4fr;
	grid-template-rows: auto 1fr;
	column-gap: 20px;
	justify-content: center;
`;


const clamp = (min: number, value: number, max:number):number => {
	if (value < min) {
		return min;
	} else if (value > max) {
		return max;
	}
	return value;
}