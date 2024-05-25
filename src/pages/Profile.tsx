import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonAlert, IonButton, IonActionSheet, IonButtons, IonBackButton
} from '@ionic/react';
import './Profile.css';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
              <IonBackButton defaultHref='/app/Home'/>
           </IonButtons>
          {/* Title */}
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonCard>
          <img alt="Silhouette of mountains" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJAAoAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAFBgMEBwIBAAj/xABCEAACAQIEAwQHBgQFAgcAAAABAgMEEQAFEiEGMVETQWGBBxQiMnGRoSNCUrHB0RUzcvBDYoLC4TTxFiZEVHOD0v/EABoBAAIDAQEAAAAAAAAAAAAAAAQFAgMGAQD/xAAsEQACAgEDAwMEAQUBAAAAAAABAgADEQQSIRMxUQUiQRRhsfAyI0JxoeEG/9oADAMBAAIRAxEAPwC0Rj7EzR4j0Y1+ZipxbH2OyuOSMdnJziGsnNPCzqLuTpQdWOwxPbATNaqRc2paaBTJIqkrEBcl2vpPwsD88Day/o0s47wvRUde9UPaSZYZoVR6YoCbyM8n+I1zz8duXcD4Yanraenmp6iaXWjxaBIdgouLnzJUeWFulyOaFYpM4qzSIqBlSO1wAtjd+W5Y8uvPBGIZVTpEKWlNQIv5UlS7Shf6Q3LyxgriHbOcmbusYGAIYizygnVnhqBJpYgrEpkIsSNwt+hx9/GIdehaavdvCkkA+ZAH1wHGc1hmdAixRjkUXn9P1x61fVN708g8/wBsD9OW5hz19v8A2FYB/QpPy1X+mK8/EFBCoJms9yDG40OLKTya35d4wF9ZlaZXFRLrXkO0IHmL2OPGqZ0vJF2byFrntU13vYHvB5KPljorE5kw0cxiqJ9H2yFSSpQ3DaQreext5Niq8tQYnYyNLAAJY5NRJjAIIYd97NyPPQeuB8ktPEgkWmkhmuCfU5FRb/0t7P64+y71xSktLIlXAiiMxAGKZVUEWKHZrXHIjlixRjkSLc8GO9HWtVUkUrCzm4kHQg2P1BxLrwA4ezSGt7aOJj2ykGSIqQUJ2YW7t1ODBfGr07b61Y/MyuoHTsZZYV8d9p44p9pj4zDF+zMp34lp5MQNKepxC03jiF5cSWuQa2W3y2mjZrRhlZbWPMHC3LGFlZQCNJ78NgG9+/rilV5dFKxa5DHmRidN20+4yN9G4e0RbbEZxNILO2nffFZw8khjU9nFGNU8x+4DawHjb5eYwTdelKF3PEDooe+wVoOTPrPL2vZaQqXLyMbKnh8f72wPpphDefKVVqpkYS1cu76SbhV7vC/LbvxLWaK6migRnjp412iTYMerd/z674jhj7FWW4AvsOn7nxxkNbr7NSee3ibLRen16ZeOT5nkcUh1yVchmlYXZnOryuf0AGBuc8QUWUoySN2lQRcQobnz6D44D8T8UiDVSZaR2vJ5hyTwXxwjnU7F3YsxNySbknFNenLct2hNlwXhYwV3FubV2tacrBGFLWi94AdSf0wIq3rxFDNPPMyTqWTU5PI2/PDTlvDUkHBOZ5tMNEjxLouvJSwFvMfpg1mXCprvR9ldXTpeohgEhFtyvfi4Mi8AcZkNjsOTziZrFNUagsMsockAaWI3wXy7ijNaBijSGeO5BSck79++KWXoq19Izk6e2TWORtqF8HOPsgbKM9dtJ9WqPbR+4E8x/fXFjbSdrCVLu2lge0Y8j4noc0+xc9jOwsYX5N8D3/DBirBakdYwCSuw6fUfmMZBNDJTTvG5KyRNY2236jD7wfxA1cgpKqQetIPYYn+Yv7j64Eto2e5O0Irt3e1u8ZcjYKCazWCFsk1/tI9ydm5ncm4PnfDBluaNMTBUvGZNOqKaP3J1/EN9j1GF6WRl9gb6lIVjyv0PTEVGtVEzRh3WJmEi2IBRwDY+fJh33uO/Fuk1TUvknjxB9ZpFuTj+XmOpmGOdeB0NTrLK4dZEJV1bmD+xFjicSY1aAMoZexmRsLKxVuCJYL4iZ8RmTEbPi0LKWeM98cOdrd3TFJK9T722OmqVbkcBGthGosVuxgjO4PVV7SADXIwRUva7HYYW55KieM0iSqUhbVJt78hPtfELyHU/DBjiOqBqkjDIGSFnQNuNbHSGt4DV88BIYFjUsJibnbxtax+X1JOE3qeoZm6Z7L+Y39M0yIptA5P4nkKyRey9iu3L6/LqcL/GOeGgg9VpmAqZV9pgd1Xr8e7BfN8zhyuieeY78kT8Tdwxl9ZUy1lXJUTMS0jaj/x8MAUV7zuPaMbn2DA7yJEJHs7thi4LyFs9zqKn0k08f2k7Ed3cPPA/IaZaiscstxHDJKbeCm31Ixq3o3yKqynIVrw9OslYolkSdCCF+6NV9uvLvwVa+0HHeUVV7iCYz57laT8K1+XQrpL0zqgA7wCR9bYs5JTomQZdT2BQUsanb/KMfJmaxx66qExRg2MqN2ke/iNx5gYvU6xJBGKfSIwAFsdgOmAieMQ3HOZjPpD4QmymqfMaCNmoZiS5UfyW8fA/T5YeczymHjPg2ma4E8sCyQSfhe3I/W+GPN6inp6R1qYDOsg09jYEODzBuRtgNljU2VZfHTevU9BTC7JCW1OiliebdwJ/D54s3kgeRIbACfBmUcYZPNT0uXZlLCyNNH2NTccpkurfkcK0UrwTrLCSske6HoRjeeL8mhzbhSuENQ07CPt4pWfUCUF9rdxsRYYwQtfngmltywW5drZmr5NmCZhl0FQLAuvteDd+JJ6uWzog0ray22Ykc18LruDhK4KzVaepehne0Mu6Fjsrd/zH5YdzUQaY2ax1kFbd1zYH5/ngJ02PiFI29MyzRVraoFnYvP8A9M7/AIrDVGx+K388GA2FqqqU7SWJSqgxFgeVpEJZfK6n5eOD8LrNGjobq6hwfjvjS+j276ih+Pwf0zJ+uU7LhYP7vyP+SctjknHOPMOREWZPfHvbNjukpZauXsqddT2vY4stk1f7X2HutbnzHhilnQHBMIRbCMqIpZss1RmrzxxKzQqo36aGO3+oj5YiMcgCCNvZW3sk72Ckfni7n1JV5fXgvGwMiWF9xcX+fMHbocC4pZJX+8Od7j3f+QQR8sZL1AH6hptfTSDpkkdZHSRU71NZBE5hS7O6AnYdcZfPKZpZJrWLsWI+J5YfOIKPNcxphBAY1iazS6nsbgcuXK+E7+FVj5qcsp4u2qdWkJGb6ja/PEdNgA8y7UZJHEZ/RdRpWZhVRzD2XRYz4Brk/ljWWghOTV2cVdI9ZTUKuKWiXcPoOksR3kkc+4eeM59EcUlPm9dTzRsk0brrVhuDZtsbRR1sGXwLTilmEd2N4l1i7Ek7c779Md3DqnM4QekMRZybsc/4R/j1BlElDVqHJpo7/bheagfeuOXTFbLJpoM7padJG7CSSRHUjYjQTy7uQw3z5rNOEjoYTGlwzSTJbboq3vc9TbzwmrT1cPFOW6oiyCaQuQOQKNpb4X/PELipIxLKAwU5jDmeXmt9wjtlU9nf3bnYX88UOIhm/Dn8KpOHcjGZJUSaa2eRSxG45nuJ3OrwwbDHRrKsp3NgLt9L4q0fFaKXpZJI6maEKGLuIX3/ABKw57f8DHqGAzmcvUtjE9rMpXLcz10i6aOsRhLDb2UkG4YfEX87Y/PXG2SLkGdvRxqRGyl0ub+yWa30Ax+hKXiGPOWdIWi0rZlWJixH9TWsDfuxjvpeglqeMoYKeCSSX1JDojUsT7Tb2GLFYdU4kGU9IZ7xb4TgpKrMXgq49bMmqNiSNLDfu8MO6UHZ0rRh721CJmbkpIIBPxA+WEXh3LaivneannjiemYMQ3Q/9rHD8rw1AQ6jsFFlG27A28yPlim8+7gyygezkSy0dOtQsrsFsSCvO7Gw/X64J5SrLllKrCxEIX5C2AJo6iRllWxlJNrG41Mdr+AsnyOGeKPs40jBuEUKPHxw59FQjc3xM7/6CxcInzzO8fY+x9fD+ZmNVLk1flamTL5kqCd2gqdyPBZANvNTghQZhFW6ojHJDUR/zIJRZ0F7X8RzsRcHrgkABaw5YpV1EKh46iP7Kqhvok/MHqvXGUFzE+7mbjoKBheJXznLoMyy94Z/Z71kHNCN7/Pn1xktZPUUlRNDMlirWVlFt+7n3HuPkd8a/RVqVkBYoFKkpLG2+hgbEH9+mMV9InHENfnkdJk8UXq9EzI07KD2571H+UH98e1Fa2Ln5ndPY1b/AG+Z7T1DzO4QXDDcHYAja4+PIjuIwLyzKJKLO3qKiZHarjddCpfSDYkDffYEYmps8irEjMMnq9QoN4GsQ/w5Ajz8sTSCSRY5S2hlbUhZtJFvIXHxA+OF43ISO0Z+1wD3hfIWiiz+Os3EkwMczN7xKH2SfEq2/wABhopuIaqqzNKGly4RqZ2hM1RJYBlJB2APTlcE4Qo3QSx1MKIsquZNLtZwPvAEbPzNsN01UI9M8CFu3K1EbIL3mW2oeYsfgScWIqs2GkXYomRHWnoKid5UfMUUxNZ1jp7EGwPNie4juxZGSX97MKo/0qg/249pZZmkWoip9E9TEjNBLIAUtfc8+oHf3YuxtWP78MK/CUt+gwR0k8QQ2OfmUjkv4cwqv9Sxt/txUmycxSg+swu07W+1pgbkLzJBHcMF2NaPdjpm/wDsYfpgfVTZqtZABS0JkAdgpqnU9wJ/l+P1x3pr4nuo3mLSVtTl2bU+Uy0ECQ1EsgSWCXYEamJsRsNuvfhar5ZDxTV1lGSk7/YRyKBcJHYFbnkCxa56KMGJcxl11ubVMVvUtaxqWFpJXbYeWy+ZwoDRlMkc880c9ct/5T6ijHmzG/IEmy7ePXA7KAxxCVYsozBlJlsFPnNdVJMVgnkk0wMnshdZIPP3Rt0G+CFVA8YPZnUouWdjyvsT8Ty8OXTEfYduyplw7QWB9n2iB3X7h8Sb9MHMqyVaUiSsftJAbqpJIQ9b95+mCNPo7dS2fjzAdZ6hTpFwTlvAkmS0bwQa5hpY7BTsQPHxPToBgmSqqb+yoHPoMdW3vhG9IuaSoYcthcqrprlKmxIvZR8L3xo8JpacDsJkgLNdqMseT/qEc44zoaHVHRj1uX8SEaB/q7/K+Fmo4yziX+WYYR+FUufmcLiqw5OPljoHC59Vax74j2r0+isds/5/cT9YSVsSVUdMG1SuL6B3DvJxMT++AHD9O0cU1fXuDNLuzk8h58h+2FDiz0rU9CZafI4VqZhsZ5D9mPgBufp8cKQMxpD/ABw82T5Nm+Z0i3R6YiRR7yvbSHHwBAPwx+bIenfy8sNGa+kLibMo5oZ8w1U8wKyQiGPsyp7rEHbzwqRtp3OLhnGDK8DORG70ftli8URS51NBFRxRPIxnICsbaQLH+r6Y0qDK+C+IH7HKq5BJz0U842HUK17eQxhHbG+q2JoqponSRGZJV3VlaxHw78TBGMEZkSpzkHBm0Zn6N55ctq4aXMI5NSkxLIhB1DdTqufnirlGU5nktLNk/EsBky9NPZZhGbohN9Jv3Ecr2tb63PRrn3EVbEYs5pKiSlQXjrZFCHwBBsW+NsPrOkyMktmVgQVbcEHuxP6ZGXjiV/VujYbmVaDNnp50bMoyw7MIlTAhZGBN7sBcr+Xjg3BmeX1AvBW08g8JBfGKZVmWcZG0sEFT2lIrsI45BrWykiwPMcutsFpuK2qVY1WR0U4W5LtL3AA96HqMB9Qg4MYdJWGRxNXnr6SBNc9VBGOrOLfngHmOatUsGoNUEaBg1XKAAoNrlQefLmbDv3wixcSTR9otJlVBSaCAGX2ifbK8rL0xHO9ZmlTQ/wARqJJYzVx641GlLBje45WNhueuPCwswUfM81QRS55xOeIqKr4phTKclMkGW00qvPPMGU1JY7spPvWF2J7zbFuHgylRlSUPVBRZVkNkQf0jb54bJJ7CwUW6Yjeqt7g+eHVGlSsdsn7zNavXPaf5YH2gr1IUa6UjWNfuhRYY504vzO0zgy3IHIYj7HwwxDccxKy5biVCuMk4ynE3E1Z39mVjHwC/uTjZjD4YwLOqhps2q57k66iQg+Go2wFrbPaBGvpFX9RmPifDHLm3LHKPqTbHpOFsezS/SFxj69K+S5XLpy+E6ZpF/wAZhsR/T+Z+ufyQhv5nu9BiKnl9gb8sdSS3Gld8UAYlhld4mmayjY7LtucOmX+i7MK3KmqKioSkqiNUUBTVcf5j3eV7d+LnCfCddDRR52IElmUh4Kd+ZHXpc92NKyjMIc0oVqIb2N1ZWFmVhzB+B54GtuIOFhVVAIy0yHLPRvVzyMlbXQwdmftIlUs6/Owt4i4w7ZHwfkuTFZoIO3mC27Wc6iD4DkPLBfiiqy/L9FTUVEdPXILRrc3kHepHOx6kbYqw51l0tClV61CkTLcM7gW+O+G+gaq1ckciIfU01FLYB9p7QnFPJEAFbYch0xJ664BdyFVQS1+nPCrmXF2WUQUwOKx3PuU7jYd5N8dRZ7TcQQmjysStLKdM2tSOzU87nle23PvwZZqKVzyOIBTpNU+32nBOJfyfLFzGkMkwKo4LAf5jufzxTrOG5aeNlRSwP3x38v2w3QrDQ00KHZCQgPidh9bYu77+PPGWZiTmbcAAAeIlU2VPLJpjhJvuxYbDe/64M1WXpSZXI0IvJEUlLDmdLBjbyBwbttbuxw4BFiARa1jjyMVYMPicdQ6lT8waXDAEG6k7HqMfXU8wMKuccSf+HKkZbUUVRNJHfs5LgK6b2sb7m3hzGLUXFuSPCsprAjfejYHUp6WtjVV6mpxw0w9ug1SclDjt2jBcY6VhgNT8Q5XNr01iCy3PaApYeYGOqDPaDMKlqallftACRrjKah3kXxPqVnAyOZT9PcoJKEAd+DxBPHXFzZGVoaOEGrki19o/KMcgfE88Y9UAlbkkkG5Pjh99KcAGY0VQrAtJEUZe+wa9/rhHkXUmnvwu1BJcgx7oVUUhlHeQQt7Vu7EpOKq7cu7niwDgcQ2eRzBEwz+jrJUzvPA1WL0kHtuv4j3J+vlbCi4KswdSpXYgi3kR1xrvCtAuU5bBHER2pszuD7zHfAt9mxeO5l9Cb2mgzzx0kAfSW5JHGg9pyeQH97fC+B0OSTVFXPWVc8lP6wBrpaSQqp6FmG5PiLDbvxZykrXH15wSd4o78lAO5HxYHfoMF1GAxxDovVvCGSVcRWWgCyn/ABlY6x/qO/kcZLxJkr5JnElOTrFxZyPfU8m/MfG+N7bnhD9J1AstNRVAA1BzCxt1F1v5j64kGMupPuAmXThgQWFiGvh54Do62qy9pKCsgWSmnt2E0XhqBDLv325HlhXzGn1U9wNxzPXB70X5h6tnDUzsBHWR6GPR13H+4fLHQ2VhGqqwZoFXJXSZdPDU5cyvouGp5VlCsDsbHSee/LBLLqyHMKZZqeRW/Go5oe8EHkR3g4sLytjxaeBJmnSNFka2pwoBNuVziOYDKlRmlHBU+qGQvUMtxFGhdh4nSDbztiCevqv/AE2U1ch6uURfmWv9MEIKWCl1inhERdtTWHvHqepx62kLdjZRzOOcT0yv0kVlXLU0VLWQwQhEabs45Nbb7DUbADv5Xwu5RBrj7Zxv0OJuL64Znm1TOpuJZCqf/Guw+YBPnixSp2MCrjrniNNHV5/cyzSUktfVxUtKuuWU2UHu6n8zjRKDhPK4IIxLAJp1HtTHUCW6gA+z5YBej6mWSrrKs2JjURpfx3P+3D2pvuccTjkQfW2F2KfESeLOAYc4Cz0dXNFURppjSVzIhHOxvuPrjIc4y+symqkpa2Jop4j7S9R1HUY/SpGEr0n5EmZZA9ZGgNXQgyCw95PvA+Vz5YKqvbOGMU2adQvtGJhR9/HavpTfHBxzguCTes34XynN6lJ66kDuhtqBIuP81ueBuaUH8ApJKqjJejQf9MWuUubDQfiRcHboe7DhpuSTuTzPXAHiWmfMo5suiFlio56qQ8+SEIPiSb/6cDbd/BlwcpyIx5BCafJKCE80p47/AB074IXxXy9tWXUzj70KH5qMVc4rxSoEjuJW5C/IdcBmHiT1eZU9M1pW9rovPCrxnmNNWZFOil9SyRsBbpIuIJnJNyST1JwD4gqQlKq8tbgfAD2v0GIgy+tfcILlTXHp54E5U8tHmH2R0yq2pD0Zd/0GCVJJ2kCve+q/5nFGuj7KuEicmsduo548hwSI2vUMA37gzc8uq462igqoj7MyBl8+7FbiOoalyWqljYoyAWZTYjcYXfR/mYeCbLXPtQntIR1Rv2N/ngrxo/8A5dql72sMSHeJrEKMVPxDxPfgFxlmJoMjnEbaZpvsorGxBI3PkLnywWgl7WCNx95Q30xnPHuYmozN4o2vFSJoG+xdrE/LYfPHMydNe9wDEm3b1wC8gdIHT+wMHGay6m2GBmWQ/bNLb3dviTi5XsRTNv8A3fHH5IEb0japaM3COYSUtNXJDZXaoB1He3sL3YY6TOKlHvK2tfwkWOEDhSsBkniZgpcK+/f3f/nDvlmXzVa61sqd7HHTkRTdguT94001TFUoJEa4Pd0xzWwCejngPKSNl+YtijQZTJRSB46qRr++jgWIPS24+uCkmmNSZDZALktsABjsHn5cWlqJBOIonk9XQvKyC+hb2ufC5xDjf/RXw3Qx5Hmc8yLMcyqJ4pCRt2SuU0/mfPGMcW5G/DnENZlUpYiF7xuR78Z3U/Lb44aiKvnE/9k=" />
          <IonCardHeader>
            <IonCardTitle>My Profile</IonCardTitle>
            <IonCardSubtitle>Good Student</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Don’t try to be perfect. Just try to be better than you were yesterday</IonCardContent>
          {/* About Me Button */}
          <IonButton id="present-alert" color="success" expand='full'>About Me</IonButton>
          <IonAlert
            trigger="present-alert"
            header="James Rymarc Bagasbas"
            subHeader="BSIT student"
            message="If you don't take risks, you can't create a future."
            buttons={['Back']}
          ></IonAlert>

          {/* Open Action Sheet Button */}
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

export default Profile;
