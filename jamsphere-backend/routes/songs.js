const express = require("express");
const router = express.Router();
const Song = require("../models/Song");

// Get all songs
router.get("/", async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific song
router.get("/:id", getSong, (req, res) => {
  res.json(res.song);
});

// Create a new song
router.post("/", async (req, res) => {
  const song = new Song({
    title: req.body.title,
    artist: req.body.artist,
    album: req.body.album,
    year: req.body.year,
  });

  try {
    const newSong = await song.save();
    res.status(201).json(newSong);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a song
router.patch("/:id", getSong, async (req, res) => {
  if (req.body.title != null) {
    res.song.title = req.body.title;
  }
  if (req.body.artist != null) {
    res.song.artist = req.body.artist;
  }
  if (req.body.album != null) {
    res.song.album = req.body.album;
  }
  if (req.body.year != null) {
    res.song.year = req.body.year;
  }

  try {
    const updatedSong = await res.song.save();
    res.json(updatedSong);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a song
router.delete("/:id", async (req, res) => {
  try {
    const song = await Song.findByIdAndDelete(req.params.id);
    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }
    res.json({ message: "Song deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get a song by ID
async function getSong(req, res, next) {
  let song;
  try {
    song = await Song.findById(req.params.id);
    if (song == null) {
      return res.status(404).json({ message: "Song not found" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.song = song;
  next();
}

module.exports = router;
