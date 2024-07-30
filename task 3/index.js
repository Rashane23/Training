function textclick(){
   const data = document.getElementById('txt').value;

   let answer = ''
   switch (data) {
      
      case "SE":
         answer = 'Software Enginner';
         break;

         case "SSE":
         answer = ' Senior Software Enginner';
         break;

         case "ASE":
         answer = ' Assossiate Software Enginner';
         break;

         case "Intern":
         answer = 'Intern Software Enginner';
         break;

         case "TL":
         answer = 'Tech Lead';
         break;

         case "TTL":
         answer = 'Assistant Tech Lead';
         break;
   
      default:
         answer = 'Error';
         break;
   }
   document.getElementById('display1').innerText = answer;
}
