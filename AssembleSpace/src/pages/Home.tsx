import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/react';
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Assemble the space</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="start-game">
        <img src="/AssembleSpace/src/theme/images/eso1238a.jpg"/>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
