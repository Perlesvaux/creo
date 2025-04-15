//import Image from "next/image";
//import styles from "./page.module.css";
import {DeedsScreen} from 'shared'

const deeds = async () => {
  try {
    const portfolios = await import(`shared/Portfolios`);
    return portfolios.default; // The default export is the image URL
  } catch (error) {
    console.error('Failed to load image:', error);
    return null;
  }
};

export default async function Deeds() {
  const portfolios = await deeds()


  return (
    <DeedsScreen portfolios={portfolios} />
  );
}

