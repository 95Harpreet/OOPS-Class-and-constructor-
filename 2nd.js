//parameter function
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
}

const chd=new abc()                      //chd is object       
                                            //new is keyword which is used tp initialize your memory
                                             //abc() is a constructor which is used for initialize your 
                                             //class data menber,member function and object

chd.hello()  
chd.test(12,3)        