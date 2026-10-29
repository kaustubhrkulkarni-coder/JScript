class demo
{
   constructor(a,b)
   {
      this.No1 = a
      this.No2 = b
      console.log("inside constractor")
   }
}
function main()
{
   dobj = new demo(11,21);
         console.log(dobj.No1);
         console.log(dobj.No2);

   
}
main();