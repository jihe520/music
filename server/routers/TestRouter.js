const express = require("express")
const router = express.Router()
const { db } = require("../db/DbUtils")

router.get("/testmusic", async (req, res) => {
    console.log("Received request for /testmusic")
    try {
        const { err, rows } = await db.async.all("SELECT * FROM test_music", [])
        if (err) {
            console.error("Database error:", err)
            res.status(500).json({ error: err.message })
        } else {
            console.log("Query result:", rows)
            res.json(rows)
        }
    } catch (error) {
        console.error("Caught error:", error)
        res.status(500).json({ error: error.message })
    }
})

module.exports = router