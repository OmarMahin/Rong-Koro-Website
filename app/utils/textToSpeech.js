// utils/textToSpeech.js

export const speakInBangla = (text) => {
    // 1. Safety check: Ensure we are running in the browser
    if (typeof window === "undefined" || !window.speechSynthesis) {
        console.error("Text-to-Speech is not supported in this browser.");
        return;
    }

    // Cancel any speech currently playing so it doesn't overlap
    window.speechSynthesis.cancel();

    // 2. Create the speech request
    const utterance = new SpeechSynthesisUtterance(text);
    
    // 3. Set the language code to Bangla (Bangladesh)
    utterance.lang = "bn-BD"; 

    // 4. Find and assign a high-quality native Bangla voice if available
    const voices = window.speechSynthesis.getVoices();
    const banglaVoice = voices.find(voice => 
        voice.lang === "bn-BD" || voice.lang === "bn-IN"
    );

    if (banglaVoice) {
        utterance.voice = banglaVoice;
    }

    // Optional: Adjust speech rate (1.0 is normal, lower is slower)
    utterance.rate = 0.9; 

    // 5. Speak!
    window.speechSynthesis.speak(utterance);
};