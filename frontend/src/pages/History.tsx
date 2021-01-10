import React from 'react'
import styled from 'styled-components';
import { ContentWrap } from './pageStyles';

type EmploymentListing = {
	title: string;
	time: string;
	employer: string;
	location: string;
}
const items:EmploymentListing[] = [
	{
		title: "Full stack developer",
		time: "Apr 2018 - Present",
		employer: "CityAutobahn Technologies",
		location: "Victoria, British Columbia",
	}, {
		title: "Wordpress Developer",
		time: "May 2017 - Sep 2019",
		employer: "Q Academy & North Studio",
		location: "Victoria, British Columbia",
	}, {
		title: "Web Development Instructor",
		time: "May 2017 - Jun 2019",
		employer: "Q college",
		location: "Victoria, British Columbia",
	}, {
		title: "Computer Access Volunteer",
		time: "Jan 2017 - Mar 2020",
		employer: "Victoria Cool-aid Society, Rock Bay Landing",
		location: "Victoria, British Columbia",
	}, {
		title: "Academic Teaching Assistant, various courses",
		time: "Sep 2013 - Apr 2016",
		employer: "University of Victoria",
		location: "Victoria, British Columbia",
	}, {
		title: "Research Assistant",
		time: "Oct 2010 - Aug 2013",
		employer: "Kwantlen Polytechnic University, Dr. Daniel Bernstein",
		location: "Surrey, British Columbia",
	}, {
		title: "Student Assistant",
		time: "Sep 2009 - May 2013",
		employer: "Kwantlen Polytechnic University, Psychology Lab",
		location: "Surrey, British Columbia",
	}, {
		title: "Technical Resource Worker",
		time: "Summer 2007",
		employer: "The Hotspot (Community Internet Café)",
		location: "Squamish, British Columbia",
	}, {
		title: "Volunteer Assistant Systems Analyst",
		time: "Summer 2003, Summer 2004",
		employer: "Vancouver School Board",
		location: "Vancouver, British Columbia",
	},
];

interface HistoryProps {
	
}

export const History = ({  }:HistoryProps) => {
	return (
		<ContentWrap>
			{items.map(item => <HistoryItem {...item} />)}
		</ContentWrap>
	);
}

const ItemWrap = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
	padding: 1em;
	padding-bottom: 0;
`;
const Title = styled.span`
	font-weight: bold;
`;
const HistoryItem = ({ employer, location, time, title }:EmploymentListing) => (
	<ItemWrap>
		<Title>{title}</Title>
		<span>{time}</span>
		<span>{employer}</span>
	</ItemWrap>
)