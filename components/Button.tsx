import React from "react";
import styles from '../styles/Button.module.css'
import {classNames} from '../utiles/className'
import Image, { StaticImageData } from 'next/image'

export interface ButtonProps {
  text: string;
  icon: StaticImageData,
  className: string,
  onClick: React.MouseEventHandler
}

const Button = ({ text, icon, className, onClick }: ButtonProps) => {
  return (
    <button className={classNames(`${styles.btn} ${className}`)}  onClick={onClick}>
        <div>
            {text}
        </div>
      <Image width={14} height={14} src={icon} alt="actionButton"/>
    </button>
  );
};

export default Button;
