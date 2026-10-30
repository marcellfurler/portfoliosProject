
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Creativity.css";



const scoreFiles = import.meta.glob(
  "../assets/3.Projects/music/*.pdf",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);


const songs = [
  {
    id: "song-01",
    number: "01",
    title: "Karya Terindah",
    year: "2026",
    description: "Original song",
    status: "Released",
    url: "https://open.spotify.com/track/3Faz8Oz9n52VP80CPTNH26?si=876ca714c2a44ad1",
    verses: [
      {
        label: "VERSE 1",
        lines: [
          "Seekor domba hilang saja Kau s'lamatkan",
          "Apalagi s'buah keluarga penuh cinta",
          "Rintangan demi rintangan terlewati bersama",
        ],
      },
      {
        label: "CHORUS",
        lines: [
          "Karya terindah di dalam hidup ku",
          "Hadir nyata di setiap waktu",
          "Karya terbesar yang t'lah Kau berikan",
          "Kes'lamatan dalam keluarga ku",
        ],
      },
      {
        label: "POST CHORUS",
        lines: [
          "Kau rajut kami dengan kasih Mu",
          "Kau pulihkan luka, dan s'lamatkan kami",
        ],
      },

      {
        label: "VERSE 2",
        lines: [
          "Kasih-Mu yang menyelamatkan selalu ada",
          "Dalam keluarga yang tumbuh di dalam-Mu",
          "Oh Kasih setia-Mu memelihara s'lamanya",
        ],
      },

      {
        label: "CHORUS",
        lines: [
          "Karya terindah di dalam hidup ku",
          "Hadir nyata di setiap waktu",
          "Karya terbesar yang t'lah Kau berikan",
          "Kes'lamatan dalam keluarga ku",
        ],
      },
      {
        label: "POST CHORUS",
        lines: [
          "Kau rajut kami dengan kasih Mu",
          "Kau pulihkan luka, dan s'lamatkan kami",
        ],
      },
      {
        label: "OUTRO",
        lines: [
          "Karya Terindah",
          "Kau pulihkan luka",
        ],
      },
    ],
  },
  {
    id: "song-02",
    number: "02",
    title: "Indahnya Perbedaan",
    year: "2024",
    description: "Original song",
    status: "Pre-Released",
    url: "https://youtu.be/VJdWp80B7ME?si=pPWx3twNjMpa-B0F",
    verses: [
      {
        label: "VERSE 1",
        lines: [
          "Dunia ini, penuh keberagaman",
          "Warna warni hidup, penuh keceriaan",
        ],
      },
      {
        label: "PRE-CHORUS",
        lines: [
          "Perbedaan bukanlah halangan untuk kita",
          "Dalam hidup yang penuh dengan keberagaman",
        ],
      },
      {
        label: "CHORUS",
        lines: [
          "Kita bersatu, seperti pelangi",
          "Genggam tangan tanpa memandang siapa kanan kiri mu",
          "Saling menghormati, merajut tali persahabatan",
          "Indahnya bersama dalam perbedaan",
        ],
      },
      {
        label: "VERSE 2",
        lines: [
          "Dunia ini, ada harapan dan mimpi",
          "Mari kita bersama meraih masa depan",
        ],
      },
      {
        label: "PRE-CHORUS",
        lines: [
          "Perbedaan bukanlah hambatan untuk kita",
          "'tuk bertumbuh bersama, meraih masa depan",
        ],
      },
      {
        label: "CHORUS",
        lines: [
          "Kita bersatu, seperti pelangi",
          "Genggam tangan tanpa memandang siapa kanan kiri mu",
          "Saling menghormati, merajut tali persahabatan",
          "Indahnya bersama dalam perbedaan",
        ],
      },
      {
        label: "OUTRO",
        lines: [
          "Indahnya bersama dalam perbedaan",
        ],
      },
    ],
  },

  {
    id: "song-03",
    number: "03",
    title: "How to Say 'Goodbye'",
    year: "2024",
    description: "Original song",
    status: "Lyrics/Unreleased",
    // url: "",
    verses: [
      {
        label: "VERSE 1",
        lines: [
          "In the middle of June",
          "The rainy season has come",
          "The party day has turned into a blue day",
          "Walking in the dark",
          "Unforgettable",
          "Time to go and trust the darkness time",
        ],
      },
      {
        label: "CHORUS",
        lines: [
          "This is the end of time",
          "How to say 'goodbye'?",
          "May be seperated for a long time",
          "How can i go",
          "Without you by my side?",
          "If you go, we'll make memories and say 'goodbye'",
        ],
      },
      {
        label: "VERSE 2",
        lines: [
          "Day after day",
          "It's forgettable",
          "I am strong to be by myself",
          "July to December",
          "January to June",
          "I just write words to keep you in my mind",
        ],
      },
      {
        label: "CHORUS",
        lines: [
          "This is the end of time",
          "How to say 'goodbye'?",
          "May be seperated for a long time",
          "How can i go",
          "Without you by my side?",
          "If you go, we'll make memories and say 'goodbye'",
        ],
      },
    ],
  },

  {
    id: "song-04",
    number: "04",
    title: "Happy Song",
    year: "2023",
    description: "Original song",
    status: "Lyrics/Unreleased",
    // url: "",
    verses: [
      {
        label: "VERSE 1",
        lines: [
          "Why do tears fall from your eyes?",
          "Come and dance with me.",
          "I can share my happiness with you.",
          "With my 'Happy Song', I wrote in the summer night.",
        ],
      },
      {
        label: "PRE-CHORUS",
        lines: [
          "Hands up, sad go, tears will go from you, smile in your mouth.",
          "Call all of your friends and dance with us.",
        ],
      },
      {
        label: "CHORUS",
        lines: [
          "Oh, balloons above the sky",
          "And I see a blue-white sky.",
          "Butterfly in flower and",
          "Yellow flowers have a bee.",
          "So Let's go find all kids.",
          "Dance and shake our bodies, la la la.",
          "Use my 'Happy Song'.",
          "Dance and shake our bodies, la la la. Oh oh oh",
        ],
      },
      {
        label: "VERSE 2",
        lines: [
          "Beach, water, and swimming on the beach",
          "Kids eat white ice cream.",
          "I will play my song, and we will dance.",
          "With my 'Happy Song', I wrote in the summer night.",
        ],
      },
      {
        label: "PRE-CHORUS",
        lines: [
          "Hands up, sad go, tears will go from you, smile in your mouth.",
          "Call all of your friends and dance with us.",
        ],
      },
      {
        label: "CHORUS",
        lines: [
          "Oh, balloons above the sky",
          "Now I see a blue-white sky.",
          "Kids are playing football.",
          "I call them to dance together.",
          "So Let's go find all kids.",
          "Dance and shake our bodies, la la la.",
          "Use my 'Happy Song'.",
          "Dance and shake our bodies, la la la. Oh oh oh",
        ],
      },
    ],
  },

  {
    id: "song-05",
    number: "05",
    title: "when you love someone but shesn't yours",
    year: "2026",
    description: "Original song",
    status: "Lyrics/Unreleased",
    // url: "",
    verses: [
      {
        label: "VERSE 1",
        lines: [
          "in the middle of the night",
          "when you're riding a bike with me under city lights ",
          "the cold wind softly blows by",
          "kept warm by your little smile, when we're joking babe",
        ],
      },
      {
        label: "PRE-CHORUS",
        lines: [
          "i know that i can't have your heart and body babe",
          "yet every single thing i do is all for you",
        ],
      },
      {
        label: "CHORUS",
        lines: [
          "'cuz i",
          "will love you even if it's fifteen thousand miles away",
          "and i",
          "will keep your name in my heart till the end of the world",
          "but i i i ",
          "might never make you mine, but fuck it, that will be fine",
          "the world might fade away, but I'm still loving you, oh my babe",
        ],
      },
      {
        label: "VERSE 2",
        lines: [
          "in the middle of the night",
          "drinks and music in our blood, feeling warm on your lips",
          "shining diamonds in the sky",
          "'move your body', little shy, it's the first time for me",
        ],
      },
      {
        label: "PRE-CHORUS",
        lines: [
          "i know that i can't have your heart and body babe",
          "yet everything we did will stay deep in my heart ",
        ],
      },
      {
        label: "CHORUS",
        lines: [
          "'cuz i",
          "will love you even if it's fifteen thousand miles away",
          "and i",
          "will keep your name in my heart till the end of the world",
          "but i i i ",
          "might never make you mine, but fuck it, that will be fine",
          "the world might fade away, but I'm still loving you, oh my babe",
        ],
      },
      {
        label: "OUTRO",
        lines: [
          "when you love someone but shesn't yours",
          "when you love someone but shesn't yours",
        ],
      }
    ],
  },

  {
    id: "song-06",
    number: "06",
    title: "Flower?",
    year: "2026",
    description: "Original song",
    status: "Lyrics/Unreleased",
    // url: "",
    verses: [
      {
        label: "VERSE 1",
        lines: [
          "If one day i change into a flower",
          "Will you pick my bloom? Will you take me home?",
          "If one day our world's gone, and no one stays",
          "Hold me in the dark. Keep our fading spark",
        ],
      },
      {
        label: "CHORUS",
        lines: [
          "You're the only one i know",
          "Stay right next to me",
          "Flower of my heart",
          "You're my flashlight, oh my love",
          "Nothing can make all these wrong",
          "I keep you in my mind,",
          "You're the story of my life",
          "Oh you are my love",
        ],
      },
      {
        label: "OUTRO",
        lines: [
          "Oh oh",
          "Will you pick my bloom, be my home oh my love",
          "Oh oh",
          "Hold my hand and i will take you out from the dark, oh my love",
        ],
      },
      {
        label: "VERSE 2",
        lines: [
          "If one day i'll be a poem in a song",
          "Will you listen close? Will i be your number one?",
          "Though the world fades, all the words are gone",
          "Your beats in my veins. Every tune i take",
        ],
      },
      {
        label: "CHORUS",
        lines: [
          "You're the lyrics in my songs",
          "Keep you in my mind",
          "Beats are in my veins",
          "You're the music, oh my love",
          "Nothing can make all these wrong",
          "I keep you in my songs",
          "You're the story of my life",
          "Oh you are my love",
        ],
      },
      {
        label: "OUTRO",
        lines: [
          "Oh oh",
          "Will you listen close to feel you close to me, oh my love",
          "Oh oh",
          "You're the beats, the melody, the whole songs, oh my love",
        ],
      },
    ],
  },

  {
    id: "song-07",
    number: "07",
    title: "Surrender",
    year: "2026",
    description: "Original song",
    status: "Lyrics/Unreleased",
    // url: "",
    verses: [
      {
        label: "VERSE 1",
        lines: [
          "The stars are hiding from the moon",
          "We're lost inside to the world, unknown places",
          "The moon is waiting for the sun",
          "You come to me, but your mind's in other places",
        ],
      },
      {
        label: "PRE-CHORUS",
        lines: [
          "But I see something in your eyes",
          "Tell me, tell me, 'cause I should know",
          "Know this love won’t last forever",
        ],
      },
      {
        label: "CHORUS",
        lines: [
          "Oh, I surrender",
          "All the truth is in your eyes",
          "There's no story from you and me, we're over now.",
          "You’re just being you, but there’s nothing left",
          "Oh, I surrender",
          "It’s the end of our time",
          "I’ve given all I have, and there is nothing left",
          "There's a beating in my mind, oh babe now ",
          "Oh I surrender",
        ],
      },
      {
        label: "VERSE 2",
        lines: [
          "The sun is hiding in the sky",
          "Thunderclouds are gray and feeling bad down now",
          "All the memories we found",
          "There's no, oh it's all over now",
        ],
      },
      {
        label: "PRE-CHORUS",
        lines: [
          "But I see something in your eyes",
          "Tell me, tell me, 'cause I should know",
          "Know this love won’t last forever",
        ],
      },
      {
        label: "CHORUS",
        lines: [
          "Oh, I surrender",
          "All the truth is in your eyes",
          "There's no story from you and me, we're over now.",
          "You’re just being you, but there’s nothing left",
          "Oh, I surrender",
          "It’s the end of our time",
          "I’ve given all I have, and there is nothing left",
          "There's a beating in my mind, oh babe now ",
          "Oh I surrender",
        ],
      },
    ],
  },

  {
    id: "song-08",
    number: "08",
    title: "Three Words",
    year: "2026",
    description: "Original song",
    status: "Lyrics/Unreleased",
    // url: "",
    verses: [
      {
        label: "OPENING-CHORUS",
        lines: [
          "3 words i'll say 'i love you'",
          "It is hard for me, to say it to you",
          "There's no reason for me to fall in love with you",
        ],
      },
      {
        label: "VERSE 1",
        lines: [
          "We're walking on the sea that we shouldn't cross,",
          "Searching for a land that could never be found",
        ],
      },
      {
        label: "PRE-CHORUS",
        lines: [
          "But there's something in your eyes",
          "My love won't be a curse for you",
          "But i've got 3 words for you",
        ],
      },
      {
        label: "CHORUS",
        lines: [
          "Just want to say 'i love you'",
          "It is hard for me, to say it to you",
          "There's no reason for me to fall in love with you",
          "It's getting hard for me,",
          "It's starting to hurt",
          "But you'll stay in my mind and memories forever",
        ],
      },
      {
        label: "OUTRO-CHORUS",
        lines: [
          "It's getting hard for me,",
          "It's starting to hurt",
          "It is hard for me, to say those words to you",
        ],
      },
      {
        label: "VERSE 2",
        lines: [
          "I'm hiding every storm beneath the blue sea,",
          "Afraid that if i breath, i'll lose the view",
          "I've turned my tears into diamonds in the dark",
          "A hidden light, carrying a silent spark",
        ],
      },
      {
        label: "PRE-CHORUS",
        lines: [
          "But there's something in your eyes",
          "My love won't be a curse for you",
          "But i've got 3 words for you",
        ],
      },
      {
        label: "CHORUS",
        lines: [
          "Just want to say 'i love you'",
          "It is hard for me, to say it to you",
          "There's no reason for me to fall in love with you",
          "It's getting hard for me,",
          "It's starting to hurt",
          "But you'll stay in my mind and memories forever",
        ],
      },
      {
        label: "OUTRO-CHORUS",
        lines: [
          "It's getting hard for me,",
          "It's starting to hurt",
          "It is hard for me, to say 'i love you'",
        ],
      },

    ],
  },

  {
    id: "song-09",
    number: "09",
    title: "Hati Kecilku",
    year: "2025",
    description: "Original song",
    status: "Lyrics/Unreleased",
    // url: "",
    verses: [
      {
        label: "VERSE 1",
        lines: [
          "Hai hati kecil ku, dengarkan ku",
          "Ku tahu isi hati yang remuk",
          "Ke kanan tak kunjung datang",
          "Ke kiri pun tak dapat",
          "Menemukan jalan yang terbaik",
        ],
      },
      {
        label: "VERSE 2",
        lines: [
          "Hai isi hati kecil yang remuk",
          "Daksa mu cerah, tapi kau remuk",
          "Pejamkan mata, hembuskan",
          "Nafas dan mulai terbuka",
          "C'ritakan s'luruh isi hati mu.",
        ],
      },
      {
        label: "CHORUS",
        lines: [
          "Hati kecilku,",
          "Ceritakanlah pada dunia",
          "Ku tau tak kan ada sebuah tempat",
          "Yang mau menerima luka ku",
          "Hati kecil ku",
          "Menaki pun daksamu tak rela",
          "Binar hati kecilku padamu",
          "Dengarlah, isi hati kecilku",
        ],
      },
    ],
  },
];

