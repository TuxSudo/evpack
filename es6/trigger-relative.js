export default (element, eventName, detail) => e=>element && element.dispatchEvent( new CustomEvent(eventName, {bubbles:true, detail: detail}));
