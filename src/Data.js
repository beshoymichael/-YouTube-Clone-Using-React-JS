 export const API_KEY = 'AIzaSyCYvuCq0dyOiXeGYOWVxZlLzPjNP43RPb4'



export const value_converter = (value) =>{
    if(value>=1000000)
        {
            return Math.floor (value/1000000)+"m";
        }
        else if(value>=1000)
        {
            return Math.floor (value/1000)+"k";

        }
        else{
            return value;
        }

 }