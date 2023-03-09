const addAlbomForm = document.querySelector('.addAlbomForm');

if (addAlbomForm) {
  addAlbomForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { name, visible, description, method, action } = event.target;
    const response = await fetch(action, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.value,
        visible: visible.checked,
        description: description.value,
      }),
    });
    const data = await response.json()
  });
}
