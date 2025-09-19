# Interactive Brainstorming Tool

A modern web application for interactive brainstorming sessions built with React, TypeScript, and Vite.

## Features

- Interactive planning state view
- ET Matrix for decision making
- Modern UI components with shadcn/ui
- Responsive design
- TypeScript support

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: CSS with modern design patterns
- **UI Components**: Custom components with shadcn/ui

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/aiopnet-mikelee/Interactive-Brainstorming-Tool-2.git
cd Interactive-Brainstorming-Tool-2
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (shadcn/ui)
│   ├── figma/          # Figma-related components
│   ├── ETMatrix.tsx    # ET Matrix component
│   ├── MatrixCell.tsx  # Matrix cell component
│   └── PlanningStateView.tsx # Planning state view
├── styles/             # Global styles
├── guidelines/         # Project guidelines
└── App.tsx            # Main application component
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.