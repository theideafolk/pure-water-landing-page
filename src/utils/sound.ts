/**
 * Sound utility for playing sounds throughout the application
 */

// Create and cache the audio instance for better performance
let dropletSound: HTMLAudioElement | null = null;

/**
 * Play the water droplet sound
 * Uses a cached audio instance to improve performance
 */
export const playWaterDropletSound = () => {
  try {
    // Create the sound instance if it doesn't exist yet
    if (!dropletSound) {
      dropletSound = new Audio('/water-droplet.mp3');
      // Set volume to a reasonable level (0.0 to 1.0)
      dropletSound.volume = 0.3;
    }
    
    // Reset audio to start to allow rapid consecutive plays
    dropletSound.currentTime = 0;
    
    // Play the sound
    dropletSound.play().catch(err => {
      // Some browsers block autoplay until user interaction
      console.log('Audio play failed:', err);
    });
  } catch (error) {
    console.error('Error playing water droplet sound:', error);
  }
};