const scssFiles = import.meta.glob('../../style/**/*.scss');

for (const path in scssFiles) {
    scssFiles[path]();
}

