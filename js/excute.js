function getElement(element) {
    if (element.parentElement === document.body) {
        return element
    } else
        return getElement(element.parentElement)
}

function isIn(args, arr) {
    let flag = false;
    for (let i in arr) {
        if (args === arr[i]) {
            flag = true;
            break;
        }
    }
    return flag;
}

function filter(tagArr, idArr, classArr) {
    const defaultTag = ['img', 'a', 'video', 'iframe'];
    if (tagArr.length) {
        for (let j of tagArr) {
            if (isIn(j, defaultTag) === true) {
                for (let i of document.getElementsByTagName(j)) {
                    if (i.src && new RegExp(location.origin).test(i.src) === false) {
                        // let element = getElement(i);
                        // element.remove();
                        i.remove();
                    } else if (i.href !== "javascript:;" && (new RegExp(location.origin).test(i.href) === false)) {
                        // let element = getElement(i);
                        // element.remove();
                        i.remove();
                    }
                }
            } else {
                for (let i of document.getElementsByTagName(j)) {
                    i.remove()
                }
            }
        }
    }

    if (idArr.length) {
        for (let j of idArr) {
            document.getElementsById(j).remove();
        }
    }

    if (classArr.length) {
        for (let j of classArr) {
            while (document.getElementsByClassName(j).length !== 0) {
                document.getElementsByClassName(j)[0].remove()
            }
        }
    }
}


chrome.storage.sync.get(['tag', 'id', 'class'], function (items) {
    filter(items.tag, items.id, items.class)
})