import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import './Clickcounter.css';

const Clickcounter: React.FC = () => {
  // Step 2: Create state variable for click count
  const [clickCount, setClickCount] = useState(0);

  // Step 3: Define function to increment click count
  const incrementCount = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
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
          {/* Step 4: Display click counter */}
          <p>Click Count: {clickCount}</p>
          {/* Step 4: Add a button to increment click count */}
          <IonButton  color="success"expand='full'onClick={incrementCount}> Please Click!</IonButton> 
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Clickcounter;
