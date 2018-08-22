const slots = str => {
  if (str > 0 && str > 1) {
    return 'EMPTY SLOTS';
  } else if (str > 0 && str < 2) {
    return 'EMPTY SLOT';
  }
  return 'NO EMPTY SLOTS';
};

const freeBikes = str => {
  if (str > 0 && str > 1) {
    return 'FREE BIKES';
  } else if (str > 0 && str < 2) {
    return 'FREE BIKE';
  }
  return 'NO FREE BIKES';
};

export { slots, freeBikes };
