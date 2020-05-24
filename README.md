# Methachart
the great revival

# Quickstart
```
npm install
npm run start:dev
npm run electron:dev
```

# Issues
When running `electron-builder` code signing will fail.
Ref: http://flummox-engineering.blogspot.com/2018/12/electron-builder-codesign-specified-item-could-not-be-found-in-the-keychain.html

When building for mac, launching it might cause a "Not allowed to load local resource: ..." error.
Ref: https://www.reddit.com/r/electronjs/comments/dnwenb/not_allowed_to_load_local_resource_error_when/

Second electron window (print window) fails to load due to __dirname resolving to "/".
Ref: https://github.com/webpack/webpack/issues/1599

May be important in future: (electron) The default value of app.allowRendererProcessReuse is deprecated, it is currently "false".  It will change to be "true" in Electron 9.  For more information please check https://github.com/electron/electron/issues/18397
