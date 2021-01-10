import React from 'react';
import { BulletList, ContentWrap, MinorHeading } from './pageStyles';

const items:{ [key:string]: string[] } = {
	"Web & Desktop Development": [
		"Experienced with a variety of programming environments – such as Visual Basic, Java, PHP, HTML, Python, and several others – as a consequence of several years of studies in computer engineering and employment in technology-based positions",
		"Currently taking a formal course in web design and digital marketing; this formalizes my prior experience with web development by providing a backbone of good practices and design principles (i.e. mobile-first, responsive design), filling in gaps from self-learning HTML, PHP, JS, and WordPress",
		"Advanced knowledge of the Microsoft office suite – Word, Excel, Powerpoint, and Access – with standard usage supplemented by custom macros written in VBA",
		"Conducted a crowdsourced behavioural psychology study using subjects from Amazon’s mechanical turk, with data collection conducted through a custom site built from the ground up on HTML, PHP, and Flash (with data stored on a MySQL database), which allowed data collection at a rate two orders of magnitude faster than those of most of my peers",
		"Upgraded and maintained organizational system for psychology research pool at Kwantlen Polytechnic University",
		"Upgraded all computers in Kitsilano high school from Windows 98 to Windows XP, handling much of the software reinstallation and network configuration involved",
		"Provided maintenance and system upgrade support for student-facing stations at various schools in the Vancouver School district",
	],
	"Interpreting Data and Communicating Ideas": [
		"Experienced in translating complex, intricate findings into easily understandable form for lay audiences, as a consequence of teaching experience and frequent conference presentations",
		"Guided first years undergraduate students as they learned the fundamentals of their field, supplementing course material with personal experiences and direct exposure to field research",
		"Provided lectures on fundamental psychology concepts to first year undergraduate students",
		"As a Teaching Assistant, served as a point of contact between students and instructor",
		"Received the \“Competent Communication\” award at Toastmasters International",
		"Trained in digital marketing strategies"
	],
	"Organization and Team Management": [
		"Supervised and trained research assistants to conduct experiments",
		"Cataloged and updated inventory of legacy donated computers, and created a an easy-to-understand system for future (non-technically oriented) employees to maintain the inventory and pursue future updates",
		"Organized classes of undergraduate students in one of their first few courses in psychology, which includes organizing and helping them to conduct their first experiment in the field",
		"Graded assignment and exam papers, invigilated exams, and performed administrative work for all TA’d courses",
	],
};

interface CompetencyProps {
	
}

export const Competency = ({  }:CompetencyProps) => {
	const render:JSX.Element[] = [];
	let i = 0;
	for (const key in items) {
		if (Object.prototype.hasOwnProperty.call(items, key)) {
			const text = items[key];
			render.push(
				<div key={i++}>
					<MinorHeading>{key}</MinorHeading>
					<BulletList items={text} />
				</div>
			)
		}
	}
	return (
		<ContentWrap>{render}</ContentWrap>
	);
}