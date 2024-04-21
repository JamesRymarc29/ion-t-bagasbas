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

setupIonicReact();

const App: React.FC = () => (
  
  
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/Home">
            <Home />
          </Route>    
          
          <Route exact path="/tab1">
            <Tab1 />
          </Route>        
          <Route exact path="/tab2">
            
          </Route>
          <Route path="/tab3">
            
            <Route exact path="null">
          </Route>
          </Route>
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
        
        <IonTabButton tab="Home" href="/Home">
            <IonIcon aria-hidden="true" icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton>
            <IonIcon aria-hidden="true" icon={closeCircleOutline} /> 
            <IonLabel>Blank</IonLabel>
          </IonTabButton>
          
          <IonTabButton tab="Tab1" href="/Tab1">
            
            <IonIcon aria-hidden="true" icon={informationCircle} />
            <IonLabel>profile</IonLabel>
          </IonTabButton>
          
          
        </IonTabBar> 
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
