import React, { useContext } from 'react';
import { ContentWrap} from './pageStyles';
import { DbContext } from "../utils/db";
import styled from "styled-components";
import { CompetencyItem } from "../utils/types";
import { Tabs } from "../components/Tabs";
import star from "../img/star-white.png";


export const Competency = () => {
	const { competencies } = useContext(DbContext);
	return (
		<ContentWrap>
			<Tabs tabs={competencies.map(({name, items}) => ({
				label: name,
				content: items.map<JSX.Element>(item => <CompetencyBullet item={item} />)
			}))} />
			{/*{competencies.map(( { name, items } ) => (
				<div>
					<MinorHeading>{name}</MinorHeading>
					<BulletList items={items.map(( { label, text } ) => (
						<ItemWrap>
							<Label>{label}</Label>:  <span>{text}</span>
						</ItemWrap>
					))}/>
				</div>
			))}*/}
		</ContentWrap>
	);
}
const ItemWrap = styled.div`
	margin: 5px 0;
`;
const Label = styled.span`
	font-weight: bold;
`;
const Text = styled.span``;

interface CompetencyBulletProps {
	item: CompetencyItem;
}
const CompetencyBullet = ( { item:{ label, level, text } }:CompetencyBulletProps) => (
	<ItemWrap>
		<Stars num={level} />
		<Label>{label}: </Label>
		<Text>{text}</Text>
	</ItemWrap>
);

const StarWrap = styled.div``;
const Stars = ({ num }:{ num: number }) => {
	const stars:JSX.Element[] = [];
	for ( let i = 0; i < num; i++ ) {
		stars.push(<img src={star}  alt="★"/>)
	}
	return <StarWrap>{stars}</StarWrap>;
}