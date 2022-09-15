import Image from "next/image";
import Link from "next/link";
import React from "react";
import Date from "./FormatDate";
import styles from "../styles/Card.module.css";
import { CardProps } from "./Card";
import pipaIcon from "../public/pipaIcon.svg";
import mdIcon from "../public/md_icon.svg";

interface selectedCardPropps extends CardProps {}

const SelectedCard = ({
  title,
  date,
  id,
  fileSize,
  onClick,
}: selectedCardPropps) => {
  return (
    <li className={styles.isSelected} onClick={onClick}>
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

        <div className={styles.close}>
          <Image src={pipaIcon} alt="" />
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

export default SelectedCard;
