import { IonButtons, IonLabel, IonContent, IonHeader, IonIcon, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { globe, moon, navigate, planet, sunny, star, starHalf } from 'ionicons/icons';
import React from 'react';

const ListPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Categories</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
      <IonList>

      <IonItem>
        <IonIcon slot="start" color="medium" icon={globe}></IonIcon>
        <IonLabel>360 Panorama</IonLabel>
      </IonItem>

      <IonItem>
      <IonIcon slot="start" color="medium" icon={moon}></IonIcon>
        <IonLabel>Alma</IonLabel>
      </IonItem>

      <IonItem>
      <IonIcon slot="start" color="medium" icon={planet}></IonIcon>
        <IonLabel>Apex</IonLabel>
      </IonItem>

      <IonItem>
      <IonIcon slot="start" color="medium" icon={navigate}></IonIcon>
        <IonLabel>Chile</IonLabel>
      </IonItem>

      <IonItem>
      <IonIcon slot="start" color="medium" icon={starHalf}></IonIcon>
        <IonLabel>Cosmology</IonLabel>
      </IonItem>

      <IonItem>
        <IonIcon slot="start" color="medium" icon={star}></IonIcon>
        <IonLabel>ETL</IonLabel>
      </IonItem>

      <IonItem>
      <IonIcon slot="start" color="medium" icon={globe}></IonIcon>
        <IonLabel>ESO Supernova</IonLabel>
      </IonItem>

      <IonItem>
      <IonIcon slot="start" color="medium" icon={moon}></IonIcon>
        <IonLabel>Exoplanets</IonLabel>
      </IonItem>

      <IonItem>
      <IonIcon slot="start" color="medium" icon={planet}></IonIcon>
        <IonLabel>Fulldome</IonLabel>
      </IonItem>

      <IonItem>
      <IonIcon slot="start" color="medium" icon={sunny}></IonIcon>
        <IonLabel>Galaxies</IonLabel>
      </IonItem>

      <IonItem>
        <IonIcon slot="start" color="medium" icon={starHalf}></IonIcon>
        <IonLabel>Galaxy Clusters</IonLabel>
      </IonItem>

      <IonItem>
      <IonIcon slot="start" color="medium" icon={navigate}></IonIcon>
        <IonLabel>Ilustrations</IonLabel>
      </IonItem>

      <IonItem>
      <IonIcon slot="start" color="medium" icon={globe}></IonIcon>
        <IonLabel>La silla</IonLabel>
      </IonItem>

      <IonItem>
      <IonIcon slot="start" color="medium" icon={moon}></IonIcon>
        <IonLabel>Nebulae</IonLabel>
      </IonItem>

      <IonItem>
      <IonIcon slot="start" color="medium" icon={planet}></IonIcon>
        <IonLabel>Quasars and black holes</IonLabel>
      </IonItem>

      <IonItem>
        <IonIcon slot="start" color="medium" icon={sunny}></IonIcon>
        <IonLabel>Solar system</IonLabel>
      </IonItem>

      <IonItem>
      <IonIcon slot="start" color="medium" icon={starHalf}></IonIcon>
        <IonLabel>Star clusters</IonLabel>
      </IonItem>

      <IonItem>
      <IonIcon slot="start" color="medium" icon={star}></IonIcon>
        <IonLabel>Stars</IonLabel>
      </IonItem>

      <IonItem>
      <IonIcon slot="start" color="medium" icon={navigate}></IonIcon>
        <IonLabel>Survey telescopes</IonLabel>
      </IonItem>

    </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ListPage;
