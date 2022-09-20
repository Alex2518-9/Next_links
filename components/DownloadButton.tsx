import React from 'react'
import { ButtonProps } from './Button'
import {classNames} from '../utiles/className'
import styles from '../styles/Button.module.css'
import Image from 'next/image'

interface DownloadBtnProps extends ButtonProps{


}



const DownloadButton = ({text,  className,  icon, onClick}:DownloadBtnProps) => {

    
  return (
    <button className={classNames(`${styles.btn} ${className}`)} onClick={onClick}>
        <a download={true} target='blank' rel='noreferrer'>{text}</a>
        <Image width={14} height={14} src={icon} alt="actionButton"/>
    </button>
  )
}

export default DownloadButton