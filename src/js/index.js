import Alpine from 'alpinejs'
import balances from './balances';

Alpine.data('balances', balances)

// Init the alpine service
window.Alpine = Alpine
Alpine.start()
