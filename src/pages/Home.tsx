import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { calculatorOutline, personCircle, speedometerOutline } from 'ionicons/icons';


const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonCard> 
      <img alt="Silhouette of mountains" src="../src/assets/img/welcome.png" /> 
      <IonCardHeader>
        <IonCardTitle>Welcome to my Application</IonCardTitle>
        <IonCardSubtitle></IonCardSubtitle>
      </IonCardHeader>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
      <IonCardContent></IonCardContent>
    </IonCard>
    

    <IonCard>
     
      <img alt="Silhouette of mountains" src="../src/assets/img/one piece.png" />
      <IonCardHeader>
      </IonCardHeader>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
      <IonCardContent></IonCardContent>
    </IonCard>
    


    <IonCard color="primary"> 
        <IonCardHeader>
          <IonCardTitle>Profile</IonCardTitle>
          <IonIcon icon={personCircle} size="large"/>
        </IonCardHeader>
        <IonCardContent></IonCardContent>    
      </IonCard>

      <IonCard color="secondary">
        <IonCardHeader>
          <IonCardTitle>Click Counter</IonCardTitle>
          
          <IonIcon icon={speedometerOutline} size="large"/>
          <IonCardSubtitle></IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent></IonCardContent>
      </IonCard>

      <IonCard color="success">
        <IonCardHeader>
          <IonCardTitle>Calculator</IonCardTitle>
          <IonIcon icon={calculatorOutline} size="large"/>
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
