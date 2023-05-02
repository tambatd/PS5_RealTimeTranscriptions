"use client";
import { useState, useEffect } from "react";

export async function callLocalServer(): Promise<void> {
  console.log("loading real time transcribed data");
  // try {
  //   //fetch concurent transcribed audio
  //   const response = await fetch("http://localhost:3001/transcribedAudio");
  //   const data = await response.json();
  //   console.log("Server response:", data);
  // } catch (error) {
  //   console.error("Failed to call server:", error);
  // }
}

export default function useCallTranscription(callback: () => void): void {
  useEffect(() => {
    /*callLocalServer()
      .then(() => console.log("Server call succeeded."))
      .catch(() => console.error("Server call failed."));
    */
    const intervalId = setInterval(callback, 1000);
    return () => clearInterval(intervalId);
  }, [callback]);
}
