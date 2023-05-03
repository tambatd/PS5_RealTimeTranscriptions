"use client";
import { useState } from "react";
import styles from "./page.module.css";
import useCallTranscription, {
  callLocalServer,
} from "./serverCall/useCallTranscription";

export default function Home() {
  const [transcription, setTranscription] = useState<string>("");
  useCallTranscription(() => {
    let setData: Promise<void> = callLocalServer();
    setTranscription(setData);
  });
  return (
    <div className={styles.mainDisplay}>
      <div>
        <p>PS5 Real Time Transcription Using OpenAI Whisper</p>
        <div className={styles.playStation}>
          <div>{transcription}</div>
        </div>
      </div>
    </div>
  );
}
