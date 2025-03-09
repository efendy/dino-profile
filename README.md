# Dino Profile

Dino Profile is a Next.js application that integrates Firebase for authentication and backend services. The project leverages Tailwind CSS for styling and follows modern React practices.

## Features
- Built with Next.js 15
- Uses React 19 (RC version)
- Firebase for authentication and database
- Tailwind CSS for styling
- ESLint for code linting

## Installation

Make sure you have [Node.js](https://nodejs.org/) installed.

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/dino-profile.git
   cd dino-profile
   ```

2. Install dependencies:
   ```sh
   yarn install
   ```

## Usage

### Development
To start the development server:
```sh
yarn dev
```

### Build for Production
To build the project:
```sh
yarn build
```
To start the production server:
```sh
yarn start
```

### Linting
To run ESLint:
```sh
yarn lint
```

## Project Structure
```
├── src/
│   ├── components/  # Reusable React components
│   ├── pages/       # Next.js pages
│   ├── styles/      # Tailwind CSS configuration
│   ├── utils/       # Helper functions
├── public/          # Static assets
├── .eslintrc.json   # ESLint configuration
├── tailwind.config.js # Tailwind configuration
├── package.json     # Project dependencies
└── README.md        # Project documentation
```

## Environment Variables
Create a `.env.local` file in the root directory and add your Firebase credentials:
```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## License
This project is licensed under the MIT License.
```

Let me know if you need any modifications! 🚀