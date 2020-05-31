import './index.less';
import React from 'react';

function Settings() {
  return (
    <div id="settings">
      <div className="settings-header">
        <h1>MethaChart v.2.0 (Beta)</h1>
        <h2>June 2, 2020 | by John Lee</h2>
        <h2 className="settings-support">support: jlee14c@hotmail.com</h2>
      </div>
      <br/>
      <br/>

      <h3>Tips:</h3>
      <p>
        Use Tab and Shift+Tab to quickly go forward or backward.
      </p>
      <br/>
      <p>
        MethaChart prevents entering of nonsensical dates and doses, but it can't prevent you from
        entering incorrect doses, date ranges, or wrong names. Use the following tips to help you
        check a log sheet prior to use:
      </p>
      <ol>
        <li>Compare the NAME with the original Rx, circle if correct.</li>
        <li>Compare the START and END dates with the original Rx, circle both if correct.</li>
        <li>Compare the witness/takehome/total DOSE with the original Rx, circle if correct.</li>
      </ol>

      <hr/>

      <h3>Features and Bug Fixes (v.2.0):</h3>
      <ul>
        <li>Added new modules: other medications, carries, temp logs.</li>
        <li>User interface updates.</li>
        <li>Calendar module for date ranges.</li>
      </ul>

      <h3>Features and Bug Fixes (v.1.3.1):</h3>
      <ul>
        <li>Printing 28 rows will now fit the footer on the page. Same for other multiples of 28.</li>
        <li>The total dose will now handle decimal numbers with full precision (values like "14.399999..." won't appear anymore).</li>
      </ul>

      <h3>Features and Bug Fixes (v.1.3.0):</h3>
      <ul>
        <li>Input is validated.</li>
        <li>Weekdays now appear on logs.</li>
        <li>Same day take-home dosing.</li>
        <li>Dates up to year 2100 are now supported.</li>
        <li>Time stamps appear on logs as MMM DD, YYYY (HH:mm:ss).</li>
        <li>Multiple tests implemented to ensure correct handling of data.</li>
      </ul>
    </div>
  )
}

export default Settings;
