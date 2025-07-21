# MERN Member Management Application

A full-stack member management application built with the MERN stack (MongoDB, Express.js, React, Node.js) that replicates the UI and functionality shown in the provided wireframe design.

## Features

- **Member List Management**: View all members with their attendance status
- **Add New Members**: Create new members with form validation
- **Edit Members**: Update existing member information
- **Member Details**: View detailed information about individual members
- **Delete Members**: Remove members from the system
- **Attendance Tracking**: Toggle between Present/Absent status
- **Form Validation**: Client-side and server-side validation
- **Responsive Design**: Works on desktop and mobile devices

## Technology Stack

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **MongoDB**: Database
- **Mongoose**: ODM for MongoDB
- **CORS**: Cross-origin resource sharing
- **dotenv**: Environment variable management

### Frontend
- **React**: Frontend framework
- **React Router**: Client-side routing
- **Plain CSS**: Styling (no external CSS frameworks)
- **Axios**: HTTP client
- **Custom Hooks**: Reusable form state management

## Project Structure

```
mern-member-app/
├── backend/
│   ├── controllers/
│   │   └── memberController.js
│   ├── models/
│   │   └── Member.js
│   ├── routes/
│   │   └── memberRoutes.js
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── ui/
│   │   ├── hooks/
│   │   │   └── useForm.js
│   │   ├── lib/
│   │   │   └── api.js
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── NewMemberPage.jsx
│   │   │   ├── EditMemberPage.jsx
│   │   │   └── MemberDetailsPage.jsx
│   │   ├── App.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or pnpm

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/member_management
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will run on `http://localhost:5173`

## API Endpoints

### Members
- `GET /api/members` - Get all members
- `GET /api/members/:id` - Get a single member
- `POST /api/members` - Create a new member
- `PUT /api/members/:id` - Update a member
- `DELETE /api/members/:id` - Delete a member
- `PATCH /api/members/:id/attendance` - Update attendance status

## Data Model

### Member Schema
```javascript
{
  fullName: {
    type: String,
    required: true,
    minlength: 5
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female', 'Prefer not to say']
  },
  details: {
    type: String,
    required: true,
    minlength: 20
  },
  attendance: {
    type: String,
    enum: ['Present', 'Absent'],
    default: 'Present'
  }
}
```

## Form Validation Rules

- **Full Name**: Required, minimum 5 characters
- **Email**: Required, valid email format, unique
- **Gender**: Required, one of the predefined options
- **Details**: Required, minimum 20 characters

## Custom React Hook

The application includes a reusable `useForm` hook that manages:
1. Form state and input changes
2. Form validation
3. Form submission
4. Form reset functionality

## UI Components

The application matches the provided wireframe design with:
- Clean, professional layout
- Yellow validation message boxes
- Purple informational notes
- Consistent table styling
- Responsive form layouts
- Proper color coding for attendance status

## Usage

1. **View Members**: The home page displays all members in separate tables for Present and Absent members
2. **Add Member**: Click "Add Member" to create a new member with form validation
3. **Edit Member**: Click on a member's name or use the Edit button to modify their information
4. **View Details**: Click on a member's name to see their full details
5. **Delete Member**: Use the Delete button with confirmation dialog
6. **Toggle Attendance**: Use checkboxes to change attendance status between Present/Absent

## Development Notes

- The application uses modern React patterns with functional components and hooks
- Form validation is implemented both client-side and server-side
- The UI closely matches the provided wireframe design using only plain CSS
- No external CSS frameworks (Bootstrap, Tailwind, etc.) are used
- All CRUD operations are fully functional
- The application is responsive and works on different screen sizes
- Custom CSS classes provide consistent styling throughout the application

## License

This project is created for educational purposes and follows the MERN stack best practices.

