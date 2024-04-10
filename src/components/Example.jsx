import PropTypes from "prop-types";

function Example({ loading, object }) {
  return (
    <div className="example">
      {loading ? (
        "Loading..."
      ) : (
        // background
        <div
          className="character_profile box_shadow"
          style={{ backgroundImage: `url("assets/purchase_bg.jpg")` }}
        >
          <div
            className="profile_image"
            style={{ backgroundImage: "url('/assets/features_bg.jpg')" }}
          >
            <img src={object.images[0]} alt={object.name} />
          </div>

          <span className="seperator"></span>

          <div className="profile_info">
            <h2 className="character_name">{object.name}</h2>
            <p className="character_description">{object.description}</p>
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

export default Example;
