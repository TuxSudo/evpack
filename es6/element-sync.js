import dispatcher from './dispatcher';


/* 
rxtx should be object like: 
{
    'rxEvent1': 'txEvent1',
    'rxEvent2': 'txEvent2'
}
*/
export default function(nodelist, rxtx) {

        // coerce node list to array
    var elements = Array.prototype.slice.call( nodelist ),

        // get all other elements except for one from elements array
        getOthers = me => elements.filter( elm => me !== elm ),

        // multiple elements dispatch same event
        dispatchAll = (elements, eventName, data) => elements.forEach( elm=>dispatcher(elm, eventName, data) ),

        // add rx listener to element which sends tx event(s) to others
        initElement = (element) => {
            var others = getOthers(element);
            Object.keys(rxtx).forEach(k=>element.addEventListener(k, e=>dispatchAll(others, rxtx[k], e.detail)) );

        };


    elements.forEach(initElement);

}

