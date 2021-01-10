import React from 'react'
import { BulletList, ContentWrap } from './pageStyles';

const items:string[] = [
	"Experienced in Visual Basic, Java, PHP, HTML, Python, WordPress, and various other programming languages and environments",
	"Experienced in the use of Photoshop for fine-grained adjustment of images for use in research",
	"Currently taking a course in web design and digital marketing, reinforcing and providing a formal foundation in web development (PHP, HTML, JS, WordPress) and digital design (Photoshop, Illustrator, Indesign)",
	"Masters of Science in Psychology (Cognition & Brain Science), a testament to my ability to commit to high intensity, long term projects",
	"Familiar and comfortable with managing tremendous workloads with conflicting requirements and under strict deadlines, all while generating high quality deliverables – an inevitable result of graduate studies in a competitive field",
];

interface ProfileProps {
	
}

export const Profile = ({  }:ProfileProps) => {
	return (
		<ContentWrap>
			<BulletList items={items} />
		</ContentWrap>
	);
}