# FocusRoom - Collaborative Study Platform

## 📌 Project Overview
**FocusRoom** is a web-based platform that enables up to **10 participants** to join **topic-based virtual study rooms** with features like **video/audio calls, interactive workspaces, notes sharing, a whiteboard, chat, and a user rating system** to maintain a productive learning environment.

## 🌟 Core Features

### 🎥 Video & Audio Calling (WebRTC-based)
- Supports **up to 10 participants per study session**.
- WebRTC integration (using **Jitsi, Mediasoup, or Twilio**) for **seamless** video/audio communication.
- **Meeting controls** (mute/unmute, camera toggle, screen sharing, chat overlay).
- **Auto-disconnect idle users** after a set inactivity period.

### 📝 Interactive Workspace (Real-time Collaboration)
- **Collaborative Code Editor**
  - Multi-user code editor with syntax highlighting.
  - Real-time syncing with **Socket.io** or **Firebase**.
- **Real-time Notes Sharing**
  - Markdown-supported Google Docs-style note editor.
  - Auto-save feature for notes.
- **Whiteboard for Visual Learning**
  - Multi-user drawing sync using **Fabric.js**.
  - Supports **pen, text, shapes, and color selection**.

### 💬 Live Chat & Messaging (Real-time Text Chat)
- **Real-time chat within study rooms**.
- **Rich-text support** (links, code snippets, and images).
- **File sharing** for PDFs, images, and notes.
- **Reactions** (like 👍, ❤️, etc.).

### 📊 User Rating System (Anti-Hooligan Feature)
- **Peer-based Ratings**: After each session, users **rate others** on behavior, participation, and helpfulness.
- **Automatic Warnings**: If a user's **average rating falls below a threshold (e.g., 2/5 stars)**, they receive a **warning**.
- **Auto Removal**: If users continue to receive low ratings, they get restricted from study rooms.
- **Top Learner Badge**: Highly rated users receive a **Top Learner badge** as recognition.

### 📈 Admin Dashboard (User Monitoring & Analytics)
- **User Ratings Overview**: Displays **average ratings, feedback, and participation stats**.
- **Flagged Users Panel**: View and manage **users with repeated low ratings**.
- **Study Room Analytics**: Track **most active topics, session count, and participation trends**.
- **Leaderboard**: Highlights **top contributors and active learners**.
- **Control Panel for Admins**: Ban, warn, and manage study rooms.

### 🏷 Topic-Based Study Rooms
- Users can **create or join study rooms** based on subjects like:
  - **Data Structures & Algorithms**
  - **Machine Learning**
  - **Web Development**
  - **Mathematics**
- **Rooms auto-close** after a set duration.
- **Private or Public rooms** (invite-only or open to all).

## 🛠 Tech Stack & Tools

### **Frontend (UI & Client-Side)**
- **React.js (Next.js) + Tailwind CSS** (for fast, responsive UI).
- **Socket.io / Firebase** (for real-time collaboration).
- **Fabric.js** (for whiteboard functionality).
- **Monaco Editor** (for the collaborative code editor).

### **Backend (API & Server)**
- **Node.js + Express.js** OR **Django (Python)** (for managing authentication, user data, and sessions).
- **MongoDB / PostgreSQL** (for storing user profiles, chat messages, study rooms, and ratings).

### **Real-Time Features**
- **WebRTC (Jitsi, Mediasoup, or Twilio API)** (for video/audio calls).
- **Socket.io / Firebase** (for real-time whiteboard, chat, and notes syncing).

### **Deployment & Hosting**
- **Frontend:** Vercel / Netlify
- **Backend:** AWS / DigitalOcean
- **Database:** MongoDB Atlas / PostgreSQL

## 📜 License

This project is licensed under the **MIT License**.

---

🚀 **Contributions are welcome!** Feel free to open issues and submit PRs. Happy coding!