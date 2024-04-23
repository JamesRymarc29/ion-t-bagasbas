import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonCheckbox, IonNote, IonBadge } from '@ionic/react';

const todolist: React.FC = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: false },
    // Add more tasks as needed
  ]);

  const handleToggle = (id: number) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Todo List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {todos.map(todo => (
            <IonItem key={todo.id}>
              <IonCheckbox slot="start" checked={todo.completed} onIonChange={() => handleToggle(todo.id)} />
              <IonLabel>{todo.title}</IonLabel>
              {todo.completed && <IonBadge color="success" slot="end">Completed</IonBadge>}
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};