class demo
{
   constructor()
   {
      this.No1 = 11
      this.No2 = 21
      console.log("inside constractor")
   }
}
function main()
{
   dobj = new demo();
         console.log(dobj.No1);
         console.log(dobj.No2);

   
}
main();