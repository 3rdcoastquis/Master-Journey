const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware logger
app.use((req, _res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Routes
app.get('/', (_req, res) => {
  res.send('Hello from Suijin — now on Express 🚀');
});

app.get('/about', (_req, res) => {
  res.send('This is my mastery journey server (Express edition).');
});

app.get('/status', (_req, res) => {
  res.json({ ok: true, timestamp: new Date().toISOString() });
});

app.get('/healthz', (_req, res) => {
  res.json({ status: 'healthy' });
});

app.get('/api/time', (_req, res) => {
  const now = new Date();
  res.json({ iso: now.toISOString(), epochMs: now.getTime() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running → http://localhost:${PORT}`);
});
