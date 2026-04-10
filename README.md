# Shakti AI Platform — Website v3

## Quick Start
```bash
npm install && npm run dev
```

## Pages
| Route | Page |
|-------|------|
| / | Home |
| /solutions | Solutions (all modules) |
| /about | About Us |
| /careers | Careers & open roles |
| /demo | Request Demo form |
| /blog | → blog.shaktiplatform.com (coming soon) |
| /coming-soon | Coming Soon page |

## Spring Boot API Endpoints
| Method | Path | Description |
|--------|------|-------------|
| POST | /api/demo | Demo request form |
| POST | /api/contact | Contact form |
| POST | /api/newsletter | Newsletter subscribe |

## Connect Backend
Create `.env` file:
```
VITE_API_URL=http://localhost:8080/api
```
