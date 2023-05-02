"use client";
import styles from "./page.module.css";
import useCallTranscription, {
  callLocalServer,
} from "./serverCall/useCallTranscription";

export default function Home() {
  useCallTranscription(() => {
    callLocalServer();
  });
  return (
    <div className={styles.mainDisplay}>
      <div>
        <p>PS5 Real Time Transcription Using OpenAI Whisper</p>
        <div className={styles.playStation}></div>
      </div>
    </div>
  );
}
