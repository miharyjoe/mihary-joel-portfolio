export function MainContent() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="flex h-9 items-center border-b px-4 gap-2">
        <div className="flex items-center gap-2 border-r pr-2">
          <span className="text-sm">index.html</span>
          <button className="p-0.5 hover:bg-accent rounded-sm">&times;</button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">main.tsx</span>
          <button className="p-0.5 hover:bg-accent rounded-sm">&times;</button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">Dockerfile</span>
          <button className="p-0.5 hover:bg-accent rounded-sm">&times;</button>
        </div>
      </div>
      <div className="p-4">
        <pre className="font-mono text-sm">
          <code>
            {`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`}
          </code>
        </pre>
      </div>
    </div>
  );
}
