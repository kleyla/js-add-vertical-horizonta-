$(document).ready(function () {
  var miembros = $('td[name^="miembros"]');
  var amigos = $('td[name^="amigos"]');
  let totalAmigos = 0;
  let totalMiembros = 0;
  let totalVertical = 0;

  for (let index = 0; index < miembros.length; index++) {
    totalAmigos = totalAmigos + parseInt($(amigos[index]).html());
    totalMiembros = totalMiembros + parseInt($(miembros[index]).html());

    totalVertical =
      parseInt($(amigos[index]).html()) + parseInt($(miembros[index]).html());
    console.log("totalVertical", totalVertical);
  }
  console.log("totalMiembros", totalMiembros);
  console.log("totalAmigos", totalAmigos);
});
