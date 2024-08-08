# ☁️ Weather App

Welcome to the Weather App! This project, developed for **Fintek Digital**, allows you to check the weather around the world using a simple and intuitive interface.

<img width="1461" alt="Screenshot 2024-08-08 at 20 43 20" src="https://github.com/user-attachments/assets/a9731fea-e7ab-46f7-af01-8f7e5530eb5c">

## 📁 Project Structure

The project is divided into two main folders:

- **Client**: The frontend of the application built with React.
- **Server**: The backend of the application built with Node.js and Express.

## 🛠️ How to Set Up the Application

Follow these steps to set up and run both the client and server:

1. **Navigate to the Client Directory**:
   ```bash
   git clone https://github.com/nirglus/Weather-App.git
   cd weatherproject
   ```

2. **Navigate to the Client Directory**:
   ```bash
   git clone https://github.com/nirglus/Weather-App.git
   cd client
   ```
3. **Install Client Dependencies**:
   ```bash
   npm install
   ```
4. **Return to the Root Directory**:
   ```bash
   cd ..
   cd server
   ```
5. **Install Server Dependencies**:
   ```bash
   npm install
   ```
6. **Create a `.env` File**:

   - In the `server` directory, create a file named `.env`.
   
   - Open the `.env` file and add the following line, replacing `your_weather_api_key_here` with your actual API key:
     ```env
     WEATHER_KEY=your_weather_api_key_here
     ```

7. **Start the Server**:

   ```bash
   npm run dev
   ```

8. **Return to the Root Directory**:

   ```bash
   cd ..
   cd client
   npm run dev
   ```

9. **Enjoy the Application!** 😊

### 🛠️ Technologies Used
## Frontend:

- React
- Vite

## Backend:

- Node.js
- Express
- WeatherAPI
