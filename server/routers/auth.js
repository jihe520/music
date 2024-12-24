const express = require('express');
const { db } = require('../db/DbUtils'); // 确保正确导入 db
const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const { err, rows } = await db.async.all('SELECT * FROM consumer WHERE username = ? AND password = ?', [username, password]);

    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ success: false, message: '服务器错误' });
    }

    if (rows.length > 0) {
      res.json({ success: true, message: '登录成功' });
    } else {
      res.status(401).json({ success: false, message: '用户名或密码错误' });
    }
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ success: false, message: '服务器错误' });
  }
});

module.exports = router;