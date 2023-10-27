import React from 'react';
import Tab from '../Tab/Tab';
import styles from './Tabs.module.scss';

function Tabs() {

  const tabsData = [
    {id:"cheap", title:"Самый дешевый"},
    {id:"fast", title:"Самый быстрый"},
    {id:"optimal", title:"Оптимальный"}
  ]
  

  return (
    <div className={styles.tabs}>

      {tabsData.map((name)=> <Tab key={name.id} id={name.id} title={name.title}/>)}

    </div>
  );
}
export default Tabs;