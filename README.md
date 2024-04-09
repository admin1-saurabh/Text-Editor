
# Real-Time Collaborative Text Editor

## Project Overview
The Real-Time Collaborative Text Editor project aims to provide users with a platform where they can collaborate on text editing tasks in real-time. Using modern web technologies such as ReactJS, Node.js, and Socket.IO, along with MongoDB for data storage, the application ensures seamless collaboration and persistence of editing sessions.

## Features
- **Real-Time Collaboration:** Users can join specific rooms using unique socket keys and collaborate on text editing tasks in real-time. Changes made by one user are instantly reflected for all participants in the same room.
  
- **Rich Text Editing:** The application employs the Quill editor to offer users a rich text editing experience. Users can format text, insert images, and perform various editing operations effortlessly.

- **Persistent Data Storage:** All editing sessions and user changes are stored in MongoDB, ensuring that data persists even after users leave the session or refresh the page. This feature provides continuity and reliability to users' editing sessions.

## Workflow
The backend services, including socket management, room creation, and data communication, are developed using Node.js. Socket.IO is integrated into the project for real-time communication between the server and clients. MongoDB is seamlessly integrated into the backend to ensure the persistence of editing sessions and user changes.

The frontend development involves building the user interface using ReactJS and integrating the Quill editor for rich text editing functionalities. CSS is utilized for styling the interface, enhancing its visual appeal, and providing an intuitive user experience.

## Technical Stack
- **Frontend:** ReactJS, Quill Editor
- **Backend:** Node.js, Socket.IO
- **Database:** MongoDB
- **CSS:** Cascading Style Sheets

## Future Enhancements
1. **User Authentication:** Implement authentication and authorization features to ensure secure access to editing sessions.
  
2. **Additional Editing Functionalities:** Add support for more advanced text editing features to enhance user productivity.
  
3. **UI/UX Enhancements:** Continuously improve the user interface and experience based on user feedback and usability studies.
  
4. **Scalability and Performance:** Optimize the application for handling a larger number of concurrent users to ensure seamless performance under heavy loads.

## Contributors
- Shiv Shankar Singh (Registration No: 737)
- Shivam Singh (Registration No: 738)
- Saurabh Tiwari (Registration No: 734)

## Project Repository
[GitHub Repository](https://github.com/admin1-saurabh/Text-Editor.git)

## License
This project is licensed under the [MIT License](LICENSE).

## How to Run
1. Clone the repository: `git clone https://github.com/admin1-saurabh/Text-Editor.git`
2. Install dependencies:

Other Tools: Socket.io for real-time updates, Vite 

##  Installation and Usage
Clone the repository.
Navigate to the frontend folders and run install to install dependencies.

Set up your MongoDB database and configure the database connection in the server.

Run npm run dev in both the frontend and server folders to start the development server.
[![Screenshot-2024-04-03-223951.png](https://i.postimg.cc/JnXBfcmz/Screenshot-2024-04-03-223951.png)](https://postimg.cc/S2ys89JB)
