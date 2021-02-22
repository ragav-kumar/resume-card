import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { sections } from '../utils/db';
import { Competency, Education, History, Profile } from "../pages";

export const Content = () => {
	// For the menu, Profile goes on top. In here, it needs to be at the bottom because of react-router
	return (
		<Switch>
			{sections.slice(1).map<JSX.Element>(({ path}) => (
				<Route path={path}>
					{mapContent(path)}
				</Route>
			))}
			<Route path={sections[0].path}>{mapContent(sections[0].path)}</Route>
		</Switch>
	);
}

const mapContent = (path:string):JSX.Element => {
	switch (path ) {
		case "/competencies":
			return <Competency />;
		case "/education":
			return <Education />;
		case "/experience":
			return <History />;
		default:
			return <Profile />;
	}
}