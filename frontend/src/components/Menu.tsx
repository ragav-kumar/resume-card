import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { sections } from "../utils/db";

interface MenuProps {
}

export const Menu = ({  }:MenuProps) => {
	const { pathname } = useLocation();
	return (
		<MenuWrap>
			{sections.map<JSX.Element>(({ menuLabel, path }, index) => (
				<MenuItem
					key={index}
					active={path === pathname}
				>
					<Link to={path}>{menuLabel}</Link>
				</MenuItem>
			))}
		</MenuWrap>
	);
}
const MenuWrap = styled.ul`
	list-style-type: none;
	padding: 10px;
`;
const MenuItem = styled.li<{ active: boolean }>`
	font-weight: ${p => p.active ? "bold" : "normal"};
	cursor: pointer;
	width: 100%;
	font-size: 40px;
	padding: 10px 0;
	backdrop-filter: blur(1px);
`