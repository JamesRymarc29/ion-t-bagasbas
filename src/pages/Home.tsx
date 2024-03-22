import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
      <img alt="Silhouette of mountains" src="../src/assets/img/welcome.png" />
      <IonCardHeader>
        <IonCardTitle>Welcome to my Aplication</IonCardTitle>
        <IonCardSubtitle></IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent></IonCardContent>
    </IonCard>
    <ExploreContainer name="" />
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
