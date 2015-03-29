export default function(element, eventName, detail) {
    element.dispatchEvent(new CustomEvent(eventName, {bubbles: true, detail: detail}));
}

