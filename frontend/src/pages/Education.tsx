import React from 'react'
import styled from 'styled-components';
import { ContentWrap } from './pageStyles';

type EducationListing = {
	certificate: string;
	start: number;
	end: number;
	location: string;
}
const items:EducationListing[] = [
	{
		certificate: "Bachelor of Science in Computer Science",
		start: 2018,
		end: 2020,
		location: "University of Victoria, Victoria, British Columbia, Canada",
	}, {
		certificate: "Certificate in Web Design & Digital Marketing",
		start: 2017,
		end: 2017,
		location: "Q College, Victoria, British Columbia, Canada",
	}, {
		certificate: "Masters of Science in Psycholgoy (Cognition and Brain Science)",
		start: 2013,
		end: 2015,
		location: "University of Victoria, Victoria, British Columbia, Canada",
	}, {
		certificate: "Bachelor of Applied Arts in Psychology, with Honours",
		start: 2008,
		end: 2013,
		location: "Kwantlen Polytechnic University, Surrey, British Columbia, Canada",
	}
];


interface EducationProps {
	
}

export const Education = ({  }:EducationProps) => {
	return (
		<ContentWrap>
			{items.map(item => <LineItem {...item} />)}
		</ContentWrap>
	);
}

const ItemWrap = styled.div`
	display: grid;
	grid-template-columns: 3fr 1fr;
	padding: 1em;
`;
const Degree = styled.div`
	font-weight: bold;
`;
const Duration = styled.div`
	text-align: right;
`;
const LineItem = ({ certificate, start, end, location }: EducationListing) => (
	<ItemWrap>
		<Degree>{certificate}</Degree>
		<Duration>{start}{ end > start ? " - " + end : "" }</Duration>
		<div>{location}</div>
	</ItemWrap>
);