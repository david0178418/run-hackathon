import { IonRouterOutlet } from '@ionic/react';
import React, { lazy, Suspense, useEffect } from 'react';
import { Route, useLocation } from 'react-router-dom';

const HomePage = lazy(() => import('@pages/home.page'));

const FULL_SCREEN_ROUTES = [
	'/getting-started',
	'/login',
	'/register',
	'/account-recovery',
];

interface Props {
	onPathChange?: (paneDisabled: boolean) => void;
}

export
function Routes(props: Props): JSX.Element {
	const {pathname} = useLocation();
	const {
		onPathChange = () => null,
	} = props;

	useEffect(() => {
		onPathChange(FULL_SCREEN_ROUTES.includes(pathname));
	}, [pathname]);

	return (
		<IonRouterOutlet id="main">
			<Suspense fallback={<div>Loading...</div>}>
				<Route
					exact
					path="/"
					component={HomePage}
				/>
			</Suspense>
		</IonRouterOutlet>
	);
}
