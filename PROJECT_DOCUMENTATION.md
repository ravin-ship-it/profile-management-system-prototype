# Profile Management System - Project Documentation

## Executive Summary

**Project Name:** Profile Management System (MERN Stack)  
**Repository:** https://github.com/ravin-ship-it/profile-management-system-prototype  
**Language Composition:** JavaScript 98.9%, Other 1.1%  
**Live Demo:** https://profilehub-xensmac.vercel.app  
**Project Type:** College/Internship Project

---

## Table of Contents

1. [System Architecture](#system-architecture)
2. [Frontend Flow](#frontend-flow)
3. [API Architecture](#api-architecture)
4. [Backend Operations](#backend-operations)
5. [Database Schema](#database-schema)
6. [Technology Stack](#technology-stack)
7. [Project Structure](#project-structure)
8. [API Endpoints Reference](#api-endpoints-reference)
9. [Error Handling](#error-handling)
10. [Data Flow Sequence](#data-flow-sequence)

---

## 1. System Architecture

### Overall System Design

```
┌─────────────────────────────────────────────────────────────┐
│                  PROFILE MANAGEMENT SYSTEM                   │
│                      MERN STACK                              │
└─────────────────────────────────────────────────────────────┘
                              │
                ┌─────────────┼─────────────┐
                ▼             ▼             ▼
            ┌────────┐  ┌──────────┐  ┌──────────┐
            │Frontend│  │ Backend  │  │ Database │
            │(React) │  │(Express) │  │(MongoDB) │
            │+ Vite  │  │+ Node.js │  │+Mongoose │
            └────────┘  └──────────┘  └──────────┘
                │             │             │
           Tailwind         CORS         Query
           Router           JSON         Validation
```

**Key Components:**
- **Frontend:** React 19 with Vite bundler
- **Backend:** Express.js RESTful API
- **Database:** MongoDB with Mongoose ODM
- **Styling:** Tailwind CSS
- **Communication:** HTTP REST API with CORS

---

## 2. Frontend Flow

### User Navigation Flowchart

```
                    ┌──────────────────┐
                    │  Landing Page    │
                    │   (Route: /)     │
                    └────────┬─────────┘
                             │
                    ┌────────┴────────┐
                    │                 │
                    ▼                 ▼
            ┌─────────────────┐  ┌──────────────────┐
            │ Create Profile  │  │  View All        │
            │  (Route:/create)│  │  Profiles        │
            │  - Form with    │  │  (Route:/        │
            │    input fields │  │   profiles)      │
            └────────┬────────┘  │  - List view of  │
                     │            │    all profiles  │
                     │            └────────┬─────────┘
                     │                     │
                     │            ┌────────▼──────────┐
                     │            │  Click to View    │
                     │            │  Profile Details  │
                     │            │  (Route: /:id)    │
                     │            └────────┬──────────┘
                     │                     │
                     │            ┌────────┴──────────┐
                     │            │                   │
                     │            ▼                   ▼
                     │        ┌─────────┐      ┌──────────┐
                     │        │View     │      │ Edit     │
                     │        │Complete │      │ Profile  │
                     │        │Details  │      │(Route:   │
                     │        │- Name   │      │ /:id/    │
                     │        │- Email  │      │ edit)    │
                     │        │- Age    │      │- Form    │
                     │        │- Bio    │      │- Pre-    │
                     │        │- Delete │      │ filled   │
                     │        │  Option │      │  data    │
                     │        │         │      │- Submit  │
                     │        └────┬────┘      └─────┬────┘
                     │             │                │
                     └─────────────┴────────────────┘
                                   │
                            ┌──────▼──────┐
                            │   Send to   │
                            │   Database  │
                            │   via API   │
                            └─────────────┘
```

### Pages Overview

| Page | Route | Purpose | Features |
|------|-------|---------|----------|
| Landing Page | `/` | Welcome/Home | Navigation, Introduction |
| Create Profile | `/create` | Add new profile | Form with fields (name, email, age, bio) |
| All Profiles | `/profiles` | View all profiles | List/Card view with profile summaries |
| Profile Details | `/:id` | View single profile | Full profile info, Edit & Delete buttons |
| Edit Profile | `/:id/edit` | Modify profile | Pre-filled form with existing data |

---

## 3. API Architecture

### HTTP Request/Response Flow

```
┌─────────────────────────────────────────────────────────────┐
│                      FRONTEND (React)                         │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Components:                                          │   │
│  │ - CreateProfilePage  - AllProfilePages               │   │
│  │ - OneProfilePage     - EditProfilePage               │   │
│  │ - LandingPage                                        │   │
│  └──────────────────────────────────────────────────────┘   │
└──────────────────────┬──────────────────────────────────────┘
                       │
              ┌────────▼─────────┐
              │  HTTP Request:   │
              │  - GET           │
              │  - POST          │
              │  - PUT           │
              │  - DELETE        │
              └────────┬─────────┘
                       │
            ┌──────────▼──────────┐
            │  CORS Middleware    │
            │  - Enable cross-    │
            │    origin requests  │
            │  - Set headers      │
            └──────────┬──────────┘
                       │
        ┌──────────────▼──────────────┐
        │   BACKEND (Express Server)   │
        │  Port: Configured via .env   │
        │  ┌────────────────────────┐  │
        │  │   Routes Layer         │  │
        │  │ /api/profile/create    │  │
        │  │ /api/profiles          │  │
        │  │ /api/profile/:id       │  │
        │  │ /api/profile/:id       │  │
        │  │ /api/profile/:id       │  │
        │  └────────────┬───────────┘  │
        │               │               │
        │  ┌────────────▼───────────┐  │
        │  │ Controllers Layer      │  │
        │  │ - Req/Res handling     │  │
        │  │ - Validation           │  │
        │  │ - Error management     │  │
        │  └────────────┬───────────┘  │
        │               │               │
        │  ┌────────────▼───────────┐  │
        │  │ Models Layer           │  │
        │  │ (Mongoose ODM)         │  │
        │  │ - Schema definition    │  │
        │  │ - Validation rules     │  │
        │  └────────────┬───────────┘  │
        └───────────────┼──────────────┘
                        │
            ┌───────────▼──────────┐
            │   MongoDB Database   │
            │   Connection via     │
            │   Mongoose           │
            └───────────┬──────────┘
                        │
            ┌───────────▼──────────┐
            │ Profiles Collection  │
            │ - Document storage   │
            │ - Indexing           │
            │ - Transactions       │
            └─────────────────────┘
                        │
            ┌───────────▼──────────┐
            │ Return JSON Response │
            │ {                    │
            │   success: boolean   │
            │   message: string    │
            │   data: object       │
            │ }                    │
            └─────────────────────┘
```

---

## 4. Backend Operations

### CRUD Operations Detailed Flow

#### CREATE - POST `/api/profile/create`
```
Request Received
    ↓
Extract Data: { name, email, age, bio }
    ↓
Validate Required Fields
    ↓
Check Email Unique Constraint
    ↓
Create Document in MongoDB
    ↓
Return 201 Success Response with Created Profile Data
```

#### READ ALL - GET `/api/profiles`
```
Request Received
    ↓
Query All Documents from MongoDB
    ↓
No Filtering/Sorting Applied
    ↓
Return 200 Success Response with Array of All Profiles
```

#### READ ONE - GET `/api/profile/:id`
```
Request Received
    ↓
Extract Profile ID from URL Parameters
    ↓
Query MongoDB by ObjectId
    ↓
Document Found?
    ├─ YES → Return 200 Success Response with Profile Data
    └─ NO  → Return 404 Not Found Error Response
```

#### UPDATE - PUT `/api/profile/:id`
```
Request Received
    ↓
Extract Profile ID from URL Parameters
    ↓
Extract Updated Fields from Request Body
    ↓
Query and Update Document in MongoDB
    ↓
Update Succeeded?
    ├─ YES → Return 200 Success Response with Updated Message
    └─ NO  → Return 404 Not Found Error Response
```

#### DELETE - DELETE `/api/profile/:id`
```
Request Received
    ↓
Extract Profile ID from URL Parameters
    ↓
Delete Document from MongoDB
    ↓
Deletion Verified?
    ├─ YES → Return 200 Success Response
    └─ NO  → Return 404 Not Found Error Response
```

---

## 5. Database Schema

### Profile Collection Structure

```
Profile Collection
├── _id (ObjectId)
│   └─ Auto-generated by MongoDB
│
├── name (String)
│   ├─ Required: true
│   └─ Purpose: User's full name
│
├── email (String)
│   ├─ Required: true
│   ├─ Unique: true
│   └─ Purpose: User's email address (unique identifier)
│
├── age (Number)
│   ├─ Required: true
│   └─ Purpose: User's age
│
├── bio (String)
│   ├─ Required: false
│   └─ Purpose: User's biography/description
│
├── createdAt (Date)
│   ├─ Auto-generated: true
│   └─ Purpose: Document creation timestamp
│
└── updatedAt (Date)
    ├─ Auto-generated: true
    └─ Purpose: Last modification timestamp
```

### Schema Definition Table

| Field | Type | Required | Unique | Default | Description |
|-------|------|----------|--------|---------|-------------|
| `_id` | ObjectId | - | - | Auto | MongoDB auto-generated ID |
| `name` | String | ✓ | - | - | User's full name |
| `email` | String | ✓ | ✓ | - | Unique email address |
| `age` | Number | ✓ | - | - | User's age |
| `bio` | String | - | - | - | Optional biography |
| `createdAt` | Date | - | - | now() | Creation timestamp |
| `updatedAt` | Date | - | - | now() | Update timestamp |

---

## 6. Technology Stack

### Technology Stack Breakdown

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| **Frontend** | React | 19.2.7 | UI library & components |
| | React DOM | 19.2.7 | React rendering engine |
| | React Router | 7.18.1 | Client-side routing & navigation |
| | Vite | 8.1.1 | Modern build tool & dev server |
| | Tailwind CSS | 4.3.3 | Utility-first CSS framework |
| **Backend** | Node.js | Latest | JavaScript runtime |
| | Express.js | 5.2.1 | Web server & REST API framework |
| | CORS | 2.8.6 | Cross-origin resource sharing |
| | Dotenv | 17.4.2 | Environment variable management |
| | Nodemon | 3.1.14 | Auto-restart development server |
| **Database** | MongoDB | - | NoSQL database |
| | Mongoose | 9.8.0 | ODM (Object Document Mapper) |
| **Development** | ESLint | 10.6.0 | Code quality & linting |

### Dependencies Tree

```
Frontend (React App)
├── React 19.2.7
│   └── React DOM 19.2.7
├── React Router DOM 7.18.1
├── Vite 8.1.1
│   └── @vitejs/plugin-react 6.0.3
├── Tailwind CSS 4.3.3
│   └── @tailwindcss/vite 4.3.3
└── ESLint 10.6.0

Backend (Express Server)
├── Express 5.2.1
├── Mongoose 9.8.0
├── CORS 2.8.6
├── Dotenv 17.4.2
├── Nodemon 3.1.14 (dev)
└── Node.js Runtime
```

---

## 7. Project Structure

### Directory Organization

```
profile-management-system-prototype/
│
├── backend/                          # Express API Server
│   ├── src/                          # Source code
│   │   ├── index.js                  # Entry point - Server initialization
│   │   ├── app.js                    # Express app configuration & middleware
│   │   │
│   │   ├── controller/               # Request handlers
│   │   │   └── profile.controller.js # CRUD operation handlers
│   │   │                             #  - createProfile
│   │   │                             #  - getAllProfiles
│   │   │                             #  - getOneProfile
│   │   │                             #  - updateProfile
│   │   │                             #  - deleteProfile
│   │   │
│   │   ├── models/                   # Mongoose schemas
│   │   │   └── profile.model.js      # Profile schema definition
│   │   │                             #  - name, email, age, bio
│   │   │
│   │   ├── routes/                   # API route definitions
│   │   │   └── profile.route.js      # Profile API endpoints
│   │   │                             #  - POST /profile/create
│   │   │                             #  - GET /profiles
│   │   │                             #  - GET /profile/:id
│   │   │                             #  - PUT /profile/:id
│   │   │                             #  - DELETE /profile/:id
│   │   │
│   │   └── database/                 # Database connection
│   │       └── connection.js         # MongoDB connection setup
│   │
│   ├── package.json                  # Backend dependencies
│   ├── .env                          # Environment variables
│   └── README.md                     # Backend documentation
│
├── frontend/                         # React Web Application
│   ├── src/                          # React source code
│   │   ├── main.jsx                  # React entry point
│   │   │
│   │   ├── App.jsx                   # Main component with routing
│   │   │   └── BrowserRouter Setup
│   │   │   └── Routes Definition
│   │   │   └── Route Components
│   │   │
│   │   ├── pages/                    # Page components
│   │   │   ├── LandingPage.jsx       # Home/Welcome page (/)
│   │   │   ├── CreateProfilePage.jsx # Create profile form (/create)
│   │   │   ├── AllProfilePage.jsx    # List all profiles (/profiles)
│   │   │   ├── OneProfilePage.jsx    # Single profile view (/:id)
│   │   │   └── EditProfilePage.jsx   # Edit profile form (/:id/edit)
│   │   │
│   │   ├── components/               # Reusable components
│   │   │   └── (Form, Card, Nav, etc.)
│   │   │
│   │   ├── index.css                 # Tailwind CSS imports & styles
│   │   └── App.jsx                   # Main App component
│   │
│   ├── public/                       # Static assets
│   ├── vite.config.js                # Vite bundler configuration
│   ├── tailwind.config.js            # Tailwind CSS configuration
│   ├── package.json                  # Frontend dependencies
│   ├── .eslintrc.cjs                 # ESLint configuration
│   └── README.md                     # Frontend documentation
│
├── .gitignore                        # Git ignore rules
├── README.md                         # Project documentation
└── .env.example                      # Environment variables template
```

---

## 8. API Endpoints Reference

### Complete API Endpoints Table

| HTTP Method | Endpoint | Controller | Request Body | Response | Status | Purpose |
|-------------|----------|-----------|--------------|----------|--------|---------|
| **POST** | `/api/profile/create` | `createProfile()` | `{name, email, age, bio}` | `{success, message, data}` | 201/500 | Create new profile |
| **GET** | `/api/profiles` | `getAllProfiles()` | - | `{success, message, data[]}` | 200/500 | Fetch all profiles |
| **GET** | `/api/profile/:id` | `getOneProfile()` | - | `{success, message, data}` | 200/404/500 | Fetch single profile |
| **PUT** | `/api/profile/:id` | `updateProfile()` | `{name?, email?, age?, bio?}` | `{success, message}` | 200/404/500 | Update profile |
| **DELETE** | `/api/profile/:id` | `deleteProfile()` | - | `{success, message}` | 200/404/500 | Delete profile |

### Request/Response Format

#### Success Response (2xx)
```json
{
  "success": true,
  "message": "Operation description",
  "data": {
    "_id": "ObjectId",
    "name": "string",
    "email": "string",
    "age": number,
    "bio": "string"
  }
}
```

#### Error Response (4xx/5xx)
```json
{
  "success": false,
  "message": "Error description",
  "error": "Error details"
}
```

---

## 9. Error Handling

### Error Handling Strategy

```
┌──────────────────────────────────────────────────────────┐
│         Error Handling & Response Patterns               │
└──────────────────────────────────────────────────────────┘

SUCCESS RESPONSES (2xx)
├─ 200 OK
│  ├─ GET /api/profiles
│  ├─ GET /api/profile/:id
│  ├─ PUT /api/profile/:id
│  └─ DELETE /api/profile/:id
│
└─ 201 Created
   └─ POST /api/profile/create

CLIENT ERRORS (4xx)
├─ 404 Not Found
│  ├─ Profile ID doesn't exist
│  ├─ GET /api/profile/:id → invalid ID
│  ├─ PUT /api/profile/:id → invalid ID
│  └─ DELETE /api/profile/:id → invalid ID
│
└─ 400 Bad Request
   └─ Missing or invalid required fields

SERVER ERRORS (5xx)
└─ 500 Internal Server Error
   ├─ Database connection failure
   ├─ Mongoose validation errors
   ├─ Unexpected exceptions
   └─ Logged to console with error details
```

### Error Response Examples

| Error Type | Status | Response Example |
|-----------|--------|------------------|
| Profile not found | 404 | `{"success": false, "message": "Failed to fetch user profile"}` |
| Creation failed | 500 | `{"success": false, "message": "Failed to create profile", "error": "..."}` |
| Update failed | 404/500 | `{"success": false, "message": "Failed to update profile"}` |
| Delete failed | 404/500 | `{"success": false, "message": "Failed to delete profile"}` |
| Server error | 500 | `{"success": false, "message": "Operation failed", "error": "..."}` |

---

## 10. Data Flow Sequence

### Complete Request-Response Lifecycle

```
Frontend                Backend              Database
   │                      │                      │
   │                      │                      │
1. USER ACTION: Click "Create Profile"
   │                      │                      │
2. FORM SUBMISSION (POST)
   │─── POST Request ───>│                      │
   │   /api/profile/create
   │   Body: {           │                      │
   │     name,           │                      │
   │     email,          │                      │
   │     age,            │                      │
   │     bio             │                      │
   │   }                 │                      │
   │                      │                      │
3. REQUEST PROCESSING
   │                    ├─ Parse JSON Body    │
   │                    ├─ Validate Fields    │
   │                    │                      │
4. DATABASE OPERATION
   │                    ├─ Check Email Unique─→│
   │                    │                      ├─ Query Index
   │                    │                      │
   │                    ├─ Create Document  ─→│
   │                    │                      ├─ Insert Record
   │                    │<─ Return New Doc ──│
   │                    │                      │
5. RESPONSE GENERATION
   │                    ├─ Build Success Msg
   │                    ├─ Format JSON
   │                    │                      │
6. SEND RESPONSE
   │<─── 201 Response ──│                      │
   │   {                │                      │
   │     success: true, │                      │
   │     message: "...",│                      │
   │     data: {        │                      │
   │       _id, name,   │                      │
   │       email, age   │                      │
   │     }              │                      │
   │   }                │                      │
   │                      │                      │
7. FRONTEND UPDATE
   ├─ Display Success
   ├─ Update UI
   └─ Navigate to Profile

────────────────────────────────────────────────────

READ ALL PROFILES FLOW:

Frontend                Backend              Database
   │                      │                      │
   │─── GET Request ───>│                      │
   │   /api/profiles    │                      │
   │                    ├─ Query All Docs ───→│
   │                    │                      ├─ Find all
   │                    │<─ Return Array ────│
   │<─── 200 Response ──│                      │
   │   [                │                      │
   │     {profile1},    │                      │
   │     {profile2},    │                      │
   │     ...            │                      │
   │   ]                │                      │
   │                      │                      │
   ├─ Parse Response
   ├─ Render List
   └─ Display Profiles

────────────────────────────────────────────────────

UPDATE PROFILE FLOW:

Frontend                Backend              Database
   │                      │                      │
   │─── PUT Request ───>│                      │
   │   /api/profile/:id │                      │
   │   Body: {updated   │                      │
   │   fields}          │                      │
   │                    ├─ Find by ID ───────→│
   │                    │                      ├─ Query by ID
   │                    │<─ Return Doc ──────│
   │                    ├─ Validate Exists
   │                    ├─ Update Fields ───→│
   │                    │                      ├─ Modify Doc
   │                    │<─ Return Updated──│
   │<─── 200 Response ──│                      │
   │   {                │                      │
   │     success: true, │                      │
   │     message: "..." │                      │
   │   }                │                      │
   │                      │                      │
   ├─ Show Success Alert
   └─ Refresh Profile

────────────────────────────────────────────────────

DELETE PROFILE FLOW:

Frontend                Backend              Database
   │                      │                      │
   │─── DELETE Req. ───>│                      │
   │   /api/profile/:id │                      │
   │                    ├─ Find & Delete ───→│
   │                    │                      ├─ Remove Doc
   │                    │<─ Confirm Del. ───│
   │<─── 200 Response ──│                      │
   │   {                │                      │
   │     success: true, │                      │
   │     message: "..." │                      │
   │   }                │                      │
   │                      │                      │
   ├─ Show Success Alert
   └─ Navigate Away
```

---

## Deployment Information

- **Frontend Deployment:** Vercel
- **Live URL:** https://profilehub-xensmac.vercel.app
- **Backend:** Configured via environment variables
- **Database:** MongoDB (connection string in .env)

---

## Development Workflow

### Running the Application Locally

**Backend:**
```bash
cd backend
npm install
npm run dev  # Runs with nodemon for auto-restart
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev  # Runs Vite dev server
```

### Environment Variables Setup

Create `.env` file in backend folder:
```
PORT=5000
MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/database
NODE_ENV=development
```

---

## Summary

This MERN Stack Profile Management System demonstrates:

✓ **Full-stack development** with modern technologies  
✓ **RESTful API** design principles  
✓ **CRUD operations** implementation  
✓ **Database schema** design with Mongoose  
✓ **Frontend routing** with React Router  
✓ **Responsive UI** with Tailwind CSS  
✓ **Error handling** and validation  
✓ **Deployment** to production (Vercel)

---

**Document Version:** 1.0  
**Last Updated:** 2026-07-31  
**Author:** Ravin Sharma  
**Repository:** ravin-ship-it/profile-management-system-prototype
