
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
];

const choralWorks = [
  {
    id: "choral-01",
    number: "01",
    title: "Ave Maria",
    subtitle: "Composing for SATB Choir by Marcell",
    year: "2025",
    description: "Original choral composition",
    score: scoreFiles[
      "../assets/3.Projects/music/Ave-Maria.pdf"
    ],
  },
  {
    id: "choral-02",
    number: "02",
    title: "Ku Mulai Dari Diri Sendiri",
    subtitle: "Arranged for SATB Choir by Marcell",
    year: "2025",
    description: "Choral arrangement",
    score: scoreFiles[
      "../assets/3.Projects/music/Kumulai dari Diri Sendiri arr. Marcell.pdf"
    ],
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
