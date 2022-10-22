import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const planeMachine = document.querySelector("#planeMachine");
new SlotMachine(planeMachine, {
  active: 1,
  delay: 450,
  auto: 1500,
  randomize() {
    return this.nextIndex;
  },
});

const planeMachine2 = document.querySelector("#planeMachine");
new SlotMachine(planeMachine2, {
  active: 1,
  delay: 450,
  auto: 1500,
  randomize() {
    return this.nextIndex;
  },
});

// export default function Home() {
//   return (

//   );
// }
