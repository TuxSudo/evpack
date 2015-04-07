export default function(element, eventName, detail) {
    return e=>element && element.dispatchEvent(new CustomEvent(eventName, {bubbles:true, detail: detail}) );
}
