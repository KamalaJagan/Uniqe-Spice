import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import Result from "./components/searchResult/Result";
import Item from "./components/food/food";
import Main from "./components/homePage/home";
import Favorites from "./components/favorites/favorites";
import ContextProvider from "./components/context/foodContext";
import FavoriteItem from "./components/food/favoriteFood";
import firebase from "./firebase";


function App() {
  /*const [uniqe1, setUniqe1] = useState([]);
const [loading, setLoding] = useState(false);

  const ref = firebase.firestore().collection("uniqe1");
  //function getUniqe1() {
   // setLoding(True);
    //ref.onSnapshot((querySnapshot) => {
     // const item = [];
     // querySnapshot.forEach((doc) => {
     //   item.push(doc.data());
     // });
      //setUniqe1(item);
     // setLoding(false);
   // });
 // }
  /*function getUniqe2() {
    setLoding(true);
    ref.get().then((item) => {
      const items = item.docs.mao((doc) => doc.data());
      setUniqe1(items);
      setLoding(false);
    });
  }
  useEffect(() => {
    //setUniqe1();
    getUniqe2();
  }, []);

if (loading) {
  return <h1> Loading...</h1>;
}*/

  return (
    <div className="grid content-between w-screen overflow-scroll h-max-full h-screen">
      <ContextProvider>
        <Header>
          
          
        </Header>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/search/:name" element={<Result />}></Route>
          <Route path="/:name/:id" element={<Item/>} />
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/favorites/:name" element={<FavoriteItem/>}></Route>
          <Route path="*"></Route>
        </Routes>
      </ContextProvider>

      <Footer></Footer>
    </div>
  );
}

export default App;
