import * as React from 'react';
import IconArrow from '../assets/icon-arrow.svg';
import Styles from './BirthdayForm.module.css';

interface BirthdayFormProps {}

const BirthdayForm = ({}: BirthdayFormProps) => {
    return (<div className={Styles.formContainer}>
        <div className={Styles.ageInput}>
            <label htmlFor="day-label">DAY</label>
            <input type="number" id="day-label" placeholder="DD" />
        </div>
        <div className={Styles.ageInput}>
            <label htmlFor="month-label">MONTH</label>
            <input type="number" id="month-label" placeholder="MM" />
        </div>
        <div className={Styles.ageInput}>
            <label htmlFor="year-label">YEAR</label>
            <input type="number" id="year-label" placeholder="YYYY" />
        </div>
        <img src={IconArrow} alt="Vite logo" />

    </div>)
}

export default BirthdayForm