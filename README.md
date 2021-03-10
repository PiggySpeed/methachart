# Methachart
This is a small desktop app that automates the creation of dosing/pickup/delivery charts for medications. Originally designed for Methadone DWI regimens, Methachart has been expanded with new form designs, support for more drugs, carry regimens, and a neat calendar date picker.

The app was designed to accomplish >90% of tasks in <15s of time, assuming the user is using keyboard navigation. This productivity savings combined with built-in error checking can result in up to $15-20k in annual cost savings in a high-volume addictions/psychiatry specialized pharmacy. This small app also unlocks novel workflows that help pharmacies cover edge cases (e.g. temp log forms for when patients come into the pharmacy while their medication is out for witnessed delivery). Finally, the forms look so good & organized, that you leave a good impression on patients and doctors.

One interesting and unexpected side effect of this app is that the forms help patients plan ahead for their upcoming doctor appointments. This was a major problem in the past as patient forgetfulness led to discontinuity of care. With this new form design, I noticed better organized patients and better adherence to treatments.

Every part of the app and forms consumed a lot of brainpower as I mulled over how each line, position, and text style impacted how people would use this product. The form itself was designed to be folded in quarters and slipped into clear holding bags so that pharmacy staff can easily locate the right bag in the least amount of time. Most prescriptions that use this form are typically written in 7-day multiples, so 28 days (1mo supply) was a logical place to break the page.

I could go on for a few more paragraphs on the subtle design and engineering choices I made for this app, but I'm too lazy. :)

Tech Stack: react, redux, webpack, LESS, electr... aughh go look at the package.json!

[Partial Demo](https://twitter.com/CNStimulant/status/1251281875282223104)

# Quickstart
```
# development
npm install
npm run start:dev
npm run electron:dev
npm run electron-win:dev    # windows

# prod builds
npm install
npm run start:prod
npm run electron:prod
npm run electron-win:prod   # windows

# create an executable for your current OS
npm run dist
```

