import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import styles from './app.module.scss'

import {Header} from './components/header/header';
import {UpperBody} from './components/upperbody/upperbody';
import {LowerBody} from './components/lowerbody/lowerbody';
import { Footer } from './components/footer/footer'
import { Chart } from './components/chart/chart';
import { Final } from './components/final/final';

import ladybug from './assets/ladyCrawl.gif'


function App() {

  return (
    <div className={styles.container}>

        <div style={{height: '100px'}}>
         <Header />
        </div>
        

        <div className={styles.upperBody}>
            <UpperBody />
        </div>

        <div className={styles.contract}>
            <div className={styles.container}>
                <a href="https://solscan.io/token/G65cADQtt9fZMyuU5vZxCZoimNGQENxE1112C8e4wUeM" target="_blank">Contract: G65cADQtt9fZMyuU5vZxCZoimNGQENxE1112C8e4wUeM</a>
            </div>
        </div>

        <div className={styles.lowerBody}>
            <LowerBody />
        </div>

        <div className={styles.chartContainer}>
            <Chart />
        </div>

        <div className={styles.final}>
            <Final /> 
            <div className={styles.absolute}>
                <img src={ladybug} alt="placeholder" />
            </div>
        </div>

        <Footer />

    </div>
  )
}

export default App
