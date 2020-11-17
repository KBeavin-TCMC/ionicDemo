import React from 'react';
import {IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar} from '@ionic/react';
import './HomePage.css';

const MapPage: React.FC = () => {
    return (
        <>
        <IonHeader>
          <IonToolbar color="primary">
              <IonButtons slot="start">
                <IonMenuButton />
              </IonButtons>
            <IonTitle>Map</IonTitle>
          </IonToolbar>
        </IonHeader>
        </>
    )
}

export default MapPage;