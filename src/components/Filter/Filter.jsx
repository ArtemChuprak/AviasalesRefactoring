import React from 'react';
import Input from '../UI/Input/Input';
import styles from './Filter.module.scss';

function Filter() {

  const filterData = [
    {id:"transfers",title:"Все"},
    {id:"withoutTransfers",title:"Без пересадок"},
    {id:"oneTransfer",title:"1 пересадка"},
    {id:"twoTransfer",title:"2 пересадки"},
    {id:"threeTransfer",title:"3 пересадки"},
  ]
  return (
    <form className={styles.filter}>
      <div className={styles.title}>Количество пересадок</div>

      {filterData.map((name)=> <Input key={name.id} id={name.id} title={name.title}/>)}

    </form>
  );
}

export default Filter;