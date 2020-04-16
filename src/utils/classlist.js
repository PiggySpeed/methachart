export default function classList(classes) {
  // ref: https://programmingwithmosh.com/react/multiple-css-classes-react/
  if (process.env.NODE_ENV === 'development' && arguments.length > 1) {
    throw `Error: classList() accepts only one arg; received ${arguments.length} args.`;
  }

  return Object
    .entries(classes)
    .filter(entry => entry[1])
    .map(entry => entry[0])
    .join(' ');
}
