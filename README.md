# Next.js Chat Client

> A simple real-time chat application built with Next.js App Router, React, and Socket.IO
Server: https://github.com/mskerz/chat-server-ts

---



## Tech Stack

- Next.js  
- React  
- Socket.IO Client
- TypeScript
- Tailwind CSS (optional)

---



# Update !


## 🚀 What's New in v1.2.0  

### ✨ Highlights

- **Switched from search params to cookies for session management**  
  → User data (`username`, `roomName`) is now stored in cookies instead of URL query parameters  
  → Ensures cleaner URLs and persistent session across reloads

- **Improved Chat UX**  
  - Messages now aligned based on sender (self vs others)
  - Avatar and username displayed for each message
  - Enhanced visual styling using Tailwind CSS

- **Codebase Enhancements**  
  - Introduced `useIsUser` hook for user-based logic
  - Modularized message components for better maintainability





## 🚧 Upcoming (v1.6.0)

- Typing indicator (e.g. "User is typing...")
- Emoji support
- Message time display


## Getting Started

### 1. Clone this frontend repository

```bash
git clone https://github.com/mskerz/next-chat-socket
cd nextjs-chat-client
npm install

```

## 📄 License

MIT