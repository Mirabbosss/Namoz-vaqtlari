function $(selector) {
    return document.querySelector(selector)
}

function $$(selector) {
    return document.querySelectorAll(selector)
}

function createElement(tagName, classList, content) {
    const element = document.createElement(tagName);

    if (classList.length) {
        element.setAttribute('class', classList)
    }

    if (content.length) {
        element.innerHTML = content;
    }

    return element;
}

function innerHTML(content) {
    return content;
}

function render(data, option, parentContent) {
    const tagName = option[0];
    const classList = option[1];
    const content = option[2];

    if (data.length) {
        data.forEach(el => {
            const newElement = createElement(tagName, classList, content(el));
            parentContent.appendChild(newElement);
        });
    }
}

function createCard(obj, images) {
    const cards = Object.entries(obj.times).map((item, index) => {
        
        const firstLetter = item[0].split('_')[0][0].toUpperCase();
        const otherLetters = item[0].split('_')[0].substring(1);
        const dayName = `${firstLetter}${otherLetters} ${item[0].split('_')[1] ? item[0].split('_')[1] : ''}`;

        return ({
            time: item[1],
            title: dayName.trim(),
            img: images[index].type === dayName.trim() ? images[index].img : null
        })
    })

    return cards;
}



