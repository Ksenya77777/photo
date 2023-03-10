const addAlbomForm = document.querySelector('.addAlbomForm');
const delBtn = document.querySelector('#divAlbum');
const updBtn = document.querySelector('#editAlbomid');
const addFoto = document.querySelector('.addFotoForm');
const containFoto = document.querySelector('.fotoContainer');

// addAlbom
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

// deleteAlbom
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

// update

if (updBtn) {
  updBtn.addEventListener('submit', async (event) => {
    event.preventDefault();
    const arrHref = window.location.href.split('/');
    console.log(arrHref[arrHref.length - 1]);
    const { name, visible, description } = event.target;

    const response = await fetch(
      `/edit/albums/${arrHref[arrHref.length - 1]}`,
      {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.value,
          visible: visible.checked,
          description: description.value,
        }),
      }
    );
    const responsejson = await response.json();
    if (responsejson.album) {
      window.location.assign('/myalboms');
    } else {
      document.querySelector('.errorMessageEdit').innerText = res.message;
    }
  });
}

if (addFoto) {
  addFoto.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { nameFoto, descriptionFoto, urlFoto, method, action } = event.target;
    const fotores = await fetch(action, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nameFoto: nameFoto.value,
        descriptionFoto: descriptionFoto.value,
        urlFoto: urlFoto.value,
      }),
    });

    const data = await fotores.json();
    document
      .querySelector('.fotoContainer')
      .insertAdjacentHTML('beforeend', data.html);
  });
}

if (containFoto) {
  containFoto.addEventListener('click', async (event) => {
    if (event.target.classList.contains('btnDeletefoto')) {
      const { id } = event.target.dataset;
      const res = await fetch(`/myalboms/fotolist/${id}`, {
        method: 'delete',
      });

      const data = await res.json();
      if (data === 1) {
        event.target.closest('.albomCard').remove();
      }
    }
  });
}
