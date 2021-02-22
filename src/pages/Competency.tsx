import React, { useContext } from 'react';
import { BulletList, ContentWrap, MinorHeading } from './pageStyles';
import { DbContext } from "../utils/db";

export const Competency = () => {
	const { competencies } = useContext(DbContext);
	return (
		<ContentWrap>
			{competencies.map(( { name, items }) => (
				<div>
					<MinorHeading>{name}</MinorHeading>
					<BulletList items={items} />
				</div>
			))}
		</ContentWrap>
	);
}