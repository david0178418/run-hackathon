import React from 'react';
import {
	IonContent,
	IonButtons,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react';

export
function HomePage() {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar color="primary">
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>
						Home
					</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent scrollX className="ion-padding">
				Home Page
			</IonContent>
		</IonPage>
	);
}

export default HomePage;
