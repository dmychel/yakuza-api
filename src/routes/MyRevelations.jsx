import styles from "/src/styles/myRevelations.module.scss";

export default function MyRevelations() {
  return (
    <div class={styles.my_revelations_wrapper}>
      <div class={styles.hero}>
        <img src="/assets/images/blog-banner.png" alt="Banner" />
      </div>
      <div class={styles.blog_wrapper}>
        <div class={styles.profile}>
          <h3>Profile</h3>
          <div class={styles.profile_img}>
            <img
              src="/assets/images/kiryu-profile.jpg"
              alt="Kiryu Profile Image"
            />
          </div>
          <div class={styles.bio}>
            <ul>
              <li>Name: Kazuma</li>
              <li>Sex: Male</li>
              <li>DOB: 6/17/68</li>
              <li>Blood Type: O</li>
              <li>Hometown: Yokohama</li>
              <li>
                Intro: I live in Okinawa and work at an orphange. I write about
                epiphanies and amzing events I see in the city.
              </li>
            </ul>
          </div>
        </div>

        <div class={styles.content_wrapper}>
          <div class={styles.title}>
            <h1>Here We Go!</h1>
            <div class={styles.sub_title}>
              <p>Theme: Revelations</p>
            </div>
          </div>

          <div class={styles.content}>
            <div class={styles.text}>
              <div>
                <p style={{ fontSize: "1.5rem" }}>
                  I'm starting this journal after a bizarre twist of events.
                  It'll be about all my revelations.
                  <br />
                  <br />
                  This one's about the picture on the right. They say love is
                  blind, and apparently, it hits even if you're riding a bike.
                  Now I've got a dynamic move to take advantage of obstacles!
                </p>
              </div>
            </div>
            <div class={styles.image}>
              <img src="/assets/images/blog-image.png" alt="Love is blind!" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
