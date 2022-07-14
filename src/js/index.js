import Alpine from 'alpinejs'
import { data } from './balances';

Alpine.data('data', data);

// Init the alpine service
window.Alpine = Alpine
Alpine.start()
