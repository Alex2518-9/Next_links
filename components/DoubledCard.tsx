import React from "react";
import Card, { CardProps } from "./Card";
import Image from "next/image";
import Link from "next/link";
import Date from "../components/FormatDate";
import mdIcon from "../public/md_icon.svg";
import styles from "../styles/Card.module.css";

interface DoubledCardProps extends CardProps {
    onClose: React.MouseEventHandler,
 
}

const DoubledCard = ({
  title,
  date,
  id,
  fileSize,
  onClick,
  className,
  onClose,

}: DoubledCardProps) => {
  return (
    <li className={className ? className : styles.abc} onClick={onClick}>
      <div className={styles.titleContainer}>
        <div className={styles.titleAndIcon}>
          <Link href={`/files/${id}`}>
            <h3 className={styles.link}>{title}</h3>
          </Link>
          <Image
            height={20}
            width={24}
            className={styles.title_image}
            src={mdIcon}
            alt="markdown"
            title="markdown"
          />
        </div>
        <div className={styles.close} onClick={onClose}>X</div>
      </div>
      <small className={styles.lightText}>
        <Date dateString={date} />
        <span>{fileSize} Bytes</span>
      </small>
      <p className={styles.text_container}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
        inventore error totam voluptatem voluptatibus, illum ipsam rem provident
        optio adipisci, quasi ullam. Dolore, fuga sit.
      </p>
    </li>
  );
};

export default DoubledCard;
