function contains(store, product) {
    // ¡Y no olvides compartir tu solución en redes!
    const storeArray = Object.values(store);

    if (storeArray.length>0) {
     for (let storeItem=0; storeItem<storeArray.length; storeItem+=1) {
         if (storeArray[storeItem] === product) {
             return true;
         } else {
             if (typeof(storeArray[storeItem]) === 'object' ) {
                if (contains(storeArray[storeItem],product)) {
                    return true;
                }
             }
         }
     }   
    } else {
        return false;
    }
    return false
  }

  module.exports = contains;