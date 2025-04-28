import Image from "next/image";
import styles from "./page.module.css";
import {HomeScreen} from 'shared'

const showreels = async () => {
  try {
    const showreels = await import(`shared/Showreels`);
    return showreels.default; 
  } catch(err) {
    console.log(err)
    return null
  }
}

const portfolios = async () => {
  try {
    const portfolios = await import(`shared/Portfolios`);
    return portfolios.default; 
  } catch(err) {
    console.log(err)
    return null
  }
}


const logofolios = async () => {
  try {
    const logofolios = await import(`shared/Logofolios`);
    return logofolios.default; 
  } catch(err) {
    console.log(err)
    return null
  }
}


//, Portfolios, Showreels 

export default async function Home() {
  const port = await portfolios()
  const show = await showreels()
  const logo = await logofolios()

  return (<HomeScreen  portfolios={port} showreels={show} logofolios={logo} />);
}
