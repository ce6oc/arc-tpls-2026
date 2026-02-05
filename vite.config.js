import { defineConfig } from 'vite'
import { resolve } from 'path'
import fs from 'fs'

// Create a temporary entry point file to trigger asset processing
const entryPointPath = resolve(__dirname, 'src/.entry.js')
const entryPointContent = `
import './style.css';
import './assets/images/features-basic.png';
import './assets/images/features-pro.png';
`
fs.writeFileSync(entryPointPath, entryPointContent)

// Custom plugin to handle HTML files
function htmlFilesPlugin() {
  return {
    name: 'html-files-plugin',
    generateBundle(options, bundle) {
      const srcDir = resolve(__dirname, 'src')
      const htmlFiles = fs.readdirSync(srcDir)
        .filter(file => file.endsWith('.html'))

      // Find the actual asset file names from the bundle
      const cssFile = Object.keys(bundle).find(key => key.endsWith('.css'))
      const basicPngFile = Object.keys(bundle).find(key => key.includes('features-basic') && key.endsWith('.png'))
      const proPngFile = Object.keys(bundle).find(key => key.includes('features-pro') && key.endsWith('.png'))

      htmlFiles.forEach(file => {
        const filePath = resolve(srcDir, file)
        const content = fs.readFileSync(filePath, 'utf-8')

        // Update asset paths with the actual file names from bundle
        let updatedContent = content
        if (cssFile) {
          updatedContent = updatedContent.replace(/href="style\.css"/g, `href="../${cssFile}"`)
        }
        if (basicPngFile) {
          updatedContent = updatedContent.replace(/src="assets\/images\/features-basic\.png"/g, `src="../${basicPngFile}"`)
        }
        if (proPngFile) {
          updatedContent = updatedContent.replace(/src="assets\/images\/features-pro\.png"/g, `src="../${proPngFile}"`)
        }

        // Add to bundle
        this.emitFile({
          type: 'asset',
          fileName: `src/${file}`,
          source: updatedContent
        })
      })

      // Create root index.html that redirects to src/index.html
      const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'your-repo-name'
      const redirectContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Project Navigation</title>
  <noscript>
    <meta http-equiv="refresh" content="0;url=/${repoName}/src/index.html">
  </noscript>
  <script>
    window.location.href = '/${repoName}/src/index.html';
  </script>
</head>
<body>
  <p>Redirecting to <a href="/${repoName}/src/index.html">/${repoName}/src/index.html</a>...</p>
</body>
</html>`

      this.emitFile({
        type: 'asset',
        fileName: 'index.html',
        source: redirectContent
      })

      // Create 404.html that also redirects
      this.emitFile({
        type: 'asset',
        fileName: '404.html',
        source: redirectContent
      })
    }
  }
}

export default defineConfig({
  plugins: [htmlFilesPlugin()],
  build: {
    outDir: 'dist',
    // Preserve asset directory structure
    assetsDir: 'assets',
    // Ensure assets are referenced correctly from the HTML files
    copyPublicDir: false,
    // Prevent Vite from treating HTML files as static assets
    emptyOutDir: true,
    rollupOptions: {
      input: {
        // Create a dummy entry point to trigger asset processing
        main: entryPointPath
      },
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: '[name].js'
      }
    }
  },
  // Configure base path for GitHub Pages
  // Replace 'your-username' and 'your-repo-name' with your actual GitHub details
  base: '/arc-tpls-2026/'
})