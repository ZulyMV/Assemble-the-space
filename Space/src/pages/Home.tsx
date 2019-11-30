import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
  } from '@ionic/react';
import React from 'react';
import './Home.css';

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="start-game">
        <img src="../images/eso1238a.png" alt=""/>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
