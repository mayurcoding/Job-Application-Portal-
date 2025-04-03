# 📝 Job Application Portal

🚀 A fully interactive **Job Application Portal** built with **React, Redux, and Context API**, featuring a multi-step job application process with validation, state management, and responsive design.

## 📌 Features

### ✅ **Home Page** (`/`)
- Displays a list of available job positions.
- Each job has a "View Details" button that navigates to the job detail page.

### ✅ **Job Details Page** (`/job/:id`)
- Shows detailed information about a job (title, company, description, requirements, salary, etc.).
- Includes an "Apply Now" button to start the application process.

### ✅ **Multi-Step Application Form** (`/apply/:id`)
- **Step 1:** Personal Information – Name, email, phone number.
- **Step 2:** Experience – Years of experience, dynamically add skills.
- **Step 3:** Additional Information – Cover letter, preferred start date.
- Form validation for required fields and correct formats.
- Stores submitted applications in Redux.

### ✅ **Application Summary Page** (`/applications/:id`)
- Displays the submitted application details.
- Includes an "Edit Application" button to update any step of the form.

### ✅ **Application List Page** (`/applications`)
- Lists all submitted applications with job title, applicant name, and a short summary.
- Each application has a "View Details" button to see full information.

### ✅ **User Profile Page** (`/profile`)
- Uses **Context API** to manage user details (name, email).
- Allows users to update and save their profile information.

### ✅ **State Management**
- **Redux** is used to handle job applications globally.
- **Context API** is used to manage user profile data.

### ✅ **Custom Hooks**
- `useForm` hook for handling form inputs, validation, and submission efficiently.

### ✅ **Responsive UI**
- **Modern UI Design** with CSS for better user experience.
- Fully optimized for **desktop and mobile screens**.

## 🛠 Tech Stack

- **Frontend:** React, Redux, React Router, Context API
- **State Management:** Redux, Context API
- **Styling:** CSS (No Tailwind or Bootstrap used)
- **Routing:** React Router

## 🚀 Getting Started

### 📥 **Installation**
1️⃣ **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/job-application-portal.git
   cd job-application-portal
   ```

2️⃣ **Install dependencies**:
   ```sh
   npm install
   ```

3️⃣ **Start the development server**:
   ```sh
   npm start
   ```

🚀 The application will run at **`http://localhost:3000`**.

## 🎨 Screenshots (Optional)
![Uploading jobapp.png…]()

![Uploading job2.png…]()

## 🤝 Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## 📜 License
This project is **open-source** and free to use under the [MIT License](LICENSE).
