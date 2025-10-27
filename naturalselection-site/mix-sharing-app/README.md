# Mix Sharing App

## Overview
The Mix Sharing App is a web application that allows users to listen to and share audio mixes. Users can play mixes, view details about them, and easily share links to their favorite mixes on social media platforms.

## Features
- **Audio Playback**: Users can play, pause, and seek through audio mixes using the DropboxMP3Player component.
- **Share Functionality**: Each mix has a Share button that allows users to copy a link for sharing on social media platforms like Facebook, Instagram, and Reddit.
- **Dynamic Pages**: Each mix has its own page, accessible via a unique slug, displaying mix details and audio controls.
- **Open Graph Support**: The application generates Open Graph images for each mix, ensuring that shared links display a preview.

## Project Structure
```
mix-sharing-app
├── src
│   ├── app
│   │   ├── layout.js          # Layout structure for the application
│   │   ├── page.js            # Main entry point for the application
│   │   └── mix
│   │       └── [slug]
│   │           ├── page.js    # Renders individual mix pages
│   │           └── opengraph-image.js # Generates Open Graph images
│   ├── components
│   │   ├── DropboxMP3Player.js # Component for audio playback
│   │   ├── ShareButton.jsx      # Button for copying mix link
│   │   └── ShareMenu.jsx        # Menu for sharing options
│   ├── hooks
│   │   └── useClipboard.js      # Custom hook for clipboard functionality
│   └── utils
│       └── share.js             # Utility functions for sharing
├── next.config.js               # Next.js configuration file
├── package.json                  # npm configuration file
└── README.md                     # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd mix-sharing-app
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage
To start the development server, run:
```
npm run dev
```
Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.