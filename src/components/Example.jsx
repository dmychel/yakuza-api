import PropTypes from "prop-types";

// styles
import styles from "/src/styles/index.module.scss";

export default function Example({ loading, object }) {
  return (
    <div class={styles.example}>
      {loading ? (
        "Loading..."
      ) : (
        // background
        <div
          class={styles.character_profile}
          style={{ backgroundImage: `url("assets/images/purchase_bg.jpg")` }}
        >
          <div
            class={styles.profile_image}
            style={{ backgroundImage: "url('/assets/images/features_bg.jpg')" }}
          >
            <img src={object.images[0]} alt={object.name} />
          </div>

          <span class={styles.seperator}></span>

          <div class={styles.profile_info}>
            <h2 class={styles.character_name} style={{ fontFamily: "Yakuza" }}>
              {object.name}
            </h2>
            <p class={styles.character_description}>{object.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

Example.propTypes = {
  loading: PropTypes.bool,
  object: PropTypes.object,
};
