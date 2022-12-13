import styles from "./Tags.module.css";

function Tags({tags}) {
	return (
		<div className={styles.wrapper}>
      {tags.map((tag, index) => (
          <span className={styles.tag} key={index}>{tag}</span>
      ))
      }
		</div>
	);
}

export default Tags;