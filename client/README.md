# Guide to Activating the Site

Follow these steps to set up and run both the client and server:

1. **Navigate to the Client Directory**:
   ```bash
   cd client
   ```
2. **Install Client Dependencies**:
   ```bash
   npm install
   ```
3. **Return to the Root Directory**:
   ```bash
   cd ..
   ```
4. **Navigate to the Server Directory**:
   ```bash
   cd server
   ```
5. **Install Server Dependencies**:
   ```bash
   npm install
   ```
6. **Create a `.env` File**:

   - In the `server` directory, create a file named `.env`.

7. **Add Your Weather API Key**:

   - Open the `.env` file and add the following line, replacing `your_weather_api_key_here` with your actual API key:
     ```env
     WEATHER_KEY=your_weather_api_key_here
     ```

8. **Start the Server**:

   ```bash
   npm run dev
   ```

9. **Return to the Root Directory**:

   ```bash
   cd ..
   ```

10. **Navigate Back to the Client Directory**:

    ```bash
    cd client
    ```

11. **Start the Client**:

    ```bash
    npm run dev
    ```

12. **Enjoy the Application!** 😊
