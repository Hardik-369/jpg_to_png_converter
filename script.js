function convertToPNG() {
  const jpgInput = document.getElementById('jpgInput');
  const output = document.getElementById('output');

  if (jpgInput.files.length === 0) {
    output.innerHTML = '<p>Please select an image.</p>';
    return;
  }

  const jpgFile = jpgInput.files[0];
  if (!jpgFile.type.match('image/jpeg')) {
    output.innerHTML = '<p>Please select a JPG image.</p>';
    return;
  }

  output.innerHTML = '<p>Converting...</p>';

  // Simulating conversion process (This doesn't actually convert images)
  setTimeout(() => {
    output.innerHTML = `
      <p>Conversion successful!</p>
      <p>Download your PNG <a href="#" download="converted.png">here</a>.</p>
    `;
  }, 2000); // Simulating a delay for conversion
}
