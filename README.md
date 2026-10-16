# Varshasri K — Full Stack Developer Portfolio Website

A modern, high-performance, and visually stunning **Personal Portfolio Website** designed and engineered for **Varshasri K**, Full Stack Developer and M.Sc. Software Systems student at **Kongu Engineering College**.

Built with **Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion, Lucide Icons, and Nodemailer (SMTP)**.

---

## 🌟 Key Features & Sections

1. **Home / Hero Section**
   - Prominent presentation of **Varshasri K** with animated purple/blue gradient text.
   - Professional title: **Full Stack Developer** (M.Sc. Software Systems @ KEC).
   - Real-time availability indicator: `🟢 Open to Full Stack & Frontend Engineering Roles`.
   - 3D Holographic Developer Avatar Showcase displaying her verified photograph (`profile_photo.png`) with floating orbital tech badges (Next.js 16, FastAPI, PostgreSQL).
   - Quick call-to-actions: **View My Projects**, **Contact Me**, and **Resume PDF**.

2. **About Me**
   - Detailed professional biography highlighting software systems engineering, algorithmic problem solving, and full-stack philosophy.
   - Stat metric cards: **4+ Internships Completed**, **6.80 CGPA**, **93% Gold NASSCOM Certification**, and **1st Prize Technical Paper Presentation**.
   - Four core pillars: *Frontend Engineering*, *Backend Systems*, *Relational Databases*, and *Problem Solving & Testing*.

3. **Skills & Proficiencies**
   - Categorized by **Frontend**, **Backend**, **Databases & Storage**, **Tools & DevOps**, and **Quality & Testing**.
   - Interactive category filter tabs with dynamic view switching.
   - Animated skill progress bars with proficiency percentages and contextual badges.

