# Upload Widget

A modern, animated file upload widget with image compression, progress tracking, and cloud storage integration. Built with React, TypeScript, Node.js and Framer Motion.



## ✨ Features

- 🎨 **Beautiful UI** - Modern design with smooth animations using Framer Motion
- 📁 **Drag & Drop** - Intuitive file selection with React Dropzone
- 🗜️ **Image Compression** - Automatic image optimization before upload
- 📊 **Progress Tracking** - Real-time upload progress with visual indicators
- ☁️ **Cloud Storage** - Integration with Cloudflare R2 for file storage
- ⏸️ **Upload Control** - Cancel, retry, and manage uploads
- 📱 **Responsive** - Works on desktop and mobile devices
- 🎯 **TypeScript** - Fully typed for better development experience

## 🏗️ Architecture

This project consists of two main parts:

- **Frontend** (`/web`) - React application with Vite
- **Backend** (`/server`) - Node.js API with Fastify

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- Cloudflare R2 account (for file storage)

### 1. Clone the repository

```bash
git clone <repository-url>
cd upload-widget
```

### 2. Install dependencies

```bash
# Install root dependencies
pnpm install

# Install frontend dependencies
cd web
pnpm install

# Install backend dependencies
cd ../server
pnpm install
```

### 3. Environment Setup

Create a `.env` file in the `server` directory:

```env
CLOUDFLARE_ACCESS_KEY_ID=your_access_key
CLOUDFLARE_SECRET_ACCESS_KEY=your_secret_key
CLOUDFLARE_BUCKET=your_bucket_name
CLOUDFLARE_ACCOUNT_ID=your_account_id
CLOUDFLARE_PUBLIC_URL=https://your-bucket.your-domain.com
```

### 4. Start Development Servers

**Terminal 1 - Backend:**
```bash
cd server
pnpm dev
```

**Terminal 2 - Frontend:**
```bash
cd web
pnpm dev
```

The application will be available at `http://localhost:5174` (or the next available port).

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Zustand** - State management
- **Immer** - Immutable state updates
- **Radix UI** - Accessible components
- **React Dropzone** - File drag & drop
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime
- **Fastify** - Web framework
- **TypeScript** - Type safety
- **Zod** - Schema validation
- **AWS SDK** - Cloudflare R2 integration

## 📁 Project Structure

```
upload-widget/
├── web/                          # Frontend React app
│   ├── src/
│   │   ├── components/           # React components
│   │   │   ├── ui/              # Reusable UI components
│   │   │   └── upload-widget-*  # Widget-specific components
│   │   ├── store/               # Zustand state management
│   │   ├── http/                # API client functions
│   │   └── utils/               # Utility functions
│   └── package.json
├── server/                       # Backend API
│   ├── src/
│   │   ├── routes/              # API routes
│   │   ├── functions/           # Business logic
│   │   └── storage/             # Storage providers
│   └── package.json
└── README.md
```

## 🎯 Key Components

### Upload Widget (`upload-widget.tsx`)
Main widget component with collapsible functionality and smooth animations.

### Upload Item (`upload-widget-upload-item.tsx`)
Individual upload item with progress bar, status indicators, and action buttons.

### Dropzone (`upload-widget-dropzone.tsx`)
File selection area with drag & drop support.

### Store (`store/uploads.ts`)
Zustand store managing upload state with Immer for immutable updates.

## 🔧 Configuration

### Image Compression
Configure compression settings in `web/src/utils/compress-image.ts`:

```typescript
const compressedFile = await compressImage({
  file: upload.file,
  maxWidth: 1000,    // Maximum width
  maxHeight: 1000,   // Maximum height
  quality: 0.8,      // Compression quality (0-1)
});
```

### Storage Provider
The backend uses Cloudflare R2 for file storage. To use a different provider, modify `server/src/storage/providers/r2-storage.ts`.

## 📝 API Endpoints

### POST `/upload-image`
Uploads a compressed image file to cloud storage.

**Request:**
- `multipart/form-data` with `file` field

**Response:**
```json
{
  "url": "https://your-bucket.your-domain.com/path/to/file.jpg"
}
```

## 🎨 Styling

The project uses Tailwind CSS with custom configurations:

- **Colors**: Zinc-based dark theme
- **Animations**: Framer Motion for smooth transitions
- **Components**: Radix UI for accessibility
- **Icons**: Lucide React icon library

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd web
pnpm build
# Deploy the dist/ folder
```

### Backend (Railway/Render/Fly.io)
```bash
cd server
# Set environment variables
# Deploy the server
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Radix UI](https://www.radix-ui.com/) for accessible components
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Zustand](https://zustand-demo.pmnd.rs/) for state management