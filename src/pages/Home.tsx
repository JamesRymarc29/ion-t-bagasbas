import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';


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
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>Card Content</IonCardContent>
      </IonCard>

      <IonCard color="secondary">
        <IonCardHeader>
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>Card Content</IonCardContent>
      </IonCard>

      <IonCard color="tertiary">
        <IonCardHeader>
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>Card Content</IonCardContent>
      </IonCard>

    
    <ExploreContainer name="" />
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