4. **Featured Projects**
   - **TEXMART – Smart Textile Management System (Flagship)**: Centralized enterprise platform engineered to manage textile manufacturing workflows, multi-warehouse fabric inventories, vendor supply chains, wholesale purchase orders, and dispatch logs.
   - **Student Result Management System**: Academic examination portal for mark entry, automated GPA computation, and real-time result publishing (Live GitHub: [DEVOPS-PROJECT](https://github.com/varshasri2005/DEVOPS-PROJECT)).
   - **Sabrimala Finance**: End-to-end financial platform for loan disbursement, monthly EMI repayment schedules, and audit ledgers.
   - **AgriProcess+ (Agriculture & FoodTech Platform)**: Direct farmer-to-buyer agri-commerce portal eliminating intermediaries with transparent pricing (Live GitHub: [web-technology](https://github.com/varshasri2005/web-technology)).
   - Interactive **System Architecture Modal** for architectural deep-dives.

5. **Internship Experience**
   - Modern timeline detailing responsibilities, technologies, and achievements:
     - **Qube AI Solution (CubeAI Solutions)**: Full Stack Development Intern
     - **Tamizhan Skills (RISE Program)**: Web Development Intern
     - **Oasis Infobyte (AICTE OIB-SIP)**: Web Development & Designing Intern (AICTE Merit Certificate)
     - **CODSOFT**: Web Development Intern

6. **Education Timeline**
   - **M.Sc. Software Systems (5-Year Integrated)**: Kongu Engineering College, Perundurai (2023 – 2028, Sem 6 CGPA: 6.80).
   - **HSC (Class XII)**: Christhu Jyothi Mat. Hr. Sec. School, Erode (75.0%).
   - **SSLC (Class X)**: Christhu Jyothi Mat. Hr. Sec. School, Erode.

7. **Certifications & Accreditations**
   - **NASSCOM & MeitY Gold Category (93.00%)**: Testing Tools & API Testing (Selenium with Java & Python).
   - **NPTEL & IIT Kharagpur Elite Grade (68.00%)**: Introduction to Industry 4.0 and Industrial Internet of Things.
   - **Accenture Verified Credential**: Data Processing and Visualisation.
   - **1st Prize Winner in Technical Paper Presentation**: CIT College Technical Symposium (Cash Prize ₹3,000).
   - **1st Place in Department-Level Paper Presentation**: Kongu Engineering College.
   - **Diploma in "C" Programming (DCP - Grade A)**: CSC Computer Software College.

8. **Resume Download & Viewer**
   - Dedicated ATS-friendly curriculum vitae showcase.
   - Direct download button for `/Varshasri_K_Resume.pdf`.
   - One-click browser tab viewer.

9. **Contact Me with SMTP Integration**
   - Clean contact form with client-side boundary validation.
   - Interactive feedback states: loading spinner, success message with celebration confetti, and error alerts.
   - Server-side Next.js route `/api/contact` powered by **Nodemailer** for SMTP delivery.
   - Verified contact details: Email, Phone, Location, GitHub, and LinkedIn.

---

## 🛠️ Project Structure

```
portfolio/
├── prisma/
│   └── schema.prisma           # Optional PostgreSQL database schema (Prisma)
├── public/
│   ├── profile_photo.png       # Varshasri K's professional profile photo
│   ├── Varshasri_K_Resume.pdf  # ATS-compliant Resume PDF
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts    # Next.js API route with SMTP nodemailer handler
│   │   ├── globals.css         # Dark theme styles, glassmorphism, glowing gradients
│   │   ├── layout.tsx          # RootLayout with SEO metadata & Inter font
│   │   └── page.tsx            # Main page assembling all portfolio sections
│   ├── components/
│   │   ├── About.tsx           # Biography, metrics & core pillars
│   │   ├── BackgroundMesh.tsx  # Dynamic ambient glowing orbs & cyber grid overlay
│   │   ├── Certifications.tsx  # Accredited certifications & symposium awards
│   │   ├── Contact.tsx         # Interactive contact form & verified contact info
│   │   ├── Education.tsx       # Modern education timeline
│   │   ├── Experience.tsx      # Internship timeline with tech chips
│   │   ├── Footer.tsx          # Glassmorphic footer with quick links & back-to-top
│   │   ├── Hero.tsx            # Hero section with 3D developer showcase card
│   │   ├── Navbar.tsx          # Sticky glassmorphic navbar with active section spy
│   │   ├── Projects.tsx        # TEXMART showcase, real projects, & architecture modal
│   │   ├── ResumeSection.tsx   # Direct PDF view/download card
│   │   ├── Skills.tsx          # Categorized skill showcase with filter tabs
│   │   └── SocialIcons.tsx     # Clean SVG icons for GitHub & LinkedIn
│   ├── data/
│   │   └── portfolioData.ts    # Centralized portfolio data from Varshasri's resume
│   └── types/
│       └── portfolio.ts        # TypeScript data interfaces
├── .env.example                # Example environment variables (SMTP, PostgreSQL)
├── .env.local                  # Local development environment configuration
├── package.json                # Project dependencies and scripts
└── tsconfig.json               # TypeScript configuration
```

---

## 🚀 Getting Started Locally

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm** or **pnpm** or **yarn**

### 2. Installation
Navigate into the `portfolio` directory and install dependencies:
```bash
cd portfolio
npm install
```

### 3. Configure Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Edit `.env.local` to configure SMTP email delivery (e.g. Gmail):
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-character-google-app-password
CONTACT_RECEIVER_EMAIL=varshasrik.23msc@kongu.edu
```
*(Note: If SMTP credentials are left blank, the contact form automatically operates in safe preview mode and logs submissions to the console without crashing).*

### 4. Optional: PostgreSQL Database Setup
If you wish to persist contact submissions or project visits to PostgreSQL:
```bash
# Set your DATABASE_URL in .env.local:
DATABASE_URL="postgresql://postgres:password@localhost:5432/portfolio_db?schema=public"

# Generate Prisma client and push schema:
npx prisma generate
npx prisma db push
```

### 5. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.

### 6. Build for Production
To create an optimized production bundle:
```bash
npm run build
npm run start
```

---

## 🌐 Deployment to Vercel

1. Push your code to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: complete personal developer portfolio for Varshasri K"
   git branch -M main
   git remote add origin https://github.com/varshasri2005/portfolio.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) and import the repository.
3. Add your environment variables (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_RECEIVER_EMAIL`) in the Vercel dashboard.
4. Click **Deploy**. Your portfolio will be live with full SSL and global CDN delivery!
