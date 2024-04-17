const fs = require('fs');
const path = require('path');

function listDirectoriesFiles(directoryPath) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }
    files.forEach(file => {
      const filePath = path.join(directoryPath, file);
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error('Error getting file stats:', err);
          return;
        }
        if (stats.isDirectory()) {
          console.log('Directory:', file);
        } else {
          console.log('File:', file);
        }
      });
    });
  });
}

// Example usage
listDirectoriesFiles('/path/to/your_directory');
