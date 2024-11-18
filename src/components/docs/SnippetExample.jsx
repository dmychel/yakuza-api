import Proptypes from "prop-types";

import styles from "/src/styles/docs.module.scss";

function SnippetExample({ character }) {
  return (
    <div class={`${styles.get_json} ${styles.code_block}`}>
      {character ? (
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
            <span>660b01fa4aa15727d67398b5</span>
            <span>&quot;character&quot;</span>
            <span>
              &quot;Kazuma Kiryu (Kiryū Kazuma), also known as Joryu (Jōryū),
              and Taichi Suzuki (Suzuki Taichi), is the former primary
              protagonist of the Like a Dragon (formerly Yakuza) series. He is
              an agent of the Daidoji Faction, the former fourth chairman of the
              Tojo Clan, the former manager of Morning Glory Orphanage, and a
              former taxi driver for Nagasu Taxi.&quot;
            </span>
            <span>
              [https://64.media.tumblr.com/34af1d3d072f624f73c32a8f5be425a6/15f42883eb5ff40c-27/s540x810/92f272802529dcb6651cf2cac378ce23ef44070a.pnj,
              https://64.media.tumblr.com/a3949dea53c773219c6b068d84bf6939/19206b76ecb6969b-53/s640x960/d306be74631b110e34fa0b267528e203c357153c.webp,
              https://64.media.tumblr.com/0f21955e0798b17148dac4c382517265/8f24f2f92c6a5702-28/s1280x1920/23129e7e03ff4f71e5262379872f53def243aa90.webp,
              https://64.media.tumblr.com/65dc6601f4d6defd318bc97e61aef31d/12fd93902e4f5329-fe/s540x810/a48aa77e2f0cf68cba6932f6fb01fff73cb3227a.webp,
              https://64.media.tumblr.com/e3818745dc72577d231bf41c7542cea2/aeec1f31c1a346ed-c1/s400x600/737d270fef7fb3e550bdd17a5d4c5b4229863439.webp,
              https://64.media.tumblr.com/8ae31299c97124170b85b171cd3cb957/bc998b7082dd784a-50/s640x960/f03b53e2cc7b7775d1131b1da8f4e53ce36c97e6.webp,
              https://64.media.tumblr.com/ca955ce77abd8c1972aadaa931cb4ab1/5dfc3ff1ef25acdd-cc/s400x600/ce4e935ff2376412833865e1ec781361497258db.webp,
              https://64.media.tumblr.com/8d835d8c04f839c5a83b1833dbd57480/90dad3d32f41334c-37/s640x960/e1b8ac228643d93ccd8c614ed28f827ea568acee.webp,
              https://64.media.tumblr.com/76eb850385a7f51ef69c23b425067924/0d155f9f9446d436-a6/s1280x1920/fda5022c07d273d14f6bcac9199b790347f8df51.webp,
              ]
            </span>
            <span style={{ color: "#66FF00" }}>1</span>
            <span>&quot;Kazama Kiryu&quot;</span>
          </div>
        </>
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
            <span>660b02f64aa15727d67398b7</span>
            <span>&quot;location&quot;</span>
            <span>
              &quot;Kamurocho (Kamuro-chō) is a district in Tokyo. It is based
              on KabukichoWP, the real-life entertainment and red light district
              of Tokyo.&quot;
            </span>
            <span>
              [https://64.media.tumblr.com/d85e895b936fd22fd584c78a15540ba9/4aa0a401806afe3c-f0/s1280x1920/0c8a2f704ab5e4ff67be7dff232670ee95f995f9.webp]
            </span>
            <span style={{ color: "#66FF00" }}>1</span>
            <span>&quot;Kamorucho&quot;</span>
          </div>
        </>
      )}
    </div>
  );
}

SnippetExample.propTypes = {
  character: Proptypes.bool,
};

export default SnippetExample;
