# Parth Barahate - Portfolio

A modern, responsive portfolio website built with React and Vite, featuring smooth animations and a professional design.

## Live Site

Visit my portfolio at: [https://parthob12.github.io/portfolio/](https://parthob12.github.io/portfolio/)

## Features

- Responsive design that works on all devices
- Smooth scrolling and animations
- Interactive project cards
- Contact form with email integration
- Modern UI with dark theme
- Optimized performance

## Technologies Used

- React.js
- Vite
- Framer Motion for animations
- React Icons
- CSS3 with modern features
- EmailJS for contact form

## Deployment

This portfolio is automatically deployed to GitHub Pages using GitHub Actions. Any push to the main branch will trigger a new deployment.

### Manual Deployment

To deploy manually, run:

```bash
./deploy.sh
```

Or manually:

```bash
npm run build
git add .
git commit -m "Update portfolio"
git push origin main
```

## Local Development

1. Clone the repository:

```bash
git clone https://github.com/parthob12/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

5. Preview production build:

```bash
npm run preview
```

## Project Structure

```
src/
  ├── components/     # React components
  ├── assets/        # Images and other static files
  ├── App.jsx        # Main App component
  ├── main.jsx       # Entry point
  └── index.css      # Global styles
```

## Customization

- Update personal information in the respective component files
- Modify colors in `src/index.css` CSS variables
- Add or remove projects in `src/components/Projects.jsx`
- Update skills in `src/components/Skills.jsx`

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

- Email: parthbarahate221@gmail.com
- LinkedIn: [Parth Barahate](https://linkedin.com/in/parthbarahate)
- GitHub: [parthob12](https://github.com/parthob12)
