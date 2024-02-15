'use client'
import * as React from 'react';
import styles from "./page.module.css";
import Stack from './components/buttons';
import StackMob from './components/select';

export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.heading}>
        <h1>Sub-teams</h1>
      </div>
      <div className={styles.headingdesc}>
        <p>Each of our teams is founded on a network of talented and specialised sub teams. From the creative to the technical, the curious to the doers. There’s something for everyone at Sky.</p>
      </div>
      <Stack />   
      <StackMob />  
    </main>
  );
}
