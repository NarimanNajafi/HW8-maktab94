function createEl(elementType, callback) {
    const element = document.createElement(elementType);
    document.body.appendChild(element);
    callback(element);
}

createEl('div', (element) => {
    console.log(`Created and appended a ${element.tagName} element!`);
});