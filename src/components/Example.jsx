import PropTypes from "prop-types";

import "/src/styles/example.css";

function Example({ loading, object }) {
  return (
    <section className="example">
      {loading ? (
        "Loading..."
      ) : (
        // background
        <div className="character_profile drop_shadow">
          <div className="profile_background">
            <img src="/assets/back.jpg" alt="" />
          </div>

          {/* image */}
          <div
            className="profile_header"
            style={{ backgroundImage: "url('/assets/features_bg.jpg')" }}
          >
            <img src={object.images[0]} alt={object.name} />
          </div>

          {/* seperator */}
          <span className="seperator"></span>

          {/* info */}
          <div className="profile_info">
            <h2 className="character_name">{object.name}</h2>
            <p className="character_description">{object.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}

Example.propTypes = {
  loading: PropTypes.bool,
  object: PropTypes.object,
};

export default Example;
