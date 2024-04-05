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
import { calculatorOutline, ellipse, homeOutline, personCircle, speedometer, speedometerOutline, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Profile';
import Tab2 from './pages/Click Counter';
import Tab3 from './pages/Calculator';


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
          <Route exact path="/Tab1">
            <Tab1/>
          </Route>        
          <Route exact path="/Tab2">
            <Tab2 />
          </Route>
          <Route exact path="/Tab3">
            <Tab3 />
          </Route>
        
          <Route exact path="/tab2">
            <Home />
          </Route>  <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
        
        <IonTabButton tab="Home" href="/Home">
            <IonIcon aria-hidden="true" icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
       
          <IonTabButton tab="Profile" href="/Profile">
            <IonIcon aria-hidden="true" icon={personCircle} />
            <IonLabel>profile</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Click Counter" href="/Click Counter">
            <IonIcon aria-hidden="true" icon={speedometerOutline} />
            <IonLabel>click counter</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Calculator" href="/Calculator">
            <IonIcon aria-hidden="true" icon={calculatorOutline} />
            <IonLabel>calculator</IonLabel>
          </IonTabButton>
        </IonTabBar> 
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
