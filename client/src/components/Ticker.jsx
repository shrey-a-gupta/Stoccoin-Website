import React, { useEffect, useRef } from 'react';

const Ticker = () => {
  const widgetContainerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = `
      {
        "symbols": [
          {
            "proName": "FOREXCOM:SPXUSD",
            "title": "S&P 500"
          },
          {
            "proName": "FOREXCOM:NSXUSD",
            "title": "US 100"
          },
          {
            "proName": "FX_IDC:EURUSD",
            "title": "EUR/USD"
          },
          {
            "proName": "BITSTAMP:BTCUSD",
            "title": "Bitcoin"
          },
          {
            "proName": "BITSTAMP:ETHUSD",
            "title": "Ethereum"
          }
        ],
        "showSymbolLogo": true,
        "colorTheme": "light",
        "isTransparent": true,
        "displayMode": "adaptive",
        "locale": "in"
      }
    `;
    widgetContainerRef.current.appendChild(script);

    return () => {
      widgetContainerRef.current.removeChild(script);
    };
  }, []);

  const tickerContainerStyle = {
    width: '1000px',
    margin: '0 auto',
  };

  return (
    <div className="tradingview-widget-container ticker-widget-container" style={tickerContainerStyle}>
      <div ref={widgetContainerRef} className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright">
        </div>
    </div>
  );
};

export default Ticker;
