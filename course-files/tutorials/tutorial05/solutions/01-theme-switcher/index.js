const defaultTheme = ev => {
    document.querySelector('body').className = '';
};

const oceanTheme = ev => {
   document.querySelector('body').className = 'ocean';
};

const desertTheme = ev => {
   document.querySelector('body').className = 'desert';
};

const highContrastTheme = ev => {
    document.querySelector('body').className = 'high-contrast';
}; 
