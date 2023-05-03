"use client";
import { useEffect } from "react";

export async function callLocalServer(): Promise<void> {
  try {
    // fetch concurent transcribed audio
    const response = await fetch("http:localhost:8001/transcribedAudio");
    const data = await response.json();
    console.log("Server response:", data);
    return data;
  } catch (error) {
    console.error("Failed to call server:", error);
  }
}

export default function useCallTranscription(callback: () => void): void {
  useEffect(() => {
    const intervalId = setInterval(callback, 1000);
    return () => clearInterval(intervalId);
  }, [callback]);
}
