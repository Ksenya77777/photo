const addAlbomForm = document.querySelector('.addAlbomForm');
const delBtn = document.querySelector('#divAlbum');
const updBtn = document.querySelector('.editAlbomForm');

//addAlbom
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
    const data = await response.json();
    document
      .querySelector('.albumList')
      .insertAdjacentHTML('afterbegin', data.html);
  });
}

//deleteAlbom
if (delBtn) {
  delBtn.addEventListener('click', async (event) => {
    if (event.target.classList.contains('btnDelete')) {
      const { id } = event.target.dataset;

      const res = await fetch(`/delete/myalbums/${id}`, {
        method: 'delete',
      });

      const delAlbum = await res.json();

      if (delAlbum.delAlbum === 1) {
        event.target.closest('.albomCard').remove();
      }
    }
  });
}

//update

if(updBtn){
  updBtn.addEventListener('submit', async (event)=>{

    event.preventDefault()
    const { name, visible, description, method, action } = event.target;
    const { id } = event.target.dataset;
    console.log(id)
    const res = await fetch(action, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.value,
        visible: visible.checked,
        description: description.value,
      }),
    })
    const data = await response.json();
  }
  )
}