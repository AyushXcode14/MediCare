
# How to Run the Project

This project consists of three parts: Backend, Frontend, and Admin Panel. You will need to run each of them in a separate terminal.

## Prerequisites

-   **Node.js** installed.
-   **MongoDB** connection string (in `backend/.env`).
-   **Cloudinary** credentials (in `backend/.env`).
-   **Razorpay** credentials (in `backend/.env`) - *Optional for basic functionality*.

## 1. Backend Setup

The backend runs on port `4000` by default.

1.  Open a terminal.
2.  Navigate to the backend directory:
    ```bash
    cd backend
    ```
3.  Install dependencies (if not already installed):
    ```bash
    npm install
    ```
4.  Start the server:
    ```bash
    npm run server
    ```
    *You should see "server started at 4000" and "database connected".*

## 2. Frontend Setup

The frontend connects to the backend at `http://localhost:4000`.

1.  Open a **new** terminal.
2.  Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
3.  Install dependencies (if not already installed):
    ```bash
    npm install
    ```
4.  Start the development server:
    ```bash
    npm run dev
    ```
    *Access the app at the URL provided (usually http://localhost:5173).*

## 3. Admin Setup

The admin panel also connects to the backend.

1.  Open a **third** terminal.
2.  Navigate to the admin directory:
    ```bash
    cd admin
    ```
3.  Install dependencies (if not already installed):
    ```bash
    npm install
    ```
4.  Start the admin panel:
    ```bash
    npm run dev
    ```
    *Access the admin panel at the URL provided (usually http://localhost:5174).*

## Troubleshooting

-   **Database Connection Error**: Check your `MONGODB_URL` in `backend/.env`.
-   **Image Upload Issues**: Verify `CLOUDINARY_*` keys in `backend/.env`.
-   **API Errors**: Ensure the backend server is running and `VITE_BACKEND_URL` in `frontend/.env` and `admin/.env` matches the backend URL (e.g., `http://localhost:4000`).
