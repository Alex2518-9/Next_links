import styles from "../styles/Card.module.css";
import Date from "../components/FormatDate";
import mdIcon from "../public/md_icon.svg";
import txtIcon from "../public/txt_icon.svg";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { File } from "../pages/api/getFiles";

export interface CardProps extends File {
  onClick: React.MouseEventHandler;
}

const Card = ({ title, date, id, fileSize, onClick, extension }: CardProps) => {
  return (
    <li className={styles.standard} onClick={onClick}>
      <div className={styles.titleContainer}>
        <div className={styles.titleAndIcon}>
          <Link href={`/files/${id}`}>
            <h3 className={styles.link}>{title}</h3>
          </Link>
          {extension === ".md" ? (
            <Image
              height={20}
              width={24}
              className={styles.title_image}
              src={mdIcon}
              alt="markdown"
              title="markdown"
            />
          ) : (
            extension === ".txt" && (
              <Image
                height={20}
                width={24}
                className={styles.title_image}
                src={txtIcon}
                alt="markdown"
                title="markdown"
              />
            )
          )}
        </div>
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

export default Card;
