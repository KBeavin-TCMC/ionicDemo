import {
    IonContent,
    IonHeader,
    IonButtons,
    IonButton,
    IonToolbar,
    IonMenuButton,
    IonTitle,
    IonList,
    IonItem
  } from '@ionic/react';
  import axios from 'axios';
  
import React from 'react';
import './HomePage.css';

const  API_KEY  =  "1c40b55f77b74ce784ad8a8c719ae5a9";
const  URL  =  `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`;

const HomePage: React.FunctionComponent = () => {

  const [articles, setArticles] = React.useState([]);
  const items: any[] = [];

  React.useEffect(() => {

    fetchArticles().then(data => setArticles(data.articles));

  }, []);

  return (
    <>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="primary" >
        <IonList color="primary">

          {
            articles.map(a => {

              return (
                <IonItem>
                  {a['title']}
                  <IonButton href={a['url']} color="primary" slot="end">Read</IonButton>
                </IonItem>
              );
            })
          }

        </IonList>
      </IonContent>
    </>
  );
};

  const fetchArticles = () => {

    return axios({
      url: URL,
      method: 'get'
    }).then(response => {
  
      console.log(response);
      return response.data;
    })
  };

  export default HomePage;