import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { calculatorOutline, closeCircleOutline, ellipse, homeOutline, informationCircle, personCircle, speedometer, speedometerOutline, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Profile';
import '@ionic/react/css/core.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Home from './pages/Home';
import Tab2 from './pages/Calculator';
import Tab3 from './pages/Calculator';
import Clickcounter from './pages/Clickcounter';
import Calculator from './pages/Calculator';
import Todolist from './pages/Todolist';
import QuoteGenerator from './pages/quotegenerator';
import Notes from './pages/notes/notes';
import Profile from './pages/Profile';
setupIonicReact();

const App: React.FC = () => (
  
  
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>

        
      
          <Route exact path="/ion-t-bagasbas/Home">
          <Home/>
          </Route>  
          
          <Route exact path="/ion-t-bagasbas/Home/Clickcounter">        
            <Clickcounter/> 
          </Route>  
                                   
          <Route path="/ion-t-bagasbas/Home/Calculator">
            <Calculator/>
          </Route>

          <Route path="/ion-t-bagasbas/Home/Todolist">
            <Todolist />
          </Route>

          <Route path="/ion-t-bagasbas/Home/Quotegenerator">
            <QuoteGenerator />
          </Route>  
          
          <Route path="/ion-t-bagasbas/Home/Notes">
            <Notes />
          </Route>

          <Route exact path="/ion-t-bagasbas/Profile">
            <Profile />
          </Route>
           
          <Route exact path="/ion-t-bagasbas/">
            <Redirect to="/ion-t-bagasbas/Home" />
          </Route>
          
        </IonRouterOutlet> 
        <IonTabBar slot="bottom">
        
        <IonTabButton tab="Home" href="/ion-t-bagasbas/Home">
            <IonIcon aria-hidden="true" icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
   
          <IonTabButton tab="Profile" href="/ion-t-bagasbas/Profile">
            <IonIcon aria-hidden="true" icon={personCircle} />
            <IonLabel>profile</IonLabel>

          </IonTabButton>
          <Route path="/quotegenerator">
            <QuoteGenerator />
          </Route>

          
        </IonTabBar> 
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
