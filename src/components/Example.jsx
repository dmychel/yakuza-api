import { callAPI } from "../api/fetch";

function Example() {
  async function kiryu() {
    await callAPI("characters/1");
  }
  kiryu();

  return (
    <section className="example">
      <div className="character_profile">
        <p className="character_name"></p>
        <p className="character_description"></p>
      </div>
    </section>
  );
}

export default Example;
