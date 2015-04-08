/* helper function to trigger another element's event

Usage: 

element1.addEventListner('click', triggerFromEvent(document.querySelector('.selector'), 'event.name', 'details' ) );


*/
export default function(element, eventName, detail) {
    return e=>element && element.dispatchEvent(new CustomEvent(eventName, {bubbles:true, detail: detail}) );
}
