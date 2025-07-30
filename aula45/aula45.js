function retonaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Esperando instância de Date.');
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}

try {
  const data = new Date('14-08-2003 13:30:00');
  const hora = retonaHora();
  console.log(hora);
} catch(e) {
  // Tratar erro
  // console.log(e);
} finally {
  console.log('Tenha um bom dia.');
}
