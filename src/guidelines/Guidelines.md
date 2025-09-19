# Project Guidelines

## Development Standards

### Code Style
- Use TypeScript for all React components
- Follow React functional component patterns
- Use descriptive variable and function names
- Maintain consistent indentation (2 spaces)

### Component Structure
- Keep components focused and single-purpose
- Use proper TypeScript interfaces for props
- Implement proper error boundaries where needed
- Follow the container/presentational component pattern

### File Organization
- Components in `/src/components/`
- Styles in `/src/styles/`
- Utilities in `/src/utils/`
- Types in `/src/types/`

### Naming Conventions
- Components: PascalCase (e.g., `PlanningStateView`)
- Files: PascalCase for components, camelCase for utilities
- Variables: camelCase
- Constants: UPPER_SNAKE_CASE

### Git Workflow
- Use descriptive commit messages
- Create feature branches for new functionality
- Test thoroughly before merging
- Keep commits focused and atomic

### Testing Guidelines
- Write unit tests for utility functions
- Create integration tests for complex components
- Test user interactions and edge cases
- Maintain test coverage above 80%

### Performance Considerations
- Use React.memo for expensive components
- Implement proper key props for lists
- Avoid unnecessary re-renders
- Optimize bundle size with code splitting

### Accessibility
- Use semantic HTML elements
- Provide proper ARIA labels
- Ensure keyboard navigation support
- Maintain proper color contrast ratios

### Documentation
- Document complex logic with inline comments
- Maintain up-to-date README
- Document component props and usage
- Keep API documentation current