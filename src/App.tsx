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
setupIonicReact();

const App: React.FC = () => (
  
  
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/Home">
            <Home />

          </Route>           
          <Route exact path="/Clickcounter">
            <Clickcounter/>
          </Route>                   
          <Route exact path="/Calculator">
            <Calculator/>
          </Route>
          <Route exact path="/todolist">
            <Todolist />
          </Route>
          <Route path="/quotegenerator">
            <QuoteGenerator />
          </Route>  
          
          <Route path="/notes">
            <Notes />
          </Route>

          <Route path="/Profile">
            <Tab1 />
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
          <Route path="/home" component={Home} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
            <IonIcon aria-hidden="true" icon={closeCircleOutline} /> 
            <IonLabel>Blank</IonLabel>
          </IonTabButton>
          
          <IonTabButton tab="Profile" href="/Profile">
            
            <IonIcon aria-hidden="true" icon={informationCircle} />
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
