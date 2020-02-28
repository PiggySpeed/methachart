import './index.less';
import React from 'react';
import {Button} from 'semantic-ui-react';

const styles = {
  btn: {
    height: '2.5rem',
    margin: 0
  }
};

function ChartFooter() {
  return(
    <div className="chartfooter-container">
      <div className="chartfooter-left">

      </div>
      <div className="chartfooter-right">
        <Button secondary style={styles.btn}>Print</Button>
      </div>
    </div>
  )
}

export default ChartFooter;
