import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton } from '@ionic/react';
import './Clickcounter.css';

const Clickcounter: React.FC = () => {
  // Step 2: Create state variable for click count
  const [clickCount, setClickCount] = useState(0);

  // Step 3: Define function to increment click count
  const incrementCount = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  // Step 5: Define function to reset click count
  const resetCount = () => {
    setClickCount(0);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* Back Button */}
          <IonButtons slot='start'>
              <IonBackButton defaultHref='/app/Home'/>
           </IonButtons>
          <IonTitle>Click Counter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Click counter</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="ion-padding"> 
          {/* Display click counter */}
          <p>Click Count: {clickCount}</p>
          {/* Button to increment click count */}
          <IonButton color="success" expand="full" onClick={incrementCount}> Please Click!</IonButton> 
          {/* Button to reset click count */}
          <IonButton color="danger" expand="full" onClick={resetCount}>Reset</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Clickcounter;
