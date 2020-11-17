import {
    IonContent,
    IonHeader,
    IonButtons,
    IonToolbar,
    IonMenuButton,
    IonTitle
  } from '@ionic/react';
  
  import React from 'react';
  import './HomePage.css';

const HomePage: React.FunctionComponent = () => {
    return (
      <>
        <IonHeader>
          <IonToolbar color="primary">
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent color="primary" >
  
        </IonContent>
      </>
    );
  };

  export default HomePage;