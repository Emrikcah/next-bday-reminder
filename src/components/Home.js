import data from "data/data"; //pull in the data
import Head from "next/head";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import Card from "./Card";

export function Home() {
   const [people, setPeople] = useState(data);
   const [btnText, setBtnText] = useState("Clear All");

   
   //change button text on click
   const changeText = () => {
      btnText === "Clear All" ? setBtnText("Reset") : setBtnText("Clear All");
      dataToggle();
   };
   //toggle setPeople data
   const dataToggle = () => {
      setPeople([]);
      //if btnText equals Reset, repopulate the data
      if (btnText === "Reset") {
         setPeople(data);
      }
   };

   return (
      <div>
         <Head>
            <title>Birthday Reminder</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
         </Head>

         <main className="bg-pink-400 min-h-screen grid place-items-center">
            <section className="mx-auto w-11/12 max-w-md my-20 py-6 px-8 rounded bg-white shadow-xl">
               <h3 className="text-primary font-bold mb-8">{people.length} birthdays left</h3>
               <Card characters={people} />
               <Button onClick={changeText}>{btnText}</Button>
            </section>
         </main>
      </div>
   );
}

//todo:
//toggle data state
