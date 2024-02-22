import {ContentCardExample} from './content-card-example.js';
import {WiredToggleCard} from './wired-card.js';

document.addEventListener('DOMContentLoaded', function () {
    let container = document.getElementById('content-card-container');
    let content = new WiredToggleCard();

    content.setConfig({entity: "foo", entities: ["foo"]});

    container.appendChild(content);

    content.hass = {states: {foo: {state: "bar", attributes: {friendly_name: "fun"}}}};
});

