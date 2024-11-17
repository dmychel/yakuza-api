import styles from "/src/styles/index.module.scss";

export default function About() {
  return (
    <section class={styles.about_wrapper}>
      <div class={styles.about_background}>
        <img src="assets/images/purchase_bg.jpg" alt="" />
      </div>
      <div class={styles.about}>
        <h2 style={{ fontFamily: "Yakuza" }}>
          Yakuza <span style={{ color: "crimson" }}>API</span>
        </h2>
        <div class={styles.about_text}>
          <h3>Why</h3>
          <p>
            I created this API for two reasons: Firstly, there were no Yakuza
            APIs at the time of conception, and secondly, I aimed to deepen my
            understanding of backend development and its ecosystem. When delving
            into a new technology or concept, the development community often
            emphasizes the importance of learning by creating projects that
            address real-world problems. However, brainstorming project ideas
            for technologies you have very little to no experience with can be
            challenging. What issues are there to solve when you&apos;ve never
            used the technology?
          </p>
          <p>
            After several attempts with mundane CRUD apps, I recalled my search
            for a Yakuza API to utilize its resources, which led to the
            inception of this project. Although still in its beta stage,
            I&apos;m uncertain about the extent to which I intend to expand it.
            Nevertheless, I plan to add to and maintain this project.
          </p>
        </div>
      </div>
    </section>
  );
}
