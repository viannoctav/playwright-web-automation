const { expect } = require('chai');

// Fungsi untuk mengisi form otomatis
const fillForm = async function(fields) {
  for (let field of fields) {
    expect(await field.el.isDisplayed()).to.be.true;
    await field.el.sendKeys(field.val);
  }
};

// Fungsi untuk menormalisasi teks
const normalizeText = (text) => {
  return text.replace(/\s+/g, ' ').trim().toLowerCase();
};

// Export sebagai objek
module.exports = {
  fillForm,
  normalizeText
};
