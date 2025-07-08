const { execSync } = require('child_process');

const isWin = process.platform === 'win32';

try {
  if (isWin) {
    execSync('pwsh ./resize-fixed.ps1', { stdio: 'inherit' });
  } else {
    execSync('sh ./resize-linux.sh', { stdio: 'inherit' });
  }
} catch (e) {
  process.exit(e.status || 1);
} 