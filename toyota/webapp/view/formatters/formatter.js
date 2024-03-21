sap.ui.define([], function() {
    'use strict';
    return {
        fnstatus(price)
        {
            if(price>800)
            {
                return 'Expensive'
            }

            else if(price>750)
            {
                return  'Moderate'
            }

            else
            {
                return 'Cheap'
            }
        },

        fncolor(price)
        {
       
            if(price>800)
            {
                return 'Error'
            }

            else if(price>750)
            {
                return 'Information'
            }
            else
            {
                return 'Success'
            }
        },

        fnweight(weight)
        {


            if(weight<80)
            {
                return 'Success'
            }



            else if(weight <100)
            {
                return 'Information'
            }
            else if(weight > 100)
            {
                return 'Error'
            }


        },

        fndiscount(discount_percentage)
        {
           
            if(discount_percentage < 10)
            {
                
               
                return 'red';
            }

            else if(discount_percentage >10)
            {
           
                return 'green';
            }
        }

    }
});

