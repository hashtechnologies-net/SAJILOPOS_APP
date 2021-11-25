export const validator = (formula) => {
   const rule = formula[1];
   const value = formula[0];
   for (const key in value) {
       if (Object.hasOwnProperty.call(value, key)) {
           if(rule.required){
               if(!value[key]){
                   return false;
               }
           }
           
       }
   }
}