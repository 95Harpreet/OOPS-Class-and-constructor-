//parameter constructor
class abc
{
   c=null
   constructor(a,b)             //formal
    {
      this.c=a+b
    }
    hi()
    {
        console.log('sum is '+this.c)
    }
   
}

const chd=new abc(12,3)            //actual
chd.hi()            