function getElement(element) {
    if (element.parentElement === document.body ) {
        return element
    } else
        return getElement(element.parentElement)
}

function filter() {
    for (let i of document.getElementsByTagName('a')) {
        if (i.href !== "javascript:;" && new RegExp(location.origin).test(i.href) === false) {
            let element = getElement(i);
			if(element.className !== "container"){
                element.remove();
            }
        }

    }
    for (let i of document.getElementsByTagName('img')) {
        if (new RegExp(location.origin).test(i.src) === false) {
			let element = getElement(i);
            if(element.className !== "container"){
                element.remove();
            }
        }
    }
    for (let i of document.getElementsByTagName('video')) {
		if (new RegExp(location.origin).test(i.src) === false) {
            let element = getElement(i);
            if(element.className !== "container"){
                element.remove();
            }
        }
    }
    for (let i of document.getElementsByTagName('iframe')) {
		if (new RegExp(location.origin).test(i.src) === false) {
            let element = getElement(i);
            if(element.className !== "container"){
                element.remove();
            }
        }
    }
}
    // window.onload = function () {
    //     filter();
    // }











