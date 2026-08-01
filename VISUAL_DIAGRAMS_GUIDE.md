# Profile Management System - Visual Diagrams Guide

## 🎨 Mermaid Diagram Code

Here are the diagrams converted to **Mermaid format** that you can use directly:

### **1. System Architecture Diagram**

```mermaid
graph TB
    subgraph Frontend["Frontend<br/>React + Vite"]
        A["React Components<br/>React Router<br/>Tailwind CSS"]
    end
    
    subgraph Backend["Backend<br/>Express + Node.js"]
        B["Express Server<br/>CORS Middleware<br/>Request Handlers"]
    end
    
    subgraph Database["Database<br/>MongoDB"]
        C["MongoDB Cluster<br/>Mongoose ODM<br/>Profile Collection"]
    end
    
    A -->|HTTP REST API| B
    B -->|Query/Insert/Update<br/>Delete| C
    
    style Frontend fill:#61dafb,stroke:#333,color:#000
    style Backend fill:#90c53f,stroke:#333,color:#000
    style Database fill:#13aa52,stroke:#333,color:#fff
```

---

### **2. Frontend User Flow Diagram**

```mermaid
graph TD
    A["🏠 Landing Page<br/>/"] 
    B["➕ Create Profile<br/>/create"]
    C["📋 View All Profiles<br/>/profiles"]
    D["👤 Profile Details<br/>/:id"]
    E["✏️ Edit Profile<br/>/:id/edit"]
    F["💾 Save to Database"]
    
    A -->|Click Create| B
    A -->|Click View All| C
    C -->|Select Profile| D
    D -->|Click Edit| E
    B --> F
    E --> F
    
    style A fill:#FFE5B4,stroke:#333,stroke-width:2px
    style B fill:#ADD8E6,stroke:#333,stroke-width:2px
    style C fill:#ADD8E6,stroke:#333,stroke-width:2px
    style D fill:#FFC0CB,stroke:#333,stroke-width:2px
    style E fill:#C1FFC1,stroke:#333,stroke-width:2px
    style F fill:#DDA0DD,stroke:#333,stroke-width:2px
```

---

### **3. API Request/Response Flow**

```mermaid
sequenceDiagram
    participant Browser as 🖥️ Browser
    participant Express as 🔧 Express Server
    participant Mongoose as 🗄️ Mongoose
    participant MongoDB as 💾 MongoDB
    
    Browser->>Express: HTTP Request<br/>GET/POST/PUT/DELETE
    Express->>Express: Parse & Validate
    Express->>Mongoose: Query/Update/Delete
    Mongoose->>MongoDB: Database Operation
    MongoDB-->>Mongoose: Result
    Mongoose-->>Express: Return Data
    Express->>Express: Format Response
    Express-->>Browser: JSON Response<br/>200/201/404/500
    Browser->>Browser: Update UI
```

---

### **4. CRUD Operations Flow**

```mermaid
graph LR
    subgraph CREATE["CREATE - POST"]
        C1["Extract Data"] --> C2["Validate"] --> C3["Check Unique"] --> C4["Create Doc"] --> C5["Return 201"]
    end
    
    subgraph READ_ALL["READ ALL - GET"]
        R1["Query All Docs"] --> R2["No Filter"] --> R3["Return 200"]
    end
    
    subgraph READ_ONE["READ ONE - GET"]
        RO1["Extract ID"] --> RO2["Find Doc"] --> RO3{Found?}
        RO3 -->|Yes| RO4["Return 200"]
        RO3 -->|No| RO5["Return 404"]
    end
    
    subgraph UPDATE["UPDATE - PUT"]
        U1["Extract ID"] --> U2["Update Fields"] --> U3{Success?}
        U3 -->|Yes| U4["Return 200"]
        U3 -->|No| U5["Return 404"]
    end
    
    subgraph DELETE["DELETE - DELETE"]
        D1["Extract ID"] --> D2["Delete Doc"] --> D3{Verified?}
        D3 -->|Yes| D4["Return 200"]
        D3 -->|No| D5["Return 404"]
    end
    
    style CREATE fill:#90EE90,stroke:#333,stroke-width:2px
    style READ_ALL fill:#87CEEB,stroke:#333,stroke-width:2px
    style READ_ONE fill:#87CEEB,stroke:#333,stroke-width:2px
    style UPDATE fill:#FFD700,stroke:#333,stroke-width:2px
    style DELETE fill:#FF6B6B,stroke:#333,stroke-width:2px
```

---

### **5. Backend Architecture**

```mermaid
graph TD
    A["HTTP Request<br/>Client"]
    
    subgraph Routes["Routes Layer"]
        R1["POST /api/profile/create"]
        R2["GET /api/profiles"]
        R3["GET /api/profile/:id"]
        R4["PUT /api/profile/:id"]
        R5["DELETE /api/profile/:id"]
    end
    
    subgraph Controllers["Controllers Layer"]
        C1["createProfile()"]
        C2["getAllProfiles()"]
        C3["getOneProfile()"]
        C4["updateProfile()"]
        C5["deleteProfile()"]
    end
    
    subgraph Models["Mongoose Models"]
        M["Profile Schema<br/>name, email, age, bio"]
    end
    
    subgraph Database["MongoDB"]
        DB["Profiles Collection"]
    end
    
    A --> Routes
    R1 --> C1
    R2 --> C2
    R3 --> C3
    R4 --> C4
    R5 --> C5
    C1 & C2 & C3 & C4 & C5 --> M
    M --> Database
    
    style Routes fill:#FFB6C1,stroke:#333,stroke-width:2px
    style Controllers fill:#87CEEB,stroke:#333,stroke-width:2px
    style Models fill:#FFD700,stroke:#333,stroke-width:2px
    style Database fill:#90EE90,stroke:#333,stroke-width:2px
```

