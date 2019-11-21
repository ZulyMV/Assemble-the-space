import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonRouterOutlet } from '@ionic/react';

const menu: React.FC = () =>(

    <IonMenu side="start" menuId="first">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Categories</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>360 Panorama</IonItem>
          <IonItem>ALMA</IonItem>
          <IonItem>APEX</IonItem>
          <IonItem>Chile</IonItem>
          <IonItem>Cosmology</IonItem>
          <IonItem>ELT</IonItem>
          <IonItem>ESO Supernova</IonItem>
          <IonItem>Exoplanets</IonItem>
          <IonItem>Fulldome</IonItem>
          <IonItem>Galaxies</IonItem>
          <IonItem>Galaxy Clusters</IonItem>
          <IonItem>Illustrations</IonItem>
          <IonItem>La Silla</IonItem>
          <IonItem>Nebulae</IonItem>
          <IonItem>Paranal</IonItem>
          <IonItem>Solar System</IonItem>
          <IonItem>Star Clusters</IonItem>
          <IonItem>Stars</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
   
);

export default menu;