document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (!form) return;

  const subjectGroup = form.querySelector('.chip-group');
  const subjectInputs = Array.from(form.querySelectorAll('input[name="subject"]'));

  const ensureSubjectNotice = () => {
    let note = subjectGroup.querySelector('.validation-note');
    if (!note) {
      note = document.createElement('p');
      note.className = 'validation-note';
      note.style.color = '#fca5a5';
      note.style.margin = '6px 0 0';
      note.style.fontSize = '13px';
      subjectGroup.after(note);
    }
    return note;
  };

  form.addEventListener('submit', (evt) => {
    const atLeastOne = subjectInputs.some((box) => box.checked);
    if (!atLeastOne) {
      evt.preventDefault();
      const note = ensureSubjectNotice();
      note.textContent = 'Select at least one subject.';
      subjectGroup.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
});
