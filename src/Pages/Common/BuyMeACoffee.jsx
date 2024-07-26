import React, { useEffect } from 'react';

const BuyMeACoffeeButton = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js';
    script.type = 'text/javascript';
    script.dataset.name = 'bmc-button';
    script.dataset.slug = 'krystlemurphy'; // Replace with your Buy Me a Coffee username
    script.dataset.color = '#FFDD00';
    script.dataset.emoji = '';
    script.dataset.font = 'Cookie';
    script.dataset.text = 'Buy me a coffee';
    script.dataset.outlineColor = '#000000';
    script.dataset.fontColor = '#000000';
    script.dataset.coffeeColor = '#ffffff';
    
    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // The script itself will render the button
};

export default BuyMeACoffeeButton;
