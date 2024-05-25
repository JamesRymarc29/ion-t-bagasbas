import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAlert, IonButton, IonActionSheet, IonButtons, IonBackButton, IonImg, IonIcon } from '@ionic/react';
import { camera } from 'ionicons/icons';
import './Profile.css';

const Profile: React.FC = () => {
  const [profilePhoto, setProfilePhoto] = useState<string>('../src/assets/img/avatar.png');
  const [coverPhoto, setCoverPhoto] = useState<string>('../src/assets/img/cover.jpg');

  const handleProfilePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setProfilePhoto(URL.createObjectURL(file));
    }
  };

  const handleCoverPhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setCoverPhoto(URL.createObjectURL(file));
    }
  };

  const triggerFileInputClick = (selector: string) => {
    const inputElement = document.querySelector(selector) as HTMLInputElement;
    if (inputElement) {
      inputElement.click();
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/app/Home" />
          </IonButtons>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div className="cover-photo-container">
          <IonImg src={coverPhoto} className="cover-photo" />
          <input type="file" accept="image/*" onChange={handleCoverPhotoChange} className="photo-upload-input" />
          <IonButton fill="clear" className="change-cover-photo-button" onClick={() => triggerFileInputClick('.cover-photo-container .photo-upload-input')}>
            <IonIcon icon={camera} /> add Cover Photo
          </IonButton>
        </div>

        <div className="profile-photo-container">
          <IonImg src={profilePhoto} className="profile-photo" />
          <input type="file" accept="image/*" onChange={handleProfilePhotoChange} className="photo-upload-input" />
          <IonButton fill="clear" className="change-profile-photo-button" onClick={() => triggerFileInputClick('.profile-photo-container .photo-upload-input')}>
            <IonIcon icon={camera} /> Add Profile Photo
          </IonButton>
        </div>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>My Profile</IonCardTitle>
            <IonCardSubtitle>Good Student</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Don’t try to be perfect. Just try to be better than you were yesterday</IonCardContent>

          <IonButton id="present-alert" color="success" expand="full">About Me</IonButton>
          <IonAlert
            trigger="present-alert"
            header="James Rymarc Bagasbas"
            subHeader="BSIT student"
            message="If you don't take risks, you can't create a future."
            buttons={['Back']}
          ></IonAlert>

          <IonButton id="open-action-sheet" color="success" expand="full">Open</IonButton>
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

export default Profile;
