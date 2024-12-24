const express = require("express")
const router = express.Router()
const { db } = require("../db/DbUtils")

router.get("/banner", async (req, res) => {
  try {
    const { err, rows } = await db.async.all("SELECT * FROM banner", [])
    if (err) {
      console.error("Database error:", err)
      res.status(500).json({ error: err.message })
    } else {
      res.json(rows)
    }
  } catch (error) {
    console.error("Caught error:", error)
    res.status(500).json({ error: error.message })
  }
})

module.exports = router