export function StatusBar() {
  return (
    <div className="h-6 border-t flex items-center px-2 text-xs text-muted-foreground justify-between">
      <div className="flex items-center gap-2">
        <span>L 1, col 1</span>
        <span>Espaces : 2</span>
        <span>UTF-8</span>
        <span>LF</span>
        <span>HTML</span>
      </div>
      <div className="flex items-center gap-2">
        <span>Disposition : French</span>
      </div>
    </div>
  );
}
