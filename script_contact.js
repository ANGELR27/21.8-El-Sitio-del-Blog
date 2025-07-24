document.getElementById('formulario-contacto').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que recargue la página

    alert("¡Tu mensaje fue enviado con éxito!\nUno de nuestros compañeros se contactará contigo pronto.");

    this.reset();
  });
