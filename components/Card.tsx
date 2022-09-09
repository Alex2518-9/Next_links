import styles from "../styles/Card.module.css";
import Date from "../components/FormatDate";
import mdIcon from "../public/md_icon.svg";
import Link from "next/link";
import React from "react";
import Image from "next/image";

interface CardProps {
  id: string;
  title: string;
  date: string;
  fileSize: number[]
}

const Card = ({ title, date, id, fileSize }: CardProps) => {
  return (
    <div className={styles.card_body}>
      <div className={styles.titleAndIcon}>
        <Link  href={`/files/${id}`}>
          <h3 className={styles.link}>{title}</h3>
        </Link>
        <Image height={20} width={24} className={styles.title_image} src={mdIcon} alt="markdown" title="markdown" />
      </div>
      <small className={styles.lightText}>
        <Date dateString={date} />
        {fileSize}
      </small>
      <p className={styles.text_container}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
        inventore error totam voluptatem voluptatibus, illum ipsam rem provident
        optio adipisci, quasi ullam. Dolore, fuga sit.
      </p>
    </div>
  );
};

export default Card;
