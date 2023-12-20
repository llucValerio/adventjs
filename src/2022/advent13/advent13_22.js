function getFilesToBackup(lastBackup, changes) {
  const filesToBackup = [];
  changes.forEach((change) => {
    if (change[1] > lastBackup) {
      filesToBackup.push(change[0]);
    }
  });
  return [...new Set(filesToBackup)].sort((a, b) => a - b);
}

module.exports = getFilesToBackup;
