# Deployment Guide for SPARKH INFOTECH

## Prerequisites
- **Node.js**: v18 or later
- **npm**: v9 or later
- **Git**: Installed
- **Vercel Account**: For hosting (Recommended)
- **MongoDB Atlas Account**: For database

## 1. Local Setup
1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd sparkh-web
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Environment Variables**:
    Create a `.env.local` file in the root directory:
    ```env
    MONGODB_URI=your_mongodb_connection_string
    NEXT_PUBLIC_SITE_URL=http://localhost:3000
    ```

4.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view the site.

## 2. Production Build
To test the production build locally:
```bash
npm run build
npm start
```

## 3. Deployment to Vercel
1.  Push your code to a Git repository (GitHub, GitLab, Bitbucket).
2.  Log in to [Vercel](https://vercel.com).
3.  Click **"Add New..."** -> **"Project"**.
4.  Import your repository.
5.  Vercel will automatically detect Next.js.
6.  Add your Environment Variables (`MONGODB_URI`, etc.) in the Vercel dashboard.
7.  Click **"Deploy"**.

## 4. Admin Panel Setup (Future)
-   Steps to configure NextAuth.js for admin authentication.
-   Schema migration for MongoDB.
