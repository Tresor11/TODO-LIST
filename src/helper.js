const method = (() => {
  const remove = (array, id) => {
    array.forEach(element => {
      if (element.id === id) {
        array.splice(array.indexOf(element), 1);
      }
    });
  };
  return {
    remove,
  };
})();