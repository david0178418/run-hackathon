import {
	IonContent,
	IonIcon,
	IonItem,
	IonLabel,
	IonMenu,
	IonMenuToggle,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonList,
} from '@ionic/react';
import React from 'react';
import {
	homeOutline,
} from 'ionicons/icons';

function pathProps(currentPath: string, targetUrl: string): any {
	const common = {
		routerDirection: 'root',
		lines: 'none',
	};
	return (currentPath === targetUrl) ? {
		...common,
		detail: true,
	} : {
		...common,
		className: 'selected',
		routerLink: targetUrl,
		detail: false,
	};
}

export
function Menu() {
	return (
		<IonMenu contentId="main" type="overlay">
			<IonHeader>
				<IonToolbar color="primary">
					<IonTitle>Beta</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonList>
					<IonMenuToggle autoHide={false}>
						<IonItem {...pathProps('Home', '/')}>
							<IonIcon slot="start" icon={homeOutline} />
							<IonLabel>
								Library
							</IonLabel>
						</IonItem>
					</IonMenuToggle>
				</IonList>
			</IonContent>
		</IonMenu>
	);
}
