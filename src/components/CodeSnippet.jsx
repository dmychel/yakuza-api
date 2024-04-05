import PropTypes from "prop-types";

function CodeSnippet({ loading, object }) {
  return (
    <section className="code_snippet">
      <div className="code_block">
        {loading ? (
          "Loading..."
        ) : (
          <>
            <div className="left_json">
              <span>_id:</span>
              <span>category:</span>
              <span>description:</span>
              <span>images:</span>
              <span>item:</span>
              <span>name:</span>
            </div>
            <div className="right_json">
              <span>{object._id}</span>
              <span>&quot;{object.category}&quot;</span>
              <span>&quot;{object.description}&quot;</span>
              <span>{object.images}</span>
              <span>{object.item}</span>
              <span>&quot;{object.name}&quot;</span>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

CodeSnippet.propTypes = {
  loading: PropTypes.bool,
  object: PropTypes.object,
};

export default CodeSnippet;
