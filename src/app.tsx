import { Menu } from '@components/menu';
import { Routes } from '@/routes';
import { IonApp, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React, { StrictMode, useState } from 'react';

import './styles.scss';
import { css } from '@linaria/core';

export
function App(): JSX.Element {
	const [paneDisabled, setPaneDisabled] = useState(false);
	return (
		<StrictMode>
			<IonApp className={cls}>
				<IonReactRouter>
					<IonSplitPane
						contentId="main"
						className="side-panel"
						disabled={paneDisabled}
					>
						<Menu/>
						<Routes onPathChange={setPaneDisabled} />
					</IonSplitPane>
				</IonReactRouter>
			</IonApp>
		</StrictMode>
	);
}

const cls = css`{
	.side-panel {
		--side-max-width: 320px;
	}

	.media-item-card {
		display: inline-block;
		width: 320px;

		img {
			width: 100%;
		}
	}
}`;
