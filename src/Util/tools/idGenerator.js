const idGenerator = function (type) {
  return function * (initial) {
    let id = Number.parseInt(initial);
    while (true) {
      yield type
        ? `${type}_${++id}`
        : (id >= 0 && id < 9)
          ? `0${++id}`
          : `${++id}`;
    }
  };
};

export default idGenerator;