const choralWorks = [
  {
    id: "choral-01",
    number: "01",
    title: "Ave Maria",
    subtitle: "Composing for SATB Choir by Marcell",
    year: "2025",
    description: "Original choral composition",
    score: `${import.meta.env.BASE_URL}assets/3.Projects/music/Ave-Maria.pdf`,
  },
  {
    id: "choral-02",
    number: "02",
    title: "Ku Mulai Dari Diri Sendiri",
    subtitle: "Arranged for SATB Choir by Marcell",
    year: "2025",
    description: "Choral arrangement",
    score: `${import.meta.env.BASE_URL}assets/3.Projects/music/Kumulai-dari-Diri-Sendiri-arr.-Marcell.pdf`,
  },
];

function SongItem({ song, isOpen, onToggle }) {
  return (
    <article className={`music-song ${isOpen ? "is-open" : ""}`}>
      <button
        type="button"
        className="music-song-trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`lyrics-${song.id}`}
      >
        <span className="music-song-number">{song.number}</span>

        <span className="music-song-heading">
          <span className="music-song-title">{song.title}</span>
          <span className="music-song-description">
            {song.description} · {song.year}
          </span>
          <div className="song-meta-actions">
            <span className="song-status">{song.status}</span>

            {song.url && (
                <span className="song-url">
                <a href={song.url} target="_blank" rel="noreferrer">
                    Listen ↗
                </a>
                </span>
            )}
            </div>
        </span>

        <span className="music-song-icon" aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && (
        <div
          className="music-lyrics"
          id={`lyrics-${song.id}`}
        >
          <div className="music-lyrics-label">LYRICS</div>

          {song.verses.map((verse, index) => (
            <div className="music-verse" key={`${song.id}-${index}`}>
              <h4>{verse.label}</h4>

              <p>
                {verse.lines.map((line, lineIndex) => (
                  <span key={lineIndex}>
                    {line}
                    {lineIndex < verse.lines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}


function ChoralItem({ work }) {
  return (
    <article className="choral-item">
      <div className="choral-item-info">
        <span className="choral-number">{work.number}</span>

        <div className="choral-heading">
          <h3>{work.title}</h3>
          <h4>{work.subtitle}</h4>
          <p>
            {work.description} · {work.year}
          </p>
        </div>

        <a
          href={work.score}
          target="_blank"
          rel="noreferrer"
          className="score-toggle"
        >
          VIEW SCORE ↗
        </a>
      </div>
    </article>
  );
}


export default function Creativity() {
  const [openSong, setOpenSong] = useState(null);

  return (
    <main className="creativity-page">
      <nav className="creativity-nav">
        <Link to="/" className="creativity-back">
          <span aria-hidden="true">←</span> BACK TO PORTFOLIO
        </Link>

        <span className="creativity-nav-label">
          CREATIVE ARCHIVE / 2026
        </span>
      </nav>

      {/* <header className="creativity-hero">

        <h1>
          Music is another
          <br />
          <span>way to tell a story.</span>
        </h1>
      </header> */}

      <section className="music-section">
        <div className="music-section-heading">
          <span className="music-section-number">01</span>

          <div>
            <span className="music-section-label">LYRICS & SONGS</span>
            <h2>Original Songs</h2>
          </div>

          <span className="music-section-count">
            {String(songs.length).padStart(2, "0")} SONGS
          </span>
        </div>

        <p className="music-section-intro">
          Original songs and lyrics, written from ideas, experiences,
          and stories worth telling.
        </p>

        <div className="music-song-list">
          {songs.map((song) => (
            <SongItem
              key={song.id}
              song={song}
              isOpen={openSong === song.id}
              onToggle={() =>
                setOpenSong(openSong === song.id ? null : song.id)
              }
            />
          ))}
        </div>
      </section>

      <section className="music-section choral-section">
        <div className="music-section-heading">
          <span className="music-section-number">02</span>

          <div>
            <span className="music-section-label">
              SCORES & ARRANGEMENTS
            </span>
            <h2>Choral Works</h2>
          </div>

          <span className="music-section-count">
            {String(choralWorks.length).padStart(2, "0")} WORKS
          </span>
        </div>

        <p className="music-section-intro">
          Choral compositions and arrangements presented through
          their musical scores.
        </p>

        <div className="choral-list">
          {choralWorks.map((work) => (
            <ChoralItem key={work.id} work={work} />
          ))}
        </div>
      </section>

      <footer className="creativity-footer">
        <span>MARCELL JUREINWI MANUHUTU</span>

        <Link to="/" className="creativity-footer-link">
          RETURN TO MAIN PORTFOLIO ↑
        </Link>
      </footer>
    </main>
  );
}
