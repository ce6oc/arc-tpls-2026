# Augmented Classroom UI Templates

A comprehensive collection of HTML templates for the **Augmented Classroom** project by CleverBooks. This repository contains user interface templates for both Free and Pro tiers, featuring various dashboard layouts, subject selection pages, mode selection interfaces, and more.

## 📋 Project Overview

This project provides a complete set of UI templates for the Augmented Classroom web application, an educational platform that leverages augmented reality technology to enhance classroom learning experiences. The templates are designed to support different user tiers (Free and Pro) and various educational workflows.

### Key Features

- **Dual-Tier Support**: Separate templates for Free and Pro account types with differentiated features
- **Multiple Subject Areas**: Geography, Geometry, Space, and other educational subjects
- **2D/3D Content**: Support for both 2D and 3D visualization modes
- **Responsive Design**: Built with Tailwind CSS for modern, responsive layouts
- **User Flow Templates**: Complete user journey from first login to account management
- **Resource Center**: Marketplace and CPD training integration

## 📁 Project Structure

```
/
├── src/
│   ├── index.html                    # Navigation hub for all templates
│   ├── style.css                     # Main stylesheet
│   ├── main.js                       # JavaScript functionality
│   ├── counter.js                    # Counter utility
│   ├── assets/
│   │   └── images/                   # Image assets
│   │       ├── app-stores-big.png
│   │       ├── app-stores.png
│   │       ├── features-basic.png
│   │       └── features-pro.png
│   │
│   ├── Dashboard Pages
│   │   ├── dashboard_first_login.html    # First-time user onboarding
│   │   ├── dashboard_free.html           # Free tier dashboard
│   │   └── dashboard_pro.html            # Pro tier dashboard
│   │
│   ├── Account Pages
│   │   ├── account_free.html             # Free tier account settings
│   │   └── account_pro.html              # Pro tier account settings
│   │
│   ├── Subject Selection
│   │   ├── subject_select_free.html      # Free tier subject selection
│   │   └── subject_select_pro.html       # Pro tier subject selection
│   │
│   ├── Mode Selection
│   │   ├── mode_select_free.html         # Free tier mode selection
│   │   └── mode_select_pro.html          # Pro tier mode selection
│   │
│   ├── Content Type Selection
│   │   ├── content_free.html             # Free tier content type selection
│   │   └── content_pro.html              # Pro tier content type selection
│   │
│   ├── Template Selection
│   │   ├── template_free.html            # Free tier template selection
│   │   └── template_pro.html             # Pro tier template selection
│   │
│   ├── Subject-Specific Pages (Free)
│   │   ├── geography_2d3d_free.html      # Geography 2D/3D view (Free)
│   │   ├── geometry_2d3d_free.html       # Geometry 2D/3D view (Free)
│   │   ├── create_2d3d_free.html         # Create 2D/3D content (Free)
│   │   └── space_2d3d_free.html           # Space 2D/3D view (Free)
│   │
│   ├── Subject-Specific Pages (Pro)
│   │   ├── geography_2d3d_pro.html       # Geography 2D/3D view (Pro)
│   │   ├── geometry_2d3d_pro.html        # Geometry 2D/3D view (Pro)
│   │   ├── create_2d3d_pro.html          # Create 2D/3D content (Pro)
│   │   └── space_2d3d_pro.html            # Space 2D/3D view (Pro)
│   │
│   ├── Pricing & Payments
│   │   ├── pricing.html                  # Pricing plans
│   │   └── pro_paid.html                 # Pro payment confirmation
│   │
│   └── javascript.svg                   # JavaScript icon
│
├── index.html                           # Root entry point
├── package.json                         # Project dependencies
├── vite.config.js                       # Vite configuration
├── tailwind.config.cjs                  # Tailwind CSS configuration
├── postcss.config.cjs                   # PostCSS configuration
└── README.md                            # This file
```

## 🚀 Getting Started

### Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v16 or higher recommended)
- **npm** (comes with Node.js)

### Installation

#### Option 1: Using Chocolatey (Windows)

```bash
# Install Node.js using Chocolatey
choco install nodejs
```

#### Option 2: Using Homebrew (macOS)

```bash
# Install Node.js using Homebrew
brew install node
```

#### Option 3: Using apt (Linux/Ubuntu)

```bash
# Install Node.js using apt
sudo apt update
sudo apt install nodejs npm
```

#### Option 4: Download from Official Website

Visit [nodejs.org](https://nodejs.org/) and download the installer for your operating system.

### Running the Project

1. **Navigate to the project directory**

   ```bash
   cd /path/to/ui_flow_update_25-12-25
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   This will install all required dependencies including:
   - Vite (build tool and dev server)
   - Tailwind CSS (utility-first CSS framework)
   - PostCSS & Autoprefixer (CSS processing)

3. **Start the development server**

   ```bash
   npm run dev
   ```

   The development server will start and display a local URL (typically `http://localhost:5173`).

4. **Access the templates**

   Open your browser and navigate to the URL displayed in the terminal. You'll see the navigation hub at [`src/index.html`](src/index.html) which provides links to all available templates.

### Available Scripts

- `npm run dev` - Start the development server with hot-reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally

## 🎨 Technology Stack

- **HTML5** - Markup structure
- **CSS3** - Styling with custom CSS variables
- **Tailwind CSS** - Utility-first CSS framework for rapid development
- **JavaScript (ES6+)** - Interactive functionality
- **Vite** - Fast build tool and development server
- **PostCSS** - CSS processing with Autoprefixer

## 📝 Template Categories

### Dashboard Templates
- **First Login**: Onboarding experience for new users
- **Free Dashboard**: Basic features for free tier users
- **Pro Dashboard**: Enhanced features with all capabilities unlocked

### Subject Selection
Choose from various educational subjects including Geography, Geometry, Space, and more.

### Mode Selection
Select between 2D and 3D visualization modes for content interaction.

### Content Type Selection
Choose different types of educational content and materials.

### Subject-Specific Views
Dedicated interfaces for Geography, Geometry, and Space subjects with both 2D and 3D capabilities.

### Account Management
User profile and account settings for both Free and Pro tiers.

### Pricing & Payments
Information about subscription plans and payment processing.

## 🎯 Usage

### Customizing Templates

Each template can be customized by modifying:
- **HTML structure**: Edit the `.html` files directly
- **Styling**: Modify [`src/style.css`](src/style.css) or Tailwind classes
- **Functionality**: Update [`src/main.js`](src/main.js) for interactive features

### Adding New Templates

1. Create a new HTML file in the [`src/`](src/) directory
2. Add a link to the new template in [`src/index.html`](src/index.html)
3. Follow the existing naming convention (e.g., `*_free.html` or `*_pro.html`)

### Dynamic Content

Templates use CSS classes for dynamic content replacement:
- `.account-name` - Replace with user's name
- `.account-type` - Replace with "Free account" or "Pro account"

## 🌐 Browser Support

The templates are designed to work on modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is part of the Augmented Classroom by CleverBooks. All rights reserved.

## 🤝 Support

For questions or issues related to these templates, please contact the development team.

---

**Note**: This is a template repository for UI design and development. The actual backend integration and augmented reality functionality would be implemented separately.