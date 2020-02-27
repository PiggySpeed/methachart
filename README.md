# methachart
the great revival

# Quickstart
```
npm install
npm run start:dev
npm run electron:dev

# install the airbnb datepicker package
# ref: https://github.com/airbnb/react-dates
(
  export PKG=react-dates;
  npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g; s/ *//g' | xargs npm install --save "$PKG"
)

```
