import React from 'react'
import styles from './calendar.module.css'


const Calendar = () => {
  return (
    <>
      <div className={styles.calendar_heading}>
        <h1>
          Calendar
        </h1>
      </div>
      <div className={styles.calendar_body}>
        </div>
    </>
  )
}

export default Calendar