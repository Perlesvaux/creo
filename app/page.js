import Image from "next/image";
import styles from "./page.module.css";
import { HomeScreen, Portfolios, Showreels, Logofolios } from 'shared'

export default async function Home() {
  return (<HomeScreen  portfolios={Portfolios} showreels={Showreels} logofolios={Logofolios} />);
}
