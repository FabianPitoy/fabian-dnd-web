export function Card({ children, className = '' }: { children: any; className?: string }) {
  return (
    <div className={\`shadow-lg \${className}\`}>{children}</div>
  );
}