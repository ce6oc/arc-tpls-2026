# GitHub Pages Setup Instructions

This project is configured to deploy to GitHub Pages automatically.

## Prerequisites

1. Your repository is on GitHub and set to public
2. You have write access to the repository

## Setup Steps

### 1. Update Repository Name in Configuration

Replace `your-repo-name` in the following files with your actual GitHub repository name:

- **vite.config.js**: Update the `base` path (line ~78)
  ```js
  base: '/your-actual-repo-name/'
  ```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** → **Pages** (in the left sidebar)
3. Under **Build and deployment**, set:
   - **Source**: GitHub Actions
   - The workflow will automatically configure the deployment

### 3. Push Your Changes

1. Commit and push all changes to the `main` branch:
   ```bash
   git add .
   git commit -m "Set up GitHub Pages deployment"
   git push origin main
   ```

2. The GitHub Actions workflow will automatically:
   - Build your project
   - Deploy the `dist` directory to GitHub Pages

### 4. Access Your Site

Once the workflow completes, your site will be available at:
```
https://your-username.github.io/your-repo-name/
```

The root URL will automatically redirect to your main entry point:
```
https://your-username.github.io/your-repo-name/src/index.html
```

## How It Works

- The GitHub Actions workflow (`.github/workflows/deploy.yml`) runs on every push to `main`
- It builds the project using `npm run build`
- The `dist` directory is deployed to GitHub Pages
- A custom `404.html` handles client-side routing
- A root `index.html` redirects visitors to `/src/index.html`

## Manual Deployment

To manually trigger a deployment:

1. Go to your repository on GitHub
2. Click on **Actions** tab
3. Select the "Deploy to GitHub Pages" workflow
4. Click **Run workflow** → **Run workflow**

## Troubleshooting

### Site not loading
- Check the Actions tab to see if the workflow completed successfully
- Verify the repository name is correctly set in `vite.config.js`

### Assets not loading
- Ensure the `base` path in `vite.config.js` matches your repository name
- Check that the build completed without errors

### Links not working
- The 404.html should handle client-side routing
- Verify all relative paths in your HTML files are correct