---

### **6. Database Schema**

```mermaid
graph TD
    A["Profile Collection<br/>MongoDB"]
    
    A --> B["_id<br/>ObjectId<br/>Auto-generated"]
    A --> C["name<br/>String<br/>Required"]
    A --> D["email<br/>String<br/>Required, Unique"]
    A --> E["age<br/>Number<br/>Required"]
    A --> F["bio<br/>String<br/>Optional"]
    A --> G["createdAt<br/>Date<br/>Auto-timestamp"]
    A --> H["updatedAt<br/>Date<br/>Auto-timestamp"]
    
    style A fill:#FFD700,stroke:#333,stroke-width:3px
    style B fill:#90EE90,stroke:#333,stroke-width:2px
    style C fill:#87CEEB,stroke:#333,stroke-width:2px
    style D fill:#FFB6C1,stroke:#333,stroke-width:2px
    style E fill:#DDA0DD,stroke:#333,stroke-width:2px
    style F fill:#F0E68C,stroke:#333,stroke-width:2px
    style G fill:#98FB98,stroke:#333,stroke-width:2px
    style H fill:#98FB98,stroke:#333,stroke-width:2px
```

---

### **7. Technology Stack**

```mermaid
graph TD
    A["MERN Stack<br/>Profile Manager"]
    
    B["Frontend Layer"]
    C["Backend Layer"]
    D["Database Layer"]
    
    B --> B1["React 19.2.7"]
    B --> B2["React Router 7.18.1"]
    B --> B3["Vite 8.1.1"]
    B --> B4["Tailwind CSS 4.3.3"]
    
    C --> C1["Express 5.2.1"]
    C --> C2["Node.js"]
    C --> C3["CORS 2.8.6"]
    C --> C4["Dotenv 17.4.2"]
    
    D --> D1["MongoDB"]
    D --> D2["Mongoose 9.8.0"]
    
    A --> B
    A --> C
    A --> D
    
    style A fill:#FF6B6B,stroke:#333,stroke-width:3px,color:#fff
    style B fill:#61dafb,stroke:#333,stroke-width:2px,color:#000
    style C fill:#90c53f,stroke:#333,stroke-width:2px,color:#000
    style D fill:#13aa52,stroke:#333,stroke-width:2px,color:#fff
```

---

### **8. Route Structure**

```mermaid
graph TD
    A["App.jsx<br/>BrowserRouter"]
    
    A --> R1["/ → LandingPage"]
    A --> R2["/create → CreateProfilePage"]
    A --> R3["/profiles → AllProfilePages"]
    A --> R4["/:id → OneProfilePage"]
    A --> R5["/:id/edit → EditProfilePage"]
    
    R1 -->|Navigate| R2
    R1 -->|Navigate| R3
    R3 -->|Click Profile| R4
    R4 -->|Click Edit| R5
    R2 -->|Save| R3
    R5 -->|Save| R4
    
    style A fill:#FFD700,stroke:#333,stroke-width:3px
    style R1 fill:#FFE5B4,stroke:#333,stroke-width:2px
    style R2 fill:#ADD8E6,stroke:#333,stroke-width:2px
    style R3 fill:#ADD8E6,stroke:#333,stroke-width:2px
    style R4 fill:#FFC0CB,stroke:#333,stroke-width:2px
    style R5 fill:#C1FFC1,stroke:#333,stroke-width:2px
```

---

### **9. Error Handling Flow**

```mermaid
graph TD
    A["Request Processing"]
    
    A --> B{Operation<br/>Successful?}
    
    B -->|Yes| C["Success Response<br/>200/201"]
    B -->|No - Not Found| D["404 Error<br/>Resource Not Found"]
    B -->|No - Server Error| E["500 Error<br/>Internal Server Error"]
    
    C --> C1["JSON: success=true"]
    C --> C2["Include data object"]
    C --> C3["Return to Frontend"]
    
    D --> D1["JSON: success=false"]
    D --> D2["Return error message"]
    D --> D3["Return to Frontend"]
    
    E --> E1["Log error to console"]
    E --> E2["JSON: success=false"]
    E --> E3["Return error message"]
    E --> E4["Return to Frontend"]
    
    style A fill:#FFD700,stroke:#333,stroke-width:2px
    style B fill:#FF6B6B,stroke:#333,stroke-width:2px
    style C fill:#90EE90,stroke:#333,stroke-width:2px
    style D fill:#FFB6C1,stroke:#333,stroke-width:2px
    style E fill:#FFB6C1,stroke:#333,stroke-width:2px
```

---

### **10. Complete Data Flow Lifecycle**

```mermaid
sequenceDiagram
    participant User as 👤 User
    participant UI as 🖥️ React UI
    participant API as 🔧 Express API
    participant DB as 💾 MongoDB
    
    User->>UI: 1. Click "Create Profile"
    UI->>API: 2. POST /api/profile/create
    Note over API: Validate Data
    API->>DB: 3. Insert Profile
    DB-->>API: 4. Profile Created
    API-->>UI: 5. 201 Success + Data
    UI->>User: 6. Show Success
    UI->>User: 7. Navigate to Profiles
    
    User->>UI: 8. View All Profiles
    UI->>API: 9. GET /api/profiles
    API->>DB: 10. Find All Profiles
    DB-->>API: 11. Return Array
    API-->>UI: 12. 200 Success + Array
    UI->>User: 13. Display Profile List
    
    User->>UI: 14. Click Profile
    UI->>API: 15. GET /api/profile/:id
    API->>DB: 16. Find by ID
    DB-->>API: 17. Return Profile
    API-->>UI: 18. 200 Success + Profile
    UI->>User: 19. Display Details
```
