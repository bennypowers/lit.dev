import {createComponent} from '@lit-labs/react';
import {React} from "./faux-react.js";
import {SimpleSlots as SimpleSlotsWC} from './simple-slots.js';

const SimpleSlots = createComponent(React, 'simple-slots', SimpleSlotsWC);

export const App = () => (
  <>
    <SimpleSlots>
      <p>elements without a slot attribute will be projected onto the default slot.</p>
      <p slot="head">This element will be projected onto the "head" slot.</p>
      <p slot="tail">This element will be projected onto the "tail" slot.</p>
    </SimpleSlots>
  </>
);
