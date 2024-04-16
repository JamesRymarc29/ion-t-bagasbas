import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import './Calculator.css';

const Tab2: React.FC = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [previousValue, setPreviousValue] = useState('');
  const [operator, setOperator] = useState('');

  const handleNumberClick = (num: string) => {
    if (displayValue === '0') {
      setDisplayValue(num);
    } else {
      setDisplayValue(prevValue => prevValue + num);
    }
  };

  const handleOperatorClick = (op: string) => {
    setPreviousValue(displayValue);
    setDisplayValue('0');
    setOperator(op);
  };

  const handleEqualClick = () => {
    const currentValue = parseFloat(displayValue);
    const prevValue = parseFloat(previousValue);
    let result = 0;

    switch (operator) {
      case '+':
        result = prevValue + currentValue;
        break;
      case '-':
        result = prevValue - currentValue;
        break;
      case '*':
        result = prevValue * currentValue;
        break;
      case '/':
        result = prevValue / currentValue;
        break;
      default:
        result = currentValue;
    }

    setDisplayValue(result.toString());
    setPreviousValue('');
    setOperator('');
  };

  const handleClearClick = () => {
    setDisplayValue('0');
    setPreviousValue('');
    setOperator('');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Calculator</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
          <IonCardContent>
            <div className="ion-padding">
              <div className="calculator-display">{displayValue}</div>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonButton onClick={() => handleNumberClick('7')}>7</IonButton>
                  </IonCol>
                  <IonCol>
                    <IonButton onClick={() => handleNumberClick('8')}>8</IonButton>
                  </IonCol>
                  <IonCol>
                    <IonButton onClick={() => handleNumberClick('9')}>9</IonButton>
                  </IonCol>
                  <IonCol>
                    <IonButton color="danger" onClick={handleClearClick}>C</IonButton>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonButton onClick={() => handleNumberClick('4')}>4</IonButton>
                  </IonCol>
                  <IonCol>
                    <IonButton onClick={() => handleNumberClick('5')}>5</IonButton>
                  </IonCol>
                  <IonCol>
                    <IonButton onClick={() => handleNumberClick('6')}>6</IonButton>
                  </IonCol>
                  <IonCol>
                    <IonButton onClick={() => handleOperatorClick('+')}>+</IonButton>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonButton onClick={() => handleNumberClick('1')}>1</IonButton>
                  </IonCol>
                  <IonCol>
                    <IonButton onClick={() => handleNumberClick('2')}>2</IonButton>
                  </IonCol>
                  <IonCol>
                    <IonButton onClick={() => handleNumberClick('3')}>3</IonButton>
                  </IonCol>
                  <IonCol>
                    <IonButton onClick={() => handleOperatorClick('-')}>-</IonButton>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonButton onClick={() => handleNumberClick('0')}>0</IonButton>
                  </IonCol>
                  <IonCol>
                    <IonButton onClick={() => handleOperatorClick('*')}>*</IonButton>
                  </IonCol>
                  <IonCol>
                    <IonButton onClick={() => handleOperatorClick('/')}>/</IonButton>
                  </IonCol>
                  <IonCol>
                    <IonButton onClick={handleEqualClick}>=</IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
