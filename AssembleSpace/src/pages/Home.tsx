import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonIcon, IonButton } from '@ionic/react';
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButton slot="start" href="../Componets/menu" color="transparent">
          <IonIcon name="menu" color="#2e0000"/>
          </IonButton>
          <IonTitle>Assemble the space</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="start-game">
        
      </IonContent>
    </IonPage>
  );
};

export default Home;




