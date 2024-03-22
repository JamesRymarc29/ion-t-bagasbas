import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonAlert, IonButton, IonActionSheet
  
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
      <img alt="Silhouette of mountains" src="../src/assets/img/avatar.png" />
      <IonCardHeader>
        <IonCardTitle>My Profile</IonCardTitle>
        <IonCardSubtitle>Good Student</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Don’t try to be perfect. Just try to be better than you were yesterday</IonCardContent>
      <IonButton id="present-alert" color="success" expand='full'>About Me</IonButton > 
      <IonAlert
        trigger="present-alert"
        header="James Rymarc Bagasbas"
        subHeader="BSIT student"
        message="If you don't take risks, you can't create a future."
        buttons={['Back']}
        
      ></IonAlert>  

    <IonButton id="open-action-sheet" color="success" expand='full'>Open</IonButton>
      <IonActionSheet
        trigger="open-action-sheet"
        header="Actions"
        buttons={[ 
          {
            text: 'Delete',
            role: 'destructive',
            data: {
              action: 'delete',
            },
          },
          {
            text: 'Share',
            data: {
              action: 'share',
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
            data: {
              action: 'cancel',
            },
          },
        ]}
      ></IonActionSheet>

      

    </IonCard>
    
      </IonContent>
      
    </IonPage>
  );
};

export default Tab1;
