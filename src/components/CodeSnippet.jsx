import PropTypes from "prop-types";

// styles
import styles from "/src/styles/index.module.scss";

export default function CodeSnippet({ loading, object }) {
  return (
    <div class={styles.code_snippet}>
      <h4>JSON response</h4>
      <div class={`${styles.code_block} ${styles.drop_shadow}`}>
        {loading ? (
          "Loading..."
        ) : (
          <>
            <div class={styles.left_json}>
              <span>_id:</span>
              <span>category:</span>
              <span>description:</span>
              <span>images:</span>
              <span>item:</span>
              <span>name:</span>
            </div>
            <div class={styles.right_json}>
              <span>{object._id}</span>
              <span>&quot;{object.category}&quot;</span>
              <span>&quot;{object.description}&quot;</span>
              <span>[{object.images.map((img) => img + ", ")}]</span>
              <span style={{ color: "#66FF00" }}>{object.item}</span>
              <span>&quot;{object.name}&quot;</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

CodeSnippet.propTypes = {
  loading: PropTypes.bool,
  object: PropTypes.object,
};
