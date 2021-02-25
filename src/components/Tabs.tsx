import React, { useState } from "react";
import styled, { css } from "styled-components";
import { electricBlue } from "../pages/pageStyles";

interface TabsProps {
	tabs: {
		label: string;
		content: React.ReactNode;
	}[];
}

export const Tabs = ( { tabs }: TabsProps ) => {
	const [ activeIndex, setActiveIndex ] = useState<number>(0);

	return (
		<Wrap>
			<TabWrap>
				{tabs.map(({ label }, index) => (
					<Tab active={index === activeIndex} onClick={() => setActiveIndex(index)}>
						{label}
					</Tab>
				))}
			</TabWrap>
			<ContentWrap>
				{tabs[activeIndex].content}
			</ContentWrap>
		</Wrap>
	);
}

const Wrap = styled.div`
	height: 100%;
	min-height: 100%;
`;
const TabWrap = styled.div`
	display: flex;
	justify-items: stretch;
	justify-content: space-evenly;
	align-items: stretch;
`;
const ContentWrap = styled.div`
	border: 1px solid white;
	padding: 10px;
`;

const activeTab = css`
	background-color: white;
	color: ${electricBlue};
`;

const inactiveTab = css`
	background-color: ${electricBlue};
	color: white;
`;
interface TabButtonProps {
	active: boolean;
}
const Tab = styled.h4<TabButtonProps>`
	text-align: center;
	border-radius: 3px;
	flex: 1;
	margin: 10px;
	padding: 10px;
	cursor: pointer;
	${p => p.active ? activeTab : inactiveTab};
`;