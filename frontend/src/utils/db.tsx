import React from 'react';
import { Competency, Education, History, Profile } from '../pages';
/**
 * Mockup of DB data. Replace with a link to a mySQL DB later.
 */

/**
 * All data for a given section
 */
export type SectionData = {
	menuLabel: string;
	header   : string;
	path     : string;
	content  : React.ReactNode;
};
/**
 * Menu Sections
 */
export const sections:SectionData[] = [
	{
		menuLabel: "Profile",
		header: "Professional Profile",
		path: "/",
		content: <Profile />,
	}, {
		menuLabel: "Competencies",
		header: "Professional Competencies",
		path: "/competencies",
		content: <Competency />,
	}, {
		menuLabel: "Education",
		header: "Education",
		path: "/education",
		content: <Education />,
	}, {
		menuLabel: "Experience",
		header: "Employment History",
		path: "/experience",
		content: <History />,
	},
];