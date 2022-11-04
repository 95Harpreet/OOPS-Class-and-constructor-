//initializing ,assigning and print result of variables in one file
class abc
{
    
    a=null
    b=null
    c=null
    by(t,y)
    {
        this.a=t
        this.b=y
    }                               
    hello()                           
    {
      this.c=this.a+this.b
    }
    test()                      
    {
          console.log('sum is '+this.c)  
    }
}

const chd=new abc()                            
                                            
chd.by(64,7)
chd.hello()  
chd.test()        