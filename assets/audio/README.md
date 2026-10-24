# Background Audio Directory

Place your custom MP3 file here:
- Recommended filename: `wedding_music.mp3`
- Default path configured in `src/config.js`: `assets/audio/wedding_music.mp3`

You can change the song filename or audio volume anytime by editing `src/config.js`:
```javascript
audio: {
  src: "assets/audio/your_song.mp3",
  autoPlayOnOpen: true,
  volume: 0.7
}
```

*Note: If no audio file is provided, the website automatically plays a soothing Indian classical harmonic chime melody using Web Audio API when unmuted.*
