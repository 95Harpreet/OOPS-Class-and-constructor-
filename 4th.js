class abc
{
    s=89                                //don't use var or let in oops
    hello()                            //default function
    {
        console.log('my name is harpreet')
    }
    test(a,b)                      //parameter function (formal) or argument
    {
        var c=a+b     
        console.log('sum is '+c)        
    }
    how()
    {
        var k=12-3
        return k
    }
    


    
}
class one
{
    testing()
    {
        console.log('i m in testing function of class one')
    }
}


const chd=new abc()   
const pawan=new one()          
module.exports={chd ,pawan}                          //exporting this to 5th file