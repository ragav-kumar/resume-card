import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { sections } from '../utils/db';

interface ContentProps {
}

export const Content = ({  }:ContentProps) => {
	// For the menu, Profile goes on top. In here, it needs to be at the bottom because of react-router
	return (
		<Switch>
			{sections.slice(1).map<JSX.Element>(({ path, content }, index) => (
				<Route path={path}>
					{content}
				</Route>
			))}
			<Route path={sections[0].path}>{sections[0].content}</Route>
		</Switch>
	);
}