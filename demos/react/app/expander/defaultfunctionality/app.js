import React from 'react';
import ReactDOM from 'react-dom';

import JqxExpander from '../../../jqwidgets-react/react_jqxexpander.js';

class App extends React.Component {
  render () {
    return (
      <JqxExpander width={350}>
        <div>Early History of the Internet</div>
        <div>
          <ul>
              <li>1961 First packet-switching papers</li>
              <li>1966 Merit Network founded</li>
              <li>1966 ARPANET planning starts</li>
              <li>1969 ARPANET carries its first packets</li>
              <li>1970 Mark I network at NPL (UK)</li>
              <li>1970 Network Information Center (NIC)</li>
              <li>1971 Merit Networks packet-switched network operational</li>
              <li>1971 Tymnet packet-switched network</li>
              <li>1972 Internet Assigned Numbers Authority (IANA) established</li>
              <li>1973 CYCLADES network demonstrated</li>
              <li>1974 Telenet packet-switched network</li>
              <li>1976 X.25 protocol approved</li>
              <li>1979 Internet Activities Board (IAB)</li>
              <li>1980 USENET news using UUCP</li>
              <li>1980 Ethernet standard introduced</li>
              <li>1981 BITNET established</li>
          </ul>
        </div>
      </JqxExpander>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
