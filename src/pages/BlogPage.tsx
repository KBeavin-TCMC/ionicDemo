import React from 'react';
import { IonToolbar, IonTitle, IonContent, IonCard, IonHeader, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButtons, IonMenuButton, } from '@ionic/react'

const BlogPage: React.FunctionComponent = () => { 
return (
  <>
    <IonHeader>
      <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        <IonTitle>Blog</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Vue.js</IonCardSubtitle>
          <IonCardTitle>Ionic 4 and Vue.js</IonCardTitle>
        </IonCardHeader>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>REACT</IonCardSubtitle>
          <IonCardTitle>Ionic 4 and React</IonCardTitle>
        </IonCardHeader>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>ANGULAR</IonCardSubtitle>
          <IonCardTitle>Ionic 4 and Angular</IonCardTitle>
        </IonCardHeader>
      </IonCard>
    </IonContent>
  </>
)}
export default BlogPage;